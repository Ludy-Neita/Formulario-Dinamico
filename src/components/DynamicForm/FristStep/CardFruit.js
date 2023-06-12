import { Card, Col } from "react-bootstrap";

export default function CardFruit({ fruit, clickCard, selectedCard }) {

    const { id, icon, name, description } = fruit;

    return (

        <div>
            Estoy desde CardFruit dentro de la carpeta de DynamicForm

            <Col
                className={`card-fruit mt-2 ${selectedCard === fruit.id ? "selected-card" : ""}`} // muestre el id de la fruta, si no que deje vacio
                onClick={() => clickCard(fruit)}
                key={id}>

                <Card>
                    <Card.Body>
                        <Card.Title>{icon}</Card.Title>
                        <Card.Subtitle>{name}</Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
                
            </Col>

        </div>

    );
}