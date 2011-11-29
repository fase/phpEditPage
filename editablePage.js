var divEdit;
var divContent;

$(function() {
  divEdit = $("#divEdit");
  divContent = $("#divContent");

  loadHtml();
  
  initMCE();
});

function initMCE() {
  tinyMCE.init({
    // General options
    mode : "textareas",
    theme : "advanced",
    plugins : "pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",

    // Theme options
   	theme_advanced_buttons1 : "save,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,formatselect,fontselect,fontsizeselect",
		theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
   	theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,ltr,rtl,|,nonbreaking",
   	theme_advanced_toolbar_location : "top",
   	theme_advanced_toolbar_align : "left",
   	theme_advanced_statusbar_location : "bottom",
   	theme_advanced_resizing : true,

    save_onsavecallback : "saveHtml",
  });
}

function loadHtml() {
  $.get("contentProcessor.php?filename=" + $("#filename").val(), function(data) {
    $(divContent).html(data);
    $("#txtContent", divEdit).val(data);
  });
}

function saveHtml() {
  var data = "content=" + $("#txtContent").val() + "&filename=" + $("#filename").val();

  $.post("contentProcessor.php", data);

  alert("Page was successfully saved.");

  $(divContent).html($("#txtContent", divEdit).val());

  toggleEdit();
}

function toggleEdit() {
  if(divEdit.length > 0) {
    if($(divEdit).css("display") == "none") {
      $(divEdit).css("display", "inline");
      $(divContent).css("display", "none");
    }
    else {
      $(divContent).css("display", "inline");
      $(divEdit).css("display", "none");
    }
  }
} 
