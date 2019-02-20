import React from 'react'
import marked from 'marked'

const Preview = (props) => {
    return (
        <div id = "preview">
            <p>
                {marked(props.value)}
            </p>
        </div>
    )
}

export default Preview