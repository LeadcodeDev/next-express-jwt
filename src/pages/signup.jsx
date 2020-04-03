import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

const Signup = (props) => {
    const [datas, setDatas] = useState({})

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setDatas({...datas, [name]: value})
    }

    const handleSubmit = (event) => {
      event.preventDefault();
        props.authenticate({
            email: this.state.email,
            password: this.state.password
        }, 'signup')
    }

    return (
        <Layout title="Sign Up">
            <h3 className="title is-3">Sign Up</h3>
            <form onSubmit={handleSubmit} className="container" style={{ width: '540px' }}>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" required onChange={handleChange} />
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
                          <input className="input" type="password" placeholder="Password" required onChange={handleChange} />
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

Signup.getInitialProps = (ctx) => {
    initialize(ctx)
}

export default connect(
  state => state,
  actions
)(Signup)
