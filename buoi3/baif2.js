$(document).ready(function(){
    $("#addItemButton").click(function(){
        var newItemValue = $("#newItemInput").val().trim();
        if(newItemValue !== "") {
            $("#itemList").append("<li>" + newItemValue + "</li>");
            $("#newItemInput").val(""); // Clear the input field
        }
    });
});
