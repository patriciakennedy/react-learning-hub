// Import JSX files to use
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Rob" message="Hi there!" />
      <Hello name="Tom" message="Hello...!" />
    </div>
  );
};

export default App;

// whenever you want to use a component, you use it like an HTML tag