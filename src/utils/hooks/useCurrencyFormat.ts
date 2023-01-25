export type LocaleCurrencyObject = {
  i18n?: "en-US";
  style?: "currency";
  currency?: "USD" | "CAD" | "EUR" | "JPY";
};

const initialCurrencyLocale: LocaleCurrencyObject = {
  i18n: "en-US",
  style: "currency",
  currency: "USD",
};

export function useCurrencyFormat(
  value: number = 1,
  locale: LocaleCurrencyObject = initialCurrencyLocale
) {
  const configCurrency = value.toLocaleString(locale.i18n, {
    style: locale.style,
    currency: locale.currency,
  });
  return configCurrency;
}
