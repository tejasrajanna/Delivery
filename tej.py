from datetime import date
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import requests

app = Flask(__name__)
api = Api(app)
CORS(app)


@app.route('/test', methods=['GET', 'FETCH'])
def call():
    a = [{"taskId":"1","seq":3,"location":{"lat":28.7041,"lon":77.1025},"name":"delivery task 3","customerInfo":"Mohan, N-69, Connaught Place, New Delhi"},
    {"taskId":"2","seq":1,"location":{"lat":28.7045,"lon":77.103},"name":"delivery task 1","customerInfo":"Raj, 64, Janpath, New Delhi"},
    {"taskId":"3","seq":2,"location":{"lat":28.7031,"lon":77.1028},"name":"delivery task 2","customerInfo":"Bhagat, F-41, First Floor, Connaught Place, New Delhi"},
    {"taskId":"4","seq":5,"location":{"lat":28.7241,"lon":77.1035},"name":"service task 5","customerInfo":"Amar, Oriental 1St And 2Nd Floor, 86, Janpath, New Delhi"},
    {"taskId":"5","seq":4,"location":{"lat":28.7641,"lon":77.1025},"name":"delivery task 4","customerInfo":"Akbar, United India Building, 3Rd Floor, , Connaught Place, , New Delhi"},
    {"taskId":"6","seq":8,"location":{"lat":28.7081,"lon":77.1045},"name":"delivery task 8","customerInfo":"Anthony, 25 K.G. Marg, Jeevan Prakash Building, New Delhi"},
    {"taskId":"7","seq":7,"location":{"lat":28.7081,"lon":77.1025},"name":"delivery task 7","customerInfo":"Jaya, F-19, United India Bldg., Connaught Place, New Delhi"},
    {"taskId":"8","seq":6,"location":{"lat":28.7091,"lon":77.1025},"name":"delivery task 6","customerInfo":"Naveen, F-19, United India Bldg., Connaught Place, New Delhi"},
    {"taskId":"9","seq":9,"location":{"lat":28.711,"lon":77.1025},"name":"delivery task 9","customerInfo":"Digvijay, Jeevan Praksh, Post Box No.102, 25, Kasturba Gandhi Marg, New Delhi"},
    {"taskId":"10","seq":10,"location":{"lat":28.7241,"lon":77.1025},"name":"delivery task 10","customerInfo":"Naveen, 25, K.G. Marg, Jeevan Prakash Building, New Delhi"}]
    
    b=[{"taskId":"1","location":{"lat":28.7041,"lon":77.1025},"name":"delivery task 3","customerInfo":"Mohan, N-69, Connaught Place, New Delhi"},
    {"taskId":"2","location":{"lat":28.7045,"lon":77.103},"name":"delivery task 1","customerInfo":"Raj, 64, Janpath, New Delhi"}]
    return jsonify(a)


app.run(debug=True, port=8000)
