import React from 'react';
import { Link } from 'react-router-dom';
import useClass from './../hooks/add-class-body';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    InputGroup,
    Input,
    Button
} from 'reactstrap';

const Register = (props) => {
    useClass('bg-blue');
    const handleCreate = () => {
        console.log('Make HTTP Request here...');
    }
    return(
        <div className="login mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <Form>
                                    <h1>New account</h1>
                                    <p>Enter your name, e-mail and password to create a account. Already registered? <Link to="/register">Login</Link></p>
                                    <hr />
                                    <InputGroup className="mb-3">
                                        <Input type="text" placeholder="Name" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Password" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Button onClick={handleCreate} outline color="primary">Register</Button>
                                    </InputGroup>
                                </Form>
                            </CardBody>                                
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;