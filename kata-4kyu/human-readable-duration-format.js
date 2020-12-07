function formatDuration (seconds) 
{
  let time = '';
  if(!seconds)  return 'now';
  const data = [{t: 31536000, title: 'year'},
                {t: 86400, title: 'day'},
                {t: 3600, title: 'hour'},
                {t: 60, title: 'minute'},
                {t: 1, title: 'second'}];
  data.forEach( (el) => 
     (seconds >= el.t) ? (
       time+= `${~~(seconds/el.t)} ${el.title}${(seconds >= el.t * 2) ? 's' : ''}${seconds % el.t ? ', ' : ''}`,
       seconds-= (~~(seconds/el.t))*el.t) : {});
  
  return time.split('').reverse().join('').replace(',','dna ').split('').reverse().join('');
}
