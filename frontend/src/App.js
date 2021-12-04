import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import background from "./background.png"
function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <main>
      <Container>
      <h1>Welcome to nomad.</h1>
      </Container>
      </main>
    <Footer />
</div>
  );
}

export default App;
