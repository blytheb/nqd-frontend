import { useState } from "react";
import { Card, Button,Form, Container, Row} from "react-bootstrap";

export default function LoginForm({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(onLogin) {
            onLogin(email,password);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-content-center wh-100 p-4">
            <Row className="w-100">
                <Card className="shadow">
                    <Card.Body>
                        <h3 className="text-center mb-4"> Log In </h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">Submit</Button>
                            </Form>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}