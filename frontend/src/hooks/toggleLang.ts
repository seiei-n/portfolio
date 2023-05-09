import { useCallback,  useState, useLayoutEffect,} from "react";


export function useLanguage(
    defaultValue: string
): [language: string, setLanguage: (language: string) => void] {
    const [languageInternal, setLanguageInternal] = useState(defaultValue);
    // クライアントでの初期レンダリング直後にローカルストレージの設定を反映
    useLayoutEffect(() => {
        const language = localStorage.getItem('lang');
        if (language && language !== defaultValue) {
            setLanguageInternal(language);
        }
    }, [defaultValue, setLanguageInternal]);

    // 外部からのセッター呼び出し時にローカルストレージに値を保存する
    const setLanguage = useCallback(
        (language: string) => {
            localStorage.setItem('lang', language);
            setLanguageInternal(language);
        },
        [setLanguageInternal]
    );


    return [languageInternal, setLanguage];
}
