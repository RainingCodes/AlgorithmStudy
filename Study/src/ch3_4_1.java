import java.util.Scanner;

public class ch3_4_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int k = sc.nextInt();
		int result = 0;
		
		while (n >= k ) {
			while (n % k != 0) {
				n -= k;
				result++;
			}
			n /= k;
			result++;
		}
		while (n > 1) {
			n -= 1;
			result++;
		}
		System.out.print(result);
		sc.close();

	}

}
