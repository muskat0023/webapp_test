from flask import Blueprint
from controllers.auth_controller import login, signup, logout

auth_bp = Blueprint('auth', __name__)

auth_bp.route('/login', methods=['POST'])(login)
auth_bp.route('/signup', methods=['POST'])(signup)
auth_bp.route('/logout', methods=['POST'])(logout)