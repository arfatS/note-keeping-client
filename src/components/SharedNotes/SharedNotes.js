import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrash, faShareSquare } from '@fortawesome/free-solid-svg-icons'

class SharedNotes extends React.Component {

    componentDidMount() {
        const userId = localStorage.getItem('loggedIn')
        this.props.getSharedNotesAction({ userId })

    }

    render(){
        const { sharedNotes } = this.props

        return(
            <div className="container-fluid">

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h1>Shared with me</h1>
                            </div>

                            <div className="col-md-8">
                                <Link to={"/add"} className="btn btn-dark  mt-2" style={{float: "right"}} >Add Note <FontAwesomeIcon icon={faPlus}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" width="10%">#</th>
                                        <th scope="col" width="65%">Title</th>
                                        <th scope="col" width="25%">Action</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        sharedNotes && sharedNotes.length ?
                                            sharedNotes.map((note, index) => {
                                                return (

                                                    <tr key={note.id}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>
                                                            <Link to={`/view/${note.id}`} style={{textDecoration: "none"}}>{note.title}</Link>
                                                        </td>
                                                        {
                                                            note.role == 'Contributor' ?
                                                            <td>
                                                                <Link to={`/edit/${note.id}`} className="btn btn-sm btn-secondary"><FontAwesomeIcon icon={faEdit} /></Link>

                                                            </td>
                                                            : 
                                                            <td>
                                                                No access
                                                            </td>
                                                        }
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
            </div>
        )
    }
}

export default SharedNotes