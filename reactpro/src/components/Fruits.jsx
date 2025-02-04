export default function Fruits() {
    const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pineapple'];

    return (
        <div>
            {fruits.map((fruit) => (
                <li>{fruit}</li>
            ))}
        </div>
    );
}
