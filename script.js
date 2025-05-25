const btn = document.getElementById('colorBtn');
const colorText = document.getElementById('colorCode');

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rgbColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = rgbColor;
  colorText.textContent = rgbColor;
}

btn.addEventListener('click', generateRandomColor);
