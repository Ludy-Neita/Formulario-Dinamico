import { Container, Row } from "react-bootstrap";
import { useState } from "react";

import "../FristStep/FristStep.css";
import CardFruit from "./CardFruit";

export const fruits = [
    {
        id: 1,
        icon: "🍅",
        name: "Tomato",
        description: "Un ejemplo rápido para construir sobre el título de la tarjeta y formar la mayor parte del contenido de las tarjetas",
    },

    {
        id: 2,
        icon: "🫐",
        name: "Blueberries",
        description: "Un ejemplo rápido para construir sobre el título de la tarjeta y formar la mayor parte del contenido de las tarjetas",
    },

    {
        id: 3,
        icon: "🍌",
        name: "Banana",
        description: "Un ejemplo rápido para construir sobre el título de la tarjeta y formar la mayor parte del contenido de las tarjetas",
    },

];

export default function FristStep() {

    const [selectedCard, setSelectedCard] = useState(null);

    const clickCard = (fruit) => {

        setSelectedCard(fruit.id);
        localStorage.setItem("fruitName", fruit.name);
        localStorage.setItem("iconFruit", fruit.icon);
        
    }

    return (

        <div>

            Estoy desde FristStep dentro de la carpeta de DynamicForm

            <h2> Escoga su fruta favorita</h2>
            <h4> Selecciona la fruta y de click en el boton "Next Step"</h4>

            <Container className="p-5 text-center">

                <Row>
                    {fruits.map((fruit, index) => (

                        <CardFruit
                            fruit={fruit}
                            key={index}
                            clickCard={clickCard}
                            selectedCard={selectedCard}
                        />

                    ))}
                </Row>

            </Container>
        </div>
    )

};
