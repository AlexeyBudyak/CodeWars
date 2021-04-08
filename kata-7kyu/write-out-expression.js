function expressionOut(expr) {
  const nums = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
  const signs = {'+' : 'Plus', '-': 'Minus', '*' : 'Times', '/': 'Divided By', 
                '**' : 'To The Power Of', '=' : 'Equals', '!=' : 'Does Not Equal'}
  return !Object.keys(signs).includes(expr.split(' ')[1]) ? "That's not an operator!"
            : expr.split(' ').map((el,i)=> i === 1 ? signs[el] : nums[el]).join(' ');
}
