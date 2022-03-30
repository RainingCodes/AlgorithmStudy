package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q02 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		String n = st.nextToken();
		String[] arr = n.split("");
		
		int result = 0;
		for (int i = 0; i < arr.length; i++) {
			int tmp = Integer.parseInt(arr[i]);
			if (result * tmp > result + tmp) {
				result *= tmp;
			} else {
				result += tmp;
			}
		}
		
		System.out.println(result);
		
	}

}
