function zombie_shootout(zombies, range, ammo) {
  if(ammo >= zombies && range * 2 >= zombies) return `You shot all ${zombies} zombies.`;
  const reason = range * 2 < zombies && ammo >= range * 2 ? 'overwhelmed' 
                                                          : 'ran out of ammo';
  return `You shot ${Math.min(range * 2, ammo)} zombies before being eaten: ${reason}.`;
}
