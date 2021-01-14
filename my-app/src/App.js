import React, {Component} from "react";
import Navbar from './components/layout/Navbar';
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/UserItem";
import axious from "axious";
import './App.css';


class App extends Component {
    //getting information from github API using axious

    //creating state
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        //  setting that state
        this.setState({loading: true});
        //creating url with access token for github API
        const res = await axious.get('https://api.github.com/users?client_id=$' +
            '{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_SECRET=$' +
            '{process.env.REACT_APP_GITHUB_CLIENT_SECRET}');
        this.setState({users: res.data, loading: false})
    }

    render() {
        return (
            <div className="App">
                /* navbar components and adding props */
                <Navbar/>
                <div className='container'>
                    <Users loading={this.state.loading} user={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
