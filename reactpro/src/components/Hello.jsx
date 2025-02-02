// Accessing 'peoples' object' from App.jsx file
function Hello({person}) {
  //every component must return jsx
  return (
   <div>
      <h1>{person.message} {person.name} {person.seatNumbers[2]} </h1>
   </div>
  );
}

export default Hello;






//as it is this function/component has been created but not use
// HOW DO WE USE COMPONENTS?
// You need to us the component inside your main component "App.jsx"