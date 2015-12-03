/**
 * Created by coderslab on 03.12.15.
 */

document.addEventListener("DOMContentLoaded", function(){
    var tooltip = document.querySelectorAll(".tooltip");
    var tooltipElement = null;

    for(var i = 0; i < tooltip.length; i++){
        tooltip[i].addEventListener("mouseover", function(event){
            tooltipElement = document.createElement("div");
            tooltipElement.innerHTML = this.dataset.tooltip;
            tooltipElement.classList.add("tooltiptext");
            this.appendChild(tooltipElement);
        });
        tooltip[i].addEventListener("mouseout", function(event){
            this.removeChild(tooltipElement);
            tooltipElement = null;
        });
    }

});