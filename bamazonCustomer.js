// bring in npms
var inquirer = require("inquirer");
var mysql = require("mysql");

// connects to my local host
var connection = mysql.createConnection({

    host: "localhost",

    port: 3306,

    user: "root",

    // hello TA! enter password here...
    password: "rae212325",

    database: "bamazon"

});

// test connection to server and start the program
connection.connect(function (err) {

    if (err) throw err;

    // console.log("You are connected!");

    start();

});

// displays list of products
function start() {

    connection.query("SELECT * FROM products", function (err, res) {

        if(err) throw err;

        for (var i = 0; i < res.length; i++) {

            console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: $" + res[i].price + " | " + "Quantity: " + res[i].stock_quantity + "\n");

        }

        question();

    });

}

// prompts user for what they want and how many they want
function question() {

    inquirer.prompt([

        {
            name: "id",
            type: "input",
            message: "What is the ID of the product you want to buy?"
        },

        {
            name: 'quantity',
            type: 'input',
            message: "How many units would you like to buy?"
        },

    ]).then(function (answers) {

        var ordered = answers.quantity;

        var idOdrered = answers.id;

        purchase(idOdrered, ordered);

    });

};

// checks if purchase can be done then completes order
function purchase(id, ordered) {

    connection.query('SELECT * FROM products WHERE item_id = ' + id, function (err, response) {

        if (err) throw err;

        if (ordered <= response[0].stock_quantity) {

            var totalCost = response[0].price * ordered;

            console.log("Purchase Complete! Your total cost for " + ordered + " " + response[0].product_name + " is $" + totalCost + ".");

            // updates server
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + ordered + ' WHERE item_id = ' + id);

        } else {

            console.log("Insufficient quantity!");

        };

        restart();

    });

};

// Checks to see if user wants to continue shopping or end the program
function restart() {

    inquirer.prompt([{

        type: "confirm",

        message: "Continue shopping?",

        name: "confirm",

        default: true

    }]).then(function (answer) {

        if (answer.confirm) {

            start();

        }

        else {

            console.log("Thank you for shopping with us. Come again soon!");

            connection.end();

        }

    });

}