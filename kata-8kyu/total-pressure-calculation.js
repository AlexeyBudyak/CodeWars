solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  M1 = (givenMass1 * 0.001) / molarMass1;
  M2 = (givenMass2 * 0.001) / molarMass2;
  temp = temp + 273.15;
  const R = 0.082;
  return (((M1 + M2) * R * temp) / volume) * 1000;
}
