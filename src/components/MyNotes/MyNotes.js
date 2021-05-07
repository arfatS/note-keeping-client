import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

import { 
    deleteNoteApi,
    createNotePermissionApi
} from '../../store/api'

class MyNotes extends React.Component {

    initialForm = {
        role: '',
        userId: ''
    }

    constructor(props) {
        super(props)

        this.state = {
            form: {
                ...this.initialForm
            },
            showModal: false,
            noteId: ''
        }
    }

    componentDidMount() {
        const userId = localStorage.getItem('loggedIn')
        this.props.getMyNotesAction({ userId })

        this.props.getUsersListAction()
    }

    onDelete(noteId) {
        const userId = localStorage.getItem('loggedIn')

        deleteNoteApi({ noteId, userId })
            .then(data => {
                this.props.history.push('/');
            })
            .catch(console.log)
    }

    handleClose = () => this.setState({ showModal: false })
    
    handleShow(noteId) {
        this.setState({ 
            showModal: true,
            noteId
        })
    } 
        

    handleInputChange = e => {
        this.setState({
            form: { 
                ...this.state.form, 
                [e.target.name]: e.target.value
            }
        })
    }

    onShare() {
        let { form, noteId } = this.state;
        
        if (!form.userId || !form.role) {
            this.setState({
                message: 'Role or User cannot be empty'
            })
            return
        }

        form.noteId = noteId

        createNotePermissionApi(form)
        .then(data => {
            this.props.history.push('/');
        })
        .catch(console.log)
    }

    render() {
        const { myNotes, users } = this.props
        const loggedInId = localStorage.getItem('loggedIn')

        return (
            <div className="container-fluid">

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h1>My Notes</h1>
                            </div>

                            <div className="col-md-8">
                                <Link to={"/add"} className="btn btn-dark  mt-2" style={{ float: "right" }} >Add Note</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        myNotes && myNotes.length ?
                                            myNotes.map((note, index) => {
                                                return (

                                                    <tr key={note.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            <Link to={`/view/${note.id}`} style={{textDecoration: "none"}}>{note.title}</Link>
                                                        </td>
                                                        <td>
                                                            <Link to={`/edit/${note.id}`} className="btn btn-sm btn-secondary">Edit</Link>

                                                            <button className="btn btn-sm btn-danger mx-2" onClick={() => { this.onDelete(note.id) }}>Delete</button>

                                                            <button className="btn btn-sm btn-primary mx-2" onClick={() => { this.handleShow(note.id) }}>Share</button>

                                                        </td>

                                                    </tr>
                                                )
                                            }) :
                                            
                                            <tr>
                                                <td colSpan={3} className="text-center">No data available</td>
                                            </tr>
                                    }
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>

                <>


                    <Modal show={this.state.showModal} onHide={this.handleClose}>
                        <Modal.Header>
                            <Modal.Title>Share with other people</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <div className="row">

                                <div className="col-md-8" >
                                    <div className="form-group">
                                        <label htmlFor="userId" >
                                            <h6>Add Users</h6>
                                        </label>
                                        <select name="userId" className="form-control" onChange={this.handleInputChange}>
                                            <option selected disabled >~Select any user to share~</option>
                                            {
                                                users && users.length ?
                                                    users.map((user, index) => {
                                                        return (
                                                            
                                                            user.id != loggedInId ?
                                                                <option key={user.id} value={user.id}>
                                                                    {user.name}
                                                                </option>
                                                            : null    
                                                            
                                                        )
                                                    })
                                                    : null
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-4" >

                                    <div className="form-group">
                                        <label htmlFor="role" >
                                            <h6>Access Role</h6>
                                        </label>
                                        <select name="role" className="form-control" onChange={this.handleInputChange}>
                                            <option selected disabled >~Choose~</option>
                                            <option value={"Contributor"}>Contributor</option>
                                            <option value={"Reader"}>Reader</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Cancel
                        </Button>
                            <Button variant="primary" onClick={() => { this.onShare() }}>
                                Share
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </>

            </div>
        )
    }
}

export default MyNotes