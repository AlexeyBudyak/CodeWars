function direct(x, y, c){
      return {
        N: (x,y) => [x, y - 1],
        S: (x,y) => [x, y + 1],
        W: (x,y) => [x - 1, y],
        E: (x,y) => [x + 1, y]
      }[c](x,y);
}

function pathCheck(maze, path){ // Filter out useless ways
  //console.log('Check>',maze)
  let x = 0;
  let y = 0;
  if(['SN','NS','EW','WE'].some(el=>path.includes(el)))  return false;
  for(let i = 0; i < path.length; i++){
    [x,y]=direct(x, y, path[i]);
    if( x < 0 || y < 0 || x > maze[0].length-1 || y >  maze.length-1 ||
      (maze[y][x]!=='.' && maze[y][x]!=='+')) return false;
  }
  if(maze[y][x]==='+')  return false;
  maze[y][x] = '+';
  return true;
}

function finishCheck(maze, path){ // Check if path completed
  let x1 = 0, y1 = 0, x2 = maze[0].length - 1, y2 = maze.length - 1;
  for(let i = 0; i < path.length; i++)
    [x1, y1] = direct(x1, y1, path[i]);
  return (x1 === x2 && y1 === y2);
}

function pathFinder(maze){
  let maze2D = maze.split('\n').map(line=>line.split(''));
  
  let tracks = [''];
  const d = ['N','S','W','E'];

  for(let i = 0; i < 300 && tracks.length; i++){
      tracks = Array(tracks.length * 4).fill('')
            .map((_,i)=>tracks[~~(i/4)]+d[i%4]); // Generate tracking routes

    tracks = tracks.filter(path => pathCheck(maze2D, path)); // Filter out useless ways
    
    for(let j = 0; j < tracks.length; j++)     // Find the successful way
        if(finishCheck(maze2D,tracks[j])) return true;
  }
  return false;

  return maze;
}

//  Solution from another warior

// function pathFinder(maze){
//   maze = maze.split('\n').map(r=>[...r]);
//   var len=maze.length, stack = [[0,0]];
//   while(stack.length) {
//     let [x,y] = stack.pop();
//     if(maze[y][x]!=='.') continue;
//     maze[y][x]='X';
//     [[x,y-1],[x,y+1],[x-1,y],[x+1,y]].filter(([i,j])=>i>=0&&j>=0&&i<len&&j<len).forEach(([i,j])=>stack.push([i,j]));
//   }
//   return maze[len-1][len-1]==='X';
// }
