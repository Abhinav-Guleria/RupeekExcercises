const salesByMonth = [
    1234,
    456,
    120,
    489,
    1005,
    1400,
    1350,
    789,
    890,
    1500045,
    3456,
    234
];

salesByMonth.forEach( ( monthSales, index ) => console.log( index, monthSales ) );

const sales = salesByMonth.map( ( monthSales, index ) => ( { month: index + 1, sales: monthSales } ) );
console.log( sales );

console.clear();
const highSales = sales.filter( monthSales => monthSales.sales >= 1000 );
console.log( highSales );

console.clear();
const firstBigSalesMonth = sales.find( monthSales => monthSales.sales >= 1000 );
console.log( firstBigSalesMonth );