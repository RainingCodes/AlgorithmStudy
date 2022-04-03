package implementation;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q4_3 {
	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int[][] map = new int[n][m];
		
		st = new StringTokenizer(bf.readLine());
		int x = Integer.parseInt(st.nextToken());
		int y = Integer.parseInt(st.nextToken());
		int see = Integer.parseInt(st.nextToken());
		
		for (int i = 0; i < n; i++) {
			st = new StringTokenizer(bf.readLine());
			for (int j = 0; j < m; j++) {
				map[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		int[][] arr = {{0,1},{1,0},{0,-1},{-1,0}};
		
		int visit = 1;
		int count = 0;
		while (true) {
			
			if (count == 4) {
				if (map[x-arr[see][0]][y-arr[see][1]] == 1) {
					break;
				} else {
					count = 0;
					x -= arr[see][0];
					y -= arr[see][1];
				}
			}
			if (map[x+arr[see][0]][y+arr[see][1]] == 0) {
				visit++;
				count = 0;
				map[x+arr[see][0]][y+arr[see][1]] = 2;
				x += arr[see][0];
				y += arr[see][1];
			} else {
				count++;
			}
			see = (see < 3 ? see + 1 : 0);
			
		}
		
		System.out.println(visit);
	}
}
