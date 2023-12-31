
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    Form,
    Input,
   
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components

function SectionLogin() {
    return (
        <>
            <div
                className="section section-image section-login"
                style={{}}
            >
                <Container>
                    <Row>
                        <Col className="mx-auto" lg="4" md="6">
                            <Card className="card-register">
                                <h3 className="title mx-auto">Welcome</h3>
                                <div className="social-line text-center">
                                    <Button
                                        className="btn-neutral btn-just-icon mt-0"
                                        color="facebook"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook-square" />
                                    </Button>
                                    <Button
                                        className="btn-neutral btn-just-icon mt-0 ml-1"
                                        color="google"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fa fa-google-plus" />
                                    </Button>
                                    <Button
                                        className="btn-neutral btn-just-icon mt-0 ml-1"
                                        color="twitter"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter" />
                                    </Button>
                                </div>
                                <Form className="register-form">
                                    <label>Email</label>
                                    <InputGroup className="form-group-no-border">
                                            <InputGroupText>
                                                <i className="nc-icon nc-email-85" />
                                            </InputGroupText>
                                        <Input placeholder="Email" type="email" />
                                    </InputGroup>
                                    <label>Password</label>
                                    <InputGroup className="form-group-no-border">
                                            <InputGroupText>
                                                <i className="nc-icon nc-key-25" />
                                            </InputGroupText>
                                        <Input placeholder="Password" type="password" />
                                    </InputGroup>
                                    <Button
                                        block
                                        className="btn-round"
                                        color="danger"
                                        type="button"
                                    >
                                        Register
                                    </Button>
                                </Form>
                                <div className="forgot">
                                    <Button
                                        className="btn-link"
                                        color="danger"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Forgot password?
                                    </Button>
                                </div>
                            </Card>
                            <div className="col text-center">
                                <Button
                                    className="btn-round"
                                    outline
                                    color="neutral"
                                    href="/register-page"
                                    size="lg"
                                    target="_blank"
                                >
                                    View Register Page
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>{" "}
        </>
    );
}

export default SectionLogin;
