import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
    const useStyles = {
        bg: {
          backgroundColor: 'rgb(6, 6, 12)',
          height: '100vh',
        },
        errorText: {
            color: 'rgb(101, 204, 255)',
            fontSize: '26px',
            position: 'fixed',
            top: '30%',
            left: '50%'
        },
        linkBack: {
            outline: 'none',
            border: 'none',
            backgroundColor: 'cyan',
            borderRadius: '5px',
            padding: '10px',
            color: '#fff'
        }
    };
    return (
        <div style={useStyles.bg}>
            <div style={useStyles.errorImg}>
                
            </div>
            <div style={useStyles.errorText}>
                <h1>404</h1>
                <p>Page not Found!</p>
                <br />
                <Link style={useStyles.linkBack} to="/">Back Home</Link>
            </div>
        </div>
    )
}

export default Error
