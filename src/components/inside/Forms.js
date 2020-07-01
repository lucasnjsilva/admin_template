import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default function Forms() {  
    return(
        <div>
            <Row>
                <Col xs="12" sm="12" md="12">
                    <Card>
                        <CardHeader>
                            <h4>Form</h4>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" placeholder="Enter your name..." />                                    
                                </FormGroup>
                                <FormGroup>
                                    <Button>Submit</Button>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>             
            </Row>
        </div>            
    );
}
