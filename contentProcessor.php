<?php
$CONTENT_PATH = "content/";

if($_SERVER['REQUEST_METHOD'] == "POST") {
  try {
    $filename = $CONTENT_PATH.'content-'.$_POST["filename"];
    $file = fopen($filename, 'w');

    if(fwrite($file, $_POST["content"]) === FALSE) {
      echo "Cannot write file $filename";
      exit;
    }
    else {
      echo 'Successfully saved file '.$filename;
    }
  }
  catch(Exception $ex) {
    echo $ex->getMessage();
  }
}
else {
  $filename = $CONTENT_PATH.'content-'.$_GET["filename"];

  if(file_exists($filename)) {
    $file = fopen($filename, 'r');
    echo stream_get_contents($file);
  }
}

if($file != null) {
  fclose($file);
}

?>
