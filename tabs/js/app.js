/**
 * Created by coderslab on 04.12.15.
 */

$(document).ready(function(){
    var tabLinks = $(".tab li");
    var paragraph = $(".tab p");
    var currentVisibleParagraph = 0;

    paragraph.eq(currentVisibleParagraph).show(0);

    tabLinks.on("click", function(){
        paragraph.eq(currentVisibleParagraph).hide(0);
        currentVisibleParagraph = this.dataset.id;
        paragraph.eq(currentVisibleParagraph).show(0);
    });
});