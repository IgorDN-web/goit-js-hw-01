// Оголошення функції getElementWidth
function getElementWidth(content, padding, border) {
  // Перетворення значень з 'Npx' у числа
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Обчислення загальної ширини елемента
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  // Повернення результату
  return totalWidth;
}

// Перевірка роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
