package implementation;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q4_1_2 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n = Integer.parseInt(st.nextToken());
		
		int count = 0;
		for (int i = 0; i < n+1; i++) {
			for (int j = 0; j < 60; j++) {
				for (int k = 0; k < 60; k++) {
					if (i/10 == 3 || j/10 == 3 || k/10 ==3 || i%10 == 3 || j%10 == 3 || k%10 == 3) {
						count++;
					}
				}
			}
		}
		
		System.out.println(count);
	}

}
