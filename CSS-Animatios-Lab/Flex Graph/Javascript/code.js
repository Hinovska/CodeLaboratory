var barsEl = $(".bars");
var bars = [];
var gh = 200; //graph height
var numBars = 100;
var count = 0;
var current = (Math.random() * 0.4 + 0.2) * gh // random start value

//create bars
for (var i = 0; i < numBars; i++) {
  var bar = $("<div class='bar'></div>");
  // create bar stacks 
  for(var j = 0; j < 3; j++){
    bar.append("<div class='val'></div>");
  }
  // add to holde
  bar.appendTo(barsEl);
  bars.push(bar);
}

// stare animation
tick();

function tick() {
  // find id of bar we want to update
  var id = count % numBars;
  var b = bars[id];
  //change bar order css attributte - flex box will take care of rest
  b.css("order", count);
  // put grid line for every 25 values
  // add legend as well
  if((id % 25) === 0){
    b.addClass("mark");
    b.attr("mark", count);
  }
  // assign some rand values to stacks
  $(b).find(".val").each(function(i,v){
    var r = (0.2+Math.random() * 0.2 - 0.1) * gh;
    $(v).css("height", r + "px");
  });
  // iterate
  count++;
  window.setTimeout(tick, 500);
}