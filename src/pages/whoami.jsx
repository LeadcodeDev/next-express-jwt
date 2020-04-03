import { connect, useStore } from 'react-redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import AuthActions from '../redux/actions/authActions';
import API from './../services/API';
import { useEffect } from 'react';

const Whoami = ({ user }) => {
    
    // Recover the user with ID: 1
    const fetchUser = async () => {
        await API.find('/users/' + 1)
            .then(datas => console.log(datas))
    }

    // When the page loads, performs the indicated functions
    useEffect(() => {
        fetchUser()
    }, [])
    
    return (
        <Layout title="Who Am I">
            {(user && (
                <h3 className="title is-3">You are logged in as{' '} <strong className="is-size-2 has-text-primary">{user}</strong>.
                </h3>
            )) || (
            <h3 className="title is-3 has-text-danger">You are not authenticated.</h3>
            )}
        </Layout>
        )
}

Whoami.getInitialProps = async ctx => {
    initialize(ctx)
}

export default connect(state => state)(Whoami);
