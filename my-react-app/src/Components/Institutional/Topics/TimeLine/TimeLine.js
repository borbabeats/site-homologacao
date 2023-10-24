import firstPhoto from '../../../../Config/Images/Home/firstPhoto.webp'
import { useSpring, animated } from '@react-spring/web'
import { SlControlPlay } from 'react-icons/sl'
import { Container, Row } from "reactstrap"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import Lines from "./Lines"

export default function TimeLine() {
    const [expanded, setExpanded] = useState(false)
    const springProps = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: expanded ? 1 : 0, transform: `scale(${expanded ? 1 : 0})` },
        zIndex: 999999
    })

    const handleImageClick = r => setExpanded(true)

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) setExpanded(false)
    }

    const handleCloseClick = r => setExpanded(false)

    return <Container>
            <Row onClick={handleImageClick} className="img-time text-center items-align d-flex justify-content-center align-items-center mt-5" style={{ position: 'relative',  }}>
                <img src={firstPhoto} alt="" className='img-shadow ' style={{ width: '60%', height: 'auto', borderRadius: 0 }} />
                <SlControlPlay style={{ width: '4rem', height: '4rem', maxHeight: '50%', color: '#fff', position: 'absolute' }} />
            </Row>
            {expanded && <animated.div className="overlay bg-maxi" onClick={handleOverlayClick} style={springProps}>
                <button className="close-button" onClick={handleCloseClick}> <IoMdClose style={{ height: 30, width: 30 }} /> </button>
                <Lines />
            </animated.div>}
    </Container>
}

