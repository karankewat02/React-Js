import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";
export class Navabar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Gyan Ganga News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item active">
                                <Link className="nav-link" to="/campus">Campus</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/academics">Academics</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/placements">Placements</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link"   to="/events">Events</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link"aria-current="page" to="/general">General</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                 
                            
                        </ul>

                        <Link className="nav-link" to="/login"><button type="button" class="btn btn-primary">Login/Register</button></Link>
                        
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Navabar
