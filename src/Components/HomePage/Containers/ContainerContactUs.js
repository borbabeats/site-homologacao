import React from 'react';
import { Button, Form, Input, div, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";

function ContainersMap() {
    return <div className="section landing-section" id="contact-us">
        <Container>
            <Row>
                <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                    <h2 className="text-center">Fale Conosco</h2>
                    <Form className="contact-form">
                        <Row>
                            <Col md="6">
                                <label>Nome</label>
                                <InputGroup>
                                    <div className='input-group-append' addonType="prepend">
                                        <InputGroupText>
                                            <i className="nc-icon nc-single-02" />
                                        </InputGroupText>
                                    </div>
                                    <Input placeholder="Nome" type="text" />
                                </InputGroup>
                            </Col>
                            <Col md="6">
                                <label>Email</label>
                                <InputGroup>
                                    <div className='input-group-append' addonType="prepend">
                                        <InputGroupText>
                                            <i className="nc-icon nc-email-85" />
                                        </InputGroupText>
                                    </div>
                                    <Input placeholder="Email" type="text" />
                                </InputGroup>
                            </Col>
                        </Row>
                        <label>Mensagem</label>
                        <Input
                            placeholder="Fale um pouco sobre como podemos te ajudar..."
                            type="textarea"
                            rows="4"
                        />
                        <Row>
                            <Col className="ml-auto mr-auto" md="4">
                                <Button className="btn-fill" color="danger" size="lg">
                                    Envie-nos uma mensagem!
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>;
}

export default ContainersMap;