package book;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.StringTokenizer;

public class Q3_2 {
	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		Integer[] arr = new Integer[n];
		st = new StringTokenizer(bf.readLine());
		for (int i = 0; i < n; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		Arrays.sort(arr, Collections.reverseOrder());
		
		int a = arr[0];
		int b = arr[1];
		
		int sum = 0;
		
//		int i = a;		
//		while (m != 0) {
//			if (i == a) {
//				if (m < k) {
//					sum += (i*m);
//					m -= m;
//				} else {
//					sum += (i*3);
//					m -= 3;
//				}
//				i = b;
//			} else {
//				sum += i;
//				i = a;
//				m--;
//			}
//		}
		
		while (true) {
			for (int i = 0; i < k; i++) {
				if (m == 0) {
					break;
				}
				sum += a;
				m--;
			}
			if (m == 0) {
				break;
			}
			sum += b;
			m--;
		}
		System.out.println(sum);
		
	}
}
