import React, { Component } from 'react';
import './App.css';
import Editor from '../../presentational components/Editor/Editor'
import Preview from '../../presentational components/Preview/Preview';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: placeholder
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron container">
          <h1 id="header"><i className="fab fa-react"></i> React-down</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <p className="title">Typer</p>
            <Editor text={this.state.value} type={this.handleChange} />
          </div>
          <div className="col-lg-8 col-sm-12">
            <p className="title">Display</p>
            <Preview value={this.state.value} />
          </div>
        </div>
      </div>
    )
  }
}

const placeholder =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default App;