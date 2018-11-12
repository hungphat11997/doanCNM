export const UPDATE_IMAGE = 'updateimage';

export function updateImage(newImage) {
    return {
        type: UPDATE_IMAGE,
        image: newImage
    };
}