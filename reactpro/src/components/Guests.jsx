export default function Guests() {
    //const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pineapple'];
    const Guests = [
        { name: 'Jack' },
        { name: 'Sam' },
        { name: 'Jane' },
        { name: 'Mark' },
        { name: 'Mae' },
    ];
    return (
        <div>
            <ul>
                {guests.map((guests) => (
                    <li key={guests}> {guests.name}</li>
                ))}
            </ul>
        </div>
    );
}
