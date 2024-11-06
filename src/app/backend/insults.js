// src/app/backend/src/insults.js
const insultsList = {
    person1: [
        "You're as sharp as a marble.",
        "You bring everyone so much joy... when you leave the room."
    ],
    person2: [
        "If ignorance is bliss, you must be the happiest person on earth.",
        "You're the reason the gene pool needs a lifeguard."
    ],
    person3: [
        "You're not stupid; you just have bad luck thinking.",
        "Somewhere out there, a tree is tirelessly producing oxygen for you."
    ],
    // Add more people and insults as needed
};

module.exports.getRandomInsult = (personId) => {
    const insults = insultsList[personId];
    if (!insults || insults.length === 0) return "No insults available.";
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
};
