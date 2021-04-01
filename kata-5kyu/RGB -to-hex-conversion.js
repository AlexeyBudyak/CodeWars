function rgb(...rgb){
  return rgb.map(el=> Math.max(Math.min(255,el),0).toString(16).padStart(2,0))
            .join('').toUpperCase();
}
