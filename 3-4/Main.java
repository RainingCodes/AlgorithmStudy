import java.io.*;
import java.util.*;
public class Main {
    static int N, K;
    static int cnt;
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream("D:/Work/algorithm/3-4/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        cnt = 0;

        while(N != 1) {
            cnt++;
            if(N % K == 0) {
                N /= K;
            } else {
                N--;
            }
        }

        bw.write(String.valueOf(cnt));
        bw.flush();
    }
}
