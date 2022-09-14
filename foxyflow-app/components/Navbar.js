import Link from 'next/Link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

//Top navbar 
export default function Navbar(){
    const { user, username } = useContext(UserContext); //user signs in or out -- everything inside </UserContext.Provider> changes. 

    return (
        <nav className="navbar">
            <ul>
                <li>
                <Link href="/">
                    <button className="btn-logo">Feed</button>
                </Link>
                </li>
                {/* user is signed-in and has username*/ }
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Posts</button>
                                </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed in or has not created a username */}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}