import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to="/">
                <div>
                    Daily News
                </div>
            </Link>
        </header>
    )
}


export default Header;