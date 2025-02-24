let movies = ["Bahubali", "KGF", "RRR", "inception", "gajini"];

for(let i =0; i<=movies.length-1; i++) {

    if(i==2) {
        movies[i] = "Gangubai";
        console.log(movies[i]);
        break;
    }

    console.log(movies[i]);
}