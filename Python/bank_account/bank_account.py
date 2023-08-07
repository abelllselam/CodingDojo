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
        return self

    def withdraw(self, amount):
        # your code here
        if amount > self.bankBalance:
            self.bankBalance = self.bankBalance - 5
            print("Insufficient funds: Charging a $5 fee")

        else:
            self.bankBalance = self.bankBalance - amount
            # print("Balance:", self.bankBalance)

            return self

    def display_account_info(self):
        # your code here
        print("Balance:", self.bankBalance)
        return self

    def yield_interest(self):
        # your code here
        if self.bankBalance > 0:
            self.bankBalance = self.bankBalance + (self.bankBalance * (self.bankRate))
            print("Balance:", self.bankBalance)

            return self


customer1 = BankAccount(0.01, 50)
customer2 = BankAccount(0.01, 10)

# customer1.deposit(400)
# customer1.deposit(100)
# customer1.deposit(50)
# customer1.withdraw(50)
# customer1.display_account_info()
# customer1.yield_interest()
customer1.deposit(400).deposit(100).deposit(50).withdraw(
    50
).display_account_info().yield_interest()
# ******************************************************
print("*" * 200)
customer2.deposit(100)
customer2.deposit(500)
customer2.withdraw(50)
customer2.withdraw(50)
customer2.withdraw(100)
customer2.withdraw(40)
customer2.display_account_info()
customer2.yield_interest()
#     40
# ).display_account_info().yield_interest()
# customer2.deposit(100).deposit(500).withdraw(50).withdraw(50).withdraw(100).withdraw(
#     40
# ).display_account_info().yield_interest()
