import React from 'react'
import { Image } from 'antd'

import logo from '~/assets/img/logo.png'

function Logo(props) {
    const { width, height, preview = false } = props

    return (
        <Image
            src={logo}
            width={width}
            height={height}
            preview={preview}
            alt="Hi Platform"
        />
    )
}

export default Logo
