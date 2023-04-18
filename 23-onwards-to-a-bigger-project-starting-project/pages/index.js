import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg/306px-Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg",
    title: "title1",
    address: "address1",
    discription: "discription1",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg/306px-Ch%C3%A2teau_de_Maisons-Laffitte_001.jpg",
    title: "title2",
    address: "address2",
    discription: "discription2",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
