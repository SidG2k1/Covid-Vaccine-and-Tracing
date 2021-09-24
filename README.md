# Covid-Vaccine-and-Tracing
Designed for deCODE 2021

# Backend usage
1. Stay at the root folder covid-vaccine-and-tracing
2. python3 -m venv venv
3. . venv/bin/activate
4. cd flaskr
5. pip install -r requirement.txt
6. set environment variable: FLASK_APP="__init__.py"
7. set environment variable: FLASK_ENV="development"
8. run "flask shell"
9. run "from flaskr import db"
10. run "db.create_all()"
11. Exit the shell
12. run "flask run". Should be running on development server http://127.0.0.1:5000/
13. If there are extra installation, run: "pip freeze > requirements.txt"

# frontend usage
1. run "npm install --global expo-cli"
2. then go into the frontend folder and run "expo start"
3. You can either scan the QR code with Expo App or use the web option (found on the left hand side of the app)
4. make changes and see them live
5. make sure ***NOT*** be in frontend folder when doing git pushes

# API continuous deployment(make sure to downdload heroku cli first):
1. Checkout to a new branch not on main
2. git remote add heroku https://git.heroku.com/decode-covidtracker-api.git
3. heroku git:remote -a decode-covidtracker-api
4. git pull heroku HEAD:master --allow-unrelated-histories (resolve mreging conflict if there is one)
5. git push heroku HEAD:master
