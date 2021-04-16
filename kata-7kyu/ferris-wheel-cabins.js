function ferrisWheelCabins(adults, children) {
  return adults < children / 2 ? -1 : children + Math.ceil((adults - 2 * children) / 3);
}
