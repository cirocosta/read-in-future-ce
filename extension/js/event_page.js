/** Code that will be running in the background, adding a listener for
    the loading of a page. Will check if the page has already been
    added to the Database and also if it was already read. If it wasn't
    then will call the content_script 'mark_as_read_cs.js' to insert 
    the 'action buttons'.
*/

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status === 'complete'){
        var future_links = [];
        if(localStorage.future_links){
            future_links = JSON.parse(localStorage.future_links);
        }

        if(future_links.length){
            for(var i=0; i<future_links.length; i++){
                var future_link = future_links[i];
                if (future_link.url == tab.url){
                    chrome.tabs.executeScript(tabId, {
                        code: "alert('lol');"
                    });
                }
            }
        }
    }
});