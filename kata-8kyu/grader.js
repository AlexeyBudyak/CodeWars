function grader(score) {
  return (score > 1 || score < 0.6) ? 'F' : ['D','C','B','A', 'A'][~~(score * 10) - 6];
}
