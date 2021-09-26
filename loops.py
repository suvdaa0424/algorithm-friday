# print each we eat a donut up to 10 times
# print("you have eaten 1 donuts.")
# print("you have eaten 2 donuts.")
# print("you have eaten 3 donuts.")
# print("you have eaten 4 donuts.")
# print("you have eaten 5 donuts.")
# print("you have eaten 6 donuts.")
# print("you have eaten 7 donuts.")
# print("you have eaten 8 donuts.")
# print("you have eaten 9 donuts.")
# print("you have eaten 10 donuts.")

# three parts to a loop
# 1 - initial state
donuts = 1
# 2 - condition statement
while donuts <= 10:
    # indented code block
    print(f"you have eaten {donuts} donuts.")
    # donuts = donuts + 1
    # without something that gets us closer to breaking the loop, we end
    # up with and infinite loop
    donuts += 1

# Infinite loops can be good
while True:
    print('working...')
    user_input = input('Should I stop? (y/n) ')
    if user_input == 'y':
        print("thank you!")
        # stop a loop with 'break' keyword
        break
    else:
        print('sigh...')

# Use user input to loop until that point
donuts_to_eat = int(input('How many donuts will you eat? '))
donuts_eaten = 0  # initial state
while donuts_eaten < donuts_to_eat:  # condition
    donuts_eaten += 1  # get closer to break condition
    print(f"you have eaten {donuts_eaten} donuts.")
    # it is also possible to put conditions inside loops
    # half of user input (donuts to eat) is the half way point
    if (donuts_eaten == round(donuts_to_eat / 2)):
        print("you're halfway there")