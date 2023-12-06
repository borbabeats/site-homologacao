import { useMediaQuery } from 'react-responsive';
import Containers from '../../Component/Containers';
import TimeLine from './TimeLine/TimeLine'
import { useState } from 'react'
import { Col } from "reactstrap"


function Historic({ id }) {
    const [index, setIndex] = useState(0)
    const isDesktop = useMediaQuery({ minWidth: 992 });
    
    return <div>
    <div id='timeline'></div>
    <Containers 
        style={{ padding: (isDesktop ? '100px 0 80px 0' : '0 15px 2rem 15px')}}
        texto={'institucional.historico.texto'}
        h2={'institucional.historico.titulo'}
        colorTitle={'text-white'}
        bground={`bg-maxi`}  
    >
        <Col id={id}  className="ml-auto mr-auto" md="15" lg="15" sm="15">
            <TimeLine index={index} onChange={setIndex} />
        </Col>
    </Containers>

    </div>
    
}

export default Historic
