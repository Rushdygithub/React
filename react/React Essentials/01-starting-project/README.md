# React Essentials - Starting Project

## Notes
**Components**
If you only use a piece of UI once, you don't need to extract it into a separate component.

**Props**
React has a default prop called `children`. It gives you the value/content passed between a component's opening and closing tags.

**Event Handling**
In vanilla JS you have to handle events using `addEventListener`, but in React you do not need to do that — you can just pass a handler as a prop (e.g. `onClick`).

NOTE:: 
    onClick or other event - value should be a fucntion 
    do not called the function here (only if the button pressed) 

## CSS Rule
You need to use a separate CSS file for each component, otherwise the CSS will apply to other HTML elements too.
