package assignment;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

	public class Shuffle {
	    public static void main(String[] args) {
	        // Create an array with the values (1, 2, 3, 4, 5, 6, 7)
	        Integer[] array = {1, 2, 3, 4, 5, 6, 7};

	        // Convert the array to a List
	        List<Integer> list = Arrays.asList(array);

	        // Shuffle the List using Collections.shuffle()
	        Collections.shuffle(list);

	        // Convert the shuffled List back to an array
	        Integer[] shuffledArray = list.toArray(new Integer[0]);

	        // Print the shuffled array
	        System.out.println("Shuffled Array: ");
	        for (int value : shuffledArray) {
	            System.out.print(value + " ");
	        }
	    }
	}



