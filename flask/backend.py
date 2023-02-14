from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pymysql 
import sys

app = Flask(__name__)

sql_conn = pymysql.connect(user="root", database="test", password="root")
with sql_conn.cursor() as cursor:
    cursor.execute("CREATE TABLE IF NOT EXISTS items (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255));")

@app.route("/items", methods=["GET"])
def api_get_items():    
    sql_conn = pymysql.connect(user="root", database="test", password="root")
    with sql_conn.cursor() as cursor:
        cursor.execute("SELECT * FROM items")
        return [i for i in cursor.fetchall()], 200

@app.route("/items", methods=["POST"])
def api_add_items():
    with sql_conn.cursor() as cursor:
        req = request.json
        cursor.execute("INSERT INTO items (name) VALUES (%s);", req["name"])
        sql_conn.commit()
        return "success", 200

@app.route("/items/<id>", methods=["PUT"])
def api_update_item(id):
    with sql_conn.cursor() as cursor:
        req = request.json
        cursor.execute("UPDATE items SET name=%s WHERE id=%s;", (req["name"], id))
        sql_conn.commit()
        return "success", 200

@app.route("/itemsearch/<name>", methods=["PUT"])
def api_search_item(name):
    with sql_conn.cursor() as cursor:
        cursor.execute("SELECT * FROM items WHERE name LIKE %s", (name))
        result = cursor.fetchall()
        return [i for i in result], 200
    
if __name__ == "__main__":
    CORS(app, origins=["http://localhost:3000", "http://localhost:3000", "http://192.168.0.49:3000"] )
    app.run(debug=True)
