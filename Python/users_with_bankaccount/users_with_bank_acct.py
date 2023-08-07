class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate=0, balance=0):
        # your code here! (remember, instance attributes go here)
        self.bankRate = int_rate
        self.bankBalance = balance

        # don't worry about user info here; we'll involve the User class soon

    def deposit(self, amount):
        # your code here
        self.bankBalance = self.bankBalance + amount
        # print("Balance:", self.bankBalance)
        return self.bankBalance

    def withdraw(self, amount):
        # your code here
        if amount > self.bankBalance:
            self.bankBalance = self.bankBalance - 5
            print("Insufficient funds: Charging a $5 fee")

        else:
            self.bankBalance = self.bankBalance - amount
            # print("Balance:", self.bankBalance)

            return self.bankBalance

    def display_account_info(self):
        # your code here
        # print("Balance:", self.bankBalance)
        return self.bankBalance

    def yield_interest(self):
        # your code here
        if self.bankBalance > 0:
            self.bankBalance = self.bankBalance + (self.bankBalance * (self.bankRate))
            # print("Balance:", self.bankBalance)

            return self.bankBalance


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)

    # other methods

    def make_deposit(self, amount):
        # your code here
        self.account.deposit(amount)
        # print(self.account)
        return self.account

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        # print(self.account.withdraw(amount))
        return self.account

    def display(self):
        return f"Name: {self.name}, \nEmail: {self.email}, \nBalance: {self.account.bankBalance}"


Abel = User("Abel", "email@gmail.com")
Abel.make_deposit(600)
Abel.make_withdrawal(150)

print(Abel.display())
