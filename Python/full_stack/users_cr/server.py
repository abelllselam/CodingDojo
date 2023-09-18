from flask import Flask, session, request, redirect, render_template

from users import User

app = Flask(__name__)

app.secret_key = "dsjdjhgfjabgdjba;f"


@app.route("/")
def read_all():
    users = User.read_all()

    print(users)

    return render_template("read_all.html", users=users)


@app.route("/create_user", methods=["POST"])
def create_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
    }
    # session["data"] = data

    User.save(data)

    return redirect("/create_show")


@app.route("/create_show")
def create_show():
    # print(session["data"])
    # value = session["data"]
    return render_template("create.html")


@app.route("/clear_session")
def clear_session():
    session.clear()

    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
