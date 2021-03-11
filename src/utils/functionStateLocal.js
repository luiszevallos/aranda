const consultarAddFavs = (listState, itemAdd) => {
  const exist = listState.find(({ artist }) =>
    artist.artist_id === itemAdd.artist.artist_id
  );
  const list = exist
    ? listState.filter(({ artist }) => artist.artist_id !== itemAdd.artist.artist_id)
    : [...listState, itemAdd];
  return list
}

export { consultarAddFavs }