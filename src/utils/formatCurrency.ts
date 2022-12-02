export function formatCurrency(value: number | undefined) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value || 0)
}
