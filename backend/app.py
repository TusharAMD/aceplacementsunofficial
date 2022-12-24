from flask import Flask,request
from flask_cors import CORS, cross_origin
import pymongo
app = Flask(__name__)
cors = CORS(app)

@app.route("/listofcompanies")
@cross_origin()
def listofcompanies():
    client = pymongo.MongoClient("mongodb+srv://atharvaplacementunofficial:x1zuiYEJN13prH9p@cluster0.vyjrl6b.mongodb.net/?retryWrites=true&w=majority")
    db = client.test
    return {}

if __name__ == "__main__":
    app.run(debug=True)
