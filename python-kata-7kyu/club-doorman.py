def pass_the_door_man(word): 
    for i in range(1,len(word)):
        if word[i] == word[i-1]:
            return (ord(word[i]) - 96) * 3
