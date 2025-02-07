export default function Users() {
    //const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Pineapple'];
    const Users = [
        { name: 'Jack' },
        { name: 'Sam' },
        { name: 'Jane' },
        { name: 'Mark' },
        { name: 'Mae' },
    ];
    return (
        <div>
            <ul>
                {users.map((users) => (
                    <li key={users}> {fruit.name}</li>
                ))}
            </ul>
        </div>
    );
}
