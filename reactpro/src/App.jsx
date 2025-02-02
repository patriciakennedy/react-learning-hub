// Import JSX files to use
import Hello from "./components/Hello";

// Passing Arrays to Props
function App() {
  const seatNumbers = [1, 4,7];
  return (
    <div className="App">
      <Hello name="Rob" message="Hi there!" seatNumbers={seatNumbers} />
    </div>
  );
};

export default App;

// whenever you want to use a component, you use it like an HTML tag