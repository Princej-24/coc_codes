"""
>>> tea = ["Masala","Green","Black","Lemon"]
>>> tea[1:2] = ["White"] // we have to pass in square brackets means pass as a array
>>> tea
['Masala', 'White', 'Black', 'Lemon']

# if we will not pass as a array then 
>>> tea[1:2] = "White"
>>> tea
['Masala', 'W', 'h', 'i', 't', 'e', 'Black', 'Lemon'] // this will occur 

"""


"""
>>> chai = ["Masala","Green","Black","Lemon"]
 for c in chai:
...     print(c , end="-")  // Masala-Green-Black-Lemon-

"""


"""
 if "oolong" in chai: // if statement
    print("true")

"""

# chai.append("oolong") // it will add element at the end
# chai.insert(1,"Herbal") // to insert at index 1
#new_chai=chai.copy() // to copy the existing elements and to allocate the different reference
#new_tea=tea // to copy the existing elements but it passes the old referece to new , here both will indicate the same refence
#range(10) // output: range(0,10)
#squarenumber=[x**2 for x in range(10)] // it is called list comprehention