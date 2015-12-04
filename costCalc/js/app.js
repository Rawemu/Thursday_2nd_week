/**
 * Created by coderslab on 04.12.15.
 */

$(document).ready(function(){
    var nameInput = $("#nameInput");
    var priceInput = $("#priceInput");
    var amountInput = $("#amountInput");
    var addButton = $("#addButton");
    var total = $("#total");
    var itemsList = $("#itemsList");
    var totalPrice = 0;

    total.text(totalPrice);

    addButton.on("click", function(){
        var newItemName = nameInput.prop("value");
        var newItemPrice = parseFloat(priceInput.prop("value"));
        var newItemAmount = parseFloat(amountInput.prop("value"));

        console.log(newItemName);
        console.log(newItemPrice);
        console.log(newItemAmount);

        if((newItemName.length === 0) || isNaN(newItemAmount) || isNaN(newItemPrice) || (newItemAmount < 0) ||
            (newItemPrice < 0)){
            console.log("Zle dane");
            return;
        }

        var newElement = $("<li>");
        var sum = newItemAmount * newItemPrice;

        newElement.html("Name: " + newItemName + "<br>" +
                        "Amount: " + newItemAmount + "<br>" +
                        "Price: " + newItemPrice + "<br>" +
                        "Sum: " + sum + "<br>");

        var deleteButton = $("<button>Delete</button>");
        deleteButton.on("click", function(){
            $(this).parent().remove();
            totalPrice -= sum;
            total.text(totalPrice);
        });

        deleteButton.appendTo(newElement);
        itemsList.append(newElement);

        totalPrice += sum;
        total.text(totalPrice);
    });
});