import Head from 'next/head';

export default function Metatags({ title, description, image }) {
    title = "Foxyflow's Site",
    description = "For enturprenuers and developers",
    image = "https://foxyflow.net/"
    return (
        <Head>
            <title>{title}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@int_Luke" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />


        </Head>
    );
}