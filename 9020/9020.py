import bisect

primes = [0]

for i in range(1, 10001) :
    primes.append(i)

for i in range(2, 10001) :
    if primes[i] == 0 :
        continue
    for j in range(i * 2, 10001, i) :
        primes[j] = 0
        
i = 0
while True :
    if i == len(primes) :
        break
    if primes[i] == 0 or primes[i] == 1 :
        primes.pop(i)
    else :
        i += 1    
t = int(input())
for i in range(t) :
    n = int(input())
    a = bisect.bisect_left(primes, int(n / 2))
    if n / 2 == primes[a] :
        print(primes[a], primes[a])
    else :
        while True :
            if n - primes[a] in primes :
                print(n - primes[a], primes[a])
                break
            else :
                a += 1