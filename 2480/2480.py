dice = input().split()
dice.sort()
flag = 0
tmp = -1
for i in range(1, len(dice)) :
    if dice[i - 1] == dice[i] :
        flag += 1
        tmp = dice[i]

if flag == 0 :
    print(int(dice[2]) * 100)
elif flag == 1 :
    print(int(tmp) * 100 + 1000)
else :
    print(int(tmp) * 1000 + 10000)