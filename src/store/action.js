export const getMyNotesAction = ({ userId }) => {
    return { type: 'MY_NOTES_LIST_SAGA', payload: { userId } }
}

export const getNoteDetailAction = ({ noteId }) => {
    return { type: 'NOTE_DETAIL_SAGA', payload: { noteId } }
}

export const getUsersListAction = () => {
    return { type: 'USERS_LIST_SAGA' }
}

export const getSharedNotesAction = ({ userId }) => {
    return { type: 'SHARED_NOTES_LIST_SAGA', payload: { userId } }
}

export const getSharedUsersAction = ({ noteId }) => {
    return { type: 'SHARED_USERS_LIST_SAGA', payload: { noteId } }
}
