function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  return JSON.stringify(head).split('').filter(el=>el === '{').length;
}

function count(head, data) {
  return JSON.stringify(head).replace(/,/g,' ').split('').filter(el=>el==data).length
}
