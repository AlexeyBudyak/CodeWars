function solve(eq){
  return eq.replace(/[+]/g,' + ')
           .replace(/[-]/g,' - ')
           .replace(/[*]/g,' * ')
           .replace(/[/]/g,' / ')
           .split(' ')
           .reverse()
           .join('');
}
