export default function Courses() {
    const courses = [
        { name: 'HTML', price: 5000, emoji: '👩‍💻' },
        { name: 'CSS', price: 7000, emoji: '👩‍💻' },
        { name: 'JavaScript', price: 2000, emoji: '👩‍💻' },
        { name: 'React', price: 5000, emoji: '👩‍💻' },
    ];
    return (
        <div>
            <ul>
                {fruits.map((courses) => (
                    <li key={courses}>
                        {' '}
                        {courses.emoji} {courses.name} ${courses.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}
