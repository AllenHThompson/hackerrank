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
