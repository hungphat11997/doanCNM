export const UPDATE_FILTER = 'updatefilter';

export function updateFiler(newFilter) {
    return {
        type: UPDATE_FILTER,
        filter: newFilter
    };
}