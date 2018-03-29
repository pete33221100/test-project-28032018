const endpoint =  window['endpoint'];
export class Constants {
    static apiContacts = endpoint + '/api/contacts';
    static apiTags = endpoint + '/api/tags';  
    static hubTags = endpoint + '/hub/tags'
    
    static paginationOptions = {
        itemsPerPage: 5,
        pageSizeOptions: [5]
    };
}