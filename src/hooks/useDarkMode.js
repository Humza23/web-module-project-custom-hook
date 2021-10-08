
import useLocalStorage from './useLocalStorage.js'

const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('dark', initialValue )

    return ([someValue,setSomeValue])
}

export default useDarkMode;