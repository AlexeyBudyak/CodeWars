def decompose(n):
    if n == 12: num1 = 9 
    else: num1 = n -1
    num2 = int((n * n - num1 ** 2) ** 0.5)
    for i in range(num2,0,-1):
        if(num2 ** 2 + num1 ** 2 == n * n): 
            print(n,[num2, num1])
            return [num2, num1]
        num3 = int((n * n - num1 ** 2 - num2 ** 2) ** 0.5)
        for i in range(num3,0,-1):
            if(num3 ** 2 + num2 ** 2 + num1 ** 2 == n * n and num3 < num2): 
                print(n,[num3, num2, num1])
                return [num3, num2, num1]
            num4 = int((n * n - num1 ** 2 - num2 **2 -  num3 ** 2) ** 0.5)
            for i in range(num4, 0,-1):
                if(num4 **2 + num3 ** 2 + num2 ** 2 + num1 ** 2 == n * n and num4 < num3 < num2): 
                    print(n,[num4, num3, num2, num1])
                    return [num4, num3, num2, num1]
                num5 = int((n * n - num1 ** 2 - num2 **2 -  num3 ** 2 - num4 ** 2) ** 0.5)
                for i in range(num5, 0,-1):
                    if(num5 ** 2 + num4 **2 + num3 ** 2 + num2 ** 2 + num1 ** 2 == n ** 2 and num5 < num4 < num3 < num2 ): 
                        print(n,[num5,num4, num3, num2, num1])
                        return [num5,num4, num3, num2, num1]
                    num6 = min(int((n * n - num1 ** 2 - num2 **2 -  num3 ** 2 - num4 ** 2 - num5 ** 2) ** 0.5),num5-1)
                    if(num6 **2 + num5 ** 2 + num4 **2 + num3 ** 2 + num2 ** 2 + num1 ** 2 == n * n and num6 < num5 < num4 < num3 < num2): 
                        print(n,[num6, num5,num4, num3, num2, num1])
                        return [num6, num5,num4, num3, num2, num1]
                    num7 = int((n * n - num1 ** 2 - num2 **2 -  num3 ** 2 - num4 ** 2 - num5 ** 2 - num6 ** 2) ** 0.5)
                    if(num7 ** 2 + num6 **2 + num5 ** 2 + num4 **2 + num3 ** 2 + num2 ** 2 + num1 ** 2 == n * n and num7 < num6 < num5 < num4 < num3 < num2): 
                        print(n,[num7,num6, num5,num4, num3, num2, num1])
                        return [num7, num6, num5,num4, num3, num2, num1]
                    num5-= 1
                num4-= 1
            num3-= 1
        num2-= 1
        
    return None
