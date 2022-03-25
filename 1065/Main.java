import java.util.Scanner;
public class Main {
    public static void main(String[] args) throws Exception{
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int count = 0;
        for(int i = 1; i <= N; i++)
            count += checkDigit(i);

        System.out.println(count);

        sc.close();
        
      }
    public static int checkDigit(int n) {
        if(n < 100)
            return 1;
        else {
            int n1 = n % 10;
            int n2 = n / 10;
            int r = n1 - n2 % 10;
            while (n2 >= 10) {
                n1 = n2 % 10;
                n2 /= 10;
                if (r != (n1 - n2 % 10))
                    return 0;
            }
		return 1;
        }
    }
}
