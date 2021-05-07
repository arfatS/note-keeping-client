const initialState = {
    
    users: [],
    myNotes: [],
    sharedNotes: [],
    sharedUsers: [],
    note: {}

}

export const reducer = (state = initialState, { type, payload }) => {
	
    switch (type) {
        
        case "USERS_LIST_DATA": {
            let users = state.users;

            if (!users) {
                users = []
            }
            users = payload.data;
            
            return {
                ...state, 
                users
            };
        }

        case "MY_NOTES_LIST_DATA": {
            let myNotes = state.myNotes;

            if (!myNotes) {
                myNotes = []
            }
            myNotes = payload.data;
            
            return {
                ...state, 
                myNotes
            };
        }

        case "SHARED_USERS_LIST_DATA": {
            let sharedUsers = state.sharedUsers;

            if (!sharedUsers) {
                sharedUsers = []
            }
            sharedUsers = payload.data;
            
            return {
                ...state, 
                sharedUsers
            };
        }

        case "SHARED_NOTES_LIST_DATA": {
            let sharedNotes = state.sharedNotes;

            if (!sharedNotes) {
                sharedNotes = []
            }
            sharedNotes = payload.data;
            
            return {
                ...state, 
                sharedNotes
            };
        }

        case "NOTE_DETAIL_DATA": {
            let note = state.note;
            if (!note) {
                note = {}
            }
            if (payload.data.data) {
                note = payload.data.data;
            }
            
            return {
                ...state, 
                note
            };
        }
            
            
    
        default:
            return state
    }
}
