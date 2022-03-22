import java.util.Scanner;

public class n1065 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);	
		int num = 0;
		int cnt = 0;
		
		num = input.nextInt();
		
		if (num == 1000) {
			num = 999;
		}
		
		if (num > 99 && num <= 1000) {
			cnt = 99;
			for (int i = 100; i <= num; i++) {
				int n = i;
				int a = n % 10;
				n = n / 10;
				int b = n % 10;
				int dista1 = b -a;
				n = n / 10;
				int c = n % 10;
				int dista2 = c - b;
				if (dista1 == dista2) {
					cnt++;
				}
			}
		} else {
			cnt = num;
		}

		System.out.println(cnt);
		input.close();
	}

}
