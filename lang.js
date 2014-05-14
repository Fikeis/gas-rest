exports.eng = {
  title: 'GAS-REST - Service for building RESTful API using Google Apps Script', 
  nav: ['Home', 'GitHub', 'Sample 1', 'Sample 2'], 
  content: {
    header: ['Build RESTful API', 'using Google Apps Script']
  }, 
  overview: {
    header: ['Route', 'Verb', 'Description'], 
    items: [
      ['/api/:script_id', 'Get', 'Get all items from getSheets()[0]'], 
      ['/api/:script_id', 'Post', 'Create item on getSheets()[0]'], 
      ['/api/:script_id/:sheet_name', 'Get', 'Get all items from getSheetByName(:sheet_name)'], 
      ['/api/:script_id/:sheet_name', 'Post', 'Create item on getSheetByName(:sheet_name)'], 
      ['/api/:script_id/:sheet_name/:item_id', 'Get', 'Get single item from getSheetByName(:sheet_name)'], 
      ['/api/:script_id/:sheet_name/:item_id', 'Put', 'Update item on getSheetByName(:sheet_name)'], 
      ['/api/:script_id/:sheet_name/:item_id', 'Delete', 'Delete item on getSheetByName(:sheet_name)']
    ]
  }
}