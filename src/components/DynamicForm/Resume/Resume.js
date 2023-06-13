import { Button, CardGroup, Modal } from "react-bootstrap"
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";

export default function Resume({showModal, setModal, setStep}) { // ThirdStep

    const favouriteFruit = localStorage.getItem("fruitName"); //FristStep
    const fruitIcon = localStorage.getItem("iconFruit"); //FristStep
    const hobbiesStorage = JSON.parse(localStorage.getItem("hobbies")); // SecondStep
    const additionalHobbie = localStorage.getItem("additionalHobbie");// SecondStep
    const comment = localStorage.getItem("comment"); // ThirdStep

    // limpiar el locaStorage

    const clearForm = () => {
        localStorage.clear();
        setModal(false); // ese estaba en true en ThirdStep en la linea 55
        setStep(1);
    };

    return (
        <div>

            Desde Resume de la carpeta de DynamicForm

            <Modal
                show={showModal}
                size="lg" // large es lg
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={clearForm} //la función de limpiar el formulario
            >


                <Modal.Header closeButton>
                    <Modal.Title>Felicitaciones !🥳 🎉</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <h4>Este es su resumen:</h4>

                    <CardGroup className="mt-4">
                        {favouriteFruit && fruitIcon && ( // mostrar los dos el nombre y el icono, si viene vacio solo muestra lo que selecciono, ya sea fruta, hobbie o el comentario
                            <CardResume
                                title={fruitIcon}
                                subtitle="Su fruta favorita es:"
                                text={favouriteFruit}
                            />
                        )}

                        {hobbiesStorage && (  //mostrar los hobbies
                            <CardResumeHobbies
                                subtitle="Sus hobbies son:"
                                text={additionalHobbie}
                                hobbiesStorage={hobbiesStorage}
                            />
                        )}
                        {comment && ( // mostrar los comentarios que estan en ThirdStep
                            <CardResume
                                subtitle="Su comentario es:"
                                text={comment}
                            />
                        )}
                    </CardGroup>

                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={clearForm} variant="outline-dark">
                        Salir y limpiar formulario
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
};