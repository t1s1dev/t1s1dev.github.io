{"filter":false,"title":"pathfinder.js","tooltip":"/pathfinder.js","undoManager":{"mark":71,"position":71,"stack":[[{"start":{"row":0,"column":0},"end":{"row":91,"column":1},"action":"insert","lines":["/*","global $","global Tabulator","*/","","$(document).ready(function() {","  $.get( \"data/AA_courses.csv\", function( data ) {processData(data, \"course-table\", 1)});","  $.get( \"data/AA_certs.csv\", function( data ) {processData(data, \"cert-table\", 0)});","  $.get( \"data/AA_assoc.csv\", function( data ) {processAssocData(data, \"assoc-table\")});","// no data yet","processData(\"none\", \"assoc-table\", 0);","});","","var assocTable;","","function processData( data, tableName, showID ) {","  var dataRows = data.split(/\\r\\n|\\n/);","  var headers = dataRows[0].split(',');","  var data_arr = [];","  var columns = [];","","  function removeQuoteMarks(string) {","    return string.replace(/\"/g,'');","  };","","  for (var i=1; i<dataRows.length; i++) {","    var data = dataRows[i].split(',');","    if (data.length == headers.length) {","      var row = {};","      for (var j=0; j<headers.length; j++) {","        row[headers[j]] = removeQuoteMarks(data[j]);","      }","      data_arr.push(row);","    }","  };","","  if(showID) {","    columns = [","    {title:\"ID\", field:headers[0], width:80},","    {title:\"Name\", field:headers[1]}","    ]","  }","  else {","    columns = [","    {title:\"Name\", field:headers[1]}","    ]","  }","","  var table = new Tabulator(\"#\"+tableName, {","    height:550, ","    data:data_arr,","    layout:\"fitColumns\", //fit columns to width of table (optional)","    columns: columns,","    rowClick:function(e, row){ //trigger an alert message when the row is clicked","      $(\"#root-choice\").val(row.getData()[\"NAME\"]);","      assocTable.setFilter(\"COURSE_ID\", \"=\", row.getData()[\"COURSE_ID\"]);","    }","  });","}","","function processAssocData( data, tableName ) {","  var dataRows = data.split(/\\r\\n|\\n/);","  var headers = dataRows[0].split(',');","  var data_arr = [];","  var columns = [];","","  for (var i=1; i<dataRows.length; i++) {","   var data = dataRows[i].split(',');","   if (data.length == headers.length) {","    var row = {};","    for (var j=0; j<headers.length; j++) {","      row[headers[j]] = data[j];","    }","    data_arr.push(row);","  }","};","","columns = [","{title:\"COURSE\", field:headers[0], width:160},","{title:\"CERT\", field:headers[1], width:160}","]","","assocTable = new Tabulator(\"#\"+tableName, {","  height:550, ","  data:data_arr,","  movableRows: true, //enable user movable rows","  columns: columns,","  rowClick:function(e, row){ //trigger an alert message when the row is clicked","      // console.log(row.getData());","    },","  });","}"],"id":1}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":38},"action":"remove","lines":["// no data yet","processData(\"none\", \"assoc-table\", 0);"],"id":2}],[{"start":{"row":8,"column":88},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":89,"column":1},"action":"remove","lines":["/*","global $","global Tabulator","*/","","$(document).ready(function() {","  $.get( \"data/AA_courses.csv\", function( data ) {processData(data, \"course-table\", 1)});","  $.get( \"data/AA_certs.csv\", function( data ) {processData(data, \"cert-table\", 0)});","  $.get( \"data/AA_assoc.csv\", function( data ) {processAssocData(data, \"assoc-table\")});","});","","var assocTable;","","function processData( data, tableName, showID ) {","  var dataRows = data.split(/\\r\\n|\\n/);","  var headers = dataRows[0].split(',');","  var data_arr = [];","  var columns = [];","","  function removeQuoteMarks(string) {","    return string.replace(/\"/g,'');","  };","","  for (var i=1; i<dataRows.length; i++) {","    var data = dataRows[i].split(',');","    if (data.length == headers.length) {","      var row = {};","      for (var j=0; j<headers.length; j++) {","        row[headers[j]] = removeQuoteMarks(data[j]);","      }","      data_arr.push(row);","    }","  };","","  if(showID) {","    columns = [","    {title:\"ID\", field:headers[0], width:80},","    {title:\"Name\", field:headers[1]}","    ]","  }","  else {","    columns = [","    {title:\"Name\", field:headers[1]}","    ]","  }","","  var table = new Tabulator(\"#\"+tableName, {","    height:550, ","    data:data_arr,","    layout:\"fitColumns\", //fit columns to width of table (optional)","    columns: columns,","    rowClick:function(e, row){ //trigger an alert message when the row is clicked","      $(\"#root-choice\").val(row.getData()[\"NAME\"]);","      assocTable.setFilter(\"COURSE_ID\", \"=\", row.getData()[\"COURSE_ID\"]);","    }","  });","}","","function processAssocData( data, tableName ) {","  var dataRows = data.split(/\\r\\n|\\n/);","  var headers = dataRows[0].split(',');","  var data_arr = [];","  var columns = [];","","  for (var i=1; i<dataRows.length; i++) {","   var data = dataRows[i].split(',');","   if (data.length == headers.length) {","    var row = {};","    for (var j=0; j<headers.length; j++) {","      row[headers[j]] = data[j];","    }","    data_arr.push(row);","  }","};","","columns = [","{title:\"COURSE\", field:headers[0], width:160},","{title:\"CERT\", field:headers[1], width:160}","]","","assocTable = new Tabulator(\"#\"+tableName, {","  height:550, ","  data:data_arr,","  movableRows: true, //enable user movable rows","  columns: columns,","  rowClick:function(e, row){ //trigger an alert message when the row is clicked","      // console.log(row.getData());","    },","  });","}"],"id":4},{"start":{"row":0,"column":0},"end":{"row":96,"column":1},"action":"insert","lines":["/*","global $","global Tabulator","*/","","$(document).ready(function() {","  $.get( \"data/AA_courses.csv\", function( data ) { setupCourseTable(data, \"course-table\") });","  $.get( \"data/AA_certs.csv\", function( data ) { setupCertTable(data, \"cert-table\") });","  $.get( \"data/AA_assoc.csv\", function( data ) { setupAssocTable(data, \"assoc-table\") });","});","","var assocTable;","","function processData( data, tableName ) {","  var dataRows = data.split(/\\r\\n|\\n/);","  var headers = dataRows[0].split(',');","  var data_arr = [];","  var columns = [];","","  function removeQuoteMarks(string) {","    return string.replace(/\"/g,'');","  };","","  for (var i=1; i<dataRows.length; i++) {","    var data = dataRows[i].split(',');","    if (data.length == headers.length) {","      var row = {};","      for (var j=0; j<headers.length; j++) {","        row[headers[j]] = removeQuoteMarks(data[j]);","      }","      data_arr.push(row);","    }","  };","","  return data_arr;","}","","function setupCourseTable( data, tableName ) {","  ","  var courseData_arr = processData( data, tableName );","","  columns = [","    {title:\"ID\", field:headers[0], width:80},","    {title:\"Name\", field:headers[1]}","    ]","","  var table = new Tabulator(\"#\"+tableName, {","    height: 550, ","    data: courseData_arr,","    layout: \"fitColumns\",","    columns: columns,","    rowClick:function(e, row){","      $(\"#root-choice\").val(row.getData()[\"NAME\"]);","      assocTable.setFilter(\"COURSE_ID\", \"=\", row.getData()[\"COURSE_ID\"]);","    }","  });","}","","function setupCertTable( data, tableName ) {","  ","  var certData_arr = processData( data, tableName );","","  columns = [","    {title:\"Name\", field:headers[1]}","    ]","","  var table = new Tabulator(\"#\"+tableName, {","    height: 550, ","    data: certData_arr,","    layout: \"fitColumns\",","    columns: columns,","    rowClick:function(e, row){","      $(\"#root-choice\").val(row.getData()[\"NAME\"]);","      assocTable.setFilter(\"CERT_ID\", \"=\", row.getData()[\"CERT_ID\"]);","    }","  });","}","","function setupAssocTable( data, tableName ) {","  ","  var assocData_arr = processData( data, tableName );","","  columns = [","    {title:\"COURSE\", field:headers[0], width:160},","    {title:\"CERT\", field:headers[1], width:160}","    ]","  ","  assocTable = new Tabulator(\"#\"+tableName, {","    height: 550, ","    data: assocData_arr,","    movableRows: true, //enable user movable rows","    columns: columns,","    rowClick:function(e, row){ //trigger an alert message when the row is clicked","        // console.log(row.getData());","      },","  });","}"]}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":43,"column":11},"end":{"row":43,"column":12},"action":"insert","lines":[" "],"id":6}],[{"start":{"row":43,"column":26},"end":{"row":43,"column":27},"action":"insert","lines":[" "],"id":7}],[{"start":{"row":42,"column":24},"end":{"row":42,"column":25},"action":"insert","lines":[" "],"id":8}],[{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":9},{"start":{"row":34,"column":0},"end":{"row":34,"column":1},"action":"insert","lines":["c"]},{"start":{"row":34,"column":1},"end":{"row":34,"column":2},"action":"insert","lines":["o"]}],[{"start":{"row":34,"column":2},"end":{"row":34,"column":3},"action":"insert","lines":["n"],"id":10},{"start":{"row":34,"column":3},"end":{"row":34,"column":4},"action":"insert","lines":["s"]},{"start":{"row":34,"column":4},"end":{"row":34,"column":5},"action":"insert","lines":["l"]},{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"insert","lines":["o"]}],[{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"remove","lines":["o"],"id":11},{"start":{"row":34,"column":4},"end":{"row":34,"column":5},"action":"remove","lines":["l"]}],[{"start":{"row":34,"column":4},"end":{"row":34,"column":5},"action":"insert","lines":["o"],"id":12},{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"insert","lines":["l"]},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":["e"]},{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"insert","lines":["."]},{"start":{"row":34,"column":8},"end":{"row":34,"column":9},"action":"insert","lines":["l"]},{"start":{"row":34,"column":9},"end":{"row":34,"column":10},"action":"insert","lines":["o"]},{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":34,"column":11},"end":{"row":34,"column":13},"action":"insert","lines":["()"],"id":13}],[{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["d"],"id":14},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["a"]},{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["t"]}],[{"start":{"row":34,"column":12},"end":{"row":34,"column":15},"action":"remove","lines":["dat"],"id":15},{"start":{"row":34,"column":12},"end":{"row":34,"column":20},"action":"insert","lines":["data_arr"]}],[{"start":{"row":34,"column":21},"end":{"row":34,"column":22},"action":"insert","lines":[";"],"id":16}],[{"start":{"row":33,"column":0},"end":{"row":34,"column":22},"action":"remove","lines":["","console.log(data_arr);"],"id":17}],[{"start":{"row":34,"column":9},"end":{"row":34,"column":10},"action":"insert","lines":["{"],"id":18}],[{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":["\""],"id":19},{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"insert","lines":["a"]},{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["r"]},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["r"]},{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["\""]}],[{"start":{"row":34,"column":15},"end":{"row":34,"column":16},"action":"insert","lines":[":"],"id":20}],[{"start":{"row":34,"column":16},"end":{"row":34,"column":17},"action":"insert","lines":[" "],"id":21}],[{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":[","],"id":22}],[{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"insert","lines":[" "],"id":23}],[{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":[" "],"id":24}],[{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["h"],"id":25},{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["e"]},{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["a"]},{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["d"]},{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["e"]},{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["r"]},{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["s"]}],[{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"insert","lines":[":"],"id":26}],[{"start":{"row":34,"column":36},"end":{"row":34,"column":37},"action":"insert","lines":[" "],"id":27},{"start":{"row":34,"column":37},"end":{"row":34,"column":38},"action":"insert","lines":["h"]},{"start":{"row":34,"column":38},"end":{"row":34,"column":39},"action":"insert","lines":["e"]},{"start":{"row":34,"column":39},"end":{"row":34,"column":40},"action":"insert","lines":["a"]},{"start":{"row":34,"column":40},"end":{"row":34,"column":41},"action":"insert","lines":["d"]},{"start":{"row":34,"column":41},"end":{"row":34,"column":42},"action":"insert","lines":["e"]},{"start":{"row":34,"column":42},"end":{"row":34,"column":43},"action":"insert","lines":["r"]},{"start":{"row":34,"column":43},"end":{"row":34,"column":44},"action":"insert","lines":["s"]}],[{"start":{"row":34,"column":44},"end":{"row":34,"column":45},"action":"insert","lines":[" "],"id":28},{"start":{"row":34,"column":45},"end":{"row":34,"column":46},"action":"insert","lines":["}"]}],[{"start":{"row":34,"column":28},"end":{"row":34,"column":35},"action":"remove","lines":["headers"],"id":29},{"start":{"row":34,"column":28},"end":{"row":34,"column":29},"action":"insert","lines":["\""]},{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["\""]}],[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["h"],"id":30},{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["e"]},{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["a"]},{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["d"]},{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["e"]},{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["r"]},{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"insert","lines":["s"]}],[{"start":{"row":39,"column":53},"end":{"row":39,"column":54},"action":"insert","lines":["."],"id":31},{"start":{"row":39,"column":54},"end":{"row":39,"column":55},"action":"insert","lines":["a"]},{"start":{"row":39,"column":55},"end":{"row":39,"column":56},"action":"insert","lines":["r"]},{"start":{"row":39,"column":56},"end":{"row":39,"column":57},"action":"insert","lines":["r"]}],[{"start":{"row":39,"column":58},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":40,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":40,"column":2},"end":{"row":40,"column":58},"action":"insert","lines":["var courseData_arr = processData( data, tableName ).arr;"],"id":33}],[{"start":{"row":40,"column":6},"end":{"row":40,"column":20},"action":"remove","lines":["courseData_arr"],"id":34},{"start":{"row":40,"column":6},"end":{"row":40,"column":7},"action":"insert","lines":["h"]},{"start":{"row":40,"column":7},"end":{"row":40,"column":8},"action":"insert","lines":["e"]},{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["a"]},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["d"]},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["e"]},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["r"]},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["s"]}],[{"start":{"row":40,"column":47},"end":{"row":40,"column":50},"action":"remove","lines":["arr"],"id":35},{"start":{"row":40,"column":47},"end":{"row":40,"column":48},"action":"insert","lines":["h"]},{"start":{"row":40,"column":48},"end":{"row":40,"column":49},"action":"insert","lines":["e"]},{"start":{"row":40,"column":49},"end":{"row":40,"column":50},"action":"insert","lines":["a"]},{"start":{"row":40,"column":50},"end":{"row":40,"column":51},"action":"insert","lines":["d"]},{"start":{"row":40,"column":51},"end":{"row":40,"column":52},"action":"insert","lines":["e"]},{"start":{"row":40,"column":52},"end":{"row":40,"column":53},"action":"insert","lines":["r"]},{"start":{"row":40,"column":53},"end":{"row":40,"column":54},"action":"insert","lines":["s"]}],[{"start":{"row":39,"column":17},"end":{"row":39,"column":20},"action":"remove","lines":["arr"],"id":36},{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"insert","lines":["o"]},{"start":{"row":39,"column":18},"end":{"row":39,"column":19},"action":"insert","lines":["b"]},{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["j"]}],[{"start":{"row":39,"column":53},"end":{"row":39,"column":57},"action":"remove","lines":[".arr"],"id":37}],[{"start":{"row":40,"column":16},"end":{"row":40,"column":46},"action":"remove","lines":["processData( data, tableName )"],"id":38},{"start":{"row":40,"column":16},"end":{"row":40,"column":30},"action":"insert","lines":["courseData_obj"]}],[{"start":{"row":40,"column":39},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":39},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"insert","lines":["  "]},{"start":{"row":41,"column":2},"end":{"row":41,"column":3},"action":"insert","lines":["v"]},{"start":{"row":41,"column":3},"end":{"row":41,"column":4},"action":"insert","lines":["a"]},{"start":{"row":41,"column":4},"end":{"row":41,"column":5},"action":"insert","lines":["r"]}],[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"insert","lines":[" "],"id":40},{"start":{"row":41,"column":6},"end":{"row":41,"column":7},"action":"insert","lines":["c"]},{"start":{"row":41,"column":7},"end":{"row":41,"column":8},"action":"insert","lines":["o"]},{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"insert","lines":["r"]},{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["u"]},{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":["s"]},{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"remove","lines":["e"],"id":41},{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"remove","lines":["s"]},{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"remove","lines":["u"]},{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"remove","lines":["r"]}],[{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"insert","lines":["u"],"id":42},{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["r"]}],[{"start":{"row":41,"column":6},"end":{"row":41,"column":10},"action":"remove","lines":["cour"],"id":43},{"start":{"row":41,"column":6},"end":{"row":41,"column":20},"action":"insert","lines":["courseData_arr"]}],[{"start":{"row":41,"column":20},"end":{"row":41,"column":21},"action":"insert","lines":[" "],"id":44},{"start":{"row":41,"column":21},"end":{"row":41,"column":22},"action":"insert","lines":["="]}],[{"start":{"row":41,"column":22},"end":{"row":41,"column":23},"action":"insert","lines":[" "],"id":45},{"start":{"row":41,"column":23},"end":{"row":41,"column":24},"action":"insert","lines":["c"]},{"start":{"row":41,"column":24},"end":{"row":41,"column":25},"action":"insert","lines":["o"]},{"start":{"row":41,"column":25},"end":{"row":41,"column":26},"action":"insert","lines":["u"]},{"start":{"row":41,"column":26},"end":{"row":41,"column":27},"action":"insert","lines":["r"]},{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":41,"column":28},"end":{"row":41,"column":29},"action":"insert","lines":["e"],"id":46}],[{"start":{"row":41,"column":23},"end":{"row":41,"column":29},"action":"remove","lines":["course"],"id":47},{"start":{"row":41,"column":23},"end":{"row":41,"column":37},"action":"insert","lines":["courseData_obj"]}],[{"start":{"row":41,"column":37},"end":{"row":41,"column":38},"action":"insert","lines":["."],"id":48},{"start":{"row":41,"column":38},"end":{"row":41,"column":39},"action":"insert","lines":["a"]},{"start":{"row":41,"column":39},"end":{"row":41,"column":40},"action":"insert","lines":["r"]},{"start":{"row":41,"column":40},"end":{"row":41,"column":41},"action":"insert","lines":["r"]},{"start":{"row":41,"column":41},"end":{"row":41,"column":42},"action":"insert","lines":[";"]}],[{"start":{"row":43,"column":2},"end":{"row":43,"column":3},"action":"insert","lines":["v"],"id":49},{"start":{"row":43,"column":3},"end":{"row":43,"column":4},"action":"insert","lines":["a"]},{"start":{"row":43,"column":4},"end":{"row":43,"column":5},"action":"insert","lines":["r"]}],[{"start":{"row":43,"column":5},"end":{"row":43,"column":6},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":19},"action":"remove","lines":["  var columns = [];"],"id":51},{"start":{"row":16,"column":20},"end":{"row":17,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":61,"column":2},"end":{"row":61,"column":52},"action":"remove","lines":["var certData_arr = processData( data, tableName );"],"id":52},{"start":{"row":61,"column":2},"end":{"row":63,"column":42},"action":"insert","lines":["  var courseData_obj = processData( data, tableName );","  var headers = courseData_obj.headers;","  var courseData_arr = courseData_obj.arr;"]}],[{"start":{"row":61,"column":0},"end":{"row":61,"column":4},"action":"remove","lines":["    "],"id":53}],[{"start":{"row":61,"column":0},"end":{"row":61,"column":1},"action":"insert","lines":[" "],"id":54},{"start":{"row":61,"column":1},"end":{"row":61,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":63,"column":6},"end":{"row":63,"column":20},"action":"remove","lines":["courseData_arr"],"id":55},{"start":{"row":63,"column":6},"end":{"row":63,"column":18},"action":"insert","lines":["certData_arr"]}],[{"start":{"row":63,"column":21},"end":{"row":63,"column":28},"action":"remove","lines":["courseD"],"id":56},{"start":{"row":63,"column":21},"end":{"row":63,"column":22},"action":"insert","lines":["d"]},{"start":{"row":63,"column":22},"end":{"row":63,"column":23},"action":"insert","lines":["a"]},{"start":{"row":63,"column":23},"end":{"row":63,"column":24},"action":"insert","lines":["t"]},{"start":{"row":63,"column":24},"end":{"row":63,"column":25},"action":"insert","lines":["a"]}],[{"start":{"row":63,"column":24},"end":{"row":63,"column":25},"action":"remove","lines":["a"],"id":57},{"start":{"row":63,"column":23},"end":{"row":63,"column":24},"action":"remove","lines":["t"]},{"start":{"row":63,"column":22},"end":{"row":63,"column":23},"action":"remove","lines":["a"]}],[{"start":{"row":62,"column":16},"end":{"row":62,"column":23},"action":"remove","lines":["courseD"],"id":58},{"start":{"row":62,"column":16},"end":{"row":62,"column":17},"action":"insert","lines":["d"]}],[{"start":{"row":61,"column":6},"end":{"row":61,"column":13},"action":"remove","lines":["courseD"],"id":59},{"start":{"row":61,"column":6},"end":{"row":61,"column":7},"action":"insert","lines":["d"]}],[{"start":{"row":63,"column":6},"end":{"row":63,"column":11},"action":"remove","lines":["certD"],"id":60},{"start":{"row":63,"column":6},"end":{"row":63,"column":7},"action":"insert","lines":["d"]}],[{"start":{"row":38,"column":0},"end":{"row":40,"column":42},"action":"remove","lines":["  var courseData_obj = processData( data, tableName );","  var headers = courseData_obj.headers;","  var courseData_arr = courseData_obj.arr;"],"id":61},{"start":{"row":38,"column":0},"end":{"row":40,"column":30},"action":"insert","lines":["  var data_obj = processData( data, tableName );","  var headers = data_obj.headers;","  var data_arr = data_obj.arr;"]}],[{"start":{"row":49,"column":10},"end":{"row":49,"column":24},"action":"remove","lines":["courseData_arr"],"id":62},{"start":{"row":49,"column":10},"end":{"row":49,"column":18},"action":"insert","lines":["data_arr"]}],[{"start":{"row":71,"column":10},"end":{"row":71,"column":22},"action":"remove","lines":["certData_arr"],"id":63},{"start":{"row":71,"column":10},"end":{"row":71,"column":18},"action":"insert","lines":["data_arr"]}],[{"start":{"row":65,"column":2},"end":{"row":65,"column":3},"action":"insert","lines":["v"],"id":64},{"start":{"row":65,"column":3},"end":{"row":65,"column":4},"action":"insert","lines":["a"]},{"start":{"row":65,"column":4},"end":{"row":65,"column":5},"action":"insert","lines":["r"]}],[{"start":{"row":65,"column":5},"end":{"row":65,"column":6},"action":"insert","lines":[" "],"id":65}],[{"start":{"row":83,"column":2},"end":{"row":83,"column":53},"action":"remove","lines":["var assocData_arr = processData( data, tableName );"],"id":66},{"start":{"row":83,"column":2},"end":{"row":85,"column":30},"action":"insert","lines":["  var data_obj = processData( data, tableName );","  var headers = data_obj.headers;","  var data_arr = data_obj.arr;"]}],[{"start":{"row":83,"column":0},"end":{"row":83,"column":4},"action":"remove","lines":["    "],"id":67}],[{"start":{"row":83,"column":0},"end":{"row":83,"column":1},"action":"insert","lines":[" "],"id":68},{"start":{"row":83,"column":1},"end":{"row":83,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":87,"column":2},"end":{"row":87,"column":3},"action":"insert","lines":["v"],"id":69},{"start":{"row":87,"column":3},"end":{"row":87,"column":4},"action":"insert","lines":["a"]},{"start":{"row":87,"column":4},"end":{"row":87,"column":5},"action":"insert","lines":["r"]}],[{"start":{"row":87,"column":5},"end":{"row":87,"column":6},"action":"insert","lines":[" "],"id":70}],[{"start":{"row":94,"column":10},"end":{"row":94,"column":23},"action":"remove","lines":["assocData_arr"],"id":71},{"start":{"row":94,"column":10},"end":{"row":94,"column":11},"action":"insert","lines":["d"]},{"start":{"row":94,"column":11},"end":{"row":94,"column":12},"action":"insert","lines":["a"]},{"start":{"row":94,"column":12},"end":{"row":94,"column":13},"action":"insert","lines":["t"]},{"start":{"row":94,"column":13},"end":{"row":94,"column":14},"action":"insert","lines":["a"]}],[{"start":{"row":94,"column":10},"end":{"row":94,"column":14},"action":"remove","lines":["data"],"id":72},{"start":{"row":94,"column":10},"end":{"row":94,"column":18},"action":"insert","lines":["data_arr"]}]]},"ace":{"folds":[],"scrolltop":1140,"scrollleft":0,"selection":{"start":{"row":96,"column":21},"end":{"row":96,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":70,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1560599477078,"hash":"5fd4df1f677e2af46119d60651fb6a75861e1f74"}