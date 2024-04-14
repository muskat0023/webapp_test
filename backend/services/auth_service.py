import jwt
from models.user_model import User
from config.config import JWT_SECRET_KEY
from config.db import db  # db 객체 임포트 추가
from werkzeug.security import generate_password_hash, check_password_hash

class AuthService:
    def authenticate(self, username, password):
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.password, password):
            return user
        return None

    def create_user(self, username, email, password):
        # 이메일 중복 확인
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            raise ValueError("이미 존재하는 이메일 주소입니다.")
        
        hashed_password = generate_password_hash(password)
        user = User(username=username, email=email, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        return user

    def generate_token(self, user):
        token = jwt.encode({'user_id': user.id}, JWT_SECRET_KEY, algorithm='HS256')
        return token

    def verify_token(self, token):
        try:
            payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=['HS256'])
            user_id = payload['user_id']
            user = User.query.get(user_id)
            return user
        except:
            return None

    def invalidate_token(self, token):
        # 토큰 무효화 로직을 구현합니다. (예: 블랙리스트에 추가)
        pass