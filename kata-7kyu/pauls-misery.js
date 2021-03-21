function paul(x){
  let points = x.reduce((poits,value)=> 
                        poits + {life:0, kata: 5,'Petes kata':10, eating:1} [value] ,0)
   return points <= 40 ? 'Super happy!'
                       : points <= 70 ? 'Happy!'
                                      : points < 100 ? 'Sad!'
                                                     : 'Miserable!' 
}
