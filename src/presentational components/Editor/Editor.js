import React from 'react'

const Editor = (props) => {
    return (
        <div id = "editor">
            <textarea className="card"  onChange = {props.type}></textarea>
        </div>
    )
}

export default Editor