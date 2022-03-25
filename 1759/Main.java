import java.io.*;
import java.util.*;
public class Main {
    static int N, M;
    static HashMap<Integer, Integer> A;
    public static void main(String[] args) throws Exception{
        //System.setIn(new FileInputStream("D:/Work/sds/weekend1/1920/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        A = new HashMap<>();
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < N; i++) {
            A.put(Integer.parseInt(st.nextToken()), i);
        }
        st = new StringTokenizer(br.readLine());
        M = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        for(int i = 0; i < M; i++) {
            int tmp = Integer.parseInt(st.nextToken());
            if(A.get(tmp) == null) {
                bw.write("0\n");
            } else {
                bw.write("1\n");
            }
        }

        bw.flush();
        bw.close();
    }
}
