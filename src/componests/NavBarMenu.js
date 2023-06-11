import { Navbar, Container } from "react-bootstrap";

export default function NavBarMenu() {

    return (
        <div>
            Desde Navegador menu

            <Navbar bg="dark" variant="dark">

                <Container>
                    <Navbar.Brand href="#!"> {/* es hacia a donde se va a dirigir cuando se da click en Form */}
                        Dynamic
                        <b>Form</b>
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">

                        <Navbar.Text>
                            Signed in as:{" "}
                            <a href="https://gmail.com" target="_blank" rel="noreferrer">
                                Iván Devia
                            </a>
                        </Navbar.Text>

                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </div>
    )

};
