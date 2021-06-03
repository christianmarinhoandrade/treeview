
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { setDataComponent } from '../store/action'

import useData from '~/hooks/useData'

import * as S from '../styles';


const buildArray = (json) => {
    const array = []
    const objectArray = Object.entries(json);

    objectArray.forEach(([key, value]) => {

        if (value.children) {
            value.children = buildArray(value.children)
        }

        array.push(value)
    });

    return array
}

function HomeFormComponent(props) {
    const { json } = props

    const [data, setData] = useState([])
    const [mouseOver, setMouseOver] = useState(false)

    const dispatch = useDispatch()

    const dataComponent = useData()

    useEffect(() => {
        let result
        if (dataComponent?.data && dataComponent.data.length > 0)
            result = dataComponent.data
        else
            result = buildArray(json)
        setData(result)
    }, [])

    const rowsMapChildren = (obj, name, value) => {
        let result = null
        if (obj.children) {
            result = obj.children.map((i) => {
                i[name] = value

                if (i.children) {
                    i.children = rowsMapChildren(i, name, value)
                }
                return i
            })
        }

        return result
    }

    const rowsMap = (array, name, value, id) => {
        const result = array.map((obj) => {
            if (obj.id === id) {
                obj[name] = value

                if (name === 'isChecked')
                    obj.children = rowsMapChildren(obj, name, value)
            }
            else if (obj.children)
                obj.children = rowsMap(obj.children, name, value, id)

            return obj
        })

        return result
    }

    const onCheckItem = (value, item) => {
        const result = rowsMap(data, 'isChecked', value, item.id)

        dispatch(setDataComponent(result))
        setData(result)
    }


    const onToggleItem = (value, item) => {
        const result = rowsMap(data, 'toggleDetail', value, item.id)

        dispatch(setDataComponent(result))
        setData(result)
    }

    const renderRow = (item, index, level) => {
        const margin = 40
        return (
            <Fragment key={`row-${level}-${index}`}>
                <S.Row id="test" margin={margin} onClick={() => { if (!mouseOver) onCheckItem(!item.isChecked, item) }}>
                    <S.Column id="test-checkbox" marginLeft={margin * level}>
                        <input
                            type="checkbox"
                            checked={item.isChecked || false}
                            onChange={(e) => onCheckItem(e.target.checked, item)}
                        />
                    </S.Column>
                    <S.Column>
                        {item.name}
                    </S.Column>
                    <S.Column id="test-toggle" marginLeft={"auto"} onClick={() => onToggleItem(!item.toggleDetail, item)}
                        onMouseOver={() => {
                            setMouseOver(true)
                        }}
                        onMouseLeave={() => {
                            setMouseOver(false)
                        }}
                    >
                        {!item.toggleDetail && <S.IconDown />}
                        {item.toggleDetail && <S.IconUpBlue />}
                    </S.Column>
                </S.Row>
                {
                    item.children && item.toggleDetail && (
                        item.children.map((obj, index) => {
                            return (renderRow(obj, index, obj.level))
                        })
                    )
                }
            </Fragment>

        )
    }


    return (
        <>
            {data.map((item, index) => {
                return renderRow(item, index, item.level);
            })}
        </>

    )
}

export default HomeFormComponent

export { buildArray }
