import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;
import java.util.LinkedList;
import java.util.Queue;


public class Main {
    static int[] mx = {-1, 1, 0, 0};
    static int[] my = {0, 0, -1, 1};
    static Queue<Point> queue;
    static int R, C;
    static char[][] map;
    static int[][] dp;
    static boolean foundAnswer;

    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;
        st = new StringTokenizer(br.readLine());


        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
       
        map = new char[R][C];
        dp = new int[R][C];
        Point start = null;
        queue = new LinkedList<>();

        for (int i = 0; i < R; i++) {
            map[i] = br.readLine().toCharArray();
            for(int j = 0; j < C; j++) {
                if(map[i][j] == '*')
                    queue.add(new Point(j, i, '*'));
                else if(map[i][j] == 'S')
                    start = new Point(j, i, 'S');
			}
        }
        queue.add(start);
		move();
        bw.flush();
        bw.close();
        br.close();
    }
   static void move()
   {
       while(!queue.isEmpty()) {
           //1. 큐에서 꺼내옴 (S, ., *, D)
           Point p = queue.poll();
           //2. 목적지인가  (D인가요?)
           if(p.type == 'D') {
                System.out.println(dp[p.y][p.x]);
                foundAnswer = true;
                break;
           }
           //3. 연결된 곳을 순회 (좌 우 위 아래)
           for(int i = 0; i < 4; i++) {
                
                int tx = p.x + mx[i];
                int ty = p.y + my[i];
                //4. 갈 수 있는가? (공통) --> 맵을 벗어나지 않고
               if(0 <= tx && tx < C && 0 <= ty && ty < R) {
                   //4. 갈 수 있는가 (고슴도치)
                   if(p.type == '.' || p.type == 'S') {
                        if((map[ty][tx] == '.' || map[ty][tx] == 'D') && dp[ty][tx] == 0) {
                            //5. 체크인 --> dp에 현재 + 1 기록
                            dp[ty][tx] = dp[p.y][p.x] + 1;
                            //6. 큐에 넣음
                            queue.add(new Point(tx, ty, map[ty][tx]));
                        }
                    }
                    //4. 갈 수 있는가 (물)
                    else if(p.type == '*') {
                        if(map[ty][tx] == '.') {
                            //5. 체크인 --> 지도에 물 표시
                            map[ty][tx] = '*';
                            //6. 큐에 넣음
                            queue.add(new Point(tx, ty, '*'));
                        }
                    }
               }
           }
       }
          
       if(!foundAnswer)
            System.out.println("KAKTUS");
   }
}
class Point {
    int x;
    int y;
    char type;
    public Point(int x, int y, char type) {
        super();
        this.x = x;
        this.y = y;
        this.type = type;
    }
    public String toString() {
        return "x = " + x + " y = " + y + " type = " + type;
    }
}