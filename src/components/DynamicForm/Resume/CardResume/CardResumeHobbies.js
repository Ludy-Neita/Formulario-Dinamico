import { Card } from "react-bootstrap";


export default function CardResumeHobbies(props) {

    const {subtitle, hobbiesStorage, text} =props;

    return (

        <div>

            Desde CardResumeHobbies que esta dentro de CardResume

            <Card className="text-center p-2 card-resume">

                <Card.Body>

                    <Card.Subtitle>
                        <b>{subtitle}</b>
                    </Card.Subtitle>

                    <ul> {/* en hobbiesStorage esta la lista de hobbies y quer4emos mostrar como una lista */}
                        
                        {hobbiesStorage.map((hobbie, index)=>(

                            <li key={index}> {hobbie.label} </li>
                        ))}

                    </ul>

                </Card.Body>

            </Card> {/* si hay yn hoobie adicional, si no av vacío */}

            {text &&(

                <Card className="text-center p-2 card-resume">

                    <Card.Body>

                        <Card.Subtitle>
                            <b>Su hobbie adicional es: </b>
                        </Card.Subtitle>

                        <Card.Text>{text}</Card.Text> {/* es el texto del hobbie */}

                    </Card.Body>

                </Card>
            )}

        </div>
    );
}