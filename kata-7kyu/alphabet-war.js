function alphabetWar(fight)
{
   const points = 'wpbs-zdqm';
   const result = fight.split('')
               .reduce((sum,ch) => 
                       points.includes(ch) ? sum + points.indexOf(ch) - 4 : sum,0);
   return !result ? `Let's fight again!`
                  : ['Left', 'Right'][+(result > 0)] + ' side wins!';
}
