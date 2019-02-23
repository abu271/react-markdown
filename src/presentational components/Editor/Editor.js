import React from 'react'

const Editor = (props) => <textarea id = "editor" className="card" value = {props.text} onChange = {props.type} />


export default Editor