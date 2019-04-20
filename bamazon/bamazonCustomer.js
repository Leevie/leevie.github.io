var mysql = require("mysql");
var inquirer = require("inquirer");
var custNumber = "";

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    custNumber = connection.threadId;
    console.log(custNumber);
    showProductsFunc();
  });

 

function showProductsFunc(){
console.log("You are connected as customer: #" + custNumber + "\n");
console.log("Here are today's products:  " + "\n");

connection.query("select * from products",function(err, results, fields){
      console.log("===============================================================");

    for (var i = 0; i < results.length; i++) {
        if (results[i].stock_quantity === 0){
            var stock = "OUT OF STOCK!!";
        } else {var stock = results[i].stock_quantity
        };

        console.log(results[i].item_id + "    | " + results[i].product_name + " | " + results[i].department_name + " | " + "$" + results[i].price + " | " + stock);
      }
      console.log("===============================================================");
      custPrompt();
  });
  
}

function custPrompt(){
      inquirer
      .prompt([
        {
          type: "input",
          message: "Please select the item ID of the product you would like to buy: ",
          name: "prodSelected"
        },
        {
          type: "input",
          message:  "How many units would you like to purchase?: ",
          name: "prodSelectedQuant"
        }
      ])
      .then(function(inquirerResponse) {
          console.log("You selected product number: " + inquirerResponse.prodSelected);
          console.log("Selecting your product...\n");
          setTimeout(function(){ selectProducts(inquirerResponse.prodSelected, inquirerResponse.prodSelectedQuant) }, 2000);
          
    });
};


function selectProducts(productID, quantity) {
  connection.query("SELECT * FROM products WHERE item_id =" + productID, function(err, res) {
    if (err) throw err;
    console.log("You have chosen: " + "\n");
    console.log("-----------------");
    var prodObj = res[0]
    console.log("Product Name: " + prodObj.product_name);
    console.log("Price: " + "$" + prodObj.price);
    console.log("Quantity: " + quantity);
    console.log("On Hand: " + prodObj.stock_quantity);
    console.log("-----------------");

    if (quantity <= prodObj.stock_quantity){
        console.log("OK TO ORDER");
        confirmFunc();
    } else {
        console.log("Insufficient Quantity -- Cancelling Order!");
        connection.end();
    }

    // function definitions below:
    function confirmFunc(){
        inquirer
        .prompt([
            {
            type: "list",
            message: "Please confirm your purchase, is this accurate?",
            choices: ["Y", "N"],
            name: "choice"
            }
        ])
        .then(function(inquirerResponse){
            if (inquirerResponse.choice === "Y"){
                console.log("Order this up!");
                console.log ("Your Total is:  " + "$" + (quantity * prodObj.price));
                orderFunc(prodObj);
            }else if(inquirerResponse.choice === "N"){
                console.log("Cancel Order!!");
                connection.end();
            }
        })
    }

    function orderFunc(prodObj){
        connection.query("UPDATE products SET ? WHERE ?",[
            {
                stock_quantity: (prodObj.stock_quantity - quantity)
            },
            {
                item_id: prodObj.item_id
            }
        ], 
        function(err, res) {
            console.log("Thank You for shopping!");
            connection.end();
        })
    }



  });

}

