import { connect } from 'react-redux'
import initialize from '../utils/initialize'
import Layout from '../components/Layout'

const Index = () => (
    <Layout title="Home">
        <div className="container grid-md text-center">
            <h2 className="title is-2">Authentication with Next.js and JWT</h2>
            <img src="/img/nextjs.jpg" className="img-responsive" />
            <p>
                A proof of concept app, demonstrating the authentication of Next.js
                application using JWT.
            </p>
        </div>
    </Layout>
)

Index.getInitialProps = (ctx) => {
    initialize(ctx)
}

export default connect(state => state)(Index)
