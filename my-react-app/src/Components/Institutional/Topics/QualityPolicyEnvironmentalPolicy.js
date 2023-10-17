import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Containers from '../../Component/Containers';

function QualityPolicyEnvironmentalPolicy({ id }) {
    const isDesktop = useMediaQuery({ minWidth: 992 });
   
    return <Containers 
        id={id}
        bground={'bg-white'}
        h2={'institucional.politica.titulo'}
        texto={'institucional.politica.texto'}
        style={{ padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px'), paddingBottom: '2rem' }}
    />
        
}

export default QualityPolicyEnvironmentalPolicy;