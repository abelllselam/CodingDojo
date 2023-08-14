from flask import Flask, render_template

app=Flask(__name__)

@app.route('/play')
def index():
    # return render_template("index.html")
    return render_template("index.html")


@app.route("/play/<value>")
def num_times(value):
    num = int(value)
    return render_template("play2.html",num=num)

@app.route("/play/<value>/<bgcolor>")
def color(value,bgcolor):
    num = int(value)
    bgcolor=bgcolor
    return render_template("play3.html", num=num,bgcolor=bgcolor)

@app.errorhandler(404)
def not_found(e):
    return "abel error"

if __name__=="__main__":
    app.run(debug=True, host="localhost", port=5001)