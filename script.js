const pagesInput = document.getElementById('pagesInput');

const selectBranding = document.getElementById('selectBranding');
const selectCopywriting = document.getElementById('selectCopywriting')
const selectLogo = document.getElementById('selectLogo')

const submitButton = document.getElementById('submit');
const totalText = document.getElementById('totalPrice');



submitButton.onclick = calculate;

function calculate() {
    const pages = pagesInput.value;
        if (pages < 0) {
            pages = 0; 
        }
    let price = pages * 300;


    if (selectBranding.checked) {
        price += 500;
    }

    totalText.innerText = 'Total cost is $' + price;
}
