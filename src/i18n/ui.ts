// export const languages = {
//     es: 'Español',
//     en: 'English',
// };

import { es } from './languages/es'
import { en } from './languages/en'

export const defaultLang = 'es';

export const ui = {
    es, en
} as const;