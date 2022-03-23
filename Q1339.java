import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

import sun.jvm.hotspot.debugger.win32.coff.AuxBfEfRecord;

public class Q1339 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); // 선언

		int N = Integer.parseInt(bf.readLine());
		
		String[] strs  = new String[N];
		
		for (int i = 0; i < N; i++) {
			strs[i] = bf.readLine();
		}
		HashMap<Character, Integer> map = new HashMap<>();
		
		
		char[] arr1 = new StringBuffer(str1).reverse().toString().toCharArray();
		char[] arr2 = new StringBuffer(str2).reverse().toString().toCharArray();
				
		
		int result = 0;
		
		if (arr1.length > arr2.length) {
			mapInput(arr1, arr2, map);
			result = sum(arr1, arr2, map);
		} else { // 반대거나 자릿수같은경우
			mapInput(arr2, arr1, map);
			result = sum(arr2, arr1, map);
		}
		
		System.out.println(result);

	}
	
	public static void mapInput(char[] bigArr, char[] smailArr, HashMap<Character, Integer> map) {
		int value = 9;
		
		for (int i = bigArr.length - 1; i >= 0; i--) {
			if (map.get(bigArr[i]) == null) { // 없을 때 값 주는거
				map.put(bigArr[i], value--);
			}
			
			if (smailArr.length - 1 >= i) {
				if (map.get(smailArr[i]) == null) { // 없을 때 값 주는거
					map.put(smailArr[i], value--);
				}
			}
		}		
	}
	
	public static int sum(char[] bigArr, char[] smailArr, HashMap<Character, Integer> map) {
		int result = 0;
		
		for (int i = 0; i < bigArr.length; i++) {
			result += map.get(bigArr[i]) * Math.pow(10, i);
			
			if (i < smailArr.length) {
				result += map.get(smailArr[i]) * Math.pow(10, i);
			}
		}
		
		return result;
	}
}
