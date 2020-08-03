# Houston Crime Analysis

## Background:
<img src=https://github.com/florin-vasiliu/Houston-Crime-Analysis/blob/master/images/police-cars.jpg>
As in any other city, one of the major concerns of Houston's residents is their safety. Therefore, since crime is one of the most relevant safety topics, one might wonder which are the most dangerous areas of Houston, and which factors might cause an increase in crime. Having this in mind, the project has been developed considering several factors that might influence crime, and the objective was to create visualizations that might indicate any correlation, but also a prediction model that can be used to simulate various types of crimes that might occur under specific circumstances.

## Project development
Crime data was collected from <a href=https://www.houstontx.gov/police/cs/crime-stats-archives.htm>Houston Police Department's</a> site and the features selected for analysis were demographics collected from <a href=https://www.census.gov/>census.gov</a> and weather data collected from <a href=https://openweathermap.org/>openweathermap.org</a>. In order to join this data together, additional geographical information was collected through API's from <a href=https://nominatim.org/>nominatim.org</a> (using python's GeoPy library) and from <a href=geocoding.geo.census.gov>geocoding.geo.census.gov</a>. Finally, after cleaning, the data was stored on a PostgreSQL database in the cloud, using Amazon Web Services.
<img src=https://github.com/florin-vasiliu/Houston-Crime-Analysis/blob/master/images/schema.PNG>|
---|
Fig. 1: Data Sources and Joins

## Cleaning Data
All crime data on HPD's website was in initially in .xls format so all the files had to be downloaded and converted to csv format. Manually the 2018 had to have certain columns and image headers removed to prevent issues when trying to read the data in Python. From there we used Pandas to go through the CSVs, changing the column names to match for each of the years, and compile the dataset into one dataframe. 

## Publishing and Site Functionality
The final Flask app has been deployed on AWS Elastic Beanstalk, and has the following functionalities:
1. Home page (fig. 2) with input fields for the machine learning model, including tract autocomplete field, and summary of prediction results.
2. Historical analysis page (fig. 3) with Tableau sheets and dashboards.
3. Machine Learning page, which documents the machine learning algorithm used to make predictions.
4. Data page (fig. 4), which links to the datasource of the analysis (AWS S3 for csv file and AWS RDS for PostgreSQL query)

<img src=https://media.giphy.com/media/S9nxlA9DDSxX1ETour/giphy.gif>|<img src=https://media.giphy.com/media/MESGtuZ8aQDPAwiEQ8/giphy.gif>|
--|--|
Fig. 2: Selecting Tract and Making Predictions|Fig. 3: Exploring Tableau Dashboards

<img src=https://media.giphy.com/media/W6LIcw1FP7qFVhr45w/giphy.gif>|
--|
Fig. 4: Downloading from AWS S3 Bucket and Querying AWS RDS Database




