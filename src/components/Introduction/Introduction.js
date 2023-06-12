import "./Introduction.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Introduction() {

    return (
        <div className="introduction p-3 p-lg-5 met-5"> {/*pl padding left, pl, padding, p, padding botton, pb */}
           
            Desde introduction

            <Container fluid>

                <Row className="justify-content-md-center">

                    <Col xs={12} md={8}>

                        <h1 className="pl-2 text-center">
                            Welcome to my Dynamic Form  de h1 "text-center" {""}
                            <span className="pt-2 pb-4">Hola, estoy en el span del "h1" llamado "text-center"</span>
                        </h1>

                        <h4 className="d-flex container-actions mt-5">
                            Hola, estoy desde "h4" llamado "container-actions"
                        </h4>

                        <div className="d-flex container-actions mt-5">

                            <div className="container-buttons">
                                <Button
                                    className="p-3"
                                    onClick={() => console.log("click button1")}>
                                    Get in touch 1 div 1 "container-actions " div 2 container-button
                                </Button>

                                <Button
                                    className="p-3">
                                    Get in touch 2
                                </Button>

                            </div>

                            <div className="btn-start-create">

                                <a href="#dynamic-form">
                                    Start to create del div "btn-start-create"
                                </a>
                                
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>
        </div>
    )

};
