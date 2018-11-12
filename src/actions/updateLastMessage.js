export const UPDATE_LASTMESSAGE = 'updatelastmessage';

export function updateLastMessage(newLastMessage) {
    return {
        type: UPDATE_LASTMESSAGE,
        lastMessage: newLastMessage
    };
}