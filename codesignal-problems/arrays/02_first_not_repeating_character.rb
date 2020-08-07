# firstNotRepeatingCharacter
# 1

# easy

# codewriting

# 2000

# Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

# Example

#     For s = "abacabad", the output should be
#     firstNotRepeatingCharacter(s) = 'c'.

#     There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

#     For s = "abacabaabacaba", the output should be
#     firstNotRepeatingCharacter(s) = '_'.

#     There are no characters in this string that do not repeat.

# Input/Output

#     [execution time limit] 4 seconds (rb)

#     [input] string s

#     A string that contains only lowercase English letters.

#     Guaranteed constraints:
#     1 ≤ s.length ≤ 105.

#     [output] char
#         The first non-repeating character in s, or '_' if there are no characters that do not repeat.


def firstNotRepeatingCharacter(s)
    duplicate_chars_hash = {
        
    }
    
    chars_array = s.split("")
    chars_array.each do |char|
        if !duplicate_chars_hash.key?(char) 
            duplicate_chars_hash[char] = true
        else 
            duplicate_chars_hash[char] = false
        end 
    end
    
    chars_array.each do |char|
        if duplicate_chars_hash[char] == true
            return char
        end
    end
    
    '_'
end