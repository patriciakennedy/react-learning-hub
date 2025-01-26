const name = "Blessed";

function displayMessage() {
   return "Wow!";
};



function Hello() {
  //every component must return jsx
  return <h1>Hello from a component! {displayMessage()}</h1>;
};

export default Hello;






//as it is this function/component has been created but not use
// HOW DO WE USE COMPONENTS?
// You need to us the component inside your main component "App.jsx"