const alltab = document.querySelectorAll('.tab-item');
const line = document.querySelector('.underline');
const infor = document.querySelectorAll('.infor');

infor.forEach((item,index)=>{
    if(index!==0) {
        item.style.display='none'
    }
})
function display(index) {
    infor.forEach((a,b)=>{
        if(b===index) {
            a.style.display='block'
            alltab[b].style.opacity="1"
        }
        else {
            a.style.display='none'
            alltab[b].style.opacity="0.5"
        }
    })
}
alltab.forEach((item,index)=>{
    item.onclick=function(e) {
        line.style.left=`${index*25}%`
        display(index)
    }
})