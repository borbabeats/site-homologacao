import { useState } from 'react';
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { NavLink } from 'reactstrap';

function Popover({ }) {
    const { t, i18n: { changeLanguage, language } } = useTranslation()
    const [currentLanguage, setCurrentlanguage] = useState(language)
    const [languageSelect, SetLanguageSelect] = useState(currentLanguage)
    const [isVisible, setIsVisible] = useState(false)
    const divs = ['pt', 'en'];

    const onMouseLeave = e => setIsVisible(false)
    const onMouseEnter = e => setIsVisible(true)

    const onClickLanguage = ({ target }) => {
        const newlanguage = target.id
        SetLanguageSelect(newlanguage)
        changeLanguage(newlanguage)
        setCurrentlanguage(newlanguage)
    }

    return (<NavLink className="color-secondary" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div style={{ position: 'relative' }}  onMouseEnter={onMouseEnter} >
            <BiWorld style={{ height: 20, width: 'auto', padding: 0, }}  onMouseEnter={onMouseEnter} />
            {isVisible && <div onMouseLeave={onMouseLeave}  style={{
                top: '120%', left: '50%', transform: 'translate(-50%, 0)', position: 'absolute', height: 'auto', animation: ''
            }}>
                <div style={{
                    height: 10, width: 10, backgroundColor: '#d0d0d0', rotate: '45deg',
                    border: '2px solid #d0d0d0', borderRight: 0, borderBottom: 0
                }} > </div>
                <div style={{
                    top: '50%', left: '50%', transform: 'translate(-50%, 0)',
                    position: 'absolute', zIndex: 2, width: 100, height: 30, overflow: 'hidden',
                    borderRadius: 2, border: '0', display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', textAlign: 'center', padding: 0, cursor: 'pointer'
                }}>
                    <div style={{ border: 0, width: '100%', height: '100%', borderRadius: 4, display: 'flex' }}>
                        {divs.map((item, index) => (
                            <div key={index} id={item} onClick={onClickLanguage} style={{
                                flex: 1, border: 0, padding: 4, height: '100%',
                                width: '100%', textAlign: 'center', alignItems: 'center', transition: 'background-color 0.8s ease',
                                backgroundColor: languageSelect === item ? '#001f3d' : '#d0d0d0'
                            }}> {item} </div>))}
                    </div>
                </div>
            </div>}
        </div>
    </NavLink>);
}

export default Popover;