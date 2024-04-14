# backend/controllers/model_controller.py
import json
import onnxruntime as ort
from config.config import FORMING_MODEL_PATH, FORMING_PARAMS_JSON_PATH
from flask import request, jsonify

model_path = FORMING_MODEL_PATH
json_path = FORMING_PARAMS_JSON_PATH
sess = ort.InferenceSession(model_path)

input_name = sess.get_inputs()[0].name
output_name = sess.get_outputs()[0].name

def get_model_info():
    input_shape = sess.get_inputs()[0].shape
    output_shape = sess.get_outputs()[0].shape

    with open(json_path, 'r', encoding='utf-8-sig') as f:
        model_params = json.load(f)

    return jsonify({
        'input_shape': input_shape,
        'output_shape': output_shape,
        'inputs': model_params['inputs'],
        'outputs': model_params['outputs']
    }), 200

def predict():
    data = request.get_json()
    input_data = data.get('data')

    if len(input_data) != sess.get_inputs()[0].shape[1]:
        return jsonify({'message': 'Invalid input shape'}), 400

    result = sess.run([output_name], {input_name: [input_data]})[0]
    return jsonify({'predictions': result.round(2).tolist()}), 200