import http from '../config/httpCommon'


//Users Api
export const registerUserApi = (body) => {
    return http.post('/users/register', body)
}

export const loginUserApi = (body) => {
    return http.post('/users/login', body)
}

export const logoutApi = () => {
    return http.post('/users/logout')
}

export const getUsersListApi = () => {
    return http.get('/users')
}

export const getSharedUsersListApi = ({ noteId }) => {
    return http.get(`/users/shared/${noteId}`)
}


//Notes Api
export const createNoteApi = (body) => {
    return http.post('/notes', body)
}

export const editNoteApi = (body) => {
    return http.put(`/notes/${body.id}`, body)
}

export const getMyNotesListApi = ({ userId }) => {
    return http.get(`/notes/user/${userId}`)
}

export const getSharedNotesListApi = ({ userId }) => {
    return http.get(`/notes/shared/${userId}`)
}

export const getNoteDetailApi = ({ noteId }) => {
    return http.get(`/notes/${noteId}`)
}

export const deleteNoteApi = ({ noteId, userId }) => {
    return http.delete(`/notes/${noteId}/${userId}`  )
}

export const createNotePermissionApi = (body) => {
    return http.post('/notes/share', body)
}

export const deleteSharedAccessApi = ({ noteId, userId }) => {
    return http.delete(`/users/${noteId}/${userId}`  )
}
