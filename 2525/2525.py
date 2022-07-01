H, M = map(int, input().split())
cooking = int(input())
if (M + cooking) >= 60 :
    H += (M + cooking) // 60
print(H % 24, (M + cooking) % 60)