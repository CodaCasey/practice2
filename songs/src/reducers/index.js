import {combineReducers} from 'redux';
const songsReducer = () => {
  return [
    {title: 'Dead Butterflies', duration: '4:02'},
    {title: 'Constance', duration: '4:30'},
    {title: 'Akudama', duration: '2:37'},
    {title: 'Chhinnamasta', duration: '3:50'},
    {title: 'Kimbal', duration: '2:40'}
  ]
};

const selectedSongReducer = (selectedSong=null, action) =>{
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})