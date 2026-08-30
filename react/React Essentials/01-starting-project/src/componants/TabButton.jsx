
function TabButton(props) {

   function handleClick() {
     console.log('clicked');
   }  
 
   return (
        <li>
           <button onClick={()=> handleClick()}>{props.children}</button>
        </li>
   );
}

export default TabButton;