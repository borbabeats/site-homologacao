import { Button, Container, Col } from 'react-bootstrap'


function Page404() {
    return (
        <Container className='vh-100'>
            <Col sm='4' md='6' lg='6' className='d-flex flex-column mr-auto ml-auto h-50' style={{paddingTop: '8rem', paddingBottom: '8rem'}} >
                
                <h1 className='text-center align-self-center' style={{ fontSize: '6rem', fontWeight: 'bold' }}>404 ERROR</h1>
                <p className='text-center'>Desculpe, essa página não foi encontrada.</p>
                <Button className='btn-round btn-maxi-color align-self-center btn btn-secondary' style={{maxWidth: '315px'}} href='/'>Voltar para o início</Button>
                
            </Col>
        </Container>
    )
}

export default Page404