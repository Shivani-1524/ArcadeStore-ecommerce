import React from 'react'
import './AuthPage.css'
import { Link } from 'react-router-dom'

const LogoutPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-card logout">
                <p className="md-title center-txt light-grey-txt">You've been logged out</p>
                <Link to='/'>
                    <button className="btn primary-btn solid mg-t-20">
                        Back To Home Page
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LogoutPage