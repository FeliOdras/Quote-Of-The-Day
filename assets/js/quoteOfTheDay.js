function getQuote() {
    const quotes = [
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "Don't watch the clock; do what it does. Keep going.",
        "The secret of getting ahead is getting started.",
        "Well done is better than well said.",
        "You miss 100% of the shots you don’t take.",
        "A goal is a dream with a deadline.",
        "Outstanding people have one thing in common: An absolute sense of mission.",
        "Trying is winning in the moment.",
        "Fall down seven times and stand up eight.",
        "You just can't beat the person who never gives up.",
        "There is little success where there is little laughter.",
        "We cannot solve our problems with the same thinking we used when we created them.",
        "Talent is just great patience.",
        "It is hard to understand the universe if you study just one planet.",
        "Little things make big days.",
        "Life isn't about waiting for the storm to pass. It's about dancing in the rain.",
        "Follow your dreams. They know the way.",
        "Believe in yourself. Anything is possible.",
        "You were born to be real, not to be perfect.",
        "Every day is a new start."

    ];

    let todaysQuoteID = (theArray) => Math.floor(Math.random() * theArray.length);
    let todaysQuote = todaysQuoteID(quotes);
    let todaysQuoteOutput = (quotes[todaysQuote])
    return todaysQuoteOutput;
}
document.getElementById('quoteOfTheDay').innerHTML = getQuote();