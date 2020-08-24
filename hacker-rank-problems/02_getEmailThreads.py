#VMWare code challenge

#!/bin/python3
 
import math
import os
import random
import re
import sys
 
 
 
#
# Complete the 'getEmailThreads' function below.
#
# The function is expected to return a 2D_INTEGER_ARRAY.
# The function accepts STRING_ARRAY emails as parameter.
#
 
def getEmailThreads(emails):
    # Write your code here
    threadArray = []
    emailDictionary = {
 
    }
    threadCount = 1
    print(emails)
    for email in emails:
        emailArray = email.split(', ', 3)
        nameArray = [emailArray[0], emailArray[1]]
        nameArray.sort()
        print(nameArray)
        
        if str(nameArray) in emailDictionary:
            emailDictionary[str(nameArray)].append(emailArray[2])
        else:
            emailDictionary[str(nameArray)] = [threadCount, emailArray[2]]
            threadCount = threadCount + 1
        threadArray.append(str(emailDictionary[str(nameArray)][0]) + str(len(emailDictionary[str(nameArray)]) - 1))
    return threadArray

# only passed 4 tests, not sure the issue