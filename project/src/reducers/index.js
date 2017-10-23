import { combineReducers } from 'redux';
import tracks from './tracks';
import playLists from './playLists';
import filterTracks from './findFilterTracks';


export default combineReducers({
    tracks,
    playLists,
    filterTracks
})