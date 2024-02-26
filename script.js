document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
  
    function updateColor() {
      const color = colorPicker.value;
      colorBox.style.backgroundColor = color;
      hexCode.textContent = color;
  
      const rgb = hexToRgb(color);
      redRange.value = rgb.r;
      greenRange.value = rgb.g;
      blueRange.value = rgb.b;
    }
  
    function hexToRgb(hex) {
      const bigint = parseInt(hex.substring(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    }
  
    function updateColorFromRange() {
      const redValue = redRange.value;
      const greenValue = greenRange.value;
      const blueValue = blueRange.value;
      const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
      const hexColor = rgbToHex(redValue, greenValue, blueValue);
      colorPicker.value = hexColor;
      colorBox.style.backgroundColor = rgbColor;
      hexCode.textContent = hexColor;
    }
  
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
  
    function componentToHex(c) {
      const hex = parseInt(c).toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
  
    colorPicker.addEventListener('input', updateColor);
    redRange.addEventListener('input', updateColorFromRange);
    greenRange.addEventListener('input', updateColorFromRange);
    blueRange.addEventListener('input', updateColorFromRange);
    updateColor();
  });
  