import java.util.Arrays;
import java.util.Scanner;

public class n1920 {

	static int[] arr;
	public static int binarySearch(int key, int low, int high) {
		int mid;

		if(low <= high) {
			mid = (low + high) / 2;

			if(key == arr[mid]) { // 탐색 성공 
				return mid;
			} else if(key < arr[mid]) {
				// 왼쪽 부분 aList[0]부터 arr[mid-1]에서의 탐색 
				return binarySearch(key ,low, mid-1);  
			} else {
				// 오른쪽 부분 - arr[mid+1]부터 arr[high]에서의 탐색 
				return binarySearch(key, mid+1, high); 
			}
		}

		return -1; // 탐색 실패 
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);	
		
		int n = input.nextInt();
		arr = new int[n];
		for (int i = 0; i < n; i++) {
			arr[i] = input.nextInt();
		}
		Arrays.sort(arr);
		int m = input.nextInt();
		for (int i = 0; i < m; i++) {
			int mNum = input.nextInt();
			if ((binarySearch(mNum, 0, arr.length - 1)) != -1) {
				System.out.println("1");
			} else {
				System.out.println("0");
			}
			
		}
		
		input.close();

	}

}
