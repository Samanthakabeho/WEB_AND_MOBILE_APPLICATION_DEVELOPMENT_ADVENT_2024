//function that returns profits for a business selling products
function calculate_profit(selling_price, cost_price,number_of_units_sold){
    var selling_price=6000;
    var cost_price=600;
    var number_of_units_sold =40
    var profit =(selling_price - cost_price)*number_of_units_sold;
    console.log("The profit is",profit)
}
calculate_profit();