# Chat App

My company gave us an extra two days off on a holiday weekend, so I have a 5 day weekend, effectively. I've decided to use the time to build a rudimentary chat app from top to tail, or as close as I can get.

Plan is to have the ability to sign up with username/email and password, as well as send messages to other users. Messages will be saved to a DB, and app should be hosted on heroku or similar

### Idea Source

My head, as well as the bajillion "Projects you should totally have in your portfolio" articles.

### Learning Goals

Get a working project going.

### Time spent

Timeboxed to 5 days. We shall see how long it actually takes.

---

Welp. Didn't quite finish, but golly gee did I learn a LOT. I was talking about what I did over the weekend with some co-workers and they thought it was cool, so we've decided to build this out as a proper open source project. I therefore won't be finishing this out, but I imagine this is going to form some foundational work of the new version. I will update this README with the link to the real version once it gets going.

### Biggest hurdles

I spent WAY too long trying to use the Sequelize ORM that Robin Wieruch recommends in his tutorial. Once I got rid of that, the whole project flowed MUCH more quickly, but I did burn a day on trying to figure out how it worked.

Other than that, I had a small bit of trouble figuring out the token based authentication just in terms of the logistics of that.

### What I learned

Hoo boy, here goes:

-   PostGres
-   Apollo Server internals
-   How to structure your mutations with extensibility in mind
-   Writing effective resolvers
-   How to set up a database
-   And so much more

I'm REALLY looking forward to working on some of this with my coworkers.

### Links Used

[Modularizing Your Schema Code](https://www.apollographql.com/blog/modularizing-your-graphql-schema-code-d7f71d5ed5f2)
[GraphQL Apollo Server Tutorial (borrowed a reasonable amount from this)](https://www.robinwieruch.de/graphql-apollo-server-tutorial)
[Creating Tables in PostGres](https://www.postgresqltutorial.com/postgresql-create-table/)
[Running Queries from Bash Scripts (for DB initialization)](https://stackoverflow.com/questions/18223665/postgresql-query-from-bash-script-as-database-user-postgres)
[PostGres Serial DataType](https://www.postgresqltutorial.com/postgresql-serial/)
[Theory of Password Hashing](https://security.stackexchange.com/questions/211/how-to-securely-hash-passwords)
[How to safely store a password (title is a misleading)](https://codahale.com/how-to-safely-store-a-password/)
[Data Types for password hash storage](https://stackoverflow.com/questions/5881169/what-column-type-length-should-i-use-for-storing-a-bcrypt-hashed-password-in-a-d)
[Select top 10 records in PostGres (TL;DR - add "limit 10" to the end of your query)](https://stackoverflow.com/questions/13674031/how-to-get-the-top-10-values-in-postgresql/13674064)
[Designing Graph Mutations](https://www.apollographql.com/blog/designing-graphql-mutations-e09de826ed97)
[Authentication in GraphQL: Putting user info on the context](https://www.apollographql.com/docs/apollo-server/security/authentication/#putting-user-info-on-the-context)
[Custom GraphQL Scalars Library](https://www.npmjs.com/package/graphql-scalars)

### Thing to Celebrate / Moment of Gratitude

HOLY CRAP I BUILT MOST OF A REALLY BIG THING AND IT WAS AWESOME
