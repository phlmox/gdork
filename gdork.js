chrome.storage.local.get(["gdork"], function(items){
	if(items["gdork"] == "on"){
		for(array=[],a=document.getElementsByClassName("g"),i=0;i<a.length;i++)array.push(a[i].getElementsByTagName("a")[0].href);
		chrome.storage.local.get({urls: []}, function (result) {
		var urls = result.urls;
		urls = urls.concat(array)
		var uniqueUrls = [];
		$.each(urls, function(i, el){
			if($.inArray(el, uniqueUrls) === -1) uniqueUrls.push(el);
		});
		chrome.storage.local.set({urls: uniqueUrls}, function () {
			chrome.storage.local.get('urls', function (result) {
				console.log("OK!")
			});
			});
		});
	}
});