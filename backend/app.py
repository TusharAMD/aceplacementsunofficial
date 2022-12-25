import datetime
from flask import Flask,request
from flask_cors import CORS, cross_origin
import pymongo
import pprint
from dateutil import tz
app = Flask(__name__)
cors = CORS(app)

@app.route("/listofcompanies")
@cross_origin()
def listofcompanies():
    client = pymongo.MongoClient("mongodb+srv://atharvaplacementunofficial:admin@cluster0.vyjrl6b.mongodb.net/?retryWrites=true&w=majority")
    db = client.unofficialplacements
    coll = db.companies
    listofcompaniesDict = []
    for x in coll.find():
        del x['_id']
        listofcompaniesDict.append(x)
    #pprint.pprint(listofcompaniesDict)
    listofcompaniesDict.sort(key=lambda x:x["DatePosted"],reverse=True)
    #print("_______")
    #pprint.pprint(listofcompaniesDict)
    return {"data":listofcompaniesDict}

@app.route("/newentry",methods=["GET","POST"])
@cross_origin()
def newentry():
    client = pymongo.MongoClient("mongodb+srv://atharvaplacementunofficial:admin@cluster0.vyjrl6b.mongodb.net/?retryWrites=true&w=majority")
    db = client.unofficialplacements
    coll = db.companies
    
    if request.method=="POST":


        response = request.json
        print(response)
        #print(response["dateposted"])
        #print(datetime.datetime.strptime(response["dateposted"], '%Y-%m-%dT%H:%M'))
        tzlocal = tz.tzoffset('IST', 19800)
        date_time = datetime.datetime.strptime(response["dateposted"], '%Y-%m-%dT%H:%M')
        ist_timestamp1 = date_time.replace(tzinfo=tzlocal).timestamp()

        date_time1 = datetime.datetime.strptime(response["deadline"], '%Y-%m-%dT%H:%M')
        ist_timestamp2 = date_time1.replace(tzinfo=tzlocal).timestamp()
        
        
        coll.insert_one({
            
                "Name": response["companyname"],
                "Package": response["packages"],
                "DatePosted": date_time,
                "Deadline": date_time1,
                "Logo": response["logo"],
                "Status": response["status"],
                "Discord": response["discord"],
                "Updates": {
                    "1": {
                    "msg": response["message"],
                    "link": response["link"]
                    },
                }
                
        })

    return {}

if __name__ == "__main__":
    app.run(debug=True)
