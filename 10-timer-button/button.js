$(function(){
  var t=$("#user-name"),
      n=$("#ok-button"),
      e=$("#reset-button");
  function a(){
    t.val("王顶"),
    $('input[type="radio"]').val(["男"]),
    $('input[type="checkbox"]').val(["HTML","CSS","JavaScript"])
  }a(),
  n.click(function(){
    var n="";
    n+="姓名："+t.val()+"\n",
    n+="性别："+$('input[type="radio"][name="gender"]:checked').val()+"\n",
    n+="技术特长："+$('input[type="checkbox"][name="tech"]:checked').map(function(){return $(this).val()}).toArray().join("，")+"\n",
    alert(n)
  }),    
  e.click(a)
});

