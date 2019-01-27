import os
from flask import Flask, request, jsonify, send_from_directory
from gpio import Flash, Status
from ServerExceptions import BadRequestException

app = Flask(__name__, static_folder='static')
app.debug = True

@app.route("/")
def root():
    return app.send_static_file('index.html')

@app.route('/<path:filename>')  
def send_file(filename):  
    return send_from_directory(app.static_folder, filename)

@app.route("/colors/", methods=["PUT"])
def switch_pin():
    json_req = request.get_json()
    params = dict(json_req)
    Flash(params["color"], params["action"])
    return "The {} is {}".format(params["color"], params["action"]), 204

@app.route("/colors/", methods=["GET"])
def get_pin_status():
    pin_status = Status()
    return jsonify(pin_status)

@app.errorhandler(BadRequestException)
def handle_server_exception(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ['PORT'])