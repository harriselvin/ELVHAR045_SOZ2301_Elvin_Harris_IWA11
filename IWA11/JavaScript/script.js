const order1 = document.querySelector('[data-key="order1"]');
const biscuits1 = order1.querySelector('.biscuits dd');
const donuts1 = order1.querySelector('.donuts dd');
const pancakes1 = order1.querySelector('.pancakes dd');
const status1 = order1.querySelector('.status dd');

biscuits1.textContent = order1.dataset.biscuits;
donuts1.textContent = order1.dataset.donuts;
pancakes1.textContent = order1.dataset.pancakes;
status1.textContent = order1.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

const order2 = document.querySelector('[data-key="order2"]');
const biscuits2 = order2.querySelector('.biscuits dd');
const donuts2 = order2.querySelector('.donuts dd');
const pancakes2 = order2.querySelector('.pancakes dd');
const status2 = order2.querySelector('.status dd');

biscuits2.textContent= order2.dataset.biscuits;
donuts2.textContent = order2.dataset.donuts;
pancakes2.textContent = order2.dataset.pancakes;
status2.textContent = order2.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

const order3 = document.querySelector('[data-key="order3"]');
const biscuits3 = order3.querySelector('.biscuits dd');
const donuts3 = order3.querySelector('.donuts dd');
const pancakes3 = order3.querySelector('.pancakes dd');
const status3 = order3.querySelector('.status dd');

biscuits3.textContent = order3.dataset.biscuits;
donuts3.textContent = order3.dataset.donuts;
pancakes3.textContent = order3.dataset.pancakes;
status3.textContent = order3.dataset.delivered === 'true' ? 'Delivered' : 'Pending';