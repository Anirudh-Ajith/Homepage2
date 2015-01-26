//window.onload=function() {setTimeout(setLinksOrder(),5000);}

$(document).ready(function() {
	$( "#sortableLinksList" ).sortable({
		placeholder: "ui-state-highlight",
		cursor: "move",
		update: function(event,ui){
			$('#content').append("<input type='button' id='saveButton' value='Save current order' onclick='backupLinksOrder()'></input>");
		},
		containment: "body" });
	$( document ).disableSelection();
});

function backupLinksOrder() {
	var linksOrder = document.getElementById('sortableLinksList').innerHTML;
	localStorage.setItem("linksOrder", linksOrder);
	console.log("Links order backed up");
	$('#saveButton').remove();
}

function setLinksOrder() {
	var linksOrder = localStorage.getItem("linksOrder");
	document.getElementById('sortableLinksList').innerHTML = linksOrder;
	console.log("Links order set");
}

function addBookmark() {
	var name;
	var url;
	var imageUrl;
	var nameOptions = {
		buttons: {
			confirm: {
				text: 'Next -->',
				className: 'blue',
				action: function(e) {
					name = e.input;
					console.log(name);
					Apprise('close');
				}
			},
		},
		input: true,
	};
	
	var urlOptions = {
		buttons: {
			confirm: {
				text: '-->',
				className: 'blue',
				action: function(e) {
					url = e.input;
					console.log(url);
					Apprise('close');
				}
			},
		},
		input: true,
	};
	
	var imageOptions = {
		buttons: {
			confirm: {
				text: 'OK',
				className: 'blue',
				action: function(e) {
					imageUrl = e.input;
					console.log(imageUrl);
					Apprise('close');
					var finalBookmarkCode = '<li><div><a href="' + url + '"><img src="' + imageUrl + '" alt="' + name + '" id="' + name + '" class="link" title="Click to go to ' + name + '"/></a></div></li>';
					//<img id="Wikipedia" class="link" wikipedia"="" title="Click to go to " alt="Wikipedia" src="http://upload.wikimedia.org/wikipedia/meta/0/08/Wikipedia-logo-v2_1x.png"></img>
					console.log(finalBookmarkCode);
					$('#sortableLinksList').append(finalBookmarkCode);
				}
			},
		},
		input: true,
	};

Apprise('Enter the name of your new bookmark', nameOptions);
Apprise('Enter the url of your new bookmark', urlOptions);
Apprise('Enter the url for an image for the bookmark', imageOptions);
}
