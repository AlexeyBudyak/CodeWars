function tickets(bills){
  let bank = [0, 0, 0, 0];
  let everyoneHappy = 'YES';
  bills.forEach(bill => {
                          bank[(bill / 25 - 1)]++;
                          if(bill === 100)  bank[1]--, bank[0]--;
                          if(bank[1] === -1)  bank[1] = 0, bank[0]-= 2;
                          if(bill === 50)  bank[0]--;               
                          if(bank[0] < 0)  everyoneHappy = 'NO';  
                        });
  return everyoneHappy;
}
