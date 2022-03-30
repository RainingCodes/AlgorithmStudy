import java.io.*;
import java.util.*;
public class Main {
    static int N;
    static Integer[] fear;
    static int answer;
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream("D:/Work/algorithm/11-1/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        

        N = Integer.parseInt(br.readLine());

        fear = new Integer[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        answer = 0;
        for(int i = 0; i < N; i++) {
            fear[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(fear, Collections.reverseOrder());

        for(int i = 0; ; i++) {
            answer++;
            N -= 
        }

        bw.write(Arrays.toString(fear));
        bw.flush();
    }
}
