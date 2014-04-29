gas-rest
========

Translator of REST requests to build RESTful API using Google Apps Script hosted on http://rest.daspot.ru

Overview
----------

<table>  
  <tr>
    <th>Route</th>
    <th>Verb</th>
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

Profit
----------

For example we have [collection of cats](https://docs.google.com/a/daspot.ru/spreadsheets/d/1-cAINRLzkmRfo3E698l5sYHbP6m2muiF7R1sPhtVPwA/edit?pli=1#gid=478504613):

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr1.jpg) 

And we have a script like [this one](https://github.com/dab00/gas-rest/blob/master/code.gs), which has been [deployed as a web app](https://script.google.com/macros/s/AKfycbz2MAI6GAncLNuJRBNEYAryYgyqLS_2ZVdWjlJ_Cj5UEVbuGxo/exec) with ID AKfycbz2MAI6GAncLNuJRBNEYAryYgyqLS_2ZVdWjlJ_Cj5UEVbuGxo

Now we can:
- get all cats:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr2.jpg)

- create new cat:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr3.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr4.jpg)

- update a cat:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr5.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr6.jpg)

- delete a cat:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr7.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr8.jpg)

TODO
----------
+ main page