#sys.getrefcount('Prince'), getrefcount ye batata hai ki ek object ko kitne variables ya references point kr rhe h 
# example 
"""
import sys

x = "Prince"

print(sys.getrefcount(x))

"""
# iska output 2 ayega qki 
# x → string object ko refer kar raha hai
# sys.getrefcount(x) → function call ke time ek temporary reference bhi create hota hai

#sys.getrefcount('Hitesh') // ref count iska kuch bada number ayega 12345678900987654321 q ki ( Python treats these as immortal objects, whose reference count is set to a special value rather than showing the actual number of references)


"""
import copy 
h2=copy.copy(h1)
h2=copy.deepcopy(h1) // it also copies that list which is already present in the list 

"""

# is operator
# example
"""
m=[1,2]
n=m
m is n // true
m==n // true 

"""