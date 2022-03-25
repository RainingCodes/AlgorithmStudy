import java.io.*;
import java.util.*;
public class Main {
    static int N;
    static ArrayList<String> program;
    static StringBuilder sb;
    static Stack<Integer> stack;
    static BufferedWriter bw;
    public static void main(String[] args) throws Exception{
        //System.setIn(new FileInputStream("D:/Work/sds/weekend1/3425/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb;
        program = new ArrayList<>();
        while(true) {
            st = new StringTokenizer(br.readLine());
            sb = new StringBuilder(st.nextToken());
            if(sb.toString().equals("NUM")) {
                sb.append(st.nextToken());
                program.add(sb.toString());
            } else if(sb.toString().equals("END")) {
                N = Integer.parseInt(br.readLine());
                for(int i = 0; i < N; i++) {
                    stack = new Stack<>();
                    stack.push(Integer.parseInt(br.readLine()));
                    boolean result = doProgram();
                    if(result) {
                        bw.write(String.valueOf(stack.pop()) + "\n");
                    }
                }
                program = new ArrayList<>();
                br.readLine();
                bw.write("\n");
                
            } else if(sb.toString().equals("QUIT")) {
                break;
            }
            else {
                program.add(sb.toString());
            }
        }
        bw.flush();
        bw.close();
    }
    static boolean doProgram() throws Exception{
        int first;
        int second;
        for(String command : program) {
            switch(command.substring(0, 3)) {
                case "NUM" :
                    stack.push(Integer.parseInt(command.substring(3, command.length())));
                    break;
                case "POP" :
                    if(stack.isEmpty()) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    stack.pop();
                    break;
                case "INV" :
                    if(stack.isEmpty()) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    stack.push(stack.pop() * (-1));
                    break;
                case "DUP" :
                    if(stack.isEmpty()) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    stack.push(stack.peek());
                    break;
                case "SWP" :
                    if(stack.size() < 2) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    first = stack.pop();
                    second = stack.pop();
                    stack.push(first);
                    stack.push(second);
                    break;
                case "ADD" :
                    if(stack.size() < 2) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    first = stack.pop();
                    second = stack.pop();
                    int sum = first + second;
                    if(sum > 1e9 || sum < -1e9) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    stack.push(sum);
                    break;
                case "SUB" :
                    if(stack.size() < 2) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    first = stack.pop();
                    second = stack.pop();
                    int sub = second - first;
                    if(sub > 1e9 || sub < -1e9) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    stack.push(sub);
                    break;
                case "MUL" :
                    if(stack.size() < 2) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    first = stack.pop();
                    second = stack.pop();
                    Long mul = new Long(first) * second;
                    //System.out.println(mul);
                    if(mul > 1e9 || mul < -1e9) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    stack.push(mul.intValue());
                    break;
                case "DIV" :
                    if(stack.size() < 2) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    first = stack.pop();
                    second = stack.pop();
                    if(first == 0) {
                        bw.write("ERROR\n");
                        return false;
                    } else if(first < 0) {
                        if(second < 0) {
                            stack.push((second * (-1)) / (first * (-1)));
                        } else {
                            stack.push((-1) * (second / (first * (-1))));
                        }
                    } else {
                        if(second < 0) {
                            stack.push((-1) * ((second * (-1)) / first));
                        } else {
                            stack.push(second / first);
                        }
                    }
                    break;
                case "MOD" :
                    if(stack.size() < 2) {
                        bw.write("ERROR\n");
                        return false;
                    }
                    first = stack.pop();
                    second = stack.pop();
                    if(first == 0) {
                        bw.write("ERROR\n");
                        return false;
                    } else if(first < 0) {
                        if(second < 0) {
                            stack.push((-1) * ((second * (-1)) % (first * (-1))));
                        } else {
                            stack.push(second % (first * (-1)));
                        }
                    } else {
                        if(second < 0) {
                            stack.push((-1) * ((second * (-1)) % first));
                        } else {
                            stack.push(second % first);
                        }
                    }
                    break;
            }
            //System.out.println(stack);
        }
        if(stack.size() != 1) {
            bw.write("ERROR\n");
            return false;
        } else {
            return true;
        }
        
    }
}