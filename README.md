# Implement A Multiplication Table

Please read the following requirement:

I want to create a multiplication table. The input should be 2 integers specifying the start and the end of the table:

AC1: The start number must be smaller than or equal to the end number. Or the function will return `null`.

AC2: The start number and the end number can be any number in a range of 1 to 1000 (inclusive).

AC3: The output should be a string represents the multiplication table. Suppose that the start number is *2* and the end number is *4*, the output should be something like the following. Please note that all columns should be aligned properly.

```
2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16
```

## Acceptance Criteria

* Please draw task diagrams.
* Please define all the methods according to your task diagram.
* Please write down a test case using *given...when...then* pattern for a leaf block. Then implement the block to pass the test.
* Please continue doing this work until all the requirement has been fulfilled.,


**************UNIT TEST********************
CASE 1: 
GIVEN: (Int StartNum = 2, Int EndNum = 4)
WHEN: Is StartNum smaller than the EndNum(StartNum , EndNum )
THEN: True StartNum smaller than the EndNum

CASE 2: 
GIVEN: (Int StartNum = 4, Int EndNum = 2)
WHEN: Is StartNum smaller than the EndNum(StartNum , EndNum )
THEN: False StartNum is not smaller than the EndNum

CASE 3: 
GIVEN: (Int StartNum = 4, Int EndNum = 2)
WHEN: Is StartNum smaller than the EndNum(StartNum , EndNum )
THEN: Null EndNum is smaller than StartNum 

CASE 4: 
GIVEN: (Int StartNum = 2, Int EndNum = 4)
WHEN: Is StartNum and EndNum is >1 and <=1000(StartNum , EndNum )
THEN: True StartNum and EndNum is in range. 

CASE 5: 
GIVEN: (Int StartNum = -2, Int EndNum = 4)
WHEN: Is StartNum and EndNum is >1 and <=1000(StartNum , EndNum )
THEN: False StartNum is not in range. 

CASE 6: 
GIVEN: (Int StartNum = null, Int EndNum = 2)
WHEN: Is StartNum and EndNum is >1 and <=1000(StartNum , EndNum )
THEN: False StartNum is not in range. 

CASE 7: 
GIVEN: (Int StartNum = 2, Int EndNum = 4)
WHEN: Multiply in range(StartNum , EndNum )
THEN: Print expectedtext;

