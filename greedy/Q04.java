package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.StringTokenizer;

public class Q04 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n = Integer.parseInt(st.nextToken());
		
		Integer[] arr = new Integer[n];
		st = new StringTokenizer(bf.readLine());
		for (int i = 0; i < n; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		Arrays.sort(arr, Collections.reverseOrder());
		
		int num = 1;
		while (true) {
			int sum = 0;
			boolean success = false;
			for (int i = 0; i < arr.length; i++) {
				if (sum + arr[i] <= num) {
					sum += arr[i];
				}
				
				if (sum == num) {
					success = true;
					break;
				}
			}
			
			if (success) {
				num++;
			} else {
				break;
			}
		}
		System.out.println(num);
	}

}
