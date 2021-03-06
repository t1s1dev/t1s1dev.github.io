$(document).ready(function() {
  editMode.set( true );

  $.get( "../data/AA_courses.csv", function( data ) { initCourseData( data, "course-table" ) });
  $.get( "../data/AA_certs.csv", function( data ) { initCertData( data, "cert-table" ) });
  $.get( "../data/AA_assoc.csv", function( data ) { initAssocData( data, "assoc-table" ) });

  $("#download-csv").click( function() {
    downloadCSV( assocData_obj );
  });

  
  $("#view").click( function() {
    var search_base_url = "https://www.globalknowledge.com/us-en/search/?q="
    var search_term = $("#root-choice").val().replace(/ /g, "+");
    var type_term = $("#root-type").text().toLowerCase();
    var url = search_base_url+search_term+"&f="+type_term;
    window.open(url, '_blank');
  });

  /* TAB NAV */

  $('#nav-tab a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('#nav-tab a').on('shown.bs.tab', function (e) {
    $(e.target)
      .addClass('text-primary')
      .removeClass('text-muted');
    refreshTables();
  });

  $('#nav-tab a').on('hidden.bs.tab', function (e) {
    $(e.target)
      .addClass('text-muted')
      .removeClass('text-primary');
    refreshTables();
  });

});