import java.util.Scanner;

public class ch4_1_2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
	
		int n = sc.nextInt();
		int cnt = 0;
		for (int h = 0; h < (n + 1); h++) {
			for (int m = 0; m < 60; m++) {
				for (int s = 0; s < 60; s++) {
					String hour = Integer.toString(h);
					String min = Integer.toString(m);
					String sec = Integer.toString(s);
					String result = "";
					result += hour;
					result += min;
					result += sec;
					
					if(result.contains("3")) {
						cnt++;
					}
				}
			}
		}
		System.out.println(cnt);
		sc.close();

	}

}
