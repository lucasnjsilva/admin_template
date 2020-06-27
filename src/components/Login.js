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

const Login = (props) => {
    useClass('bg-blue');
    const handleLogin = () => {
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
                                    <h1>Login</h1>
                                    <p>Enter your e-mail and password to access. New? <Link to="/register">Sign up!</Link></p>
                                    <hr />
                                    <InputGroup className="mb-3">
                                        <Input type="email" placeholder="E-mail" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" placeholder="Password" />
                                    </InputGroup>
                                    <InputGroup>
                                        <Button onClick={handleLogin} outline color="primary">Login</Button>
                                        <Link to="/forgot">
                                            <Button onClick={handleLogin} color="link">Forgot Password</Button>
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

export default Login;