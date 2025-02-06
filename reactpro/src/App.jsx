// Import JSX files to use
import Hello from './components/Hello';
import Fruits from './components/Fruits';
import Courses from './components/Courses';
// Rendering Arrays Or Lists In React
function App() {
    const seatNumbers = [1, 4, 7];
    return (
        <div className="App">
            <Hello name="Rob" message="Hi there" seatNumbers={seatNumbers} />
        </div>
    );
}

export default App;
