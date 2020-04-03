import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import Navbar from './Navbar/Navbar';

const Layout = ({ children, title = '', image = '', describe = '', isAuthenticated, deauthenticate }) => {


    return (
        <>
            <Head>
                <title>{title} • Domaine</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href={process.env.FAVICON} type="image/png"/>
                <link rel="image_src" href={image} />
                <meta name="title" content={title + process.env.BASE_TITLE} />
                <meta name="description" content={describe} />
                <meta name="keywords" content={process.env.KEYWORDS} />
                <meta name="author" content={process.env.AUTHOR} />
                <meta name="copyright" content={process.env.COPYRIGHT} />
                <meta itemProp="image" content={image} />
                <meta name="twitter:card" content={image} />
                <meta name="twitter:site" content={process.env.TWITTER_TAG} />
                <meta name="twitter:title" content={title + process.env.BASE_TITLE} />
                <meta name="twitter:description" content={describe} />
                <meta name="twitter:image:src" content={image} />
                
                <meta property="og:title" content={title + process.env.BASE_TITLE} />
                <meta property="og:url" content={process.env.DOMAIN} />
                <meta property="og:image" content={image} />
                <meta property="og:description" content={describe} />
                <meta property="og:site_name" content={process.env.WEBSITE_NAME} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={process.env.LANG} />

                <link rel="stylesheet" href="/css/app.css" />
                <link rel="stylesheet" href="/css/leadcode.css" />
            </Head>
            
            <Navbar isAuth={isAuthenticated} logout={deauthenticate} />

            <div className="application">
                { children }
            </div>
        </>
    )
}

const mapStateToProps = (state) => (
    {isAuthenticated: !!state.authentication.token}
)

export default connect(mapStateToProps, actions)(Layout)
