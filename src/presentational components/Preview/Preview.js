import React from 'react'
import marked from 'marked'
import './Preview.css'

marked.setOptions({
    breaks: true,
})

const Preview = (props) => {
    const renderer = new marked.Renderer()
    const markdown = marked(props.value, { renderer: renderer })
    return (
        <div className="card" id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
    )
}

export default Preview