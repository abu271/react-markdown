import React from 'react'
import marked from 'marked'
import './Preview.css'

const Preview = (props) => {
    const markdown = marked(props.value)
    return (
        <div id="preview">
            <div id = "markdown" dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
    )
}

export default Preview