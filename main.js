const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    alert('you clicked me!!');
});

btn.addEventListener('click',()=>{
   console.log('second Thing');
});

btn.addEventListener('mouseover', function() {
    btn.innerText="stop touching me";
});

btn.addEventListener('mouseout', function() {
    btn.innerText="click me";
});

const hero = document.querySelector('#hero');

hero.addEventListener('mouseover', function() {
    hero.innerText="goodbye";
});

hero.addEventListener('mouseout', function() {
    hero.innerText="hello people";
});

const shop = document.querySelector('.shop');

shop.addEventListener('click', function() {
    shop.innerText ="hey";
});

shop.addEventListener('mouseout', function() {
    shop.innerText ="shop";
});
