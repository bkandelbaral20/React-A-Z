import React, {Component} from "react";
import Navbar from './layout/Navbar';
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/UserItem";
import axios from "axios";
import './App.css';


class App extends Component {
    //getting information from github API using axious

    //creating state
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        // //  setting that state
        // this.setState({loading: true});
        // //creating url with access token for github API
        // const res = await axios.get('https://api.github.com/users?client_id=$' +
        //     '{process.env.REACT_APP_GITHUB_CLIENT_ID}&client_SECRET=$' +
        //     '{process.env.REACT_APP_GITHUB_CLIENT_SECRET}');
        // this.setState({users: res.data, loading: false})
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className='container'>
                    <Users loading={this.state.loading} user={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
