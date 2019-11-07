import React from 'react';
import Header from '../header/header'
import Main from '../main/main'
import './app.css'
import { animate, appear } from '../../mixins/applyStyle'
import cookie from '../../mixins/cookie'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeElementIndex: 0,
      visible: true
    }
    this.toggleActiveElementIndex = this.toggleActiveElementIndex.bind(this)
  }

  toggleActiveElementIndex() {
    console.log('Clicked toggleActiveElementIndex')
    this.setState({
      activeElementIndex: +!this.state.activeElementIndex
    })
  }

  componentDidMount() {

    /* Check for cookie (shows whether logged in in the past day) */
    if (!cookie.exists()) {
      animate()
      setTimeout(() => {
        this.state.visible = true;
      }, 3000)
    } else {
      appear() 
      /* make things visible */
    }

    /* Set cookie */
    cookie.set()

  }

  render() {

    return (
      <div className="App">
        <div
          className={'icon-left-open ' + (this.state.visible ? null : 'to-fade-in')}
          onClick={this.toggleActiveElementIndex}
        ></div>
        <div id="content">
          <Header
            visibility={this.state.visibility}
          />
          <Main
            activeElementIndex={this.state.activeElementIndex}
            visibility={this.state.visibility}
          />
        </div>
        <div
          className={'icon-right-open ' + (this.state.visible ? null : 'to-fade-in')}
          onClick={this.toggleActiveElementIndex}
        ></div>
      </div>
    );
  }
}

export default App;
