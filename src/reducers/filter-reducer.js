import { UPDATE_FILTER} from '../actions/updateFilter';
export default function filterReducer(state = null, action) {

    switch(action.type) {
        case UPDATE_FILTER:
        return action.filter;
        default: 
        return state;
    }
}