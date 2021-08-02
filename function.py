def f(x):
    return x + 1
y = f(5)
if y == 5:
    print("y is 5")
else:
    print("y is not 5")

# multiple parameter define
    
def f(x, y, z):
    return x + y + z
y = f(5, 6, 7)
print(y)
if y == 18:
    print("y is 5")
else:
    print("y is not 5")


# even- odd number function

def even_odd(num = 30):
    if num % 2 == 0:
        print("Num is even")
    else:
        print(" Num is odd")
even_odd()