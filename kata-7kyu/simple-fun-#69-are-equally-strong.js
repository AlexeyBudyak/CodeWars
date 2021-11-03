function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return yourLeft + yourRight === friendsLeft + friendsRight && 
         Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight);
}
