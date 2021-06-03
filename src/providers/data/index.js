import React, { createContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { dataSelector } from '~/pages/home/store/selector'

import useLocalStorage from '~/hooks/useLocalStorage'

const DataContext = createContext()

function DataProvider(props) {
    const { children } = props
    const data = useSelector(dataSelector)

    const [storageData, setStorageData, removeStorageData] = useLocalStorage(
        '@data'
    )

    useEffect(() => {
        if (data && data.length > 0)
            setStorageData(data)
    }, [data])

    return (
        <DataContext.Provider
            value={{
                data: storageData
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export { DataContext }

export default DataProvider
