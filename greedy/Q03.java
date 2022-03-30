package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q03 {

	public static void main(String[] args) throws IOException {
			BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
			StringTokenizer st = new StringTokenizer(bf.readLine());
			String n = st.nextToken();
			String[] arr1 = n.split("0");
			String[] arr2 = n.split("1");
			
			int c1 = calc(arr1);
			int c2 = calc(arr2);
			System.out.println((c1 < c2 ? c1 : c2));
	}
	
	public static int calc(String[] arr) {
		int count = 0;
		for (int i = 0; i < arr.length; i++) {
			if (!arr[i].equals("")) {
				count++;
			}
		}
		return count;
	}

}
