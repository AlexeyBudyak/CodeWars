function match(candidate, job) {
  if(candidate.minSalary === undefined || job.maxSalary === undefined)  throw Error; 
  return candidate.minSalary * 0.9 <= job.maxSalary;
}
