from flask import Flask, render_template, redirect, request
from xgboost import XGBClassifier
import pandas as pd
import numpy as np
import pickle
from catboost import CatBoostClassifier
from bs4 import BeautifulSoup

# Create an instance of Flask
app = Flask(__name__)

model = pickle.load(open( "crime_CatBoost", "rb" ))

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

        classes = model.classes_
        proba_array = model.predict_proba(data)
        class_probs = zip(classes, proba_array)

        prob_list = []
        for offense, prob in class_probs:
            prob_list.append(f'{offense} - Probability: {"%.2f"%(prob)}%')
    
    return render_template("index2.html",  message = output_message)
    
if __name__ == "__main__":
    app.run()
