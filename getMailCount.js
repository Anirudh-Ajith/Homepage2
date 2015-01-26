window.onload=getUnreadCount();
/*window.onload=function(){
	document.getElementById("unreadCounter").title = "You have no unread messages"; document.getElementById("unreadCounter").innerHTML = 0;
}*/
window.setInterval("getUnreadCount()", 30000);

function getUnreadCount()
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET","file:///home/anirudh/Desktop/Homepage2/namehere.html",true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
                if (allText == "") {
                	document.getElementById("unreadCounter").innerHTML = "<img src='loading.gif' height='20px'></img>";
                } else {
									document.getElementById("unreadCounter").innerHTML = allText;
									if (allText == "0") {
										document.getElementById("unreadCounter").title = "You have no unread messages";
									} else if (allText == "1" ) {
										document.getElementById("unreadCounter").title = "You have 1 unread message";
									} else {
										document.getElementById("unreadCounter").title = "You have " + allText + " unread messages";
									}
                }
            }
        }
    }
    rawFile.send(null);
}
