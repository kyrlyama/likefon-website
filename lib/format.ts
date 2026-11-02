export function formatPrice(price: number): string { 
    return new Intl.NumberFormat("et-EE", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price); 

}

   