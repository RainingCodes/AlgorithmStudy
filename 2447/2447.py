N = int(input())
star = [''] * N

def draw_space(place, size) :
    for i in range(size) :
        star[place + i] += ' ' * size

def default_star(place) :
    star[place] += '***'
    star[place + 1] += '*'
    draw_space(place + 1, 1)
    star[place + 1] += '*'
    star[place + 2] += '***'

def draw_star(place, size) :
    if size == 1 :
        default_star(place)
        return
    for i in range(3) :
        for j in range(3) :
            if i == 1 and j == 1 :
                draw_space(place + i * size, size)
            else :
                draw_star(place + i * size, size // 3)         
draw_star(0, N // 3)
for i in star :
    print(i)
