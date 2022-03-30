package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q3_4 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		int count = 0;
//		while (n != 1) {
//			if (n % k != 0) {
//				n--;
//			} else {
//				n = n/k;
//			}
//			count++;
//		}
		
		while (n >= k) {
			while (n % k != 0) {
				n--;
				count ++;
			}
			n /= k;
			count++;
		}
		while (n > 1) {
			n--;
			count++;
		}
		System.out.println(count);
	}

}
