l = list(range(1, 100))

for a in l:
     count = 0
     for i in range(2, (a // 2 +1)):
         if (a % i == 0):
             count = count + 1
             break
    
     if(count ==0 and a != 1):
        print("Prime Number is: ", a)