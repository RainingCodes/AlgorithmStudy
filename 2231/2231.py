N = int(input())
flag = False
for i in range(1, N) :
    tmp = i
    tmp2 = i
    while i > 0 :
        tmp += i % 10
        i //= 10
    if tmp == N :
        print(tmp2)
        flag = True
        break
if flag == False :
    print(0)