import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Select from "react-select";


const options = [

    {
        id: 1,
        value: "football",
        label: "Football ⚽"
    },

    {
        id: 2,
        value: "computer",
        label: "Computer 💻 "
    },

    {
        id: 3,
        value: "play",
        label: "Play 🎮"
    },

    {
        id: 4,
        value: "music",
        label: "Music 🎼"
    },

    {
        id: 5,
        value: "photo",
        label: "Photo 📷"
    },

    {
        id: 6,
        value: "swim",
        label: "Swim 🥽"
    },

    {
        id: 7,
        value: "run",
        label: "Run 👟"
    },
]

export default function SecondStep() {

    const [selectOption, setSelectOption] = useState(null);

    const hobbiesSer = JSON.stringify(selectOption); // el estado seleccionado "selectOption" que es un objeto, lo convertimos en una cadena de texto tipo json. 

    localStorage.setItem("hobbies", hobbiesSer); // se pone en una variable "hobbiesSer" que se guarda en el localStorage

    const onChangeAdditionalHobbie = (e) => {
        const sport = e.target.value;
        localStorage.setItem("additionalHobbie", sport);
    };
    
    return (

        <div>
            
            Desde SecondStep de la caperta DynamicForm

            <h2> Selecciona tu deporte favorito</h2>

            <h4> Diga acerca de sus hobbies</h4>

            <Container className="p-5 text-center">

                <Row className="justify-content-md-center">

                    <Col lg="7">

                        <h5> Seleccione sus hobbies</h5>

                        <Select
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options} // este es el vector
                            isSearchable // que se pueda buscar
                            isMulti
                        />
                    </Col>

                    <Col lg="7" className="mt-4">

                        <h5>¿Quiere adicionar otro?</h5>

                        <Form.Control
                            type="text"
                            placeholer="Baseball" // mostrar algo por defecto
                            onChange={(e) => onChangeAdditionalHobbie(e)} // pasa el evento, el apuntador y a ese se le pasa el evento

                        />

                    </Col>
                </Row>

            </Container>
        </div>
    )

};
