package greedy;

public class Q06 {

	public static void main(String[] args) {
		int[] food_times = new int[] {9,6,4};
		long k = 18;
		System.out.println(solution(food_times, k));
	}
	
	public static int solution(int[] food_times, long k) {

			int sum = 0;
			for (int i = 0; i < food_times.length; i++) {
				sum += food_times[i];
			}
			
			if (k > sum) {
				return -1;
			}
			
	        long timer = 0;
	        int i = 0;

	        while (timer < k) {
	        	
	        	if (sum == 0) {
	        		return -1;
	        	}
	        	
	        	if (food_times[i] != 0) {
	        		food_times[i]--;
	        	} else {
	        		if (i < food_times.length - 1) {
		        		i++;
		            } else {
		            	i = 0;
		            }
	        		continue;
	        	}
	            
	            if (i < food_times.length - 1) {
	        		i++;
	            } else {
	            	i = 0;
	            }
	            
	            timer++;
	        }
	        
	        return i;

		}
}
