function sudmit(){
    var bigid = document.getElementById("my_form");
    var a = bigid.aa.value;
    var b = bigid.bb.value;
    var c = bigid.cc.value;
    var d = bigid.dd.value;
    var e = bigid.ee.value;
    var f = bigid.ff.value;
    var g = bigid.gg.value;
    var h = bigid.hh.value;
    var i = bigid.ii.value;
    var j = bigid.jj.value;
    var k = bigid.kk.value;

    var head = Number(0);
    var inssa = Number(0); 
    var gg = Number(0); 
    var energy = Number(0); 
    var curiosity = Number(0); 
    var food = Number(0); 
    var greed = Number(0); 
    var cute = Number(0); 
    var vary = Number(0); 

    inssa += Number(a);
    energy += Number(a);
    food += Number(b);
    greed += Number(c);
    gg += Number(d);
    inssa += Number(e);
    curiosity += Number(e);
    energy += Number(f);
    inssa -= Number(g);
    vary += Number(h);
    head += Number(i);
    cute += Number(j);
    
    
    
    if(gg > 3){
        var data = 8;
    }else if(greed > 4){
        var data = 6;
    }else if(energy > 5){
        var data = 10;
    }else{
        if(vary>4){
            var data = 12;
        }else{
            if(head > 3){
                if(cute >= 3){
                    var data = 1;
                }else if(energy < 3){
                    var data = 11;
                }else{
                    var data = 2;
                }
            }else if(greed > 3){
                var data = 6;
            }else if(food > 3){
                var data = 12;
            }else if(inssa > 3){
                if(curiosity > 3){
                    var data = 4;
                }else if(cute >= 3){
                    var data = 9;
                }else if(energy >= 3){
                    var data = 10;
                }else if(energy < 3){
                    var data = 3;
                }else{
                    var data = 5;
                }
            }else{
                var data = 7;
            }
        }
    }
    window.location.href = "complete.html?" + data;
    
}