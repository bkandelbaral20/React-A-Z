
import React, {Component} from "react";


class Navbar extends Component {
    //adding default props
     static defaultProps = {
         title : "Github Finder",
         icon: "fab fa-github"
     };

    // adding props types for Title and icon
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired
    }
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    {/*adding props from main library */}
                    <i className={this.props.icon} />
                    {this.props.title}
                </h1>
            </nav>
        );
    }
}

export default Navbar;
