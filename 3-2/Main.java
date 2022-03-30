import java.io.*;
import java.util.*;
public class Main {
    static int N, M, K;
    static int count;
    static Integer[] nums;
    static int sum;
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream("D:/Work/algorithm/3-2/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());

        M = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        
        nums = new Integer[N];
        st = new StringTokenizer(br.readLine());

        for(int i = 0; i < N; i++) {
            nums[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(nums, Collections.reverseOrder());

        sum = nums[0] * (K * ((M + 1) / (K + 1)) + M % (K + 1));
        sum += (nums[1] * (M / (K + 1)));

        bw.write(String.valueOf(sum));
        bw.flush();
    }
}
