import React, from "react";


const Navbar = (props) =>  {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    {/*adding props from main library */}
                    <i className={props.icon}/>
                    {props.title}
                </h1>
            </nav>
        );
}

//Intsead of using static we will put the name of the component which is Navbar
Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
};

// adding props types for Title and icon
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar;
