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
        print("Balance:", self.bankBalance)
        return self.bankBalance

    def withdraw(self, amount):
        # your code here
        if amount > self.bankBalance:
            self.bankBalance = self.bankBalance - 5
            print("Insufficient funds: Charging a $5 fee")

        else:
            self.bankBalance = self.bankBalance - amount
            print("Balance:", self.bankBalance)

            return self.bankBalance

    def display_account_info(self):
        # your code here
        print("Balance:", self.bankBalance)
        return self.bankBalance

    def yield_interest(self):
        # your code here
        if self.bankBalance > 0:
            self.bankBalance = self.bankBalance * (self.bankRate)
            print("Balance:", self.bankBalance)

            return self.bankBalance


customer1 = BankAccount(0.01, 100)

customer1.deposit(400)
customer1.withdraw(200)
customer1.display_account_info()
customer1.yield_interest()
