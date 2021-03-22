function getFirstPython(list) {
  const pythonDeveloper = list.filter(el => el.language === 'Python')[0];
  return pythonDeveloper === undefined ? 'There will be no Python developers'
          : pythonDeveloper.firstName + ', ' + pythonDeveloper.country;
}
