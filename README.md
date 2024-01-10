# imdb
you can post & amd; get with flters

#for now there is no front-end but all backend
i have used express and mongoose in code and mongo as database

`How to search and post`:

* to search run localhost:3000/ => welcome page

localhost:3000/get?name=dhoom  => will give output of all movies that has dhoom in their name, eg: dhoom, dhoom2, dhoom3 etc.

`To Post`:

localhost:3000/post 
and in body provide schema =>
{
    name : "name of movie",
    year: "year of release",
    plot:"plot of movie",
    rating: rating in numbers (eg: 6.6, 9.5 etc.)
}

remember name and year is compulsion.
