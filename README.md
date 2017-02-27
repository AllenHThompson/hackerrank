#HackerRank Algorithms
##Just some fun exercises provided by HankerRank completed in JavaScript.

### Two Characters - Easy
String 't' always consists of two distinct alternating characters. For example, if string 's' two distinct characters are x and y, then 't' could be 'xyxyx' or 'yxyxy' but not 'xxyy' or 'xyyx'.

You can convert some string 's' to string 't' by deleting characters from 's'. When you delete a character from 's', you must delete all occurrences of it in 's'. For example, if 's' = 'abaacdabd' and you delete the character a, then the string becomes 'bcdbd'.

Given 's', convert it to the longest possible string 't'. Then print the length of string 't' on a new line; if no string 't' can be formed from 's', print 0 instead.

Input Format
The first line contains a single integer denoting the length of .
The second line contains string .

Output Format
Print a single integer denoting the maximum length of 't' for the given 's'; if it is not possible to form string 't', print 0 instead.

Constraints
*1 <= 's' <= 1000
*'s' only contains lowercase English alphabetic letters (i.e., a to z).*


### Mini-Max Sum - Easy
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Input Format
A single line of five space-separated integers.

Constraints
*Each integer is in the inclusive range [1, 10^9].*

Output Format
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)

Sample Input
1 2 3 4 5

Sample Output
10 14

### Designer PDF Viewer
When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In a new kind of PDF viewer, the selection of each word is independent of the other words; this means that each rectangular selection area forms independently around each highlighted word. For example: PDF-highighting.png

In this type of PDF viewer, the width of the rectangular selection area is equal to the number of letters in the word times the width of a letter, and the height is the maximum height of any letter in the word.

Consider a word consisting of lowercase English alphabetic letters, where each letter is 1mm wide. Given the height of each letter in millimeters (mm), find the total area that will be highlighted by blue rectangle in when the given word is selected in our new PDF viewer.

Input Format
The first line contains 26 space-separated integers describing the respective heights of each consecutive lowercase English letter.
The second line contains a single word, consisting of lowercase English alphabetic letters.

Constraints
*1 <= h subscript ?, where ? is an English lowercase letter.
*Word contains no more than 10 letters.*


### Apple and Orange
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where  is the start point and s is the end point t. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point a and the orange tree is at point b.

Apple and orange(2).png

When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right.

Given the value of d for m apples and n oranges, can you determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range s, t)? Print the number of apples that fall on Sam's house as your first line of output, then print the number of oranges that fall on Sam's house as your second line of output.

Input Format
The first line contains two space-separated integers denoting the respective values of s and t.
The second line contains two space-separated integers denoting the respective values of a and b.
The third line contains two space-separated integers denoting the respective values of m and n.
The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

Constraints
*1 <= s, t, a, b, m, n <= 10^5
*-10^5 <= 5 <= 10^5
*a < s < t < b*

### Kangaroo
There are two kangaroos on an x-axis ready to jump in the positive direction (i.e, toward positive infinity). The first kangaroo starts at location x(1) and moves at a rate of v(1) meters per jump. The second kangaroo starts at location x(2) and moves at a rate of v(2) meters per jump. Given the starting locations and movement rates for each kangaroo, can you determine if they'll ever land at the same location at the same time?

Input Format
A single line of four space-separated integers denoting the respective values of x(1), v(1), x(2), and v(2).

Constraints
*0 <= x(1) < x(2) <= 10000
*1 <= v(1) <= 10000
*1 <= v(2) <= 10000*

Output Format
Print YES if they can land on the same location at the same time; otherwise, print NO.
Note: The two kangaroos must land at the same location after making the same number of jumps.

### Between Two Sets
Consider two sets of positive integers, A and B. We say that a positive integer,x , is between sets A and B if the following conditions are satisfied:

