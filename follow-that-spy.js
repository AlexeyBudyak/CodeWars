function findRoutes(routes) {
  let flights = {};
  routes.forEach(([departure,arrival]) => flights[departure] = arrival);
  const firstDeparture = Object.keys(flights)
                      .filter(departure => !Object.values(flights).includes(departure) )[0]
  let theRoute = [firstDeparture];
  while(theRoute.length <= routes.length)
    theRoute.push(flights[theRoute[theRoute.length - 1]]);
  return theRoute.join(', ')
}
