$( document ).ready(function() {
   	chrome.storage.local.get(["gdork"], function(items){
    if(items["gdork"] == "off"){
			$( "#run" ).removeClass( "btn btn-success" ).addClass( "btn btn-danger" );
			$( "#run" ).html("Stopped");
		}
	});
	chrome.storage.local.get(["urls"], function(items){
		if(items["urls"].length>0){
			$("#links").val(items["urls"].join("\n"))
		}
	});
});

$( "#run" ).click(function() {
  if($("#run").text()=="Running")
  {
	$( "#run" ).removeClass( "btn btn-success" ).addClass( "btn btn-danger" );
	$( "#run" ).html("Stopped");
	chrome.storage.local.set({ "gdork": "off" }, function(){
		console.log("Stopped!");
	});
  } else{
	$( "#run" ).removeClass( "btn btn-danger" ).addClass( "btn btn-success" );
	$( "#run" ).html("Running");
	chrome.storage.local.set({ "gdork": "on" }, function(){
		console.log("Running!");
	});
  }
});

$( "#clr" ).click(function() {
  chrome.storage.local.set({urls: []}, function () {});
  location.reload();
});