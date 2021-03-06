import React from 'react';
import { Link } from 'react-router-dom'
import { logoutApi } from '../../src/store/api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUserTag, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function BaseLayout(props) {
    
    const styles = {
        background: "lightgray",
        margin: 0,
        padding: "10px 50px"
    }

    const logout = () => {

        logoutApi()
        .then(data => {
            localStorage.removeItem('loggedIn')
            props.history.push('/login')
        })
        .catch(console.log)
    }

    return (
        <div>

            <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={styles}>
                
                <Link className="navbar-brand" to={"/"}>
                    <h3>Online NoteKeeping</h3>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" >

                        {
                            localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') !== undefined ?
                            <>
                                <li className="nav-item" >
                                    <Link className="nav-link" to={"/"} style={{color: "black"}}><FontAwesomeIcon icon={faBook} /> My Notes </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/shared"} style={{color: "black"}}> <FontAwesomeIcon icon={faUserTag} /> Shared with me </Link>
                                </li>
                            </> :

                            null
                        }

                    </ul>
                </div>
                
                
            
                {
                    localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') !== undefined ?
                    
                    <button onClick={logout} className="btn btn-sm btn-secondary text-white float-right" style={{color: "black"}}>Logout <FontAwesomeIcon icon={faSignOutAlt} /></button>
                    
                    : null
                   
                }
            </nav>


        </div>
    )
}

export default BaseLayout