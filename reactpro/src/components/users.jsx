export default function Users() {
    //const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pineapple'];
    const Users = [
        { name: 'Apple', price: 10, emoji: '🍎' },
        { name: 'Mango', price: 7, emoji: '🥭' },
        { name: 'Banana', price: 2, emoji: '🍌' },
        { name: 'Orange', price: 5, emoji: '🍊' },
        { name: 'Pineapple', price: 8, emoji: '🍍' },
    ];
    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit}>
                        {' '}
                        {fruit.emoji} {fruit.name} ${fruit.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
