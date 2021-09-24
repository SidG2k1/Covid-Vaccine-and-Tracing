import os

from flask import (Flask, request, render_template,
                   json, jsonify, url_for, session,Response)
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///covidtracker.db'
db = SQLAlchemy(app)

class Business(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

def bus_serializer(bus):
    return {
        'id': bus.id,
        'content': bus.content,
    }

@app.route("/api", methods=['GET'])
@cross_origin()
def index():
    return jsonify([*map(bus_serializer, Business.query.all())])

@app.route("/api/create", methods=['POST'])
@cross_origin()
def create():
    request_data = json.loads(request.data)
    bus = Business(content=request_data['content'])

    db.session.add(bus)
    db.session.commit()

    return {'201': 'Add succesfully'}

@app.route("/api/create/<int:id>", methods=['POST'])
@cross_origin()
def edit(id):
    request_data = json.loads(request.data)
    Business.query.filter_by(id=request_data['id']).update(
        {'content': request_data['content']})
    db.session.commit()


@app.route('/api/<int:id>', methods=['GET'])
@cross_origin()
def show(id):
    return jsonify([*map(bus_serializer, Business.query.filter_by(id=id))])


@app.route('/api/<int:id>/delete', methods=['POST'])
@cross_origin()
def delete(id):
    request_data = json.loads(request.data)
    Business.query.filter_by(id=request_data['id']).delete()
    db.session.commit()


# a simple page that says hello
@app.route('/hello')
def hello():
    return 'Hello, World!'
