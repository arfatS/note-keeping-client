import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { 
    getSharedNotesAction 
} from '../../store/action'


const mapStateToProps = (state) => {

    let sharedNotes = []
    if (state.sharedNotes.data && state.sharedNotes.data.notes) {
        sharedNotes = state.sharedNotes.data.notes
    }

    return {
        sharedNotes
    }

}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSharedNotesAction
}, dispatch);

const SharedNotesStore = (SharedNotes) => {
    return connect(mapStateToProps, mapDispatchToProps)(SharedNotes);
}

export default SharedNotesStore;