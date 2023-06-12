import { useState } from "react";
import { Col, Container, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import Resume from "../Resume/Resume";

//import Select from 'react-select/dist/declarations/src/Select';

import "../ThirdStep/ThirdStep.css";


export default function ThirdStep({setStep}) {


    const [modal, setModal] = useState(false); // ventana de modal, es un recuaadro que paraece sobre la pagina, que bloquea lasf unciones, y hace el foco sobre una parte particular o cerrar la ventana

    const onChangeComment = (e) => {

        const comment = e.target.value;
        localStorage.setItem("comment", comment);

    };

    return (

        <div>
            
            Desde ThirdStep de la carpeta DynamiForm

            <h2> Tercer paso</h2>

            <h4>¿quiere adicionar un comentario?</h4>

            <Container className="p-5 text-center">


                <Row className="justify-content-md-center">
                    <Col lg="10">
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Comments"
                            className="mb-3">

                            <Form.Control

                                as="textarea"
                                placeholder="deja un comentario"
                                onChange={(e) => onChangeComment(e)}
                            />

                        </FloatingLabel>

                    </Col>
                </Row>

                <div className="send-form">

                    <p className="result p-3" onClick={() => setModal(true)}>
                        Ver resultado
                    </p>

                </div>

                {modal && (

                    <Resume showModal={modal} setModal={setModal} setStep ={setStep}/> // setStep se recibe de DynamicForm
                )}


            </Container>

        </div >
    )

};
