package implementation;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Q8 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		String str = st.nextToken();
		
		char arr[] = str.toCharArray();
		Arrays.sort(arr);
		
		int sum = 0;
		for (int i = 0; i < arr.length; i++) {
			if ('0' <= arr[i] && arr[i] <= '9') {
				sum += arr[i] - '0';
			}
			else {
				System.out.print(arr[i]);
			}
		}
		System.out.print(sum);
	}

}
