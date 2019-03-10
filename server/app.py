from flask import Flask
from flask import request
import subprocess
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)

@app.route("/evaluate")
def evaluate():
  args = request.args.to_dict()
  print(args)
  # subprocess.run(["g++", "-std=c++14", "-O3", "alg.cpp"])
  p = subprocess.Popen(['./a.out'], stdout=subprocess.PIPE, stdin=subprocess.PIPE)
  p.stdin.write(bytes(args['value'], 'utf-8')) 
  return p.communicate()[0]

if __name__ == "__main__":
    app.run(host='0.0.0.0')
