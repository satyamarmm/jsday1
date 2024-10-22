var ss=document.getElementById("one");
ss.innerHTML="changed text using innerHTML attribute";

var as=document.getElementById("ha")
as.innerHTML="<i>we can use to write tages in side innerHTML attribute in dom</i>JS<b>firstly we have to double quotes it firstly</b>"
ss.style.backgroundColor="red";
console.log(ss);
console.log(as);


var deeo=document.getElementById("num");
function al()
{
    for (let i=1;i<=5;i++){
    setTimeout(function ()
    {
    let dee=document.getElementById("nun")
dee.innerHTML+= '<i>Shop on!!!!!!</i><br><img id="aone" src="https://pbs.twimg.com/media/GaaF9WnbIAE3BJP?format=jpg&name=4096x4096" height="500" width="350"  /><br><button style=background-color:grey <a src="https://x.com/rajasaabmovie?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"></a>> buy it </button><br><br> '
// dee.style.display='flex';
dee.style.paddingLeft="150px";
dee.style.backgroundColor="pink";
 },1000 * i);
}
}



