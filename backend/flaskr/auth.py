import functools

from flask import (
    Blueprint,
    jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash

auth_app = Blueprint('auth', __name__, url_prefix='/auth')

@auth_app.route('/register', methods=['POST'])
def register():
    data = {
        'hello': 'world',
        'good': True
    }
    return jsonify(data)

@auth_app.route('/print', methods=['GET'])
def print():
    return "Hey, register works!"