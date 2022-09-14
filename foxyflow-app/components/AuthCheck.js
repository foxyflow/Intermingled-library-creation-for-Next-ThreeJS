import Link from 'next/Link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Component's children only shown with logged-in users
export default function AuthCheck(props) {
    const { username } = useContext(UserContext);

    return username ? props.children : props.fallback || <Link href="/enter">You must be signed in to access the goodies</Link>;
}