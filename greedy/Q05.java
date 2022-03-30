package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q05 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		
		int[] arr = new int[n];
		int[] count = new int[m];
		st = new StringTokenizer(bf.readLine());
		for (int i = 0; i < n; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
			count[arr[i] - 1]++;
		}
		
		int result = CombinationNum(n);
		
		for (int i = 0; i < m; i++) {
			if (count[i] > 1) {
				result -= CombinationNum(count[i]);
			}
		}
		System.out.println(result);		
		

	}
	
	public static int CombinationNum(int i) {
		return i*(i-1)/2;
	}

}
