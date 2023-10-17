import { Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next"

export default function ToolTip({ onMouseEnterDiv, onMouseLeaveDiv, divPosition, infoPiece }) {
    const { t } = useTranslation()
// atuação social & governancia corporatica
    return <div onMouseEnter={onMouseEnterDiv}
        onMouseLeave={onMouseLeaveDiv}
        style={{
            left: divPosition.left,
            top: divPosition.top,
            position: 'absolute',
            zIndex: 99,
            width: 250,
            height: 'auto',
            // backgroundColor: '#001f3d',
            backgroundColor: '#001f3d',
            color: '#001f3d',
            overflow: 'hidden',
            borderRadius: 5,
            border: '3px solid #001f3d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            
        <Row>
            {infoPiece.img && infoPiece.img.map(m =>
                <Col>
                    <img src={m} style={{ height: 'auto', width: '80%', padding: 5 }} alt="" />
                </Col>
            )}
        </Row>
        <div style={{ height: 1, width: '95%', border: 0, borderBottom: '2px solid #869a9a', margin: 5 }}></div>
        <Row>
            <Col>
                <h6 style={{ margin: 5, }}>{t(infoPiece.name)}</h6>
            </Col>
        </Row>
        <div style={{ height: 2, width: '95%', border: 0, borderBottom: '2px solid #869a9a', margin: 5 }}></div>
    </div>
}
