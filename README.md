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
*'s' only contains lowercase English alphabetic letters (i.e., a to z).
**

### Mini-Max Sum - Easy
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Input Format
A single line of five space-separated integers.

Constraints
Each integer is in the inclusive range [1, 10^9].

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
1 <= h subscript ?, where ? is an English lowercase letter.
Word contains no more than 10 letters.
