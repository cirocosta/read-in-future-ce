/* globals DatabaseTable:false */

var futureLinksTable = new DatabaseTable('future_links'),
    future_links    = [],
    save_btn        = document.getElementById('a_save'), 
    database_btn    = document.getElementById('a_database'),
    current_url     = null, 
    current_title   = null;

chrome.tabs.query({'active': true}, function(tabs){
    current_url = tabs[0].url;
    current_title = tabs[0].title;

    document.getElementById('current_title').innerHTML = current_title;
    document.getElementById('current_link').innerHTML = current_url;
});

function populateCategories() {
    var select = document.getElementById("s_category");
    
}


/**
 * OnClick method for the Save Button.
 * It will generate an Object for the current tab page
 * and then save it to the localStorage database
 */

save_btn.onclick = function(){
    var description = document.getElementById('i_description').value;
    var category = document.getElementById("i_category").value;
    var data = new Date();

    var future_link = {
        url: current_url,
        data: data,
        title: current_title,
        description: description,
        item_id: data.getTime(),
        category: category
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


function get_categories(table) {
    var objects = table.getAll();
    var categories = [];
    var L = objects.length;
    if (L) {
        for (var i=0; i < L; i++) { 
            if (objects[i].category) {
                categories.push({ category: objects[i].category });
            }
        }
    }

    console.log(categories);
    return categories;
}


// instantiate the bloodhound suggestion engine
var categories = new Bloodhound({
  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.category); },
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: get_categories(futureLinksTable)
});
 
// initialize the bloodhound suggestion engine
categories.initialize();
 
// instantiate the typeahead UI
$('#i_category').typeahead(null, {
  displayKey: 'category',
  source: categories.ttAdapter()
});