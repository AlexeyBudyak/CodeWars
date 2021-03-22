function addUsername(list) {
  console.log(list);
  return list.map(el => ({...el , 
     username: (el.firstName + el.lastName[0]).toLowerCase() + (2030 - el.age)}));
}
