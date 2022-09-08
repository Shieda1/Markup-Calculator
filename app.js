// https://www.omnicalculator.com/finance/markup

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const markupRadio = document.getElementById('markupRadio');
const profitRadio = document.getElementById('profitRadio');
const costRadio = document.getElementById('costRadio');

let markup;
let profit = v1;
let cost = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

markupRadio.addEventListener('click', function() {
  variable1.textContent = 'Profit';
  variable2.textContent = 'Cost';
  profit = v1;
  cost = v2;
  result.textContent = '';
});

profitRadio.addEventListener('click', function() {
  variable1.textContent = 'Markup';
  variable2.textContent = 'Cost';
  markup = v1;
  cost = v2;
  result.textContent = '';
});

costRadio.addEventListener('click', function() {
  variable1.textContent = 'Markup';
  variable2.textContent = 'Profit';
  markup = v1;
  profit = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(markupRadio.checked)
    result.textContent = `Markup = ${computemarkup().toFixed(2)}`;

  else if(profitRadio.checked)
    result.textContent = `Profit = ${computeprofit().toFixed(2)}`;

  else if(costRadio.checked)
    result.textContent = `Cost = ${computecost().toFixed(2)}`;
})

// calculation

function computemarkup() {
  return (Number(profit.value) / Number(cost.value)) * 100;
}

function computeprofit() {
  return (Number(markup.value) / 100) * Number(cost.value);
}

function computecost() {
  return Number(profit.value) / (Number(markup.value) / 100);
}