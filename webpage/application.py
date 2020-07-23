from flask import Flask, render_template, redirect, request, jsonify
from xgboost import XGBClassifier
import pandas as pd
import numpy as np
import pickle
from catboost import CatBoostClassifier
from bs4 import BeautifulSoup
import query_cloud_db

# Create an instance of Flask
application = app = Flask(__name__)

model = pickle.load(open( "static/ML_model/crime_CatBoost", "rb" ))

# Route to render index.html template using data from Mongo
@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("index.html")

@app.route('/api', methods=['POST'])
def api():
    if request.method == "POST":
        _data = request.json
        print(_data)
        hour = int(_data["hour"])
        premise = _data["premise"]
        tract = int(_data["tract"])
        month = int(_data["month"])
        dayofweek = _data["dayofweek"]
        temperature = int(_data["temperature"])
        weather = _data["weather"]


        # data must be converted to df with matching feature names before predict
        data = [hour, premise, tract, month, dayofweek, temperature, weather]
        print(data)
        output_message = model.predict(data)
        output_message = output_message[0]

        classes = model.classes_
        proba_array = model.predict_proba(data)
        class_probs = zip(classes, proba_array)

        prob_list=[]
        for offense, prob in class_probs:
            prob_list.append(f'{offense} - {"%.2f"%(prob*100)}%')

        print({"message":output_message, "prob_list": prob_list})
        return jsonify({"message":output_message, "prob_list": prob_list})

@app.route('/historical_analysis', methods=["GET"])
def historical_analysis():
    return render_template("historical_analysis.html")

@app.route('/machine_learning', methods=["GET"])
def machine_learning():
    return render_template("machine_learning.html")

@app.route('/data', methods=["GET"])
def data():
    return render_template("data.html")

@app.route("/query/<dateStart>/<dateStop>", methods=["GET","POST"])
def query_Start_Stop(dateStart, dateStop):
     #returns data of all stations
    dateStart = dateStart.lstrip("<").rstrip(">")
    print("dateStart=",dateStart)
    dateStop = dateStop.lstrip("<").rstrip(">")
    print("dateStop=",dateStop)
    x = query_cloud_db.queryDB(dateStart, dateStop)
    print(x)
    return x

@app.route("/popup", methods=["GET"])
def popup():    
    return render_template("popup_table.html")
    
if __name__ == "__main__":
    app.run(debug=True)
