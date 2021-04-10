function halloween(){
  const n = ['Thirteen cauldrons bubbling','Twelve coffins creaking','Eleven bats a flying','Ten goblins glowing','Nine ghosts a haunting','Eight mummies waking','Seven werewolves howling','Six vampires biting','Five creepy dolls','Four headless horsemen','Three giant spiders','Two zombie eyeballs','And a some bones from a haunted graveyard.']
  return n.map((_,i) => `On the ${['first','second','third', 'fourth', 'fifth', 'sixth', 'seventh', 
                  'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth'][i]} night of Halloween\nThree witches gave to me\n` + 
                         (!i ? 'S' + n[12].slice(7) : n.slice(12-i).join('\n'))
                   ).join('\n\n');
}
