import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav() {

    // let {user} = this.props;
    
    return(
        <div>
        <div>Nav</div>
        <button>
            <Link to='/dashboard' className='button'>Home</Link>
        </button>

        <button>
            <Link to='/post/:postid' className='button'>New Post</Link>
        </button>

        <button>
            <Link to='/' className='button'>Logout</Link>
        </button>


        </div>
    )
}

// function mapStateToProps(state) {
//     return{
//         user: state.user,
//     }
// }

export default Nav;
//  connect(mapStateToProps)(Nav);

