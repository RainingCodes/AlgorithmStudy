import java.io.*;
import java.util.*;
public class Main {
    static int N, M;
    static char[][] board;
    static int[][] dp;

    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream("D:/Work/algorithm/1103/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        
        board = new char[N][M];
        dp = new int[N][M];

        for(int i = 0; i < N; i++) {
            String line = br.readLine();
            for(int j = 0; j < M; j++) {
                board[i][j] = line.charAt(j);
            }
        }


        System.out.println(move(0, 0));

        bw.flush();
        bw.close();
    }
    static int move(int x, int y) {
        if(x < 0 || y < 0 || x >= N || y >= M || board[x][y] == 'H') {
            return 0;
        } else {
            if(dp[x][y] != 0) {
                return dp[x][y];
            } else {
                int curr = board[x][y] - '0';
                int max = -1;
                if(x - curr >= 0  && dp[x - curr][y] == 0) {
                    dp[x - curr][y] = move(x - curr, y) + 1;
                    if(max < dp[x - curr][y])
                        max = dp[x - curr][y];
                }
                if(x + curr < N && dp[x + curr][y] == 0) {
                    dp[x + curr][y] = move(x + curr, y) + 1;
                    if(max < dp[x + curr][y])
                        max = dp[x + curr][y];
                }
                if(y - curr >= 0 && dp[x][y - curr] == 0) 
                    dp[x][y - curr] = move(x, y - curr) + 1;
                if(y + curr < M && dp[x][y + curr] == 0)
                    dp[x][y - curr] = move(x, y + curr) + 1;
                return Math.max(Math.max(Math.max(dp[x - curr][y], dp[x + curr][y]), dp[x][y - curr]), dp[x][y - curr]);
            }
        }
    }

}

        
        