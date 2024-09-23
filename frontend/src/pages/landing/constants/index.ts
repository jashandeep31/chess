import { play, learn } from "../assets";

const navLinks = [
  { tag: "Home", link: "/" },
  {
    tag: "Features",
    link: "#features",
  },
  {
    tag: "Tutorials",
    link: "/",
  },
];

const dropLinks = [
  {
    tag: "My Profile",
    link: "/profile",
  },
];

const features = [
  {
    image: learn,
    heading: "Learn Chess",
    about:
      "Chess is more than just a game; it’s a timeless exercise in strategy and critical thinking that has captivated players for centuries. Each move invites you to think several steps ahead, challenging you to anticipate your opponent’s tactics while formulating your own plans.",
  },
  {
    image: play,
    heading: "Play Online",
    about:
      "“Challenge opponents and friends from around the globe in thrilling matches that test your skills and strategy. Experience the excitement of competing against players from diverse backgrounds while teaming up with your friends for unforgettable gameplay!”",
  },
];

export { navLinks, dropLinks, features };
