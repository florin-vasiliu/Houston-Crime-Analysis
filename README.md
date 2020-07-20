# FinalProject

Topic selected:
Crime

### Objective:
Predict number of ofenses based on the features

Base Datasets: 
- https://www.houstontx.gov/police/cs/crime-stats-archives.htm
- https://www.neighborhoodscout.com/tx/houston/crime
- https://www.houstontx.gov/police/contact/substations.htm
- https://openweathermap.org/

Vik
- https://www.houstontx.gov/planning/Demographics/docs_pdfs/SN/Median-Household-Income.pdf

## Features

 - date/time 
 - area (neighborhood) -R
 - weather (precip/inch) -L
 - police stations -R
 - median income or house prices -V
 - population density -F
 - lighting -L
 


## Inspirational:

 - https://blog.dataiku.com/predicting-london-crime-rates-using-machine-learning
 - https://ucr.fbi.gov/hate-crime/2011/resources/variables-affecting-crime
 - https://www.neighborhoodscout.com/tx/houston
 - https://towardsdatascience.com/how-to-generate-lat-and-long-coordinates-from-an-address-column-using-pandas-and-googlemaps-api-d66b2720248d
 
 Justin:
 - https://towardsdatascience.com/exploring-clustering-and-mapping-torontos-crimes-96336efe490f#:~:text=K%2DMeans%20Clustering&text=It%20is%20the%20process%20of,assaults%20will%20be%20grouped%20together.&text=It%20enables%20us%20to%20group%20unlabeled%20data%20points
 - https://www.kaggle.com/akshayreddykotha/us-crime-rate-k-means-clustering
 - https://www.edureka.co/blog/implementing-kmeans-clustering-on-the-crime-dataset/
 
 
 ## Cleaning Data
All crime data on HPD's website was in initially in .xls format so all the files had to be downloaded and converted to csv format. Manually the 2018 had to have certain columns and image headers removed to prevent issues when trying to read the data in Python. From there we used Pandas to go through the CSVs, changing the column names to match for each of the years, and compile the dataset into one dataframe.


## To Do's
1. Pulish Tableau (crime+weather) an send divs (or link) - Florin&Luis
2. Create flask app& HTML - Vik
3. Push cleaned_data into AWS RDS (postgres) - Florin
4. Finalize ML & Cleaning notebooks - Ryan
