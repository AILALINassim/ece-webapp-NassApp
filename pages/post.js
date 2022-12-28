import { useState } from "react";

import Header from "../components/Header";
import Posts from "../components/Posts";
import Footer from "../components/Footer";


import { Div, Container } from "./stylePost";

function Feed() {
  const [displayPage, setDisplayPage] = useState(true);

  return (
    <>
      {displayPage ? (
        <Div>
          <Container>
            <Header />
            <Posts setDisplayPage={setDisplayPage} />
          </Container>

          <Footer />
        </Div>
      ) : (
        <p>UNAUTHORIZED</p>
      )}
    </>
  );
}

export default Feed;
