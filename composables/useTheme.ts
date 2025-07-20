export const useTheme = () => {
    const colorMode = useColorMode()

    const currentTheme = computed(() => colorMode.value)

    const isDarkMode = computed(() => colorMode.value === 'dark')

    const setTheme = (theme: string) => {
        colorMode.preference = theme
    }

    const toggleDarkMode = () => {
        colorMode.value === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return {
        colorMode,
        currentTheme,
        isDarkMode,
        setTheme,
        toggleDarkMode,
    }
}