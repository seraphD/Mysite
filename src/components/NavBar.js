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

    resize = () => {
        const { logoDiv, li } = this.state;
        const height = logoDiv.clientHeight;
        const margin = (height - li.clientHeight) / 2;
        this.setState({ navHeight: height, margin });
    }

    componentDidMount() {
        setTimeout(() => {
            this.resize();
            window.addEventListener('resize', this.resize);
        }, 10);
    }

    render() {
        const { navHeight, margin } = this.state;

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
                    <div className = "primary-nav" style={{ height: navHeight > 0 ? navHeight : "auto" }} >
                        <ul>
                            <li style={{ marginTop: margin }} ref={ref => this.state.li = ref}><Link to={"/"}>Home</Link></li>
                            <li style={{ marginTop: margin }}><a href = "portfolio.html"><Link to={"portfolio"}>Portfolio</Link></a></li>
                            <li style={{ marginTop: margin }}><a href = "contact.html"><Link to={"contact"}>Contact</Link></a></li>
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