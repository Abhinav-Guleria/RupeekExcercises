const sum = ( x, y ) => x + y;

const boundSumX10 = sum.bind( null, 10 );
console.log( boundSumX10( 20 ) ); // x is already fixed at 10, so we need to pass only vaue for y

const boundSumX10Y20 = sum.bind( null, 10, 20 );
console.log( boundSumX10Y20() ); // x is already fixed at 10, y is already fixed at 20