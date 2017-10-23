const initialSate = '';


export default function filterTracks(state = initialSate, action) {
    console.log(action);
    if (action.type === 'FIND_TRACK') {
        return action.payLoad;
    }
    return state;
}