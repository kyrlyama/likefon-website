export function formatPrice(price: number): string { 
    return new Intl.NumberFormat('en-EE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price); }

   