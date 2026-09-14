# React Essentials - Starting Project

## Notes
**Components**
If you only use a piece of UI once, you don't need to extract it into a separate component.

**Props**
React has a default prop called `children`. It gives you the value/content passed between a component's opening and closing tags.

*passing function as a prop*
When you pass a function as a props - you should name as onSelect or onSomething (when you access it) - why because it is easy to undestand 
(tells developer to this is a function)

# ...props (spread props)
When you want to pass other all props on element 
you can use this. 
use case: (className and id), title

**Event Handling**
In vanilla JS you have to handle events using `addEventListener`, but in React you do not need to do that — you can just pass a handler as a prop (e.g. `onClick`).

NOTE:: 
    onClick or other event - value should be a fucntion 
    do not called the function here (only if the button pressed) - use the function name (passing the reference) or onClick={() => onSelect()} - arrow anonimus function
    defining as a function not function calling 

## Why not UI not updating 
if you use a normal vanila js variable and try to update the content 
you can not update becuase react render the page only in the initial render 
that's why not update the content 

## CSS Rule
You need to use a separate CSS file for each component, otherwise the CSS will apply to other HTML elements too.

# Identifier

## Conditional rendering
when you render something based on a condition
you do not need to return null if it is false you can use just && operator without null 

# Fragment 
for newer react project - <></>

# Why you should not keep componants in the APP componant