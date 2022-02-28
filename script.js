const slider = document.getElementById('myRange');
const pageviewText = document.querySelector('.pageview-text');
const priceText = document.querySelector('.price-text');
const checkbox = document.querySelector('.checkbox');


// slider function to display pricing
function sliderfunc() {
    slider.oninput = function() {
        switch (parseInt(this.value)) {
            case 1:
                pageviewText.innerHTML = '10K PAGEVIEWS';
                priceText.innerHTML = '8';
                break;
            case 2:
                pageviewText.innerHTML = '50K PAGEVIEWS';
                priceText.innerHTML = '12';
                break;
            case 3:
                pageviewText.innerHTML = '100K PAGEVIEWS';
                priceText.innerHTML = '16';
                break;
            case 4:
                pageviewText.innerHTML = '500K PAGEVIEWS';
                priceText.innerHTML = '24';
                break;
            case 5:
                pageviewText.innerHTML = '1M PAGEVIEWS';
                priceText.innerHTML = '36';
                break;
        
                default:
                    pageviewText.innerHTML = '100K PAGEVIEWS';
                    priceText.innerHTML = '16';
        
        }
        };
        
};

sliderfunc();


// discount button trigger on click
checkbox.addEventListener('click', function() {
    let discount = priceText.innerHTML * .25;
    let result = priceText.innerHTML - discount;
    
    if(checkbox.checked == true) {
        // apply discount on current price
        priceText.innerHTML = result;
        slider.oninput = function() {
            switch (parseInt(this.value)) {
                case 1:
                    pageviewText.innerHTML = '10K PAGEVIEWS';
                    priceText.innerHTML = '6';
                    break;
                case 2:
                    pageviewText.innerHTML = '50K PAGEVIEWS';
                    priceText.innerHTML = '9';
                    break;
                case 3:
                    pageviewText.innerHTML = '100K PAGEVIEWS';
                    priceText.innerHTML = '12';
                    break;
                case 4:
                    pageviewText.innerHTML = '500K PAGEVIEWS';
                    priceText.innerHTML = '18';
                    break;
                case 5:
                    pageviewText.innerHTML = '1M PAGEVIEWS';
                    priceText.innerHTML = '27';
                    break;
            
                    default:
                        pageviewText.innerHTML = '100K PAGEVIEWS';
                        priceText.innerHTML = '12';
            
            }
            };

    } else {
        // Reverse price discount
        let priceDiscount = priceText.innerHTML * 100;
        let result = priceDiscount / 75;
        priceText.innerHTML = result;
        sliderfunc();
    }
})


//change slider background pass color
function updateGradient(rangeValue) {
    const percentage = (rangeValue - slider.min) / (slider.max - slider.min) * 100;
    slider.style.backgroundImage = `linear-gradient(90deg, #a5f3eb
        ${percentage}%, transparent ${percentage}%)`;
  }
  
  // Update gradient onload
  updateGradient(slider.value);
  
  // Update gradient oninput
  slider.addEventListener('input', (e) => {
    updateGradient(e.target.value);
  });
