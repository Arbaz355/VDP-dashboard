var a=0;
//binds to onchange event of your input field
$('#exampleFormControlFile1').bind('change', function() {

var ext = $('#exampleFormControlFile1').val().split('.').pop().toLowerCase();
if ($.inArray(ext, ['gif','png','jpg','jpeg', 'raw', 'tiff']) == -1){
 $('#error1').slideDown("slow");
 $('#error2').slideUp("slow");
 a=0;
 }else{
 var picsize = (this.files[0].size);
 if (picsize > 3145728){
 $('#error2').slideDown("slow");
 a=0;
 }else{
 a=1;
 $('#error2').slideUp("slow");
 }
 $('#error1').slideUp("slow");
}
});


