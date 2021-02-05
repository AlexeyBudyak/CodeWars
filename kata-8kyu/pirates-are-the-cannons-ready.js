const cannonsReady = (gunners) => {
  return !Object.values(gunners).filter(el=>el==='nay').length ? 'Fire!'
                                                               : 'Shiver me timbers!';
}
