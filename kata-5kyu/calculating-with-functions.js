function zero(action = blank) { return action.act(0,action.x); }
function one(action = blank) { return action.act(1,action.x); }
function two(action = blank) { return action.act(2,action.x); }
function three(action = blank) { return action.act(3,action.x); }
function four(action = blank) { return action.act(4,action.x); }
function five(action = blank) { return action.act(5,action.x); }
function six(action = blank) { return action.act(6,action.x); }
function seven(action = blank) { return action.act(7,action.x); }
function eight(action = blank) { return action.act(8,action.x); }
function nine(action = blank) { return action.act(9,action.x); }

const blank = {act: (x) => x, x: 0}

function plus(x) { return {act: (x,y) => x + y, x: x} }
function minus(x) { return {act: (x,y) => x - y, x: x} }
function times(x) { return {act: (x,y) => x * y, x: x} }
function dividedBy(x) { return {act: (x,y) => ~~(x / y), x: x} }
