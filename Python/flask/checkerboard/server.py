from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/4")
def second():
    return render_template("second_checkboard.html")


@app.route("/<int:x>/<int:y>")
def x_and_y(x, y):
    return render_template("x_and_y.html", x=x, y=y)


if __name__ == "__main__":
    app.run(debug=True)
