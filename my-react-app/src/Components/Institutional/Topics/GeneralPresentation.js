import { useMediaQuery } from 'react-responsive';
import Containers from '../../Component/Containers';

function GeneralPresentation({ id }) {
    const isDesktop = useMediaQuery({ minWidth: 992 });

    return <Containers
        id={id}
        style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px') }}
        bground={'bg-white'}
        h2={'institucional.apresentacao.titulo'}
        texto={'institucional.apresentacao.texto'}
    />
}

export default GeneralPresentation;