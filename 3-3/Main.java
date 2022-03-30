import java.io.*;
import java.util.*;
public class Main {
    static int N, M, K;
    static int max, min;
    static int tmp;
    static int sum;
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream("D:/Work/algorithm/3-3/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
       
        max = 0;
        for(int i = 0; i < N; i++) {
            min = 10001;
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < M; j++) {
                tmp = Integer.parseInt(st.nextToken());
                if(min > tmp) {
                    min = tmp;
                }
            }
            if(max < min) {
                max = min;
            } 
        }

        bw.write(String.valueOf(max));
        bw.flush();
    }
}
