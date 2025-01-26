

//if you want for this component to accept dynamic data
// Use "props" as the parameter
// now that you have define props as the parameter how can you use it?
// You can use it in the "App.jsx" file where the component is imported and used
function Hello2(props) {
  //every component must return jsx
  return <h1>Hello from a component! {displayMessage()}</h1>;
}

export default Hello2;
