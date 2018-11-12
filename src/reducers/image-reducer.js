import { UPDATE_IMAGE} from '../actions/updateImage';
export default function imageReducer(state = null, action) {

    switch(action.type) {
        case UPDATE_IMAGE:
        return action.image;
        default: 
        return state;
    }
}