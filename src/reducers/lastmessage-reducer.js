import { UPDATE_LASTMESSAGE} from '../actions/updateLastMessage';
export default function lastMessageReducer(state = null, action) {

    switch(action.type) {
        case UPDATE_LASTMESSAGE:
        return action.lastMessage;
        default: 
        return state;
    }
}