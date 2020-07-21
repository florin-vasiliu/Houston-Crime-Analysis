from flask import Flask, render_template, redirect, request
from xgboost import XGBClassifier
import pandas as pd
import numpy as np
import pickle
from catboost import CatBoostClassifier

# Create an instance of Flask
app = Flask(__name__)

# with open(f'crime_CatBoost.pkl', "rb") as f:
#     model = pickle.load(f)

# feature_names = model.get_booster().feature_names

model = pickle.load( open( "crime_CatBoost", "rb" ) )

# from_file = CatBoostClassifier()

# model = from_file.load_model("crime_CatBoost", format="catboost")
# model = catboost.load_model(crime_CatBoost.pkl)

# Route to render index.html template using data from Mongo
@app.route("/", methods=["GET", "POST"])
def home():
    output_message = ""

    if request.method == "POST":
        hour = int(request.form["hour"])
        premise = request.form["premise"]
        tract = int(request.form["tract"])
        month = int(request.form["month"])
        dayofweek = request.form["dayofweek"]
        temperature = int(request.form["temperature"])
        weather = request.form["weather"]


        # data must be converted to df with matching feature names before predict
        data = [hour, premise, tract, month, dayofweek, temperature, weather]
        print(data)
        output_message = model.predict(data)
        output_message = output_message[0]
        print(output_message)
    
    return render_template("index.html", message = output_message)

if __name__ == "__main__":
    app.run()
