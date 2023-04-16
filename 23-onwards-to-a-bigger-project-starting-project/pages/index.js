import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg/306px-Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg",
    title: "title1",
    address: "address1",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg/306px-Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg",
    title: "title2",
    address: "address2",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
