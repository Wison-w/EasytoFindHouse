function list(){
    var list = document.querySelectorAll('.list')
    var content = document.querySelectorAll('.list_content')
    var nav = document.querySelector('nav')
    var mask = document.querySelector('.mask')
    for (var i = 0; i < list.length; i++) {
        list[i].setAttribute('index', i)
        list[i].onclick = function (e) {
            var index = this.getAttribute('index');
            for (var j = 0; j < list.length; j++) {
                list[j].className = 'list';
                content[j].className = 'list_content';
                list[index].className = 'list li_active';
                content[index].className = 'list_content lc_active';
            }
            nav.className = 'n_active';
            window.event ? window.event.cancelBubble = true : event.stopPropagation(); 
        }
        content[i].onclick=function(e){
            window.event ? window.event.cancelBubble = true : event.stopPropagation(); 
        }
    }
    
    window.onclick = function () {
        for (var k = 0; k < list.length; k++) {
            list[k].className = 'list';
            content[k].className = 'list_content';
            nav.className='';
        }
    }
    var ipt=document.querySelector('input')
    ipt.onkeydown = function(e){
        e = e|| window.event;
        //模拟 按回车键发送 回车键的键码 13
        if(e.keyCode == 13){
            window.open('./rentalDetail.html','_self')
        }
    }
}
window.addEventListener('load',list)