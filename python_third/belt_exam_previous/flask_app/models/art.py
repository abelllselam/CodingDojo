from flask_app.config.mysqlconnection import connectToMySQL

# from flask_app.models.user import User
from flask_app.controllers import users

DB = "py_belt_exam"


class Art:
    def __init__(self, data):
        self.id = data["id"]
        self.title = data["title"]
        self.description = data["description"]
        self.price = data["price"]
        self.quantity = data["quantity"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]

    # CRUD
    # Read_by_id
    @classmethod
    def read_by_id(cls, id):
        # query to get by id
        print("read_by_id ----->", id)
        query = """
                SELECT * FROM arts
                WHERE id = %(id)s;
        """

        data = {"id": id}

        results = connectToMySQL(DB).query_db(query, data)

        print("checking result in ")
        if results:
            one_art = cls(results[0])
            return one_art

        return None

    # save a new record to the arts table
    @classmethod
    def save(cls, data):
        # query to save a record in the arts table
        print("This is data form in the art model:----->", data)
        query = """
                INSERT INTO arts (title, description, price, quantity,user_id)
                VALUES (%(title)s,%(description)s,%(price)s,%(quantity)s,%(user_id)s)
        """
        results = connectToMySQL(DB).query_db(query, data)

        return results

    # This is to update the art information in the arts DB
    @classmethod
    def update_art(cls, data):
        # query to update the art record

        # print(
        #     "This is the data from the update route that is coming from the request.form ------->",
        #     data,
        # )
        query = """
                UPDATE arts
                SET title = %(title)s, description = %(description)s, price =%(price)s, quantity = %(quantity)s
                WHERE id = %(id)s
        """
        results = connectToMySQL(DB).query_db(query, data)

        return results

    # This method deletes the selected art from the DB
    @classmethod
    def delete_art(cls, id):
        # query to delete
        query = """
                DELETE FROM arts 
                WHERE id = %(id)s
        """

        data = {"id": id}

        results = connectToMySQL(DB).query_db(query, data)

        return results
