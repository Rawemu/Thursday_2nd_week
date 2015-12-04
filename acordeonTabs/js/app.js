/**
 * Created by coderslab on 04.12.15.
 */

$(document).ready(function(){
    console.log("Uncaught SyntaxError: Unexpected token ");

    var acordeonHeadings = $(".acordeon h1");
    var currentVisibleItem = null;

    acordeonHeadings.on("click", function(){
        if((currentVisibleItem != null)&&(currentVisibleItem.get(0) != $(this).next().get(0))){
            currentVisibleItem.hide(1000);
        }
        currentVisibleItem = $(this).next();
        currentVisibleItem.toggle(1000);
    });
});