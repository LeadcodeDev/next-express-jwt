import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import initialize from '../utils/initialize'
import Layout from '../components/Layout'

const Signin = (props) => {

    const [datas, setDatas] = useState({})

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setDatas({...datas, [name]: value})
    }

    const handleSubmit = (event) => {
        const { username, password } = datas
        event.preventDefault()

        props.authenticate({
            username, password
        }, 'login_check')
    }

    return (
        <Layout title="Sign In">
            <h3 className="title is-3">Sign In</h3>
            <form onSubmit={handleSubmit} className="container" style={{ width: '540px' }}>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" name="username" required onChange={handleChange} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check" />
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password" name="password" required onChange={handleChange} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock" />
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-text-centered">
                        <button type="submit" className="button is-success">Sign In</button>
                    </p>
                </div>
            </form>
        </Layout>
    )
}

Signin.getInitialProps = (ctx) => {
    initialize(ctx)
}

export default connect(
    state => state,
    actions
)(Signin)
