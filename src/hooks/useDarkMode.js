
import useLocalStorage from './useLocalStorage.js'

const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('form', initialValue )

    return ([someValue,setSomeValue])
}

export default useDarkMode;