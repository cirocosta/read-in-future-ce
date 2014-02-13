/** 
*  Only some procedural for making the things appear on the screen 
*/

/* globals DatabaseTable:false*/

var d_elements = document.getElementById("d_elements");

/**
 *   Inherits from cfuncs_dbutils.DatabaseTable.
 */

function TableFutureLinks(){}
TableFutureLinks.prototype = new DatabaseTable('future_links');

/**
 * Verifies if the url passed as a param is already in the table
 * or not.  
 */

TableFutureLinks.prototype.checkIfPageAlreadySaved = function(url){
    if(this.parsed_table !== null){
        for(var i in this.parsed_table){
            if(this.parsed_table[i].url === url){
                return true;
            }
        }
        return false;
    }
    throw "The DatabaseTable must be parsed first";
};

var tableFutureLinks = new TableFutureLinks();

/**
 * onClick method of the Database.html db_element items.  
 */

function fn_exclui(){
    var parent = this.parentElement;
    var id = JSON.parse(parent.getAttribute("id"));
    var obj = tableFutureLinks.getById(id,"item_id");
    tableFutureLinks.deleteObject(obj);
    parent.parentElement.removeChild(parent);
}

/**
 * onClick method of the Database.html db_element items.  
 */

function fn_edita(){ }


/**
 * Appends some 'future_link' elements to the screen.  
 * 
 * -- procudural
 */

function create_and_append_dbelement(title, data, url, description, item_id, 
                                    container){
    var db_element = document.createElement("div");
    db_element.setAttribute("class","db_element");
    db_element.setAttribute("id",item_id);
    db_element.innerHTML = 
                        '<p class="p_editar" onclick="fn_edita">Editar</p>' +
                        '<p class="p_separacao">|||</p>' +
                        '<p class="p_excluir" onclick="fn_exclui">Excluir</p>' +

                        '<p class="item_title">' + title + '</p>' +
                        '<p class="p_data">' + data + '</p>' +
                        '<a class="item_url" href="' + url + '">' +url + '</a>'+

                        '<p class="item_description">' + description + '</p>'; 
                            
    return container.appendChild(db_element);
}

/**
 * Executes the functions that are necessary for populating the window
 * passing them the params they require. 
 * 
 * -- procudural (it is being called only at the first time)  
 */

function populate_window(){
    var HTML_EMPTY_STATE = '<div class="db_element_empty">' +
                                '<p>No links were saved yet :(</p>' +
                            '</div>';

    if(tableFutureLinks.parsed_table){
        var future_links = tableFutureLinks.parsed_table;
        if(!future_links.length){
            d_elements.innerHTML += HTML_EMPTY_STATE;    
        } else {        
            for(var i=0; i<future_links.length; i++){
                var future_link = future_links[i];
                var inserted = create_and_append_dbelement(future_link.title,
                                                        future_link.data,
                                                        future_link.url,
                                                        future_link.description,
                                                        future_link.item_id,
                                                        d_elements);
                var children = inserted.childNodes;

                children[0].onclick = fn_edita;
                children[2].onclick = fn_exclui;
            }
        }
    } else {
        d_elements.innerHTML += HTML_EMPTY_STATE;
    }
}

/**
 * Calls what it needs to make the magic happen! :)
 */

populate_window();

