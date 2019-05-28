/**
 * - kornienko
 * - kremenezkit
 * - melnichenko
 * - kalashnikov
 * - kolomiets
 * - belozerkovskiy
 * - zhuzhkov
 * 
 * - Матвейчук
 * - Житомирский
 * - Овчаренко
 * - Степаненко
 * - Брославский
 * - Зубарь
 * - Кремецкий
 * - Дубовой
 * - Карнаухов
 * - Соколов
 * - Ремеслов
 * - Сычевский николай
 * - Белоцерковский
 */

const tipWithoutBill = price => {
  if (price <= 50) return price * 0.2
  if (price <= 200) return price * 0.15
  return price * 0.1
}

const roundedTip = price => Math.round(tipWithoutBill(price));

const tipWithBill = price => price + roundedTip(price);

const bills = [124, 48, 268];

console.log('bills ', bills);

console.log(bills.map(roundedTip));
console.log(bills.map(tipWithBill));

