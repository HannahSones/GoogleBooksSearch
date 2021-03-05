const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleBooks"
);

const bookSeed =
{
    authors: ["George Orwell"],
    description: "A PBS Great American Read Top 100 Pick With extraordinary relevance and renewed popularity, George Orwell’s 1984 takes on new life in this edition. “Orwell saw, to his credit, that the act of falsifying reality is only secondarily a way of changing perceptions. It is, above all, a way of asserting power.”—The New Yorker In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbidden love affair, Winston finds the courage to join a secret revolutionary organization called The Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be. Lionel Trilling said of Orwell’s masterpiece, “1984 is a profound, terrifying, and wholly fascinating book. It is a fantasy of the political future, and like any such fantasy, serves its author as a magnifying device for an examination of the present.” Though the year 1984 now exists in the past, Orwell’s novel remains an urgent call for the individual willing to speak truth to power.",
    image: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.co.uk/books?id=kotPYEqx7kMC&printsec=frontcover&dq=1984&hl=&cd=1&source=gbs_api",
    title: "1984",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });