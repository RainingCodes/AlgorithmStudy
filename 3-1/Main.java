import java.io.*;
import java.util.*;
public class Main {
    static int M;
    static int count;
    static final int[] coins = new int[] {500, 100, 50, 10};
    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream("D:/Work/algorithm/3-1/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        M = Integer.parseInt(br.readLine());
        count = 0;
        for(int i = 0; i < coins.length; i++) {
            count += M / coins[i];
            M %= coins[i];
        }

        bw.write(String.valueOf(count));
        bw.flush();
    }
}
