const initialSate = [];


export default function playList(state = initialSate, action) {
    console.log(action);
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payLoad
        ]
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payLoad;
    }
    return state
}