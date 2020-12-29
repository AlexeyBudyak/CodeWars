const digitsForm = x => (x < 10 ? '0' : '') + x;

function humanReadable(seconds) {
  const hr = ~~(seconds / 3600);
  const min = ~~((seconds - hr * 3600) / 60);
  const sec = seconds - hr * 3600 - min * 60;
  return digitsForm(hr) + ':' + digitsForm(min) + ':' + digitsForm(sec);
}
