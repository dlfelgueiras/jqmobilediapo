jqmobilediapo
=============
A jQuery diaporama plugin for mobile

Note:
  All images are not loaded at initialization.
  When you call an image, next is loaded.

The plugin has been tested with:
  iPhone 3G+/iPad 1+/iOS 3.5+
  Android 3.0+
  firefox 10+
  Internet Explorer 8+

Guide:
  The library should be loaded after the jquery.js and jquery.mobile.js. 
  Once the library is loaded, you can load the diaporama whith "jQMobileDiapo" method on the jQuery object, like this:
  <script>
    jQuery('document').ready(function(){
         $("#diapo").jQMobileDiapo({});
    });
  </script>

Options

 ----------------------------------------------------------------------------------------------
|    OPTION    |        DEFAULT       |          HINT          |           EXAMPLE             |
|----------------------------------------------------------------------------------------------|
| prevId       | 'prevBtn'            | button 'previous' id   | N/A                           |
| prevText     | '<<'                 | button 'previous' text | N/A                           |
| nextId       | 'nextBtn'            | button 'next' id       | N/A                           |
| nextText     | '>>'                 | button 'next' text     | N/A                           |
| backId       | 'backBtn'            | button 'back' id       | N/A                           |
| backText     | 'Back'               | button 'back' text     | N/A                           |
| backLink     | '#'                  | button 'back' link     | N/A                           |
| controlsShow | true                 | show control buttons   | N/A                           |
| speed        | '250'                | image transition speed | N/A                           |
| btnTime      | '2000'               | control buttons time   | N/A                           |
| imgReplace   | 'image/no-image.jpg' | default image          | N/A                           |
| images       |                      | images list            | ['img1.png', 'img2.png', ...] |
 ---------------------------------------------------------------------------------------------- 
