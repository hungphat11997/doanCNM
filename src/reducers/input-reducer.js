import { UPDATE_INPUT} from '../actions/updateInput';
export default function inputReducer(state = null, action) {

    switch(action.type) {
        case UPDATE_INPUT:
        return action.input;
        default: 
        return state;
    }
}