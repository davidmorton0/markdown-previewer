import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'marked';
import * as serviceWorker from './serviceWorker';

var defaultText = `# H1 Heading
## H2 Heading
[An inline-style link](https://www.google.com)

<table>
  <tr>
    <td>A Table</td>
    <td>from</td>
    <td>inline html</td>
  </tr>
</table>

\`Inline code\`

    A code block
A List:
1. Item 1
2. Item 2
3. Item 3

> A blockquote

![An image](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Markdown Logo")

**bolded text**`;

var markedOptions = {
  breaks: true
}

function processHtml(id, text) {
  document.getElementById(id).innerHTML = marked(text, markedOptions);
}

class Previewer extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: defaultText,
      htmlPreview: this.htmlPreview(defaultText),
      loading: true,
    };
  }

  htmlPreview(text) {
    return marked(text, markedOptions)
  }

  updateText(event) {
    this.setState({
      markdown: event.target.value,
      htmlPreview: this.htmlPreview(event.target.value),
    });
  }

  componentDidMount() {
    this.setState({
      loading: false,
    })
  }

  componentDidUpdate() {
    if (!this.state.loading) {
      processHtml('preview', this.state.markdown)
    }
  }

  render() {
    return (<div>
              <h2 id="main-h2">Markdown</h2>
              <textarea id="editor" value={this.state.markdown}
                onChange={this.updateText.bind(this)}>{defaultText}</textarea>
              <h2 id="main-h2">HTML</h2>
              <textarea id="html-preview" value={this.state.htmlPreview}>
              </textarea>
              <h2 id="main-h2">Preview</h2>
            </div>
           );
  }
}

ReactDOM.render(<Previewer />, document.getElementById('app'));
serviceWorker.unregister();
