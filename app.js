const characters = [
  {
    name: "Nick Birch",
    quotes: [
      "Big Dick Boy, destroyin' property, big prostate, peein' all night, a little concerned.",
      "So you can take your destiny and go fuck yourself.",
      "Look, in the future, we're all gonna be either a Lyft driver or a billionaire.",
      "I think I thought I was, like, a big dick boy, but I think I was just being a dick.",
      "What is the point of research papers? Every thing's on Wikipedia, and it's all completely accurate.",
    ],
    friends: [
      "Andrew Glouberman",
      "Jay Bilzerian",
      "Jessi Glaser",
      "Missy Foreman-Greenwald",
    ],
    enemies: ["Lola Skumpy", "Devin", "Shame Wizard"],
  },
  {
    name: "Jay Bilzerian",
    quotes: [
      "Whether sick or tired or uninspired, you still gotta bring the bone!",
      "My bros and I are developing a shitstorm worth of extreme sports, like 'breakball,' 'golf punch,' and 'peep-kour.",
      "My dad says when you take into account maternity leave, you do get equal pay.",
      "I crave emotional intimacy. Because my parents have a no-touch policy with me. So I don't really feel human contact at all.",
      "She was your friend, then she was your lover, now she's your enemy.",
    ],
    friends: [
      "Nick Birch",
      "Andrew Glouberman",
      "Jessi Glaser",
      "Missy Foreman-Greenwald",
      "Matthew MacDell",
      "Ali",
      "Coach Steve",
      "Diane Birch",
      "Elliot Birch",
    ],
    enemies: [],
  },
  {
    name: "Andrew Glouberman",
    quotes: [
      "I refuse to work for Uber. No, because they picked up at the airport when the border ... um, ... no, wait, they ... uh, ... You know, I forget, but I don't forgive.",
      "My whole body is tense, like Joe Biden is whispering a dirty joke in my ear.",
      "I gotta withhold my seed for the safety of mankind.",
      "I guess I should go to school, even though there's no porn there.",
      "Read the tea leaves, honey!",
    ],
    friends: ["Nick Birch", "Jay Bilzerian", "Jessi Glaser", "Matthew MacDell"],
    enemies: ["Lars"],
  },
  {
    name: "Jessi Glaser",
    quotes: [
      "The girls should not be punished because the boys won't control themselves.",
      "I am not a kid, for your information. I am 60 years old. I remember when Moses was president.",
      "Ugh, my brain is a tuna melt.",
      "You're like a demon Oprah.",
      "I have nothing and nobody.",
    ],
    friends: [
      "Nick Birch",
      "Andrew Glouberman",
      "Jay Bilzerian",
      "Matthew MacDell",
      "Natalie",
      "Missy Foreman-Greenwald",
    ],
    enemies: ["Dina Reznick", "Lola Skumpy", "Mr. Lizer"],
  },
  {
    name: "Matthew MacDell",
    quotes: [
      "This is Guy Town. I originally came here to do a story about a lumpy gourd of a boy, but I ended up learning a few things about what it means to be a man. Sometimes being a man means putting the ones you love first, and sometimes it means owning up to your mistakes. Not all men value the same things, and that means you can be any man you want. All you need to do is figure out who you are and be true to yourself.",
      "I'm not nervous. I'm just uncertain how things will go and, therefore, deeply terrified.",
      "It's not for me but people will like it. It's Starbucks. It's what America wants.",
      "I got it at Topman, yet it screams bottom.",
      "You look like a coconut that fell into a campfire.",
    ],
    friends: ["Jessi Glaser", "Caleb", "Andrew Glouberman", "Jay Bilzerian"],
    enemies: [],
  },
  {
    name: "Constance Harland",
    quotes: [
      `Jessi: Okay, I admit some of these girls are kind of pretty, but my mom says real beauty is on the inside.
      Hormone Monstress: So is your colon, and that's packed with crap`,
      "I'm your hormone monstress, baby, I know everything!",
    ],
    friends: ["Jessi Glaser", "Maury", "Rick", "Nick Birch"],
    enemies: [
      "Shannon Glaser",
      "Dina Reznick",
      "Shame Wizard",
      "Depression Kitty",
      "Tito",
    ],
  },
  {
    name: "Maury",
    quotes: [
      "I'm the Hormone Monster! I'm not a fairy... I mean sure, I fuck around with dudes but I'm not a fairy.",
      "You sing like a goddamn angel, and you got the heart of a champion.",
      "Hold your feelings in, like your shit.",
      "You somehow made farting even cooler.",
      "By the end of the semester, you'll be eating your own ass.",
    ],
    friends: ["Constance Harland", "Lorraine", "Rick", "Tyler", "Mona"],
    enemies: ["Gavin", "Shame Wizard", "Brittany MacDell"],
  },
];

function getRandom(items) {
  const randomNumber = Math.floor(Math.random() * items.length);
  return items[randomNumber];
}

const character = getRandom(characters);
const quote =
  character.quotes.length === 0
    ? "You have no quotes."
    : getRandom(character.quotes);
const friend =
  character.friends.length === 0
    ? "You have no friend(s)."
    : getRandom(character.friends);
const enemy =
  character.enemies.length === 0
    ? "You have no enemy."
    : getRandom(character.enemies);

console.log("What Big Mouth Character are you?");
console.log(`You are ${character.name}`);
console.log(`Quote: "${quote}"`);
console.log(`One of your friends: ${friend}`);
console.log(`One of your enemies: ${enemy}`);
