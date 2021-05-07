import { bindActionCreators } from "redux";
import { connect } from "react-redux";



const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({


}, dispatch);

const AddNoteStore = (AddNote) => {
    return connect(mapStateToProps, mapDispatchToProps)(AddNote);
}

export default AddNoteStore;