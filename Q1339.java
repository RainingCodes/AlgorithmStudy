import java.io.*;
import java.util.*;


public class Q1339 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); // 선언
		int N = Integer.parseInt(bf.readLine());
		char[][] arr = new char[N][];
		
		for (int i = 0; i < N; i++) {
			String tmp = bf.readLine();
			arr[i] = new StringBuffer(tmp).reverse().toString().toCharArray();
		}
		
		HashMap<Character, Integer> map = new HashMap<>();
		mapSet(arr, map);
		System.out.println(sum(map));
		
		
//		for(Character key : map.keySet()) {
//			Integer value = map.get(key);
//			System.out.println(key + " : " + value);
//		}
	}
	
	public static void mapSet(char[][] arr, HashMap<Character, Integer> map) {
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr[i].length; j++) {
				int setValue = map.getOrDefault(arr[i][j], -1);
				if (setValue == -1) { // 없을 때 값 주는거
					map.put(arr[i][j], (int) Math.pow(10, j));
				} else {
					map.put(arr[i][j], (int) (setValue + Math.pow(10, j)));
				}
			}
		}
	}
	
	public static int sum(HashMap<Character, Integer> map) {
		int result = 0;
		int count = 9;
		List<Character> keySetList = new ArrayList<>(map.keySet());
		Collections.sort(keySetList, (o1, o2) -> (map.get(o2).compareTo(map.get(o1))));
		for(Character key : keySetList) {
			result += count * map.get(key);
			count--;
		}
		
		return result;
	}
}
