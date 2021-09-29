
try:
    day_number = int(input('Day (0-6)? '))

    if day_number > 0 and day_number < 6:
        print('Go to work')
    elif day_number == 0 or day_number == 6:
        print('Sleep in')
    else:
        print('Enter a valid day number')
except ValueError:
    print("That's not a number")

print('the end')