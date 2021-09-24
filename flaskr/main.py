import os

from flask import (Flask, request, render_template,
                   json, jsonify, url_for, session,Response, Blueprint, redirect)
from flask.signals import appcontext_tearing_down
from werkzeug.security import check_password_hash, generate_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin


app = Flask(__name__)



CORS(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///covidtracker.db'
db = SQLAlchemy(app)

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.Text(500), nullable=False)
    name = db.Column(db.String(500))
    vaccinated = db.Column(db.Boolean)
    photo_id = db.Column(db.LargeBinary)

    def __str__(self):
        return f'{self.id} {self.content}'

def customer_serializer(customer):
    return {
        'id': customer.id,
        'email': customer.email,
        'name': customer.name,
        'vaccinated': customer.vaccinated,
        'photo_id': customer.photo_id 
    }

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

@app.route("/api/cust", methods=['GET'])
@cross_origin()
def index_customer():
    return jsonify([*map(customer_serializer, Customer.query.all())])

@app.route("/api/create", methods=['POST'])
@cross_origin()
def create():
    request_data = json.loads(request.data)
    bus = Business(content=request_data['content'])

    db.session.add(bus)
    db.session.commit()

    return {'201': 'Add succesfully'}

@app.route("/api/create/cust", methods=['POST'])
@cross_origin()
def create_customer():
    request_data = json.loads(request.data)
    bus = Customer(
                    email=request_data['email'],
                    password=request_data['password']
                )

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



@app.route('/api/login', methods=['GET'])
@cross_origin()
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    user = Customer.query.filter_by(email=email).first()

    # check if the user actually exists
    # take the user-supplied password, hash it, and compare it to the hashed password in the database
    if not user or not check_password_hash(user.password, password):
        # Subject to change
        return redirect(url_for('/login'))


    # FIX THIS
    return redirect(url_for('/'))


@app.route('/api/signup', methods=['POST'])
@cross_origin()
def signup():
    # Dependant on frontend
    email = request.form.get('email')
    name = request.form.get('name')
    password = request.form.get('password')
    vaccinated = request.form.get('vaccinated')
    photo_id = request.form.get('photo_id')

    user = Customer.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

    '''
    if user: # if a user is found, we want to redirect back to signup page so user can try again
        return redirect(url_for('/api/signup'))
    '''

    # Check if hash password
    new_user = Customer(email=email, name=name, password=generate_password_hash(password, method='sha256'), vaccinated=vaccinated, photo_id=photo_id)

    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()


    return redirect(url_for('/'))

