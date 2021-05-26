var i=0;
function read(){
    if(!i){
        document.getElementById("more").style.display="inline";
        document.getElementById("dots").style.display="none";
        document.getElementById("read more").innerHTML="Read less";
        i=1;
    }
    else{
        document.getElementById("more").style.display="none";
        document.getElementById("dots").style.display="inline";
        document.getElementById("read more").innerHTML="Continue Reading";
        i=0;

    }
}
var i=0;
function read1(){
    if(!i){
        document.getElementById("more1").style.display="inline";
        document.getElementById("dots1").style.display="none";
        document.getElementById("read more1").innerHTML="Read less";
        i=1;
    }
    else{
        document.getElementById("more1").style.display="none";
        document.getElementById("dots1").style.display="inline";
        document.getElementById("read more1").innerHTML="Continue Reading";
        i=0;

    }
}
var i=0;
function read2(){
    if(!i){
        document.getElementById("more2").style.display="inline";
        document.getElementById("dots2").style.display="none";
        document.getElementById("read more2").innerHTML="Read less";
        i=1;
    }
    else{
        document.getElementById("more2").style.display="none";
        document.getElementById("dots2").style.display="inline";
        document.getElementById("read more2").innerHTML="Continue Reading";
        i=0;

    }
}
document.getElementById("teendande").onclick = open;
document.getElementById("cross").onclick = close;
function open(){
    console.log(`i got executed`)
    document.getElementById("menu").style.display="block";

}
function close(){
    document.getElementById("menu").style.display="none";
    
}