import logo from '../images/logo.svg';
import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navHeight: -1,
            logoDiv: null,
            margin: 0,
            li: null,
        }
    }

    render() {

        return (
            <div className = "navigation">
                <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                    <div className = "logo" >
                        <a href = "index.html"><img ref={ref => this.state.logoDiv = ref} src={logo} /></a>
                    </div>
                    </div>

                    <div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                    <div className = "primary-nav" style={{ paddingTop: 10 }}>
                        <ul>
                            <li ref={ref => this.state.li = ref}><Link to={"/"}>Home</Link></li>
                            <li><a href = "portfolio.html"><Link to={"portfolio"}>Portfolio</Link></a></li>
                            <li><a href = "contact.html"><Link to={"contact"}>Contact</Link></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default NavBar;