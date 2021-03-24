function sabb(s, val, happiness){
  return s.replace(/[^sabbatical]/g,'').length + val + happiness > 22
              ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
}
