const getMiddle = (s, l = ~~(s.length / 2)) => s.length % 2 ? s[l] : s[l - 1] + s [l];
