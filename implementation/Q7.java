package implementation;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q7 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		String str = st.nextToken();
		
		int cut = (str.length())/2;
		
		int n1 = 0;
		for (int i = 0; i < cut; i++) {
			n1 += str.charAt(i) - '0';
		}
		int n2 = 0;
		for (int i = cut; i < str.length(); i++) {
			n2 += str.charAt(i) - '0';
		}
		
		String result = "";
		if (n1 == n2) {
			result += "LUCKY";
		} else {
			result += "READY";
		}
		System.out.println(result);
		
	}

}
