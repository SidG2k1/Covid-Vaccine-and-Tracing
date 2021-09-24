import os

from flask import (Flask, request, render_template,
                   json, jsonify, url_for, session,Response, Blueprint, redirect)
from flask.signals import appcontext_tearing_down
from werkzeug.security import check_password_hash, generate_password_hash
from flask_sqlalchemy import SQLAlchemy, event
from flask_migrate import Migrate
from flask_cors import CORS, cross_origin


app = Flask(__name__)



CORS(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///covidtracker.db'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

""" Customer user model """
class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.Text(500), nullable=False)
    name = db.Column(db.String(500))
    vaccinated = db.Column(db.Boolean, default=False)
    photo_id = db.Column(db.LargeBinary)
    first_time_log = db.Column(db.Boolean, default=True)
    province = db.Column(db.String(250))
    vaccine_receipt = db.Column(db.Integer)
    screen_question_2 = db.Column(db.Integer)
    screen_question_3 = db.Column(db.Integer)
    screen_question_4 = db.Column(db.Integer)
    completed = db.Column(db.Boolean, default = False)

    def __str__(self):
        return f'{self.id} {self.email} {self.name} {self.vaccinated} {self.photo_id} {self.first_time_log} {self.province} {self.vaccine_receipt} {self.screen_question_2} {self.screen_question_3} {self.screen_question_4} {self.completed}'

def customer_serializer(customer):
    return {
        'id': customer.id,
        'email': customer.email,
        'name': customer.name,
        'vaccinated': customer.vaccinated,
        'photo_id': customer.photo_id,
        'first_time_log': customer.first_time_log,
        'province': customer.province,
        'vaccine_receipt': customer.vaccine_receipt,
        'screen_question_2': customer.screen_question_2,
        'screen_question_3': customer.screen_question_3,
        'screen_question_4': customer.screen_question_4
    }

""" Symptoms for screening question 1 """
class Symptoms(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    symptom = db.Column(db.String(1000))

    def __str__(self):
        return f'{self.id} {self.symptom}'

UserSymptom = db.Table('UserSymptoms',
    db.Column('user_id', db.Integer, db.ForeignKey('customer.id'), primary_key=True),
    db.Column('symptom_id', db.Integer, db.ForeignKey('symptoms.id'), primary_key=True)
)

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

# Initializes db if db not exists. Creates new tables
db.create_all()

# Adds symptoms for screening question 1 after initialization
if len(Symptoms.query.all()) == 0:
    print("Here")
    db.session.add(Symptoms(symptom="a new or worsening cough"))
    db.session.add(Symptoms(symptom="shortness of breath"))
    db.session.add(Symptoms(symptom="difficulty breathing"))
    db.session.add(Symptoms(symptom="temperature of 38° or above"))
    db.session.add(Symptoms(symptom="feeling feverish/chills"))
    db.session.add(Symptoms(symptom="fatigue or weakness"))
    db.session.add(Symptoms(symptom="muscle or body ache"))
    db.session.add(Symptoms(symptom="new loss of taste/smell"))
    db.session.add(Symptoms(symptom="gastrointestinal symptoms"))
    db.session.add(Symptoms(symptom="feeling very unwell"))
    db.session.commit()

""" Below are the API route methods """

@app.route("/api/businesses", methods=['GET'])
@cross_origin()
def index_business():
    return jsonify([*map(bus_serializer, Business.query.all())])

@app.route("/api/customers", methods=['GET'])
@cross_origin()
def index_customer():
    return jsonify([*map(customer_serializer, Customer.query.all())])

@app.route("/api/business/register", methods=['POST'])
@cross_origin()
def create_business():
    request_data = json.loads(request.data)
    bus = Business(content=request_data['content'])

    db.session.add(bus)
    db.session.commit()

    return {'201': 'Add succesfully'}

@app.route("/api/customer/register", methods=['POST'])
@cross_origin()
def create_customer():
    request_data = json.loads(request.data)
    customer = Customer(
                    email=request_data['email'],
                    password=request_data['password']
                )

    db.session.add(customer)
    db.session.commit()

    return {'201': 'Add succesfully'}

@app.route("/api/business/<int:id>", methods=['PUT'])
@cross_origin()
def edit_business(id):
    request_data = json.loads(request.data)
    Business.query.filter_by(id=request_data['id']).update(
        {'content': request_data['content']})
    db.session.commit()


@app.route('/api/business/<int:id>', methods=['GET'])
@cross_origin()
def show_business(id):
    return jsonify([*map(bus_serializer, Business.query.filter_by(id=id))])


@app.route('/api/business/<int:id>/delete', methods=['DELETE'])
@cross_origin()
def delete_business(id):
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
    # Signup should only require email and password. This is the first page
    # Subsequent pages ask for more 
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
    new_user = Customer(email=email, password=generate_password_hash(password, method='sha256'), name=name, vaccinated=vaccinated, photo_id=photo_id)

    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()


    return redirect(url_for('/'))


@app.route('/api/edit/<email>', methods=['PUT'])
def edit_profile(email):
    # Upon signup, email and password is required (adds user to the db)
    # Frontend may need to call this route to add more data to the user (edits user in the db)

    # Retrieve key, values from form data and convert to Python dict
    data = request.form.to_dict(flat=True)
    #print(request.files['photo_id'])

    # Find user by email
    user = Customer.query.filter_by(email=email)

    # Default message and status
    response = {'message': 'Modified successfully'}
    status = 200

    if user.first() is None:
        # User not found in db. Modify response and status. Don't need to update row
        response = {'message': 'User not found'}
        status = 404
    else:
        # Update the user's info given request data
        user.update((data))
        db.session.commit()

    return response, status