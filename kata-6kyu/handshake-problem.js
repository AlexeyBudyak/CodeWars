function getParticipants(handshakes){
  let people = 1;
  for(let i = 0; i < handshakes; i+= people++);
  return people;
}
