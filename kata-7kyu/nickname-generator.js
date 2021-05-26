function nicknameGenerator(name){
  return name.length < 4 ? 'Error: Name too short'
                         :   name.slice(0, 3 + +'aeoui'.includes(name[2]))
}
