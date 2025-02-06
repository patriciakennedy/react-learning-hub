function ImmutabilityOfProps(person) {
    //every component must return jsx
    return (
        <div>
            <h1>
                {props.message} {props.name} {props.seatNumbers[2]}{' '}
            </h1>
        </div>
    );
}

export default ImmutabilityOfProps;
