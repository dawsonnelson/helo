import React, {Component} from 'react';
import Axios from 'axios';
import {updateUser} from '../../ducks/reducer'

export default class Auth extends Component{
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };

    }

    updateUsername(value) {
        this.setState({username: value});
    }

    updatePassword(value) {
        this.setState({password: value});
    }


    async componentDidMount() {
        let userData = await Axios.get('/api/userData');
        this.props.updateUser(userData.data)
    }


    render() {
        let {user} = this.props;
        return(
<div>
     <div>Auth</div>

         <div>

       <input placeholder='username' onChange={ ( e ) => this.updateUsername( e.target.value ) } value={ this.state.username }  />
       <input placeholder='password' onChange={ ( e ) => this.updatePassword( e.target.value ) } value={ this.state.password }  />
        </div>

            <div>
        <button>LOGIN</button>
        <button>REGISTER</button>
            </div>

            

 </div>
        )
    }
}