import INITIAL_STATE from './state';
import { consultarAddFavs } from '../utils/functionStateLocal';

export default function store(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVS':
      return {...state, favs: action.payload,}
    case 'ADD_FAV':
      return {
        ...state,
        favs: consultarAddFavs(state.favs, action.payload),
      }
    case 'ADD_ARTIST_LIST':
      return { ...state, artist_list: action.payload }
    default: return state
  }
}

