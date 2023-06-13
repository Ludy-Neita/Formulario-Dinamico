import { useState } from "react";
import { Container } from "react-bootstrap";
import "./DynamicForm.css";
import FirstStep from "./FristStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export default function DynamicForm() {

    const [step, setStep] = useState(1); // se pasa a ThirdStep y viene de Resume, valor 1 porque es el primer paso

    const showNextStep = () => {
        setStep(step + 1); // pasar de paso.
    };

    const showPreviewStep = () => {
        setStep(step - 1); // regresar paso para cambiar algo, ya sea fruta o hobbie
    };

    return (

        <div className="dynamic-form mt-4 mb-5" id="dynamic-form">

            Desde DynamicForm

            <Container className="text-center p-4">

                <div className="content-dynamic-form mt-5 p-4">

                    <h1 className="title-dynamic-form">
                        LLenar el formulario
                    </h1>
                    
                    <p className="steps-numbers">Step {step} of 3</p>  {/* el step es el contador */}
                    {getPageByStep(step, setStep)}  {/* Esto es de la función que se creo abajo, que es irse para FirstStep */}

                    <div className="actions">

                        <div className="container-text">
                            {step > 1 && step < 4 && ( // mayor a 1 y menor 4
                                <p className="before" onClick={showPreviewStep}>
                                    ⬅️ Before Step
                                </p>
                            )}
                        </div>

                        <div className="container-text">
                            {step > 0 && step < 3 && (
                                <p className="next" onClick={showNextStep}>
                                    Next Step ➡️
                                </p>
                            )}
                        </div>

                    </div>
                </div>

            </Container>

        </div>
    );
}

function getPageByStep(step, setStep) {
    if (step === 1) {
        return <FirstStep />
    }
    else if (step === 2){
        return <SecondStep />
    }
    else if (step === 3) {
        return <ThirdStep setStep={setStep} />
    }
}
