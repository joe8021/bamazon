var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
    showProducts();

    IDask();
});

function showProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

var action = process.argv[2];
// function to handle posting new items up for auction
function IDask() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the item_id you would like to buy?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units would you like to buy?"
            },
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            if (answer.quantity <= connection.query("Select stock_quantity FROM products WHERE item_id=" + answer.item)){
            }
            else { console.log("not enough stock")
        }
    });
        
}



