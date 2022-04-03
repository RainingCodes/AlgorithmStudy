package implementation;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q4_1_1 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n = Integer.parseInt(st.nextToken());
		
		int x = 1, y = 1;
		st = new StringTokenizer(bf.readLine());
		while (st.hasMoreTokens()) {
			char input = st.nextToken().charAt(0);
			
			switch (input) {
			case 'L' :
				y--;
				break;
			case 'R' :
				y++;
				break;
			case 'U' :
				x--;
				break;
			case 'D' :
				x++;
				break;
			}
			
			if (x == n) {
				x--;
			} else if (x == 0) {
				x++;
			}
			if (y == n) {
				y--;
			} else if (y == 1) {
				y++;
			}
		}
		System.out.println(x +", "+ y);
	}

}
