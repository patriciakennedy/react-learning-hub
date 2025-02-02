// Import JSX files to use
import Hello from "./components/Hello";
// Passing entire onject to Props
function App() {
  
  const person = {
    name: "Rob",
    message: "Hi there!",
    seatNumbers: [1, 4, 7],
  }
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
};

export default App;

// whenever you want to use a component, you use it like an HTML tag