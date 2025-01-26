
function Hello(props) {
  //every component must return jsx
  console.log(props);
  return (
   <div>
      <h1>{props.message} {props.name}</h1>
   </div>
  );
}

export default Hello;






//as it is this function/component has been created but not use
// HOW DO WE USE COMPONENTS?
// You need to us the component inside your main component "App.jsx"