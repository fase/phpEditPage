<html>
  <head>
    <title>PHP xml PoC</title>
      <script type="text/javascript" src="http://www.google.com/jsapi"></script>
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

      <!-- Load jQuery build -->
      <script type="text/javascript" src="tiny_mce/tiny_mce.js"></script>
      <script type="text/javascript" src="editablePage.js"></script>
  </head>
  <body>
    <?php $_SESSION["admin"] = true; ?>
    
    <div style="width: 900px;">
    <? if($_SESSION["admin"] != null) { ?>
      <div style="text-align: right;"><input id="btnEdit" type="button" value="Edit" onclick="toggleEdit()" /></div>
    <? } ?>

   <div id="divContent">
    </div>

    <div id="divEdit" style="display: none;">
      <? if($_SESSION["admin"] != null) { ?>
        <form name='input' action='contentProcessor.php' method='post'>
          <div>
     			  <textarea id="txtContent" name="content" rows="35" cols="80" style="width: 80%" class="tinymce"></textarea>
          </div>
          
          <input type="hidden" id="filename" name="filename" value="<?=basename($_SERVER["PHP_SELF"]);?>" />
 
          <!-- For php debug purposes only
            <input type="submit" value="Manually Submit" /> -->
       </form>
      <? } ?>
   </div>
  </div>
 </body>
</html>
