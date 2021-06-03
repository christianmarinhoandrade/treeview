import { useState, useEffect, useCallback } from 'react'

function useLocalStorage(key, defaultValue = null) {
    const [value, setValue] = useState(() => {
        const storagedValue = localStorage.getItem(key)
        return storagedValue ? JSON.parse(storagedValue) : null
    })

    useEffect(() => {
        if (defaultValue) {
            localStorage.setItem(key, JSON.stringify(defaultValue))
            setValue(defaultValue)
        }
    }, [defaultValue, key])

    const updateValue = useCallback(
        (newValue) => {
            localStorage.setItem(key, JSON.stringify(newValue))
            setValue(newValue)
        },
        [key],
    )

    const removeValue = useCallback(() => {
        localStorage.removeItem(key)
        setValue(null)
    }, [key])

    return [value, (newValue) => updateValue(newValue), () => removeValue()]
}

export default useLocalStorage
