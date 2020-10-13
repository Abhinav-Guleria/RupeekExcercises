/* 20 Create a movie object that represents details of your favorite movie. 
Suggested information to have in the object - name, cast (an array of strings with cast member's names), 
yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast member's name and adds 
to the cast array, addToCollection( amount ) that accepts box office collections for a week and adds it to 
the current boxOfficeCollection.
*/
const movie = {
    name : 'Bootcamp',
    cast : ['Abhinav','members'],
    yearOfRelease : 2021,
    BoxOfficeCollection : 100000,
    ddToCast: function(newMember){
        this.cast.push(newMember)
    },
    addToCollection: function(newAmount){
        this.boxOfficeCollection+=newAmount
    }
};

console.log(movie);
movie.addToCast('director');
movie.addToCollection(50000);

console.log(movie);