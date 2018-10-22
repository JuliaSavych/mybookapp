//rating
$('form').submit(function(e){
  e.preventDefault()
  var data = $(this).serialize()
  alert(data)
})
function rateThis(wrapWidth,rateWidth){
  var starWidth = wrapWidth/5;
  console.log(wrapWidth)
  return parseFloat(rateWidth/starWidth).toFixed(1); 
}
$('.range-raiting').mousemove(function(e){
  if($(this).is('.done')){
    return false;
  }
  var pos = e.clientX - $(e.target).offset().left;
  $(this).find('div').width(pos)
})
$('.range-raiting').mouseleave(function(){
  if($(this).is('.done')){
    return false;
  }
  $(this).find('div').width(0)
})
$('.range-raiting').click(function(e){
  $(this).addClass('done')
  var pos = e.clientX - $(e.target).offset().left;
  $(this).find('div').width(pos);
  thisWidth = $(this).width();
  $(this).find('input').val(rateThis($(this).width(),pos))
})

$('.sidebar-btn').click(function(){
  $('.sidebar-btn').toggleClass('active');
  $('.sidebar').toggleClass('active');
})