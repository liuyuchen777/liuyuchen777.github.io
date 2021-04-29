/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-27 23:41:34
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-28 01:46:42
 * @Description: 
 * @FilePath: /taskTracker/src/components/Header.js
 * @GitHub: https://github.com/liuyuchen777
 */

import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    // const onClick =  () => {
    //     console.log("On Click!")
    // }

    return (
        <header className='header'>
            <h1 style={headingStyle}>
                {props.title}
            </h1>
            <Button onClick={props.onAdd} color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add'} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

const headingStyle = {
        color: 'black', 
}

export default Header
