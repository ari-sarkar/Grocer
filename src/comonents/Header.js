import React from "react";
import "../styles/Header.css";
import { HashLink as Link} from "react-router-hash-link";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        isTrue : false,
    }
  }
  hamburgerHandler(){
      this.setState({
          isTrue : !this.state.isTrue,
      })
  }
  render() {
    return (
      <div>
        <header>
          <div className="left-header">
            <Link smooth to="#"  style={{textDecoration: 'none'}}>
            <h2 className="logo">Grocer</h2>
            </Link>
          </div>
          <div className="hamburger" onClick={this.hamburgerHandler.bind(this)}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className={this.state.isTrue ? "right-header open" : "right-header close"}>
            <ul className="navigation-menu">
            <Link smooth to="#">
            <li>Home</li>
            </Link>
            <Link smooth to="#products">
            <li>Products</li>
            </Link>
            <Link smooth to="#locate-us">
            <li>Locate us</li>
            </Link>
            </ul>
          </div>
          <div className={this.state.isTrue ? "backdrop unhide" : "hide"} onClick={this.hamburgerHandler.bind(this)}/>
        </header>
      </div>
    );
  }
}
export default Header;
