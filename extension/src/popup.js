/* globals DatabaseTable:false */


var futureLinksTable = new DatabaseTable('future_links');
var future_links    = [];
var save_btn        = document.getElementById('a_save'); 
var database_btn    = document.getElementById('a_database');
var current_url     = null; 
var current_title   = null;


chrome.tabs.query({'active': true}, function(tabs){
    current_url = tabs[0].url;
    current_title = tabs[0].title;

    document.getElementById('current_title').innerHTML = current_title;
    document.getElementById('current_link').innerHTML = current_url;
});

/**
 * OnClick method for the Save Button.
 * It will generate an Object for the current tab page
 * and then save it to the localStorage database
 */

save_btn.onclick = function(){
    var description = document.getElementById('i_description').value;
    var data = new Date();

    var future_link = {
        "url": current_url,
        "data": data.getTime(),
        "title": current_title,
        "description": description,
        "item_id": data.getTime()
    };

    futureLinksTable.putObject(future_link);
    this.innerHTML = "Saved!";
    this.setAttribute("style","opacity:0.4"); 
};

/**
 * Opens a new tab for the DAtabase section
 */

database_btn.onclick = function(){
    chrome.tabs.create(
        {"url": "database.html"},
        function(tab){

        });
};

