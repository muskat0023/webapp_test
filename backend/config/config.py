# backend/config/config.py
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
MODEL_DIR = os.path.join(BASE_DIR, '../../onnx_models')

FORMING_MODEL_PATH = os.path.join(MODEL_DIR, 'forming_model.onnx')
FORMING_PARAMS_JSON_PATH = os.path.join(MODEL_DIR, 'forming_params.json')
CBD_MODEL_PATH = os.path.join(MODEL_DIR, 'CBD_model.onnx')

JWT_SECRET_KEY = 'your-secret-key'  # 안전한 시크릿 키로 변경해야 합니다.