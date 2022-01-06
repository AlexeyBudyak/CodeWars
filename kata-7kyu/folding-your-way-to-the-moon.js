function foldTo(distance) {
  return distance < 0 ? null : distance <= 0.0001 ? 0 : Math.ceil(Math.log2(distance * 10000));  
}
