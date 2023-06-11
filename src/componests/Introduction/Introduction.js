import "./Introduction.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Introduction() {

    return (
        <div className="introduction p-3 p-lg-5 met-5">
            Desde introduction

            <Container fluid>

                <Row className="justify-content-md-center">

                    <Col xs={12} md={8}>

                        <h1 className="pl-2 text-center">
                            Welcome to my Dynamic Form {""}
                            <span className="pt-2 pb-4">Hola, este el span de "h1"</span>
                        </h1>

                        <h4 className="d-flex container-actions mt-5">
                            Hola, este es un segundo parrafo de clase "h4"
                        </h4>

                        <div className="d-flex container-actions mt-5">

                            <div className="container-buttons">
                                <Button
                                    className="p-3"
                                    onClick={() => console.log("click button1")}>
                                    Get in touch 1
                                </Button>

                                <Button
                                    className="p-3">
                                    Get in touch 2
                                </Button>

                            </div>

                            <div className="btn-start-create">

                                <a href="#dynamic-form">
                                    Start to create
                                </a>
                                
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>
        </div>
    )

};
