var bingo = {};

// initialize variables
bingo = {};
bingo.running = false;
bingo.pool = new Array();
bingo.chosen = new Array();

bingo.BINGO_MAX = 80;

// utility functions
bingo.util = {}
bingo.util.random = function(num){
    return Math.floor(Math.random() * num );
};

// thanxx ma.la code http://la.ma.la/blog/diary_200608300350.htm
Array.prototype.shuffle = function() {
    var i = this.length;
    while(i){
        var j = Math.floor(Math.random()*i);
        var t = this[--i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
}

$(window).load(function () { // start initialize methods & events
/***************************************************************/

for(i = 1; i <= bingo.BINGO_MAX ; i++) { bingo.pool.push(i) }
bingo.pool.shuffle();
bingo.pool.shuffle(); // 2 times
console.log(bingo.pool);

$("#number").click(function(e){
    $(this).text(bingo.util.random(99));
    if(bingo.running) { setTimeout(function(){$("#number").click();}, 50); }
})
$(window).keydown(
    function(e){
        if(e.keyCode == 82){
            bingo.running = !(bingo.running);
            if(bingo.running) { $("#number").click(); }
            else { 
                var poped = bingo.pool.pop();
                bingo.chosen.push(poped);
                bingo.chosen.sort(function(a, b){return a - b;});
                $("#chosen").text(bingo.chosen.toString());
                setTimeout(function(){$("#number").text(poped);}, 55);
            }
            console.log(bingo.running);
            return false;
        } else if (e.keyCode == 116) {
            var ret = confirm("本当にリロードして初期化しますか？");
            if(ret) { location.reload(); }
            return false;
        };
    }
);

/***************************************************************/
}); // end all
