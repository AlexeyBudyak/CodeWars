function bareable(heat, humidity){
  return heat < 36 && humidity <= 0.5 && 
         (humidity < 0.4 || heat <= 25 ) &&
          !(humidity <= 0.4 && heat <= 25 )
}
