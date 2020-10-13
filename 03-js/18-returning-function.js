// function is a "first-class citizen"
const getGreeter = () => {
    const goodMorning = () => console.log( 'Good morning' );
    const goodAfternoon = () => console.log( 'Good afternoon' );
    const goodEvening = () => console.log( 'Good evening' );

    return goodMorning;
}

const greeter = getGreeter();
console.log( typeof greeter );

greeter();