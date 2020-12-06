function declareWinner(fighter1, fighter2, firstAttacker) {
  const n1 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  const n2 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  return n1 === n2 ? firstAttacker : n1 < n2 ? fighter1.name : fighter2.name;
}
