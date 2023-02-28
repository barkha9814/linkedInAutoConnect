//function for fetching public id of person from linkedin
window.onload = function () {
    var queryInfo =
    {
        active: true,
        currentWindow: true
    };

    //fetching public id 
    chrome.tabs.query(queryInfo, (tabs) => {
       
        var tab = tabs[0];
        var url = tab.url;

        var data = url.split("://");
        var protocal = data[1].split("/");
        console.log(protocal)

        var linkedin_url = url.split("/")        
       
                try {
                    checkurl = protocal[1]                   
                    if (checkurl == 'search') {                                                
                                                                      
                        const element = document.getElementById("connect_button");
                        element.addEventListener("click", myFunction);

                        function injectTheScript() {
                            chrome.scripting
                                .executeScript({
                                    target : {tabId : tab.id},
                                    files : [ "content-script.js" ],
                                })
                                .then(() => console.log("script injected"));
                        }

                        function myFunction() {
                            document.getElementById("connect_button").innerHTML = "Connecting...";
                            injectTheScript();
                        }

                    }
                }
                catch {
                    console.log("url is not valid")
                }                                                               

    });//end of chrome.tabs.query

}//window.onload close