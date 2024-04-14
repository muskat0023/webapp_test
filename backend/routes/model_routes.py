# backend/routes/model_routes.py
from flask import Blueprint
from controllers.model_controller import get_model_info, predict
from middlewares.auth_middleware import token_required

model_bp = Blueprint('model', __name__)

model_bp.route('/model-info', methods=['GET'])(get_model_info)
model_bp.route('/predict', methods=['POST'])(predict)
# model_bp.route('/predict', methods=['POST'])(token_required(predict))