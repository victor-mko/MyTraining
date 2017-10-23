const initialSate = [
    'Home Plaulist',
    'Work Plaulist'
]


export default function playList(state = initialSate, action) {
    console.log(action);
    if (action.type === 'ADD_PLAYLIST') {
        return [
            ...state,
            action.playLoad
        ]
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }
    return state
}