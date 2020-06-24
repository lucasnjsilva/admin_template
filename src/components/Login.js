import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
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

export default class Login extends Component {
    render() {
        return(
            <div className="login mt-5 flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <Card>
                                <CardBody>
                                    <Form>
                                        <h1>Login</h1>
                                        <p>Enter your e-mail and password to access.</p>
                                        <hr />
                                        <InputGroup className="mb-3">
                                            <Input type="email" placeholder="E-mail" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <Input type="password" placeholder="Password" />
                                        </InputGroup>
                                        <InputGroup>
                                         <Button color="primary">Login</Button>
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
}