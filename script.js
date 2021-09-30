const toggler = document.querySelector('.toggler');
const basicPlan = document.querySelector('.basic .plan-price');
const proPlan = document.querySelector('.professional .plan-price');
const masterPlan = document.querySelector('.master .plan-price');

toggler.addEventListener('change', () => {
  if (toggler.checked) {
    basicPlan.innerHTML = `<span class="dollar">&dollar;</span>19.99`;
    proPlan.innerHTML = `<span class="dollar">&dollar;</span>24.99`;
    masterPlan.innerHTML = `<span class="dollar">&dollar;</span>39.99`;
  } else {
    basicPlan.innerHTML = `<span class="dollar">&dollar;</span>199.99`;
    proPlan.innerHTML = `<span class="dollar">&dollar;</span>249.99`;
    masterPlan.innerHTML = `<span class="dollar">&dollar;</span>399.99`;
  }
});
