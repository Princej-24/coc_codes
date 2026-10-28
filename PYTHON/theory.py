"""
import math
math.pi

import random
random.random()
random.choice([1,2,3]) 

"""
"""
username = "Prince" 
len(username)
username[0] // P

"""
# username[1:3]
# dir={'one':'1','two':'2'} // key value pairs
#sys.getrefcount('Prince'a)
#lecture 7 imp
#import copy 
#example h2=copy.deepcopy(h2)

#----------------------newday-------------------

#in python we treat boolean and sets as numbers
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
#math.trunc() // takes u near zero
# octal whose base is 8 starts with 0o similary hex starts with 0x same goes for binary 0b
#int('122',2) // this is a function used to convert int to any base like base 2 means binary

"""
 import random
>>> ranndom.randint(1,10)


L1=['prince','school','college']
random.choice(L1)
random.shuffle(L1)
L1 // calling

"""
#from decimal import Decimal
#Decimal('1.0)+Decimal('2.0') // Decimal('3.0')
#from fractions import Fraction
# we use & this sign to find intersection in sets and | to find union and >= to find superset

"""
setone={1,2,3}
>>>setone-{1,2,3} 
we will get set() we won't get empty parentheses because in python empty parentheses is dict 

"""
#if we write [0:8:2] means hopping of 1 number
#print(chai.lower())
#print(chai.strip()) // it removes the spaces
#print(chai.split(, ))

"""
chai="masala"
>>> quantity=2
>>> order="I ordered {} cups of {} tea"
>>> print(order.format(quantity,chai))
I ordered 2 cups of masala tea

"""

"""
chai_variety = ["Lemon", "Masala", "Ginger"]
print("-".join(chai_variety))
output // Lemon-Masala-Ginger
"""

"""
>>> chai = "He said, \"Masala chai is awesome\" "
>>> chai
'He said, "Masala chai is awesome" '

"""
"""
>>> chai = "Masala\nChai"
>>> chai
'Masala\nChai'
>>> print(chai)
Masala
Chai
>>> chai = r"Masala\nchai" // raw strings , Treat backslashes \ as normal characters instead of interpreting them as escape sequences 
we can also use , path = "c:\\user\\pwd" , because \\ represents one literal backslash
>>> print(chai)
Masala\nchai

"""
"""
 for c in "chai":
...     print(c , end="-") // must be aware of indentation 

"""
"""
 if "oolong" in tea: // if statement
    print("true")

"""
# tea.append("oolong") // to add element at the end
#new_tea=tea.copy() // to copy the existing elements and to allocate the different reference
#new_tea=tea // to copy the existing elements but it passes the old referece to new , here both will indicate the same refence
#range(10) // output: range(0,10)
#squarenumber=[x**2 for x in range(10)] 
def add(a,b):
    print(a,b)
    add(2,3)