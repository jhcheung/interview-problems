#for vmware

#!/bin/python3
 
import math
import os
import random
import re
import sys
 
 
#!/bin/python3
 
import math
import os
import random
import re
import sys
 
 
 
#
# Complete the 'betterCompression' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#
 
def betterCompression(s):
    # Write your code here
    charDictionary = {
 
    }
    charIndexArray = []
    for i in range(0, len(s)):
        if s[i].isalpha():
            charIndexArray.append(i)
    charIndex = 0;
    for i in range(0, len(s)):
        if charIndex <= len(charIndexArray):
            charIndex = charIndex + 1
        if s[i].isalpha():
            if s[i] in charDictionary:
                charDictionary[s[i]] = charDictionary[s[i]] + int(s[i+1:charIndexArray[charIndex]]) # have to figure out how to not get out of range when iterating charIndex
            else:
                charDictionary[s[i]] = int(s[i+1:charIndexArray[charIndex]])
 
    betterString = ""
    for char in charDictionary:
        betterString = betterString + char + str(charDictionary[char])
    print(charDictionary)            
    return betterString


# did not pass anything, only had a bit of time left and couldn't finish checking charIndex stuff