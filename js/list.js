function list(){
    var list = document.querySelectorAll('.list')
    var content = document.querySelectorAll('.list_content')
    var nav = document.querySelector('nav')
    var mask = document.querySelector('.mask')
    for (var i = 0; i < list.length; i++) {
        list[i].setAttribute('index', i)
        list[i].onclick = function (e) {
            nav.className = 'n_active';
            var index = this.getAttribute('index');
            
            if(list[index].className == 'list'){
                for (var j = 0; j < list.length; j++) {
                    list[j].className = 'list';
                    content[j].className = 'list_content';
                }
                list[index].className = 'list li_active';
                content[index].className = 'list_content lc_active';
            }else{
                list[index].className = 'list';
                content[index].className = 'list_content';
                nav.className=''
            }
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
}
window.addEventListener('load',list)