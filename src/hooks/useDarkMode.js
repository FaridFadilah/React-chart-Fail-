import React from 'react'

export default function useDarkMode() {
    const [Theme, setTheme] = React.useState("light")
    const colorTheme = Theme === "light" ? "dark" : "light"
    React.useEffect(() => {
        const root = window.document.documentElement

        root.classList.add(Theme)
        root.classList.remove(colorTheme)
    }, [setTheme, colorTheme])
    return [setTheme,colorTheme]
}