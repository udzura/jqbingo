var bingo = {};

// initialize variables
bingo = {};
bingo.running = false;
bingo.pool = new Array();
bingo.chosen = new Array();
bingo.prev  = "-";
bingo.prev2 = "-";

bingo.BINGO_MAX = 75;

// utility functions
bingo.util = {}
bingo.util.random = function(num){
    return Math.floor(Math.random() * num );
};
bingo.util.finish = function(){
    setTimeout(function(){$("#number").text("終");}, 55);
    return false;
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
bingo.pool.shuffle(); // 3 times
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
                if (!poped) { return bingo.util.finish(); }
                bingo.chosen.push(poped);
                bingo.chosen.sort(function(a, b){return a - b;});
                var elements = bingo.chosen.map(function(v, i, arr){
                    var val = v.toString();
                    if (v < 10) { val = "&nbsp;" + val + "&nbsp;";}
                    return "<span class='chosen_elm elm" + (v % 6) + "'>" + val + "</span>";
                });
                $("#chosen").html(elements.join(", "));
                $("#prevvalue").text(bingo.prev);
                $("#prevvalue2").text(bingo.prev2);
                bingo.prev2 = bingo.prev;
                bingo.prev = poped;
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
