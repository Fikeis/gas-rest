var sheetId = '1-cAINRLzkmRfo3E698l5sYHbP6m2muiF7R1sPhtVPwA';

function doGet(e) {
  var sh = e.parameters.sheet ? SpreadsheetApp.openById(sheetId).getSheetByName(e.parameters.sheet) : SpreadsheetApp.openById(sheetId).getSheets()[0],       
      data = sh.getDataRange().getValues(),       
      keys = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  if (e.parameters.id) {
    var req = {data: data, keys: keys, id: +e.parameters.id}
    if (e.parameters.remove) {
      req.sheet = sh;
      req.remove = true;      
    }
    objects = getObjectById(req);
  } else {
    objects = getObjects(data, keys, e);
  }
  return ContentService.createTextOutput(JSON.stringify(objects)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sh = e.parameters.sheet ? SpreadsheetApp.openById(sheetId).getSheetByName(e.parameters.sheet) : SpreadsheetApp.openById(sheetId).getSheets()[0];
  var values = new Values({
    sheet: sh, 
    data: sh.getDataRange().getValues(), 
    keys: sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0], 
    request:  JSON.parse(e.postData.contents)
  });  
  var res;
  if (values.rowIndex) {
    res = JSON.stringify({id: values.id});
    sh.getRange(values.rowIndex, values.columnIndex, 1, values.width).setValues([values.data]);
  } else {
    res = 'undefined';
  }  
  
  return ContentService.createTextOutput(res).setMimeType(ContentService.MimeType.JSON);
}

function Values(arg) {
  this.columnIndex = 1;
  this.width = arg.sheet.getLastColumn();
  this.data = [];
  getValues.call(this, arg);
  
  if (arg.request.id) {
    this.id = arg.request.id;
    arg.id = +arg.request.id;
    arg.index = true;
    this.rowIndex = getObjectById(arg);    
  } else {
    this.id = getId(arg.sheet, this.width);
    this.rowIndex = arg.sheet.getLastRow() + 1;    
    this.data[0] = this.id;
  }
}

function getId(sh, width) {
  var keys = sh.getRange(1, 1, 1, width).getValues()[0], 
      lastRow = sh.getLastRow(), 
      idIndex = keys.indexOf('id') + 1, 
      ret = sh.getRange(lastRow, idIndex).getValue();
  return typeof(ret) === 'number' ? ret + 1 : 1;
}

function getValues(arg) {  
  var dataKeys = Object.keys(arg.request), 
      shKeys = arg.sheet.getRange(1, 1, 1, this.width).getValues()[0];
  for (var i = 0, len = shKeys.length; i < len; i += 1) {    
    if (dataKeys.indexOf(shKeys[i]) !== -1) {
      this.data.push(arg.request[shKeys[i]]);
      continue;
    }
    this.data.push('');
  }
}

function getObjects(data, keys, e) { 
  var objects = [], 
      len = keys.length,       
      i = data.length - 1;      
  while (i > 0) {
    objects.push(getObject(data[i], keys, len));
    i -= 1;
  }  
  return objects;
}

function getObject(arr, keys, len) {
  var obj = {};
  for (var i = 0; i < len; i += 1) {
    obj[keys[i]] = arr[i];
  }  
  return obj;
}

function getObjectById(req) {
  var i = req.data.length - 1,       
      idIndex = req.keys.indexOf('id');
  while (i > 0) {    
    if (req.data[i][idIndex] === req.id) {
      if (req.index) {
        return i + 1;
      }
      if (req.remove) {
        req.sheet.deleteRow(i + 1);
      }
      return getObject(req.data[i], req.keys, req.keys.length);
    }
    i -= 1;
  }  
}