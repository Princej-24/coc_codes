#if we write [0:8:2] means hopping of 1 number means ek number chor ka number print karega
#print(chai.lower())
#print(chai.strip()) // it removes the spaces
#print(chai.split(", "))
#print(chai.find("//"))

"""
chai="masala"
>>> quantity=2
>>> order="I ordered {} cups of {} tea"
>>> print(order.format(quantity,chai))
I ordered 2 cups of masala tea

"""

"""
chai_variety = ["Lemon", "Masala", "Ginger"]
print("".join(chai_variety))
LemonMasalaGinger
print("-".join(chai_variety))
output // Lemon-Masala-Ginger
"""

"""
>>> chai = "He said, \"Masala chai is awesome\" " // to prevent the misunderstanding of double quotes 
>>> chai
'He said, "Masala chai is awesome" '

"""
"""
# This is the problem 
>>> chai = "Masala\nChai"
>>> chai
'Masala\nChai'
>>> print(chai)
Masala
Chai
#This is the solution 
>>> chai = r"Masala\nchai" // raw strings , Treat backslashes \ as normal characters instead of interpreting them as escape sequences


# Lets talk about paths or slash problems 
chai = " c:\user\pwd "
print=(chai) // this will give error , so to solve this we will use double forward slashes

chai = " c:\\user\\pwd " 
>>> print (chai) // ek bar aur command dena hoga 
 c:\user\pwd

"""