import { Button, Fade, Container, Row, Col } from "reactstrap";
import React from 'react';

function PolicyAndPrivacy() {
    return <div style={{ backgroundColor: '#f9f9f9', minHeight : '100vh'}}>
        <Fade >
            <div className='pt-5' >
                <Container >
                    <Row>
                        <Fade className="mt-3"   baseClassActive={'show'} >
                            <Col className="ml-auto mr-auto"  md="15" lg="15" sm="15">
                                <h2 className="title mt-5">Política de Uso</h2>
                                <h4 className="description " > Esta Política de Uso regula o acesso e a utilização do site http://www.maxiforja.com.br/ (“Site”), de propriedade da Maxiforja Componentes Automotivos Ltda, sociedade empresária com sede na Av. Antonio Frederico Ozanan, 1181, Canoas, RS, inscrita no CNPJ sob nº 88.303.375/0001-71 (“Maxiforja”).</h4>
                                <h4 className="description " > Ao visitar o Site, o Usuário declara que leu atentamente, entendeu e aceitou as regras e condições previstas nesta Política de Uso.</h4>
                                <h4 className="description " > Se não concordar com a Política de Uso, o Usuário deve cessar imediatamente a utilização do Site.</h4>
                            </Col>
                        </Fade>
                    </Row>
                </Container>
            </div>
        </Fade>

    </div>;
}

export default PolicyAndPrivacy;


