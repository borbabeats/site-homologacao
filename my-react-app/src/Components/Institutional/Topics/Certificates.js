import ISO14001 from '../../../Config/Images/Certificados/ISO14001.png';
import ISO9001 from '../../../Config/Images/Certificados/ISO9001.png';
import iatf from '../../../Config/Images/Certificados/iatf.png';
import Containers from '../../Component/Containers';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

export default function Certification({ id }) {
    const isDesktop = useMediaQuery({ minWidth: 992 });

    return <Containers
        id={id}
        h2={'institucional.certificados.titulo'}
        texto={'institucional.certificados.texto'}
        bground={'bg-white'}
        style={{
            padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px')
            , borderStartStartRadius: 10, paddingBottom: '2rem'
        }}
    >
        <div className='mt-3 d-flex text-center'>
            <div className="row col ml-auto mr-auto" md="12" lg="15" sm="12">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <img src={ISO14001} alt="ISO14001" className='img-certificate img-shadow-down' style={{ maxHeight: 'auto', width: (isDesktop ? "100%" : '50%'), borderRadius: 0, padding: 0, marginBottom: '1rem', opacity: '1', border: '1px solid #E6E6E6', background: 'rbga(0,0,0,0.8)', }} />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <img src={ISO9001} alt="ISO9001" className='img-certificate img-shadow-down' style={{ maxHeight: 'auto', width: (isDesktop ? "100%" : '50%'), borderRadius: 0, padding: 0, marginBottom: '1rem', opacity: '1', border: '1px solid #E6E6E6', background: 'rbga(0,0,0,0.8)', }} />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    <img src={iatf} alt="iatf" className='img-certificate img-shadow-down' style={{ maxHeight: 'auto', width: (isDesktop ? "100%" : '50%'), borderRadius: 0, padding: 0, marginBottom: '1rem', opacity: '1', border: '1px solid #E6E6E6', background: 'rbga(0,0,0,0.8)', }} />
                </div>
            </div>
        </div>
    </Containers>
}