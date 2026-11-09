#tea.get("Prince")// we can use get method to access any element in dict
"""
>>> chai_types
{'Masala': 'Spicy', 'Ginger': 'Zesty', 'Green': 'Mild'}
>>> chai_types["Green"] = "Fresh"
>>> chai_types
{'Masala': 'Spicy', 'Ginger': 'Zesty', 'Green': 'Fresh'}

"""

"""
>>> chai_types
{'Masala': 'Spicy', 'Ginger': 'Zesty', 'Green': 'Fresh'}
>>> for chai in chai_types:
...     print(chai)
...
Masala
Ginger
Green
>>> for chai in chai_types:
...     print(chai, chai_types[chai])
...
Masala Spicy
Ginger Zesty
Green Fresh

"""

"""
>>> for key, value in chai_types.items():
...     print(key, value)
...
Masala Spicy
Ginger Zesty
Green Fresh
>>> if "Masala" in chai_types:
...     print("I have masala chai")
...
I have masala chai

"""
"""
>>> chai_types
{'Masala': 'Spicy', 'Gender': 'Zesty', 'Green': 'Fresh'}
>>> chai_types["Earl Grey"] = "Citrus"
>>> chai_types
{'Masala': 'Spicy', 'Ginger': 'Zesty', 'Green': 'Fresh', 'Earl Grey': 'Citrus'}

"""
"""
>>> chai_types.popitem() // it will automatically delete the last item in the dict
('Earl Grey', 'Citrus')
>>> chai_types
{'Masala': 'Spicy', 'Green': 'Fresh'}
>>>

"""

"""
>>> chai_types
{'Masala': 'Spicy', 'Green': 'Fresh'}
>>> del chai_types["Green"]
>>> chai_types
{'Masala': 'Spicy'}

"""

"""
>>> tea_shop = {
... "chai": {"Masala" : "Spicy", "Ginger": "Zesty"},
... "Tea" : {"Green": "Mild", "Black": "Strong"}
... }
>>> tea_shop
{'chai': {'Masala': 'Spicy', 'Ginger': 'Zesty'}, 'Tea': {'Green': 'Mild'
, 'Black': 'Strong'}}
>>> print(tea_shop)
{'chai': {'Masala': 'Spicy', 'Ginger': 'Zesty'}, 'Tea': {'Green': 'Mild'
, 'Black': 'Strong'}}
>>> tea_shop["chai"]
{'Masala': 'Spicy', 'Ginger': 'Zesty'}
>>> tea_shop["chai"]["Ginger"]
'Zesty'

"""

#squarenumber={x:x**2 for x in range(10)}
#squarenumber.clear()

"""
>>> keys = ["Masala", "Ginger", "Lemon"]
>>> default_value = "Delicious"
>>> new_dict = dict.fromkeys(keys, default_value)
>>> new_dict
{'Masala': 'Delicious', 'Ginger': 'Delicious', 'Lemon': 'Delicious'}

"""