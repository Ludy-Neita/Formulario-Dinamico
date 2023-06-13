import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/hbo.jpeg";
import imgCourse2 from "../../assets/img/netflix.jpeg";
import imgCourse3 from "../../assets/img/prime.jpeg";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "HBO",
            subtitle: "Lear all about of HBO",
            image: imgCourse1,
            footer: "Go to the page ➡️",
            link: "https://www.hbomax.com/co/es", // "#!", es para la misma pagina
        },
        {
            title: "NETFLIX",
            subtitle: "Lear all about of NETFLIX",
            image: imgCourse2,
            footer: "Go to the page ➡️",
            link: "https://www.netflix.com/browse",
        },
        {
            title: "PRIME VIDEO",
            subtitle: "Lear all about PRIME VIDEO",
            image: imgCourse3,
            footer: "Go to the page ➡️",
            link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root",
        },
    ];

        // console.log(servicesArray) // muestra el objeto creado, el array de 3 posiciones. tipo API

    return (

        <div className="services p-4 mt-5">

            <Container fluid>

                <Row className="justify-content-md-center">

                    <Col xs={12} md={8}> {/* 12 separaciones, 12 x 8 cuadriculas, es para un responsive, table, cel, pc */}
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>

                        <Row xs={1} md={3} className="g-4 mt-4"> { /*un fila con 3 divisiones, que son las 3 posiciones del array*/}
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>

                    </Col>
                </Row>

            </Container>
        </div>
    );
}