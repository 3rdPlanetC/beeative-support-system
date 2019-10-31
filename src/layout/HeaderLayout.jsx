import React from 'react'

const HeaderLayout = (props) => {
    return (
        <div id="header" className="width100 height100 marginAuto grid">
            {props.children}
        </div>
    )
}

export default HeaderLayout