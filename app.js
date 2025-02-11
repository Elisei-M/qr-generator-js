document.getElementById('generate-btn').addEventListener('click', function() {
  const text = document.getElementById('text-input').value;
  if (text.trim() === '') {
    alert('Te rog să introduci text!');
    return;
  }
  
  // Șterge orice cod QR existent
  document.getElementById('qrcode').innerHTML = '';
  
  // Generează noul cod QR
  new QRCode(document.getElementById('qrcode'), {
    text: text,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
});
