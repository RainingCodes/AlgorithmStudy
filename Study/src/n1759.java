import java.util.Arrays;
import java.util.Scanner;

public class n1759 {
	static char[] code;
	static int L;
	static int C;
	
    static void comb(int[] arr, boolean[] visited, int depth, int n, int r) {
        if (r == 0) {
            makeArr(arr, visited, n);
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
    static void makeArr(int[] arr, boolean[] visited, int n) {
    	char[] word = new char [L];
    	int j = 0;
        for (int i = 0; i < n; i++) {
            if (visited[i]) {
            	word[j++] = code[i];
            }
        }
        checkArr(word);
    }
	static void checkArr(char[] word) {
		int cnt = 0; 
		int cnt2 = 0;
		for (int i = 0; i < word.length ; i++) {
			if (word[i] == 'a' || word[i] == 'e' 
        			|| word[i] == 'i'|| word[i] == 'o'|| word[i] == 'u') {
        		cnt++;
        	} else {
        		cnt2++;
        	}
		}
//		System.out.println(word.length);
		if (cnt >= 1 && cnt2 >= 2) {
//			for (int i = 0; word[i] != '\0' ; i++) {
//				System.out.print(word[i]);
//			}
			System.out.println(word);
		}
		return;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner input = new Scanner(System.in);	
		
		L = input.nextInt();
		C = input.nextInt();
		input.nextLine();
		code = new char [C];
		for (int i = 0; i < C; i++) {
			code[i] = input.next().charAt(0);
		}
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
