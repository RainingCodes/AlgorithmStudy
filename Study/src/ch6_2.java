import java.util.Arrays;
import java.util.Scanner;

public class ch6_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int[] arr = new int[n];
		
		for (int i = 0; i < n; i++) {
			arr[i] = sc.nextInt();
		}
		
		Arrays.sort(arr);
		
		for (int i = (n - 1); i >= 0; i--) {
			System.out.print(arr[i] + " ");
		}
		
		sc.close();

	}

}
