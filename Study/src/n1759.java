import java.util.Arrays;
import java.util.Scanner;

public class n1759 {
	static String[] code;
	
	
    static void comb(int[] arr, boolean[] visited, int depth, int n, int r) {
        if (r == 0) {
            print(arr, visited, n);
            return;
        }
        
        if (depth == n) {
            return;
        }

        visited[depth] = true;
        comb(arr, visited, depth + 1, n, r - 1);
        visited[depth] = false;
        comb(arr, visited, depth + 1, n, r);
    }

    // 배열 출력
    static void print(int[] arr, boolean[] visited, int n) {
        for (int i = 0; i < n; i++) {
            if (visited[i]) {
                System.out.print(code[i] + " ");
            }
        }
        System.out.println();
    }
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);	
		
		int L = input.nextInt();
		int C = input.nextInt();
		input.nextLine();
		String str = input.nextLine();

		code = str.split(" ");
		Arrays.sort(code);
//		System.out.println(code.length);
//		for (int i = 0; i < code.length; i++) {
//        	System.out.print(code[i] + ", ");
//        }
		
        int[] arr1 = new int[C];
        for (int i = 0; i < C; i++) {
        	arr1[i] = i;
        }
        boolean[] visited = new boolean[C];
		
        comb(arr1, visited, 0, C, L);
		
		input.close();
	}

}
