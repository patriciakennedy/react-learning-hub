
function Hello({name, message}) {
  //every component must return jsx
  return (
   <div>
      <h1>{message} {name} </h1>
   </div>
  );
}

export default Hello;






//as it is this function/component has been created but not use
// HOW DO WE USE COMPONENTS?
// You need to us the component inside your main component "App.jsx"