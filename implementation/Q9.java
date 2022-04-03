package implementation;

public class Q9 {

	public static void main(String[] args) {
		System.out.println(solution("abcabcdede"));
	}
	
	public static int solution(String s) {
        int answer = 0;
        String tmp = "";
        
        for (int k = 1; k <= s.length()/2; k++) { //압축 갯수(최대 문자열 반쪽)
        	int idx = 0;
        	int nextIdx = idx+k;
        	int count = 1;
        	while (idx < s.length()) {
	        	String s1 = s.substring(idx, nextIdx);
	        	String s2 = s.substring(nextIdx, nextIdx+k);
	        	
	        	if (s1.equals(s2)) {
	        		count++;
	        	} else {
	        		if (count > 1) {
	        			tmp += count + s1;
	        		} else {
	        			tmp += s1;
	        		}
	        	}
	        	idx = nextIdx;
        		nextIdx = nextIdx+k;
        	}
        	
        	answer = (tmp.length() > answer ? tmp.length() : answer);
        	tmp = "";
        }
        
        return answer;
    }

}
