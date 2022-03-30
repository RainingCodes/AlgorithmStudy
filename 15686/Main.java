import java.io.*;
import java.util.*;
public class Main {
    static int N, M;
    static int[][] map;
    static int[][] dp;
    static ArrayList<Coordinate> chickens;
    static ArrayList<Coordinate> homes;
    static final int home = 1;
    static final int chicken = 2;
    static int[] dist;

    public static void main(String[] args) throws Exception{
        System.setIn(new FileInputStream("D:/Work/algorithm/15686/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        
        map = new int[N][M];
        dp = new int[N][M];
        homes = new ArrayList<>();
        chickens = new ArrayList<>();

        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j < M; j++) {
                map[i][j] = Integer.parseInt(st.nextToken());
                if(map[i][j] == home) {
                    homes.add(new Coordinate(i, j));
                } else if(map[i][j] == chicken) {
                    chickens.add(new Coordinate(i, j));
                }
            }
        }

        dist = new int[homes.size()];
        calculateDist()


        bw.flush();
        bw.close();
    }
    static void calculateDist() {
        int sum = 0;
        for(Coordinate h : homes) {
            for(Coordinate c : chickens) {
                
            }
        }
    }


}

class Coordinate {
    int x;
    int y;
    public Coordinate(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public String toString() {
        return "(" + x + ", " + y + ") ";
    }
}
        
        