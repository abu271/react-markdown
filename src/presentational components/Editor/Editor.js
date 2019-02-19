import React from 'react'

const Editor = (props) => {
    return (
        <div id = "editor">
            <textarea rows = "20" cols = "70" onChange = {props.type}></textarea>
        </div>
    )
}

export default Editor