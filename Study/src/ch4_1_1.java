import java.util.Scanner;

public class ch4_1_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		
		int row = 1; // ї­
		int col = 1; // За
		
		sc.nextLine();
		String arr = sc.nextLine();
		
		for (int i = 0; i < arr.length(); i++) {
			switch (arr.charAt(i)) {
				case 'R' : 
					if (row <= n)
						row++;
					break;
				case 'L' : 
					if (row > 1)
						row--;
					break;
				case 'U' : 
					if (col > 1)
						col--;
					break;
				case 'D' : 
					if (col <= n)
						col++;
					break;
			}	

		}
		System.out.println(col + " " + row);
		
		sc.close();
	}

}
