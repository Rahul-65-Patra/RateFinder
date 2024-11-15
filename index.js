import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_crEoMKDOLt9Ey6abEdI3OMCi4EfXCRHz2hzT7Owv"
);

 export async function currencyConverter(fromCurrency,toCurrency,units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });
  const totalValue = res.data[toCurrency];
  return totalValue * units;
}
