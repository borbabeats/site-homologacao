import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col } from "reactstrap";
import NavSideBar from "../Component/NavSideBar";
import ChemicalLab from './Topics/ChemicalLab';
import Metrology from './Topics/Metrology';
import Forging from './Topics/Forging';
import HeatTreatment from './Topics/HeatTreatment';
import Machining_1 from './Topics/Machining_1';
import Machining_2 from './Topics/Machining_2';
import Expedition from './Topics/Expedition';
import ToolShop from './Topics/ToolShop';
import MechanicalLaboratory from './Topics/MechanicalLaboratory';
import MetallurgicalLaboratory from './Topics/MetallurgicalLaboratory';

const ItemsNavLinkTechnology = [
	{
		id: 1,
		menu: "tecnologia.forjaria.menu",
		href: "forjaria",
	}, {
		id: 2,
		menu: "tecnologia.tratamento-termico.menu",
		href: "tratamento-termico",
	}, {
		id: 3,
		menu: "tecnologia.usinagem-1.menu",
		href: "usinagem-1",
	}, {
		id: 4,
		menu: "tecnologia.usinagem-2.menu",
		href: "usinagem-2",
	}, {
		id: 5,
		menu: "tecnologia.expedicao.menu",
		href: "expedicao",
	}, {
		id: 6,
		menu: "tecnologia.ferramentaria.menu",
		href: "ferramentaria",
	}, {
		id: 7,
		menu: "tecnologia.laboratorio-mecanico.menu",
		href: "laboratorio-mecanico",
	}, {
		id: 8,
		menu: "tecnologia.laboratorio-metalurgico.menu",
		href: "laboratorio-metalurgico",
	}, {
		id: 9,
		menu: "tecnologia.metrologia.menu",
		href: "metrologia",
	}, {
		id: 10,
		menu: "tecnologia.laboratorio-quimico.menu",
		href: "laboratorio-quimico",
	}
]

function Technology() {
	const isDesktop = useMediaQuery({ minWidth: 992 });

	return <Container fluid className='bg-maxi' style={{ overflow: 'hidden' }}  >
		<Row >
			<Col xs={2} lg={2} sm={2} className="d-none d-lg-block bg-maxi" style={{ padding: 0, paddingTop: '10rem' }}>
				<NavSideBar ItemsNavLink={ItemsNavLinkTechnology} />
			</Col>
			<Col xs={12} lg={10} sm={12} className="align-items-center justify-content-center bg-maxi " style={{ height: 'auto', padding: 0, }}>
				<Forging id={'forjaria'} />
				<HeatTreatment id={'tratamento-termico'} />
				<Machining_1 id={'usinagem-1'} />
				<Machining_2 id={'usinagem-2'} />
				<Expedition id={'expedicao'} />
				<ToolShop id={'ferramentaria'} />
				<MechanicalLaboratory id={'laboratorio-mecanico'} />
				<MetallurgicalLaboratory id={'laboratorio-metalurgico'} />
				<Metrology id={'metrologia'} />
				<ChemicalLab id={'laboratorio-quimico'} />
			</Col>
		</Row>
	</Container>;
}

export default Technology;