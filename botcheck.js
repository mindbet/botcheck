<script type="text/javascript">
  var userip;
</script>
<script type="text/javascript" src="http://l2.io/ip.js?var=userip"></script>
<script type="text/javascript">
var data = new FormData();
data.append("data" , userip);
var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
xhr.open( 'post', '/recv.php', true );
xhr.send(data);
</script>
