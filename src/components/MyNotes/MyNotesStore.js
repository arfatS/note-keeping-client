import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getMyNotesAction,
    getUsersListAction 
} from '../../store/action'

const mapStateToProps = (state) => {

    let myNotes = []
    if (state.myNotes.data && state.myNotes.data.notes) {
        myNotes = state.myNotes.data.notes
    }

    let users = []
    if (state.users.data && state.users.data.users) {
        users = state.users.data.users
    }
    return {
        myNotes,
        users
    }

}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMyNotesAction,
    getUsersListAction
}, dispatch);

const MyNotesStore = (MyNotes) => {
    return connect(mapStateToProps, mapDispatchToProps)(MyNotes);
}

export default MyNotesStore;