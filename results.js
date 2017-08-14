$(function() {

    var getSearch = window.location.search;
    getSearch = getSearch.substr(3);
    $(".searchBar").val(getSearch);
    console.log(getSearch);

});