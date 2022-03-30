package Baekjoon;
import java.util.*;

class Student implements Comparable<Student>{
	int name = 0;
	int count = 0;
	int time = 0;
	
	public Student(int name, int time) {
		this.name = name;
		this.time = time;
		count = 1;
	}

	@Override
	public int compareTo(Student o) {
		return this.name - o.name;
	}
	
	public void plus() {
		this.count++;
		this.time++;
	}
}

public class Q1713 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int N = sc.nextInt();
		ArrayList<Student> s = new ArrayList<>();
		int T = sc.nextInt();
		int index = 0;
		int time = 1;
		
		for (int i = 0; i < T; i++) {
			int name = sc.nextInt();
			
			//���� �����ϸ� �ش� �� ã�Ƽ� �÷��� ���ش�
			boolean exist = false;
			for (int j = 0; j < s.size(); j++) {
				if (s.get(j).name == name) {
					s.get(j).plus();
					exist = true;
					break;
				}
			}
			
			//���� �������� ���� ��
			if (!exist) {
				if (index < N) { // ���� ĭ�� ����ִ�
					s.add(new Student(name, time++));
					index++;	
					
				} else { // ĭ�� �� �� �����̴�
					
					//���� ������ ã�Ƽ� �����ϰ� add ���ش�
					int minCount = s.get(0).count;
					int minTime = s.get(0).time;
					int minIndex = 0;
					for (int j = 1; j < s.size(); j++) {
						if (s.get(j).count < minCount) {
							minCount = s.get(j).count;
							minTime = s.get(j).time;
							minIndex = j;
						} else if (s.get(j).count == minCount) {
							if (s.get(j).time < minTime) {
								minCount = s.get(j).count;
								minTime = s.get(j).time;
								minIndex = j;
							}
						}
					}
					s.set(minIndex, new Student(name, time++));
				}
			}
			
//			for (int j = 0; j < s.size(); j++) {
//				System.out.print(s.get(j).name + "," + s.get(j).count+"," +s.get(j).time+" ");
//			}
//			System.out.println();
		}
		
		Collections.sort(s);
		for (int i = 0; i < N && i < s.size(); i++) {
			System.out.print(s.get(i).name + " ");
		}
		
		sc.close();
	}

}
