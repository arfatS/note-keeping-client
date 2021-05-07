import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getNoteDetailAction } from '../../store/action'


const mapStateToProps = (state) => {

    let note = {}

    if (state.note.data) {
        note = state.note.data
    }
    if (!note) {
        note = {}
    }
    
    return {
        note
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNoteDetailAction
}, dispatch);

const EditNoteStore = (EditNote) => {
    return connect(mapStateToProps, mapDispatchToProps)(EditNote);
}

export default EditNoteStore;