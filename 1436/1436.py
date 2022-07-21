n = int(input())

end_num = 666
st = 0
end = 0
answer = 0
answer_len = 3
for i in range(n) :
	if st == 0 or st % 10 != 6 :
		answer = int(str(st) + str(end_num))
		answer_len = len(str(answer))
		st += 1
	else :
		if str(st).__contains__('666') :
			end_num = 0
		elif st % 100 == 66 :
			end_num = 6
		elif st % 10 == 6 :
			end_num = 66

		if end_num != 0 :
			if len(str(end)) < answer_len - len(str(st)) - len(str(end_num)):
				end_str = '0' * (answer_len - len(str(st)) - len(str(end_num)) - len(str(end))) + str(end)
			else :
				end_str = str(end)
		else :
			end_str = '0' * (answer_len - len(str(st)) - len(str(end))) + str(end)
		if str(st).__contains__('666') :
			answer = int(str(st) + end_str)
		else :
			answer = int(str(st) + str(end_num) + end_str)
		end += 1
		if end_num != 0 :
			if len(str(end)) > answer_len - len(str(st)) - len(str(end_num)) :
				end = 0
				st += 1
				end_num = 666
		else :
			if len(str(end)) > answer_len - len(str(st)) :
				end = 0
				st += 1
				end_num = 666
print(answer)
			