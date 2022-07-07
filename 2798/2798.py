N, M = map(int, input().split())
cards = input().split()
memo = [0] * 3
tmp = -1

def pick(k) :
    if k == 0 :
        sum = 0
        for i in range(3) :
            sum += int(cards[memo[i]])
        global tmp
        if tmp == -1 :
            if sum <= M :
                tmp = sum
        else :
            if sum <= M and M - sum < M - tmp : 
                tmp = sum
        return
    
    lastIndex = 3 - k - 1
    if 3 == k :
        smallest = 0
    else :
        smallest = memo[lastIndex] + 1
    for i in range(smallest, N) :
        memo[lastIndex + 1] = i
        if M - tmp == 0 :
            break
        pick(k - 1)

pick(3)
print(tmp)
