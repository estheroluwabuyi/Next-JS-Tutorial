export interface Movie {
  id: string;
  title: string;
  comments: number;
  commentsList: string[];
  rating: number;
  description: string;
  poster: string;
}

export const movies: Movie[] = [
  {
    id: "1b1ca7a3-2543-41e5-a778-de6427bb18c0",
    title: "Oppenheimer",
    commentsList: [
      "Mind-blowing visuals",
      "Cillian Murphy was outstanding",
      "A bit long but worth it",
    ],
    comments: 124,
    rating: 9.0,
    description:
      "A gripping biographical drama about J. Robert Oppenheimer and the creation of the atomic bomb.",
    poster: "/posters/oppenheimer.jpeg",
  },
  {
    id: "4ae57348-c595-4e4d-b491-abbb681c21fe",
    title: "Barbie",
    comments: 98,
    commentsList: [
      "Funny and colourful",
      "Great social commentary",
      "Margot Robbie nailed it",
    ],
    rating: 8.1,
    description:
      "A vibrant comedy that explores identity, feminism, and self-discovery in a playful Barbie world.",
    poster: "/posters/barbie.jpeg",
  },
  {
    id: "d91bc914-4e49-4ef3-91e2-0a9b22939134",
    title: "Dune: Part Two",
    comments: 256,
    commentsList: [
      "Epic cinematography",
      "Zendaya finally got more screen time",
      "A true masterpiece",
    ],
    rating: 8.7,
    description:
      "The continuation of Paul Atreides’ journey as he unites with the Fremen to seek revenge and shape destiny.",
    poster: "/posters/dune.jpeg",
  },
  {
    id: "8c2cb2ff-67b5-48d3-b45c-8e7b47d43df3",
    title: "Inside Out 2",
    comments: 120,
    commentsList: [
      '"Emotional and relatable"',
      '"Great for all ages"',
      '"Beautiful animation"',
    ],
    rating: 8.3,
    description:
      "A heartfelt animated sequel that explores Riley’s new teenage emotions and challenges.",
    poster: "/posters/inside.jpeg",
  },
  {
    id: "b4a87a14-0a86-4cb7-9a71-2dd2e9e8a87a",
    title: "Deadpool & Wolverine",
    comments: 189,
    commentsList: [
      '"Hilarious and action-packed"',
      '"Ryan Reynolds and Hugh Jackman are a perfect duo"',
      '"A must-watch for comic book fans"',
    ],
    rating: 8.6,
    description:
      "Deadpool teams up with Wolverine for a chaotic multiverse adventure filled with action and comedy.",
    poster: "/posters/deadpool.jpeg",
  },
  {
    id: "65a28d7f-2386-482b-87e7-9bdf6d84b634",
    title: "A Quiet Place: Day One",
    comments: 75,
    commentsList: [
      "Terrifying from start to finish",
      "Great prequel to the original",
      "Keeps you on the edge of your seat",
      "Lupita was amazing",
    ],
    rating: 7.9,
    description:
      "A chilling prequel showing the very first day the deadly creatures invaded Earth.",
    poster: "/posters/quiet.jpeg",
  },
  {
    id: "2ea8bb60-fba1-42bb-9447-6b7d4cf786ec",
    title: "Twisters",
    comments: 80,
    commentsList: [
      "Incredible special effects",
      "Exciting and intense",
      "A thrilling ride from start to finish",
    ],
    rating: 7.5,
    description:
      "A disaster adventure film following storm chasers facing massive tornado outbreaks.",
    poster: "/posters/twisters.jpeg",
  },
  {
    id: "b4a87a14-0a86-4cb7-9a71-2dd2e9e8a87b",
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    comments: 345,
    commentsList: [
      "Tom Blyth was great",
      "Dark and gripping",
      "Better than expected",
    ],
    rating: 7.6,
    description:
      "A prequel exploring the rise of Coriolanus Snow during the 10th Hunger Games.",
    poster: "/posters/hunger.jpeg",
  },
  {
    id: "65a28d7f-2386-482b-87e7-9bdf6d84b635",
    title: "Mission: Impossible – Dead Reckoning",
    comments: 150,
    commentsList: [
      "Tom Cruise never disappoints",
      "Action-packed",
      "Incredible stunts",
    ],
    rating: 8.2,
    description:
      "Ethan Hunt and his IMF team face a deadly new AI weapon threatening global security.",
    poster: "/posters/mission.jpeg",
  },
  {
    id: "f5b804a2-6a12-41c8-95a2-3cb6e98a82c3",
    title: "Spider-Man: Across the Spider-Verse",
    comments: 210,
    commentsList: [
      "Stunning animation",
      "Great storyline",
      "Miles Morales is the best Spider-Man",
    ],
    rating: 9.1,
    description:
      "Miles Morales embarks on a multiverse adventure with Spider-people from across realities.",
    poster: "/posters/spider.jpeg",
  },
];
