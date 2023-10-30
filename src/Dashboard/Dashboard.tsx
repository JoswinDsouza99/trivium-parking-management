import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";


const Dashboard = () => {
    return (
        <>
        <NavBar />
        <Container className="dashboardContainer">
            <Row className="countText">
                <Col>
                    No. of Bikes
                </Col>
                <Col>
                    No. of Cars
                </Col>
            </Row>
            <Row className="dashboardRow">
                <Col>
                    <span>15/30</span>
                </Col>
                <Col>
                    <span>3/5</span>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Dashboard;