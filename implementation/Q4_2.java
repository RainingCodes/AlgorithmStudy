package implementation;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q4_2 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		String n = st.nextToken();
		
		int row = n.charAt(1) - '1';
		int col = n.charAt(0) - 'a';
		
		int count = 0;
		
		int[][] arr = {{-2,-1},{-1,-2},{1,-2},{2,-1},{2,1},{1,2},{-1,2},{-2,1}};
		
		for (int i = 0; i < arr.length; i++) {
			int next_row = row + arr[i][0];
			int next_col = col + arr[i][1];
			
			if (0 <= next_row && next_row < 8 && 0 <= next_col && next_col <8) {
				count++;
			}
		}
		
//		if (row + 2 < 8) {
//			if (col + 1 < 8) {
//				count++;
//			}
//			if (0 <= col - 1) {
//				count++;
//			}
//		}
//		
//		if (0 <= row - 2) {
//			if (col + 1 < 8) {
//				count++;
//			}
//			if (0 <= col - 1) {
//				count++;
//			}
//		}
//		
//		if (col + 2 < 8) {
//			if (row + 1 < 8) {
//				count++;
//			}
//			if (0 <= row - 1) {
//				count++;
//			}
//		}
//		
//		if (0 <= col - 2) {
//			if (row + 1 < 8) {
//				count++;
//			}
//			if (0 <= row - 1) {
//				count++;
//			}
//		}
		
		System.out.println(count);
	}

}
