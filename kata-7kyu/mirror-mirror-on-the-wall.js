function mirror(data) {
  return data.length < 2 ? data 
        : [...data].sort((a,b)=>a-b).concat([...data].sort((a,b)=>b-a).slice(1)); 
}
