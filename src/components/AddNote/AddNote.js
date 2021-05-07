import React from 'react';

import { createNoteApi } from '../../store/api'

class AddNote extends React.Component {

    initialForm = {
        title: '',
        description: ''
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
        const userId = localStorage.getItem('loggedIn')
        
        if (!form.title || !form.description) {
            this.setState({
                message: 'Title or Description cannot be empty'
            })
            return
        }

        form.userId = userId

        createNoteApi(form)
        .then(data => {
            this.props.history.push('/');
        })
        .catch(console.log)
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
                                <h2>Add Note</h2>
                                <p className="text-danger">{message}</p>
                                <div className="mt-3">
                                    <div className="form-group">
                                        <label htmlFor="title"> 
                                            <h5>Title</h5>
                                        </label>
                                        <input type="text" className="form-control" id="title" name="title" value={form.title} onChange={this.handleInputChange}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="description"> 
                                            <h5>Description</h5>
                                        </label>
                                        <textarea rows="10" className="form-control" id="description" name="description" value={form.description} onChange={this.handleInputChange}>
                                            
                                        </textarea>
                                    </div>

                                    <div className="form-group text-center">
                                        <button className="btn btn-dark btn-lg mt-3" onClick={() => { this.onSave() }} >Save</button>

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

export default AddNote