import { useEffect } from 'react'
import { Fade, Container, Row, Col } from "reactstrap"
import spm from "../../../Config/Images/SPM/SPM.png"
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";
import Containers from '../../Component/Containers';


function OrganizationalPhilosophy({ id }) {
    const { t } = useTranslation()

    const isDesktop = useMediaQuery({ minWidth: 992 });

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const navbarHeight = document.querySelector("#navbar").offsetHeight; // altura da navbar
                window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: "smooth" });
            }
        }
    }, []);

    return <Containers
        id={id}
        bground={'bg-white'}
        h2={'institucional.filosofia.titulo'}
        texto={'institucional.filosofia.texto'}
        style={{ padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px'), borderEndStartRadius: 10, paddingBottom: '2rem' }}
    >
        <Row className=" text-center items-align d-flex justify-content-center align-items-center mt-3" >
            <Fade className=""   >
                <img src={spm} alt="spm" style={{ width: '100%', height: 'auto', borderRadius: 0 }} />
            </Fade>
        </Row>
    </Containers>
}



export default OrganizationalPhilosophy 