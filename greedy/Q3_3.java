package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Q3_3 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		
		
		int result = -1;
		for (int i = 0; i < n; i++) {
			int[] arr = new int[m];
			st = new StringTokenizer(bf.readLine());
			for (int j = 0; j < m; j++) {
				arr[j] = Integer.parseInt(st.nextToken());
			}
			Arrays.sort(arr);
			if (result < arr[0]) {
				result = arr[0];
			}
		}
		
		System.out.println(result);
	}

}
