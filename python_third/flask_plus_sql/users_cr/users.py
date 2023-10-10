from mysqlconnection import connectToMySQL

# assigning the database to DATABASE so that we dont have to user the actual database to avoid error
DATABASE = "users_CR"


class User:
    # The class constructor used to make objects
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    # CRUD
    # Create
    # This method is to create user records:
    @classmethod
    def save(cls, data):
        # query to save data
        query = """
                INSERT INTO users (first_name, last_name, email)
                VALUES(%(first_name)s, %(last_name)s,%(email)s);
            """
        # expecting an id number after the user is created
        results = connectToMySQL(DATABASE).query_db(query, data)

        print(
            "This is the save class method printing the results query output ----------->",
            results,
        )

        return results

    # READ
    # This class method is to get all the records from the database
    @classmethod
    def get_all(cls):
        # query to get all the values from the database.
        query = """
                SELECT * from users;
            """

        # we are expecting a list of dictionaries
        results = connectToMySQL(DATABASE).query_db(query)

        print(
            "This is the get all class method printing the results query output ----------->",
            results,
        )

        users = []

        for user in results:
            users.append(cls(user))

        return users
