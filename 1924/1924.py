import datetime
month, day = map(int, input().split())
weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
print(weekdays[datetime.date(2007, month, day).weekday()])
