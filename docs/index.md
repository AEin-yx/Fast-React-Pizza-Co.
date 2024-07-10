# FAST REACT PIZZA CO
## Table of Contents

### Introduction
A Standard UI for a Pizza fast food shop.

### Structure of the Project
An App component which is a parent component renders three child components.  
1.Header  
2.Menu  
3.Footer  

___
Header Component  
Returns header Fast React Pizza Co. name and has a className header.  
___
Menu Component  
It has a main header of className menu.  
Traverse all pizzas with a map and inside a unordered list of className pizzas under a condition whether the pizzas data is present ot not.  
If pizzas are true we send props to the Pizza function or else a message to come back later.  
___
Pizza function child component gets a prop from menu component which we destructure it and it returns a SOLD OUT and a gray scale image or else we return the price and the color image of the pizza.  
___
Footer Component  
There is a clock which display the time in both 12hrs format and 24hrs format updated each second by using useEffect
and it shows we are closed when the current time is greater than close time or lesser than open time.  

### Testing the app
Download the zip or clone it.  
Then go to the correct directory "FAST REACT PIZZA CO/src/index.js"  
type command npm start 