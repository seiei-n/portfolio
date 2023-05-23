import { useCallback, useEffect, useState, useLayoutEffect } from "react";

export function useTheme(
    defaultValue: string
): [theme: string, setTheme: (theme: string) => void] {
    const [themeInternal, setThemeInternal] = useState(defaultValue);
    // クライアントでの初期レンダリング直後にローカルストレージの設定を反映
    useLayoutEffect(() => {
        const theme =    sessionStorage.getItem("theme");
        if (theme && theme !== defaultValue) {
            setThemeInternal(theme);
        }
    }, [defaultValue, setThemeInternal]);
    // 外部からのセッター呼び出し時にローカルストレージに値を保存する
    const setTheme = useCallback(
        (theme: string) => {
            sessionStorage.setItem("theme", theme);
            setThemeInternal(theme);
        },
        [setThemeInternal]       
    );
    return [themeInternal, setTheme];
}
