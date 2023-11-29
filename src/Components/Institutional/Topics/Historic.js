import { useMediaQuery } from 'react-responsive';
import Containers from '../../Component/Containers';
import TimeLine from './TimeLine/TimeLine'
import { useState } from 'react'
import { Col } from "reactstrap"


function Historic({ id }) {
    const [index, setIndex] = useState(0)
    const isDesktop = useMediaQuery({ minWidth: 992 });
    
    return <Containers 
        style={{ padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px'), margin: '50px auto 50px' }}
        texto={'institucional.historico.texto'}
        h2={'institucional.historico.titulo'}
        colorTitle={'text-white'}
        bground={`bg-maxi`}
        
    >
        <Col id={id}  className="ml-auto mr-auto historic-section" md="15" lg="15" sm="15">
            <TimeLine index={index} onChange={setIndex} />
        </Col>
    </Containers>
}

export default Historic
