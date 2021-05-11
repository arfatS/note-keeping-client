import React from 'react';
import { withRouter } from "react-router";

import { 
    deleteSharedAccessApi,
} from '../../store/api'

class ViewNote extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const noteId = this.props.match.params.id
        this.props.getNoteDetailAction({ noteId })
        this.props.getSharedUsersAction({ noteId })
    }

    onDelete(userId) {
        const noteId = this.props.match.params.id

        deleteSharedAccessApi({ noteId, userId })
            .then(data => {
                this.props.history.push(`/view/${noteId}`);
            })
            .catch(console.log)
    }

    render() {

        const { note, sharedUsers } = this.props
        return (
            <div className="container-fluid">

                <div className="card">

                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1"></div>

                            <div className="col-md-8">
                                <h2>- {note.title}</h2>
                                <p>{note.description}</p>
                            </div>

                            <div className="col-md-3 mt-2">
                                <h4>Shared With</h4>
                                {
                                    sharedUsers && sharedUsers.length ?

                                        sharedUsers.map(user => {
                                            return (
                                                <div className="mt-4">
                                                    <h6>
                                                        {user.name} - <span className="text-secondary">{user.role}</span> 

                                                        { localStorage.getItem('loggedIn') == note.ownerId ?

                                                            <button className="btn btn-sm btn-danger mx-3" onClick={() => { this.onDelete(user.id) }}>Remove</button>
                                                            :
                                                            null
                                                        }
                                                    </h6>

                                                </div>
                                            )
                                        })

                                        : null
                                }
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default withRouter(ViewNote)