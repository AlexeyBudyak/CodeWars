function takeUmbrella(weather, chance) {
  return (weather === 'rainy' || (weather ==='cloudy' && chance > 0.2)) || chance > 0.5;
}
