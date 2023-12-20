import { CardBody, CardTitle } from 'reactstrap'

function Cards({ text }) {
    return (
        
            <CardBody className='danger'>
                <CardTitle>{text}</CardTitle>
            </CardBody>
        
        
        
    )
}

export default Cards