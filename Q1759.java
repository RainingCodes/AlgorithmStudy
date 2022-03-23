import java.util.*;
import java.io.*;

public class Q1759 {
	
	static ArrayList<Character> input = new ArrayList<>();

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in)); // 선언
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int L = Integer.parseInt(st.nextToken());
		int C = Integer.parseInt(st.nextToken());

		st = new StringTokenizer(bf.readLine());
		
		while (st.hasMoreTokens()) {
			char tmp = st.nextToken().charAt(0);
			input.add(tmp);
		}
		Collections.sort(input);

		int[] bucket = new int[L];
		pick(C, bucket, L, L);

	}

	static void pick(int n, int[] bucket, int bucketSize, int k) {
		int lastIndex, smallest, item;
		if (k == 0) {
			String str = "";
			int voCount = 0;
			int conCount = 0;
			
			for (int i = 0; i < bucket.length; i++) {
				char tmp = input.get(bucket[i]);
				
				if (n - voCount < 2) {
					return;
				}
				
				if (tmp == 'a' || tmp == 'e' || tmp == 'i' || tmp == 'o' || tmp == 'u') {
					voCount++;
				} else  {
					conCount++;
				}
				
				str += tmp;
			}
			
			if (voCount < 1 || conCount < 2) {
				return;
			}
			
			System.out.println(str);
			
			return;
		}
		lastIndex = bucketSize - k - 1; // 가장 최근에 뽑힌 수가 저장된 위치 index
		if (bucketSize == k)
			smallest = 0;
		else
			smallest = bucket[lastIndex] + 1;
		for (item = smallest; item < n; item++) {
			bucket[lastIndex + 1] = item;
			pick(n, bucket, bucketSize, k - 1);
		}
	}
}
