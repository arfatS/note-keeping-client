import React from 'react';
import { Link } from 'react-router-dom';
import { loginUserApi } from '../../store/api'


class Login extends React.Component {
    
    initialForm = {
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

    componentDidMount(){
        localStorage.removeItem('loggedIn')
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
        
        if (!form.email || !form.password) {
            this.setState({
                message: 'Email or password cannot be empty'
            })
            return
        }

        loginUserApi(form)
        .then(res => {

            if (res.data) {
                localStorage.setItem('loggedIn', res.data.user[0].id)
                this.props.history.push('/')
            } else {
                this.setState({
                    message: 'Invalid email or password'
                })
            }
        })
        .catch(error => {
            this.setState({
                message: 'Some error occurred while checking the user'
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
                                <h2>Login User</h2>

                                <div className="mt-3">
                                    <p className="text-danger" >{message}</p>
                                    <div className="form-group">
                                        <label htmlFor="email"> 
                                            <h5>Email Id</h5>
                                        </label>
                                        <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={this.handleInputChange}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="password"> 
                                            <h5>Password</h5>
                                        </label>
                                        <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={this.handleInputChange}/>
                                    </div>

                                    <div className="form-group text-center">
                                        <button className="btn btn-dark btn-lg mt-3" onClick={() => { this.onSave() }} >Login</button>

                                        <div className="mt-2">
                                            <Link to={'/register'} className="btn btn-light border">
                                                New User? Create an account
                                            </Link>
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

export default Login