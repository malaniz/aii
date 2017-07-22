import React, { Component } from 'react';
import '../styles/components/App.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
    console.log(this.state);
  }
  render() {
    return (
      <div className={ this.state.clicked ? 'topnav responsive' : 'topnav' }>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="icon" onClick={(e) => {
          this.handleClick();
        }}>&#9776;</a>
    </div>
    )
  }
}
const Footer = (props) => (
  <div className="Footer">
    Developed By <AALogoText/>
  </div>
)

const AALogoText = (props) => {
  const style = {
    fontSize: props.size || '24px',
    marginLeft: 0
  }
  return (
    <div className="logo" style={{display: 'inline'}}>
      <span className="aa" style={style}> AII </span>
      <span className="soft" style={Object.assign({}, style, { marginLeft: '-10px'})}> software </span>
    </div>
  )
}

const AALogo = (props) => (
  <div className={ props.black ? 'invert' : 'normal' }>
    <div className="center">
      <div className="logo">
        <span className="aa"> AII </span>
        <span className="soft"> software </span>
      </div>
      { props.slogan && <div className="slogan">
        {props.slogan}
      </div>}
    </div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <AALogo slogan="Fuck the system" />
        <AALogo slogan="TECH MADE EASY" black={true} />
        <Footer />
      </div>
    );
  }
}

export default App;
