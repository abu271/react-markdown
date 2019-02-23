import React from 'react'
import './Editor.css'

const Editor = (props) => <textarea id = "editor" className="card" value = {props.text} onChange = {props.type} />


export default Editor