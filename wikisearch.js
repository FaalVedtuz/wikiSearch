$(function() {
    var wikiQ;

    function fetchData(query) {
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php",
            dataType: 'jsonp',
            type: "POST",
            data: {
                action: 'opensearch',
                format: 'json',
                limit: 5,
                search: query
            },
            success: function(data) {
                console.log(data[1]);
                clearPartialResult();
                if (wikiQ !== "") {
                    for (var i = 0; i < data[1].length; i++) {
                        $("#partial_results").append("<a href=" + data[3][i] + "><div class='resultContainer'>" + data[1][i] + "</div></a>");
                    }
                    $("#partial_results").fadeIn("fast");
                } else {
                    $("#partial_results").hide();
                }
            },
            error: function(req, errStat, errMsg) {
                console.log("Sorry there has been a problem." + errStat + req);
            }
        });
    }

    function clearPartialResult() {
        $(".resultContainer").remove();
    }
    //remove suggestion box when click outside of the suggestion container
    $("body").click(function(e) {
        $("#partial_results").fadeOut("fast");
        e.stopPropagation();
    });

    $("#searchForm").keyup(function() {
        wikiQ = $("#search").val();
        fetchData(wikiQ);
    });

}); // document.ready end