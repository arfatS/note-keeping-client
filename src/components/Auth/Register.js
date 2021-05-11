import React from 'react';
import { Link } from 'react-router-dom';

import { registerUserApi } from '../../store/api'

class Register extends React.Component {

    initialForm = {
        name: '',
        email: '',
        password: ''
    }

    constructor(props) {
        super(props)

        this.state = {
            form: {
                ...this.initialForm
            },
            message: ''
        }
    }


    handleInputChange = e => {

        this.setState({
            form: { 
                ...this.state.form, 
                [e.target.name]: e.target.value
            }
        })
    }

    onSave() {
        let { form } = this.state;

        if (!form.email || !form.password || !form.name) {
            this.setState({
                message: 'All fields are required'
            })
            return
        }

        let checkEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(form.email)
        if (!checkEmail) {
            this.setState({
                message: 'Please enter a valid email address'
            })
            return
        }

        if (form.password.length < 8) {
            this.setState({
                message: 'Password must be atleast 8 characters long'
            })
            return
        }

        registerUserApi(form)
        .then(data => {
            localStorage.setItem('loggedIn', data.data.user.id)
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({
                message: 'Some error occurred while creating the user'
            })
        })
    }



    render(){

        const { form, message } = this.state

        return(
            <div className="container-fluid">

                <div className="card">
                    <div className="card-body">
                        <div className="row">

                            <div className="col-md-2"></div>

                            <div className="col-md-8">
                                <h2>Register User</h2>

                                <div className="mt-3">
                                    <p className="text-danger" >{message}</p>

                                    <div className="form-group">
                                        <label htmlFor="name"> 
                                            <h5>Name</h5>
                                        </label>
                                        <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={this.handleInputChange}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="email"> 
                                            <h5>Email Id</h5>
                                        </label>
                                        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={this.handleInputChange} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="password"> 
                                            <h5>Password</h5>
                                        </label>
                                        <input type="password" className="form-control" id="password" value={form.password} name="password" onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group text-center">
                                        <button className="btn btn-dark btn-lg mt-3" onClick={() => { this.onSave() }} >Register</button>

                                        <div className="mt-2">
                                            <Link to={'/login'} className="btn btn-light border">Have an account? Login</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-2"></div>

                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Register