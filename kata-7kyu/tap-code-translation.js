function tapCodeTranslation(text) {
  const code = ['11','12','13','14','15',
                '21','22','23','24','25','13',
                '31','32','33','34','35',
                '41','42','43','44','45',
                '51','52','53','54','55']
  console.log(text)
  return text.split('')
             .map(el=> code[el.charCodeAt(0) - 97].split('').map(el=>'.'.repeat(el)).join(' '))
             .join(' ');
}
