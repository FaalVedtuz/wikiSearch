$(function(){
  var wikiQ;

function fetchData(query){
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    dataType: 'jsonp',
    type: "POST",
    data:{
      action: 'opensearch',
      format: 'json',
      search: query
    },
    success: function(data){
      console.log(wikiQ);
      console.log("data fetched.." + data);
    },
    error: function(req,errStat,errMsg){
      console.log("Sorry there has been a problem. Error: " + errStat + req);
    }
  });
};

  $("#search").keypress(function(e){
    wikiQ = $("#search").val();
    //console.log("typing.." + wikiQ);
    fetchData(wikiQ);
  });


}); // document.ready end
