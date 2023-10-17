import { initReactI18next } from 'react-i18next'
import en from './Locales/en/en-us.json'
import pt from './Locales/pt/pt-br.json'
import i18next from 'i18next';

i18next
    .use(initReactI18next)
    .init({
        lng: 'pt',
        resources : {
            'pt': pt,
            'en': en
        },
        interpolation: {
            escapeValue: false,
        }
    })

export default i18next;