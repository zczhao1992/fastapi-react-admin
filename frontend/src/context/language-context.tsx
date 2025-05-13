import { createContext, useContext, useState } from "react";
import i18n from '@/i18n';

type Language = "zh" | "en";

type LanguageProviderProps = {
    children: React.ReactNode;
    defaultLanguage?: Language;
    storageKey?: string;
};

type LanguageProviderState = {
    language: Language;
    setLanguage: (language: Language) => void;
};

const initialState: LanguageProviderState = {
    language: "zh",
    setLanguage: () => null,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
    children,
    defaultLanguage = "zh",
    storageKey = "vite-language",
    ...props
}: LanguageProviderProps) {
    const [language, _setLanguage] = useState<Language>(
        () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
    );

    const setLanguage = (language: Language) => {
        localStorage.setItem(storageKey, language);
        i18n.changeLanguage(language); 
        _setLanguage(language);
    };

    const value = {
        language,
        setLanguage,
    };

    return (
        <LanguageProviderContext.Provider {...props} value={value}>
            {children}
        </LanguageProviderContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
    const context = useContext(LanguageProviderContext);

    if (context === undefined)
        throw new Error("useLanguage must be used within a LanguageProvider");

    return context;
};