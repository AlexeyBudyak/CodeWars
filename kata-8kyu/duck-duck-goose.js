function duckDuckGoose(players, goose) {
  let arr = players.map(el => el = el.name)
  return arr[(goose-1) % arr.length];
}
