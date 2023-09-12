from flask import Flask, render_template
import math

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/4")
def second():
    return render_template("second_checkboard.html")


@app.route("/<int:x>/<int:y>")
def x_and_y(x, y):
    num_x = x - (x / 2)
    math.floor(int(num_x))
    print(num_x)
    num_y = y - (y / 2)
    math.floor(num_y)

    return render_template("x_and_y.html", x=x, y=y, num_x=num_x, num_y=num_y)


if __name__ == "__main__":
    app.run(debug=True)
