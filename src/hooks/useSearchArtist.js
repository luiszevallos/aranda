import { useState, useMemo } from 'react';

const useSearchArtist = (list, value) => {
  const [currentList, setCurrentList] = useState([]);
  useMemo(() => {
    const result = list.filter(({artist}) => {
      return `${artist.artist_name}`
        .toLowerCase()
        .includes(value.toLowerCase());
    })
    setCurrentList(result)
  }, [list, value])
  return currentList;
}

export default useSearchArtist;