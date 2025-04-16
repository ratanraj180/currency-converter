document.getElementById('convertButton').addEventListener('click', convertCurrency);

async function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (!amount || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.rates[toCurrency]) {
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById('convertedAmount').textContent = `${convertedAmount} ${toCurrency}`;
    } else {
      alert('Error fetching conversion rate.');
    }
  } catch (error) {
    alert('Error: ' + error);
  }
}
