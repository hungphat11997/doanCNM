export const UPDATE_USER = 'updateuser';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        user: newUser
    };
}