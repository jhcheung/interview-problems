#VMWare code challenge
#!/bin/python3
 
import math
import os
import random
import re
import sys
 
 
#
# Complete the 'getShiftedString' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER leftShifts
#  3. INTEGER rightShifts
#
 
def getShiftedString(s, leftShifts, rightShifts):
    tempShift = (leftShifts - rightShifts) % len(s) # uses total shift left (either negative or positive) % the length of the string.
    
    newStr = s[tempShift :] + s[: tempShift] # the colon denotes from start or to end.
    return newStr
