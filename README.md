gas-rest
========

Translator of REST requests to build RESTful API using Google Apps Script 

Overview
----------

<table>  
  <tr>
    <th>Route</th>
    <th>HTTP Verb</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>/api/:script_id</td>
    <td>Get</td>
    <td>Get all items from getSheets()[0]</td>
  </tr>
  <tr>
    <td>/api/:script_id</td>
    <td>Post</td>
    <td>Create item on getSheets()[0]</td>
  </tr>
  <tr>
    <td>/api/:script_id/:sheet_name</td>
    <td>Get</td>
    <td>Get all items from getSheetByName(:sheet_name)</td>
  </tr>
  <tr>
    <td>/api/:script_id/:sheet_name</td>
    <td>Post</td>
    <td>Create item on getSheetByName(:sheet_name)</td>
  </tr>
  <tr>
    <td>/api/:script_id/:sheet_name/:item_id</td>
    <td>Get</td>
    <td>Get single item from getSheetByName(:sheet_name)</td>
  </tr>
  <tr>
    <td>/api/:script_id/:sheet_name/:item_id</td>
    <td>Put</td>
    <td>Update item on getSheetByName(:sheet_name)</td>
  </tr>
  <tr>
    <td>/api/:script_id/:sheet_name/:item_id</td>
    <td>Delete</td>
    <td>Delete item on getSheetByName(:sheet_name)</td>
  </tr>
</table>

TODO
----------
+ main page