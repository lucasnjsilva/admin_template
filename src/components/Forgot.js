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

const Forgot = () => {
    useClass('bg-blue');
    const handleSendEmail = () => {
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
                                    <h1>Forgot Password</h1>
                                    <p>Enter your e-mail and you will receive a link to reset your password.</p>
                                    <hr />
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Button onClick={handleSendEmail} outline color="primary">Ok!</Button>
                                        <Link to="/login">
                                            <Button color="link">Back to Login</Button>
                                        </Link> 
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

export default Forgot;