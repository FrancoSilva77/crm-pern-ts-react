export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function toBoolean(str: string) {
  return str.toLowerCase() === 'true';
}

export function formatDate(date: string) {
  const currentDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return currentDate.toLocaleDateString('es-MX', options);
}
