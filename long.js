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

    var gg = Number(0); 
    var energy = Number(0); 
    var curiosity = Number(0); 
    var food = Number(0); 
    var greed = Number(0); 
    var cute = Number(0); 
    var vary = Number(0); 
    var head = Number(0);
    
    energy += Number(a);
    food += Number(b);
    greed += Number(c);
    gg += Number(d);
    curiosity += Number(e);
    energy += Number(f);
    energy -= Number(g);
    vary += Number(h);
    head += Number(i);
    cute += Number(j);

    
    if(gg > 4){
        var data = 8; //serval
    }else if(food > 4){
        var data = 12; //korean
    }else if(greed > 4){
        var data = 6; //american
    }else if(energy < 1){
        var data = 11; //british
    }else{
        if(gg > 3 && energy > 4){
            var data = 8; //serval
        }else if(head > 3){
            if(cute > 3){
                var data = 1;//scotish
            }else if(energy < 4){
                var data = 12; //british
            }else if(g > 3){
                var data = 2; //persian
            }
        }else{
            if(energy >3){
                if(curiosity < 3){
                    var data = 10; //bangol
                }else{
                    var data = 4; //tukish
                }
            }else if(curiosity > 3 && energy > 3){
                if(cute > 3){
                    var data = 9; //munchkin
                }else{
                    var data = 5; //regdoll
                }
            }else if(g>2){
                if(energy > 3){
                    var data = 3; //northway
                }else if(curiosity > 3){
                    var data = 7; //russian blue
                }
            }else if(food >3 && vary > 4){
                var data = 12; //korean
            }else if(energy > 3){
                var data = Math.floor(Math.random() * 3) + 3;
            }else if(energy <= 3){
                var data = Math.floor(Math.random() * 2) + 1;
                if(data == 0){
                    data = 7;
                }else{
                    data = 11;
                }
            }else{
                var data = Math.floor(Math.random() * 13) + 1;
            }
        }
    }
    
    location.href = "complete.html?" + data;
    
}