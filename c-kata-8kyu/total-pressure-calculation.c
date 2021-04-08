double total_pressure(double molar_mass1, double molar_mass2, double given_mass1, double given_mass2, double v, double t) {
    double M1 = (given_mass1 * 0.001) / molar_mass1;
    double M2 = (given_mass2 * 0.001) / molar_mass2;
    t = t + 273.15;
    double R = 0.082;
    return (((M1 + M2) * R * t) / v) * 1000;
}
