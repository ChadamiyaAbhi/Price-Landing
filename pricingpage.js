// Add INR, CAD, AUD, and JPY to the exchange rates
const exchangeRates = {
    usd: { rate: 1, symbol: '$' },
    eur: { rate: 0.85, symbol: '€' },
    gbp: { rate: 0.75, symbol: '£' },
    inr: { rate: 74.50, symbol: '₹' }, // Example exchange rate for INR
    cad: { rate: 1.25, symbol: 'CA$' }, // Example exchange rate for CAD
    aud: { rate: 1.30, symbol: 'A$' }, // Example exchange rate for AUD
    jpy: { rate: 110.50, symbol: '¥' }, // Example exchange rate for JPY
    // Add more exchange rates as needed
};

function changeCurrency() {
    const currencySelector = document.getElementById('currency');
    const selectedCurrency = currencySelector.value;

    // Get all pricing elements and update their prices and symbols
    const pricingElements = document.querySelectorAll('.pricingbox .price');
    pricingElements.forEach((element) => {
        const originalPrice = parseFloat(element.textContent);
        const convertedPrice = originalPrice * exchangeRates[selectedCurrency].rate;

        // Format the converted price based on your currency format preference
        // For simplicity, this example rounds to 2 decimal places
        const formattedPrice = convertedPrice.toFixed(2);

        // Update the price text content with the new currency symbol
        element.textContent = exchangeRates[selectedCurrency].symbol + formattedPrice;

        // You can also update other elements related to pricing if needed
    });
}

  