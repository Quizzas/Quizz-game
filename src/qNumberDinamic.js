export let p=""
for(let i=1; i<=10;i++){
    p+="<span class='sk"+i+"'>"+i+"</span>";
}
document.getElementsByClassName("progress").innerHTML = p;