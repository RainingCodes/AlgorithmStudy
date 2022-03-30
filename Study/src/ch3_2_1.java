import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class ch3_2_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);	
		
		int n = sc.nextInt();
		int m = sc.nextInt();
		int k = sc.nextInt();
		
		ArrayList<Integer> list = new ArrayList<Integer>();
		
		for (int i = 0; i < n; i++) {
			list.add(sc.nextInt());
		}
		
		Collections.sort(list, Collections.reverseOrder());
		
		int first = list.get(0);
		int second = list.get(1);
		int sum = 0;
		
		while (true) {
			for (int i = 0; i < k; i++) {
				if (m == 0) break;
				sum += first;
				m--;
			}
			if (m == 0) break;
			sum += second;
			m--;
		}
		
		System.out.print(sum);
		sc.close();
	}

}
