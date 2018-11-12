import { UPDATE_USER} from '../actions/updateUser';

export default function userReducer(state = null, action) {

    switch(action.type) {
        case UPDATE_USER:
        return action.user;
        default: 
        return state;
    }
}