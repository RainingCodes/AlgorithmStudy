import java.util.Arrays;

import java.util.Collections;
import java.util.Scanner;

public class ch6_4 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int k = sc.nextInt();
		
		int[] arr1 = new int[n];
		int[] arr2 = new int[n];
		
		for (int i = 0; i < n; i++) {
			arr1[i] = sc.nextInt();
		}
		for (int i = 0; i < n; i++) {
			arr2[i] = sc.nextInt();
		}
		
		Arrays.sort(arr1);
		arr2 = Arrays.stream(arr2).boxed().sorted(Collections.reverseOrder()).mapToInt(Integer::intValue).toArray();

		for (int i = 0; i < n; i++) {
			System.out.print(arr2[i]);
		}
		
		for (int i = 0; i < k; i++) {
			if (arr1[i] < arr2[i]) {
				arr1[i] = arr2[i];
			} else {
				break;
			}
		}
		int sum = 0;
		for (int i = 0; i < k; i++) {
			sum += arr1[i];
		}
		System.out.println(sum);

		sc.close();
	}

}
