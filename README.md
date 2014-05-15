gas-rest
========

Translator of REST requests to build RESTful API using Google Apps Script hosted on http://rest.daspot.ru

[Example app on Ember.js](http://dab00.gweb.io/gas-rest-ember/)

[Example app on AngularJS](http://dab00.gweb.io/gas-rest-angular/)

Why
----------

To build RESTful backend for frontend development for 5 minutes

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
    <td>Post/Put</td>
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

For example we have [collection of cats](https://docs.google.com/spreadsheets/d/1rDit6RtL6ohww86sHsE8d66DjncQmKe25dqU9jz0F90/edit):

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr1.jpg) 

And we have a script like [this one](https://github.com/dab00/gas-rest/blob/master/code.gs), which has been [deployed as a web app](https://script.google.com/macros/s/AKfycbwEw9l-DeT3Qfv5CmRm60k0RALu2iVIyvyAuaWZbHp2we7xi1E/exec) with ID AKfycbwEw9l-DeT3Qfv5CmRm60k0RALu2iVIyvyAuaWZbHp2we7xi1E

Now we can:
- get all cats:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr2.jpg)

- create new cat:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr3.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr4.jpg)

- update a cat:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr5.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr6.jpg)

- get cat by id:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr7.jpg)

- delete a cat:

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr8.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr9.jpg)

How to
----------

- open [this table](https://docs.google.com/spreadsheets/d/1rDit6RtL6ohww86sHsE8d66DjncQmKe25dqU9jz0F90/edit)

- make a copy

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr10.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr11.jpg)

- open script editor

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr12.jpg)

- paste your tables ID

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr13.jpg)

- run function *doGet* once to authorize script

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr14.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr15.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr16.jpg)

- disregard the error message

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr17.jpg)

- save new version of script

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr18.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr19.jpg)

- deploy script as web app

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr20.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr21.jpg)

![ScreenShot](https://github.com/dab00/gas-rest/raw/master/scr/scr22.jpg)

Now you can build app which is consuming data via RESTful API