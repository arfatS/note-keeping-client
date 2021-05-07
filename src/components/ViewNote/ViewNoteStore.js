import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { 
    getNoteDetailAction,
    getSharedUsersAction
} from '../../store/action'


const mapStateToProps = (state) => {

    let note = {}
    if (state.note.data) {
        note = state.note.data
    }
    if (!note) {
        note = {}
    }

    let sharedUsers = []
    if (state.sharedUsers.data && state.sharedUsers.data.users) {
        sharedUsers = state.sharedUsers.data.users
    }
    
    return {
        note,
        sharedUsers
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNoteDetailAction,
    getSharedUsersAction
}, dispatch);

const ViewNoteStore = (ViewNote) => {
    return connect(mapStateToProps, mapDispatchToProps)(ViewNote);
}

export default ViewNoteStore;