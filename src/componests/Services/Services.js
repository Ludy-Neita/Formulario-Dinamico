import { Container, Row, Col } from "react-bootstrap";
import "../Services/Services.css";
import imgCourse1 from "../../assets/img/hbo.jpeg";
import imgCourse2 from "../../assets/img/netflix.jpeg";
import imgCourse3 from "../../assets/img/prime.jpeg";
import CardService from "../Services/CardService/CardService"

export default function Services() {

    const servicesArray = [
        {
            title: "titulo 1 de servicesArray",
            subtitle: "Subtitulo 1 de servicesArray",
            image: imgCourse1,
            footer: "footer 1 de servicesArray ->",
            link: "#!",
        },

        {
            title: "titulo 2 de servicesArray",
            subtitle: "Subtitulo 2 de servicesArray",
            image: imgCourse2,
            footer: "footer 2 de servicesArray ->",
            link: "#!",
        },

        {
            title: "titulo 3 de servicesArray",
            subtitle: "Subtitulo 3 de servicesArray",
            image: imgCourse3,
            footer: "footer 3 de servicesArray ->",
            link: "#!",
        },
    ];

    // console.log(servicesArray) // muestra el objeto creado, el array de 3 posiciones. tipo API


    return (
        <div>
            Desde Services

            <div className="services p-4 mt-5">

                <Container fluid>

                    <Col xs={12} md={8}>

                        <h2 className="text-center">Services</h2>

                        <h4 className="pb-3 text-center"> Check some of my services I did</h4>

                        <Row xs={1} md={3} className="g-4 mt-4"> 

                            {servicesArray.map((service,index) =>(

                                <CardService service={service} key={index} />
                           ))}
                        </Row>


                    </Col>
                </Container>
            </div>
        </div>
    )

};
