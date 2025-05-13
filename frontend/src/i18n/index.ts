import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enUs from './en-us.json';
import zhCn from './zh-cn.json';

export const SUPPORTED_LANG = [
    'zh-cn',
    'en-us',
];
// 配置参数的文档: https://www.i18next.com/overview/configuration-options
const option = {
    fallbackLng: 'zh', // 默认语言
    debug: process.env.NODE_ENV !== 'production',
    resources: { // 支持的语言
        en: {
            translation: enUs,
        },
        zh: {
            translation: zhCn,
        },
    },
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
};
// 注入react-i18next实例并初始化
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init(option);

export default i18n;
