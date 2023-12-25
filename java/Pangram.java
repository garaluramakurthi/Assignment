package assignment;
import java.util.*;

public class Pangram {
	 public static void main(String[] args) {
	        String str = "The quick brown fox jumps over the lazy dog";
	        if (checkPangram(str))
	            System.out.println("It is a Pangram");
	        else
	            System.out.println("It is Not a Pangram");
	    }
 
    // Returns true if the string is pangram else false
    static boolean checkPangram(String str) {
        // Initialize a set of characters
        Set<Character> set = new HashSet<>();
 
        for (char ch : str.toCharArray()) {
            // If the character is already
            // a lowercase character
            if (ch >= 'a' && ch <= 'z')
                set.add(ch);
 
            // In case of a uppercase character
            if (ch >= 'A' && ch <= 'Z') {
                // convert to lowercase
                ch = Character.toLowerCase(ch);
                set.add(ch);
            }
        }
 
        // check if the size is 26 or not
        return set.size() == 26;
    }
 
    // Driver Program to test above functions
   
}
