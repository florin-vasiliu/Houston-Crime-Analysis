# Import Dependencies
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float, Date, and_
import pandas as pd

#establish connection parameters
driver = "postgresql"
password = "DreamTeam"
db_name = "dreamteamdb"
user = "postgres"
connection_string = "dream-team-db.cfbdobaisdad.us-east-2.rds.amazonaws.com"
port = 5432
engine = create_engine(f'{driver}://{user}:{password}@{connection_string}:{port}/{db_name}') 

#test connection to the database
try:
    connection = engine.connect()
    connection.close()
except:
    print("failed to connect to cloud DB")

# Create Schema
Base = declarative_base()

# Creates Class for db table
class Cleaned_data(Base):
    __tablename__ = 'cleaned_data'
    id = Column(Integer, primary_key=True)
    Date = Column(Date)
    Hour = Column(Integer)
    Offense_Type = Column(String(255))
    Offense_Count = Column(String(255))
    Premise = Column(String(255))
    Block_Range = Column(String(255))
    Street_Name = Column(String(255))
    Street_Type = Column(String(255))
    City = Column(String(255))
    State = Column(String(255))
    Street_Address = Column(String(255))
    Full_Address = Column(String(255))
    Latitude = Column(Float)
    Longitude = Column(Float)
    Tract = Column(Integer)
    Year = Column(Integer)
    Month = Column(Integer)
    Day = Column(Integer)
    Week_Num = Column(Integer)
    Day_of_Week = Column(String(255))
    Temperature = Column(Float)
    Precipitation = Column(Float)
    Weather = Column(String(255))
    Weather_Description = Column(String(255))
    Total_Popupation = Column(Float)
    Total_Households = Column(Float)
    Median_Household_Income = Column(Float)

# Bind Session to DB
from sqlalchemy.orm import Session
session = Session(bind=engine)

def queryDB(date_start, date_stop, limit=1000):
    stmt = session.query(Cleaned_data) \
        .filter(and_(Cleaned_data.Date >= date_start, Cleaned_data.Date <= date_stop)).order_by(Cleaned_data.Date.asc()).limit(limit).statement
    cleaned_data_df = pd.read_sql_query(stmt, session.bind)
    html_data = cleaned_data_df.to_html()
    text_file = open("templates/popup_table.html", "w")
    text_file.write("<!doctype html><html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\"> \
        \n<meta name=\"viewport\" \
        \ncontent=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\"> \
        \n<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n \
        <title>Houston Crime Data</title>\n</head>\n<body>")
    text_file.write(html_data)
    text_file.write("</body></html>")
    text_file.close()

    return cleaned_data_df.head().to_json()
    

if __name__== "__main__":
    cleaned_data_df = queryDB('2019-09-26', '2020-01-01')
    print(cleaned_data_df)
    print("test suceeded")