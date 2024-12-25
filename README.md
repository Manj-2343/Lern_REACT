1.what is components?
components are independent and reusable bits of code.They serve the same purpose as js functions,but work in isolation and return html.
->The name of the component should be uppercase.
->You have something in the return of the function.

2.What is the jsx?
Jsx allows us to write html in react .JSx makes it easier to write and add HTML in React.
Note:
Babel is responsible to convert the jsx to js
Rules:
i.you have to return on div at a time.
ii.Close the all the html tag
iii.class=>className
iv.in form we used for =>htmlFor

3.Expression on jsx
with the jsx you can write expressions inside curly brackets . the expression can be a react variable or property,or any other valid javascript expression. jsx will execute the expression and return the result.

4.List:In react you will render lists with some type of loop. the javascript map() array method is generally the preferred method.

5.What is teh purpose of the key?
When you render a list you have to a pass a key which is unique because the react understand where you update ,add or delete from the list.

6:props:
i.props /properties are arguments passed into React components.
ii.It allow us to provide the data from parent to child.
iii.props are passed to components via HTML attributes.