All elements in A are factors of x.
x is a factor of all elements in B.
Given A and B, find and print the number of integers (i.e., possible 's) that are between the two sets.

Input Format
The first line contains two space-separated integers describing the respective values of  n(the number of elements in set A) and  m (the number of elements in set )B.
The second line contains n distinct space-separated integers describing A.
The third line contains m distinct space-separated integers describing B.

Constraints
*1 <= n, m <= 10,
*1 <= a <= 100,
*1 <= b <= 100*
Sample Input
2 3
2 4
16 32 96
Sample Output
3
Explanation
The integers that are between A = {2, 4} and B = {16, 32, 96} are 4, 8, and 16.

### Divisible Sum Pairs
You are given an array of n integers,a(0)... a(n - 1) , and a positive integer, k. Find and print the number of (i, j) pairs where i < j and a(i) + a(j) is evenly divisible by k.

Input Format
The first line contains 2 space-separated integers, n and k, respectively.
The second line contains n space-separated integers describing the respective values of a(0)... a(n - 1).

Constraints
*2 <= n <= 100
*1 <= k <= 100
*1 <= a(i) <= 100*

Output Format
Print the number of (i, j) pairs where i < j and a(i) + a(j) is evenly divisible by k.

Sample Input
6 3
1 3 2 6 1 2
Sample Output
5

### Richie Richie
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as it does forward. For example, madam is a palindrome. Make the n-digit number palindromic by changing no more than k digits. You can only change 1 digit at a time, and cannot add digits to (or remove digits from) the number.

Given k and an n-digit number, determine the largest possible number that can make by changing <= k digits.

Note: Treat the integers as numeric strings. Leading zeros are permitted and can't be ignored (So 0011 is not a palindrome, 0110 is a valid palindrome). A digit can be modified more than once.

Constraints
*0 < n <= 10^5
*0 < k <= 10^5
*Each character i in the number is an integer where 0 <= i <= 9.*
Output Format
Print a single line with the largest number that can be made by changing no more than k digits; if this is not possible, print -1.

Sample Input 0
n = 4
k = 1
number = "3943"
Sample Output
"3993"

Sample Input 1
n = 6
k = 3
number = "092282"
Sample Output
"992299"

Sample Input 2
n = 4
k = 1
number = "0011"
"0011"
Sample Output
-1

Explanation
Sample 0
There are two ways to make 3943 a palindrome by changing exactly k=1 digits:
1. 3443
2. 3993

3993 > 3443, so we print.

### Super Reduced String
Steve has a string, s, consisting of n lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after 1 operation.
Steve wants to reduce s as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Steve out by finding and printing s's non-reducible form!
Note: If the final string is empty, print Empty String s.

Input Format
A single string, s.

Constraints
*1 <= n <= 100*
Output Format
If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Sample Input 0
"aaabccddd"
Sample Output 0
"abd"
Sample Case 0
Steve can perform the following sequence of operations to get the final string:

"aaabccddd" → "abccddd"
"abccddd" → "abddd"
"abddd" → "abd"
Thus, we print "abd".

Sample Input 1
"baab"
Sample Output 1
Empty String

Explanation 1

Steve can perform the following sequence of operations to get the final string:

"baab" → "bb"
"bb" → Empty String
Thus, we print Empty String.

Sample Input 2
"aa"
Sample Output 2
"Empty String"
Explanation 2
Steve can perform the following sequence of operations to get the final string:
"aa" → "Empty String"
Thus, we print Empty String.

### Pangrams
Pangrams are sentences constructed by using every letter of the alphabet at least once. Given a sentence , determine if it is a pangram or not.

Input Format
Input consists of a string s.

Constraints
Length of s can be at most 10^3 (1 <= s <= 10^3) and it may contain spaces, lower case and upper case letters. Lower-case and upper-case instances of a letter are considered the same.

Output Format
Output a line containing pangram if s is a pangram, otherwise output not pangram.

Sample Input
Input 1
"We promptly judged antique ivory buckles for the next prize"    

Input 2
"We promptly judged antique ivory buckles for the prize    
Sample Output"

Output 1
"pangram"
Output 2
"not pangram"

### Caesar Cipher
Julius Caesar protected his confidential information by encrypting it in a cipher. Caesar's cipher rotated every letter in a string by a fixed number, K, making it unreadable by his enemies. Given a string, S, and a number, K, encrypt S and print the resulting string.
Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Input Format
The first line contains an integer, N, which is the length of the unencrypted string.
The second line contains the unencrypted string, S.
The third line contains the integer encryption key, K, which is the number of letters to rotate.

Constraints
*1 <= N <= 100*
*0 <= K <= 100*
S is a valid ASCII string and doesn't contain any spaces.

Output Format
For each test case, print the encoded string.

Sample Input
n = 11
s = "middle-Outz"
k = 2
Sample Output
"okffng-Qwvb"
Explanation
Each unencrypted letter is replaced with the letter occurring K spaces after it when listed alphabetically. Think of the alphabet as being both case-sensitive and circular; if K rotates past the end of the alphabet, it loops back to the beginning (i.e.: the letter after z is a, and the letter after Z is A).

### Mars Exploration
Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, S, determine how many letters of Sami's SOS have been changed by radiation.

Input Format
There is one line of input: a single string, S.
Note: As the original message is just SOS repeated  times, S's length will be a multiple of 3.

Constraints
*1 <= S <= 99*
*S % 3 = 0*
*S will contain only uppercase English letters.*

Output Format
Print the number of letters in Sami's message that were altered by cosmic radiation.

Sample Input 0
"SOSSPSSQSSOR"
Sample Output 0
3
Sample Input 1
"SOSSOT"
Sample Output 1
1

### Funny String
Suppose you have a String, S, of length N that is indexed from 0 to N - 1. You also have some String, R, that is the reverse of String S. S is funny if the condition Math.abs(s[i] - s[i - 1]) = Math.abs(r[i] - r[i - 1]) is true for every character i from N to 1.
Note: For some String S, S[i] denotes the ASCII value of the  ith 0-indexed character in S. The absolute value of an integer, s, is written as |x|.

Input Format
The first line contains an integer, T (the number of test cases).
Each line i of the T subsequent lines contain a string, S.

Constraints
*1 <= T <= 10*
*0 <= i <= T - 1*
*2 <= length of S <=10000*
Output Format
For each String S(j) (where 0 <= j <= T - 1), print whether it is "Funny" or "Not Funny" on a new line.

Sample Input
2
"acxz"
"bcxz"
Sample Output
"Funny"
"Not Funny"
