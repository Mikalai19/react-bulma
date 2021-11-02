const menu = {
    pepperoni:{
        toppings:["cheese", "salami", "marinada"],
        price: 10
    },
    margharita:{
        toppings:["cheese", "basil", "tomatos"],
        price:20
    },
    fourcheese:{
        toppings:["mozzarella", "swiss", "olive"],
        price:30
    },
    chicago:{
        toppings:["sausage", "basil", "salami"],
        price:40
    },mushroom:{
        toppings:["mushroom", "cheese", "tomato"],
        price:50
    }
}
for (let key in menu){
    let pizza =menu[key];
    console.log(pizza);
    let{toppings,price} = pizza;
    console.log(toppings);
    console.log(price);
}
console.log(menu.banana);
if (menu.banana) {
    console.log('There is banana')
}else {
    console.log('No banana pizza');
}