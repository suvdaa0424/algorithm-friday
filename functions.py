
# functions are defined using the def keyword, then a name, parens, then colon
def say_hello():
    print('hello!')


# functions can have parameters
def multiply_by_5(num):
    return num * 5


# functions can have more than one parameter
def add(num1, num2):
    return num1 + num2


# calling functions is how we execute the code inside them
say_hello()  # prints 'hello!'

# when calling functions, this is when we pass data as arguments
add(5, 10)  # returns 15