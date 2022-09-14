import Link from 'next/Link';

export default function Custom404() {
    return (
        <main>
            <h1>404 Error code: This page doesn't exist</h1>
                <iframe src="https://giphy.com/embed/l4FsIC6XXeS0wGIBG"
                width="100%" 
                height="0%" 
                padding-bottom="100%"
                position="relative"
                frameBorder="0" 
                allowFullScreen
                ></iframe>
                <Link href="/">
                    <button className="btn-blue">Go home</button>
                </Link>
        </main>
    );
}

