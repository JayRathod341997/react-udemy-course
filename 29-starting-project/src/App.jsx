import PostList from "./Components/PostList";
import MainHeader from "./Components/MainHeader";
import { useState } from "react";
function App() {
  const [visibleModal, setVisibleModal] = useState(true);

  const createPosthandler = () => {
    setVisibleModal(true);
  };
  const hideModalHandler = () => {
    setVisibleModal(false);
  };
  return (
    <>
      <MainHeader onCreatePost={createPosthandler}></MainHeader>
      <main>
        <PostList
          visibleModal={visibleModal}
          hideModalHandler={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
