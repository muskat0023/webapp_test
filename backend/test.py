from flask import url_for
from app import app

with app.app_context():
    print(url_for('model.get_model_info'))
    print(url_for('model.predict'))