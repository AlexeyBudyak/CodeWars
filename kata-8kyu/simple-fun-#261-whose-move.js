function whoseMove(lastPlayer, win) {
    return ((lastPlayer === 'white' && win) || (lastPlayer === 'black' && !win)) ? 'white' : 'black';
 }
