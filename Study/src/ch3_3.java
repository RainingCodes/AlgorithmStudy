import java.util.ArrayList;
import java.util.Scanner;

public class ch3_3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int m = sc.nextInt();

		int[] minArr = new int[n];
		int[][] arr = new int[n][m];
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				arr[i][j] = sc.nextInt();
			}
			minArr[i] = 999999;
			for (int d : arr[i]) minArr[i] = Math.min(d, minArr[i]);
		}


		int iMax = 0;
		for (int d : minArr) iMax = Math.max(d, iMax);
		System.out.print(iMax);
		sc.close();
	}

}
