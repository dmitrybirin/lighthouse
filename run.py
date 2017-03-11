from flask import Flask, request, jsonify, current_app
from gpio import Flash, Status
from ServerExceptions import BadRequestException

app = Flask(__name__)
app.debug = True

@app.route("/")
def hello():
    return app.send_static_file('index.html')

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
    app.run(host='0.0.0.0', port=4342)