from flask import Flask, render_template, redirect, request

from users import User


app = Flask(__name__)


@app.route("/")
def index():
    users = User.get_all()
    return render_template("read_all.html", users=users)


@app.route("/users/create", methods=["POST"])
def new_user():
    print(
        "This is the request.form in the users/create route: --------->", request.form
    )
    one_user = User.save(request.form)

    return redirect("/users/create/new")


@app.route("/users/create/new")
def create():
    return render_template("create.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
