/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-27 23:57:19
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-28 00:06:21
 * @Description: 
 * @FilePath: /TS_playground/my-app/src/components/Button.js
 * @GitHub: https://github.com/liuyuchen777
 */

import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    // const onClick = () => {
    //     console.log("")
    // }

    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steeblue',
}

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
