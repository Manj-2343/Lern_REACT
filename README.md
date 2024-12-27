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

for the boolean value:
//app.js
export const app =()=>{
<Password isValid={true} />
}
//password.js
export const password = ({ isValid }) => {
const validPassword = () => <h1>Valid Password</h1>;
const invalidPassword = () => <h1>Invalid Password</h1>;
return isValid ? validPassword : invalidPassword;
};

7.styleObj:inline style

<h1 style={{ color: "red", backgroundColor: "black", padding: "2rem" }}>

8.react-icon
npm install react-icons --save

9.state&hook
state is a way to store and message data that can change over time and effects how the component renders.
we define state using the usstate hook ,which allows you to set an initial value and provides a way to update that state.

10.Hooks :Hooks are new addition in react 16.8 .they let you use state and other react features without writing a class.
11.useState():This hook allows us to track state in a functional component.state generally refers to data or properties that need to be tracking in an application.

12.React portal:
Portal is sa feature that allows you to render a child component into a dom node that exists outside the hierarchy of the parent component .This can be useFul for scenarios like modals ,tootips or dropdowns,where you want to break out of the usual parent-child structure and render ina different part of the Dom.

13.useEffect():
this hook allows you to perform side effect in your components .some examples of side effects are data fetching,directly update ing the dom etc.
->we can not wrap a hook inside teh conditional rendering.
14.PropsDrilling:
pasing the dat from on ecomponent to anathore
15.Context Api:
context Api is a feature that allows you to manage and share state accross your component tree with out having to pass props down manually at every level
16.UseReducer():
UseReducer is hook that is similar to useState,but it is designed for more complex state objects or state transitions that involves multiple sub-values.it allows you to manage state in a functional,immutable way.
17.useRef:
useREf hook provides a way to accessa nd interact with Dom elements or to persisst valuees accross renders without causing a render.
