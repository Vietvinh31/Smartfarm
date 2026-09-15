const params = new URLSearchParams(window.location.search);
const lot = params.get('lot');
if (lot !== null && lot !== 'UX-260915-01') {
  document.querySelector('#trace-lot').hidden = true;
  document.querySelector('#trace-missing').hidden = false;
  document.title = 'Không tìm thấy lô | Ươm Xanh';
}
