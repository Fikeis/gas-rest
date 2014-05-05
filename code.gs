var sheetId = '1rDit6RtL6ohww86sHsE8d66DjncQmKe25dqU9jz0F90'; // spreadsheet ID
var items = {cats: 'cat'}; // to map item name to collection name

function doGet(e) {  
  var sh, shName;
  if (e.parameters.sheet) {
    sh = SpreadsheetApp.openById(sheetId).getSheetByName(e.parameters.sheet);
    shName = e.parameters.sheet;
  } else {
    sh = SpreadsheetApp.openById(sheetId).getSheets()[0];
    shName = sh.getSheetName();
  }
  
  var data = sh.getDataRange().getValues(),       
      keys = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0], 
      res = {}, req;
  if (e.parameters.id) {
    req = {data: data, keys: keys, id: +e.parameters.id}
    if (e.parameters.remove) { // remove item
      req.sheet = sh;
      req.remove = true;
    }
    res[items[shName]] = getObjectById_(req);
  } else {
    res[items[shName]] = getObjects_(data, keys, e);
  }
  
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sh, shName;
  if (e.parameters.sheet) {
    sh = SpreadsheetApp.openById(sheetId).getSheetByName(e.parameters.sheet);
    shName = e.parameters.sheet;
  } else {
    sh = SpreadsheetApp.openById(sheetId).getSheets()[0];
    shName = sh.getSheetName();
  }

  var data = JSON.parse(e.postData.contents), 
      key = Object.keys(data)[0], 
      // if data contains collection's item name
      hasItemName = Object.keys(items).some(function(i) {return items[i] === key} ), 
      req =  hasItemName ? data[key] : data, 
      res;  
  if (hasItemName) {
    res = data;
  } else { // append item name
    res = {};
    res[items[shName]] = data;
  }
  
  var values = new Values({
    sheet: sh, 
    data: sh.getDataRange().getValues(), 
    keys: sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0], 
    request: req, 
    id: +e.parameters.id
  });  

  if (values.rowIndex) { // if item found or created
    req.id = values.id;
    sh.getRange(values.rowIndex, values.columnIndex, 1, values.width).setValues([values.data]);
  }
  
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
}

var Values = function (arg) {
  this.columnIndex = 1;
  this.width = arg.sheet.getLastColumn();    
  this.data = [];
  
  // getting data
  var dataKeys = Object.keys(arg.request), 
      shKeys = arg.sheet.getRange(1, 1, 1, this.width).getValues()[0];
  for (var i = 0, len = shKeys.length; i < len; i += 1) {    
    if (dataKeys.indexOf(shKeys[i]) !== -1) {
      this.data.push(arg.request[shKeys[i]]);
      continue;
    }
    this.data.push('');
  }
  
  if (arg.id) {
    this.id = arg.id;    
    arg.index = true;
    this.rowIndex = getObjectById_(arg);    
  } else {
    var id = arg.sheet.getRange(arg.sheet.getLastRow(), 1).getValue();
    this.id = typeof(id) === 'number' ? id + 1 : 1;
    this.rowIndex = arg.sheet.getLastRow() + 1;   
  }
  
  this.data[0] = this.id; // first cell's value = id
}

function getObjects_(data, keys, e) { 
  var objects = [], 
      len = keys.length,       
      i = data.length - 1;      
  while (i > 0) {
    objects.push(getObject_(data[i], keys, len));
    i -= 1;
  }  
  return objects;
}

function getObject_(arr, keys, len) {
  var obj = {};
  for (var i = 0; i < len; i += 1) {
    obj[keys[i]] = arr[i];
  }  
  return obj;
}

function getObjectById_(req) {
  var i = req.data.length - 1;
  while (i > 0) {    
    if (req.data[i][0] === req.id) {
      if (req.index) {
        return i + 1;
      }
      if (req.remove) {
        req.sheet.deleteRow(i + 1);
      }
      return getObject_(req.data[i], req.keys, req.keys.length);
    }
    i -= 1;
  }  
}