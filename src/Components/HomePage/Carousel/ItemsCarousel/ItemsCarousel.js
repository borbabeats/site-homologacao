import { useTranslation } from "react-i18next";

export default function ItemsCarousel({ image, textH1, textH2 }) {
    const { t } = useTranslation()

    return (
        <div className="page-header">
            <div className="motto filter text-center" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={image} style={{ objectFit: 'cover', objectPosition: 'center', height: '100vh', width: '100vw' }} alt="" />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    {textH1 && <h1>{t(textH1)}</h1>}
                    {textH1 && <h4>{t(textH1)}</h4>}
                </div>
            </div>
        </div>
    );
}

