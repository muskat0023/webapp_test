from flask import Flask
from flask_cors import CORS
from config.db import db
from routes.auth_routes import auth_bp
from routes.model_routes import model_bp

app = Flask(__name__)
CORS(app)  # CORS 설정 추가

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db.init_app(app)

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(model_bp, url_prefix='/api')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)