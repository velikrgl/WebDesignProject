$(document).ready(function () {

    $("#nav_list li").click(function() {
    var head = $(this).children("a").attr("title");
    var filename = head+".json";
    focusjs(filename);
    });
});

function focusjs(jsonFileURL) {
    
    $.ajax({
    
        url: jsonFileURL, dataType: "text", success: function (data) {

            var json = $.parseJSON(data);
            $("main > img").attr("src", json.workers[0].image);
            $("main > p").html(json.workers[0].text);
            $("main > h1").html(json.workers[0].title);
            $("main > h2").html(json.workers[0].worker);
        }
    });
}
