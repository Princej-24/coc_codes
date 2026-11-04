"""
 int(2.23)
2
"""

"""
 repr('prince') // representation // Show me how Python represents this string
"'prince'"
>>> str('prince') // str() converts an object into its readable string form
'prince'
>>> print('prince')
prince

"""
"""
1==2<3 // false
we can write this in this format also 1==2 and 2<3 , so first statement is false so total result is false

"""

#math.trunc() // takes u near to zero
#example , x=5.9 so the output will be 5 

# octal whose base is 8 starts with 0o similary hex starts with 0x same goes for binary 0b
#example , 0o20 gives 16

# oct(64) // gives 0o100
# hex(64) // gives 0x40
# same convertion can be done with this below function 
#int('122',2) // this is a function used to convert int to any base like base 2 means binary

# bitwise operator 
"""
x=1
x << 2 // gives 4 , means shift left by 2 bits 

"""

"""
 import random
>>> ranndom.randint(1,10) // means give me the random integer between 1 to 10 and it excludes the last number 10 


L1=['prince','school','college']
random.choice(L1)
random.shuffle(L1)
L1 // calling

"""
# 0.1+0.1+0.1 // gives 0.300000000000000000004 , to solve this problem we have import decimal
#from decimal import Decimal
#Decimal('1.0')+Decimal('2.0') // Decimal('3.0')
#from fractions import Fraction


# we use & this sign to find intersection in sets and | to find union and >= to find superset
"""
setone={1,2,3}
setone & {1,2} // gives {1,2}

setone-{1,2,3} 
we will get set() we won't get empty parentheses because in python empty parentheses's type is dict 

"""
# True == 1 // true
# True is 1 // false