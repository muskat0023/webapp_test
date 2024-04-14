 # backend/controllers/auth_controller.py
from flask import request, jsonify
from models.user_model import User
from services.auth_service import AuthService

auth_service = AuthService()

def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = auth_service.authenticate(username, password)

    if user:
        token = auth_service.generate_token(user)
        return jsonify({'token': token}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    user = auth_service.create_user(username, email, password)

    if user:
        return jsonify({'message': 'User created successfully'}), 201
    else:
        return jsonify({'message': 'User creation failed'}), 400

def logout():
    auth_header = request.headers.get('Authorization')
    if auth_header:
        token = auth_header.split(' ')[1]
        auth_service.invalidate_token(token)
        return jsonify({'message': 'Logged out successfully'}), 200
    else:
        return jsonify({'message': 'Token not found'}), 401