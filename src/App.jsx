import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/sidebar/sidebar";
import Menu from "./components/menu/menu";

function App() {
  
  return (
    <div className="App" >
      <Row className="w-100" >
        <Col
          md={2}
          className="pt-4"
          style={{ backgroundColor: "#2700FB", color: "#fff",padding:0,height:"100vh" }}
        >
          <Sidebar/>
        </Col>
        <Col md={10}>
        <Container className="ps-4 pe-1">
        <Menu />
        </Container>
        </Col>
      </Row>

    </div>
  );
}

export default App;
