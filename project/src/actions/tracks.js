var mockApiDate = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Wrlcom Home'
    },
    {
        id: 3,
        name: 'Master of Pippers'
    },
    {
        id: 4,
        name: 'Sandman Enter'
    },
    {
        id: 5,
        name: 'Fade to Black'
    },
]

export const getTracks = () => dispatch => {
    setTimeout(() => {
    console.log('I got tracks');
    dispatch({ 
        type: 'FETCH_TRACKS_SUCCESS',
        payLoad: mockApiDate
    })
    }, 2000);
}