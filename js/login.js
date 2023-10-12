function login(){
    // 获取元素
    var number1 = document.querySelector('.number1');
    var number2 = document.querySelector('.number2');
    var pwd = document.querySelector('.pwd');
    var getcode = document.querySelector('.getcode');
    var code = document.querySelector('.code');
    var login1 = document.querySelector('.login1');
    var login2 = document.querySelector('.login2');
    var num;
    //手机号验证
    var regnumber = /^1[345789][0-9]{9}$/;
    // 密码验证字母加数字
    var regpwd = /^(?=.*[a-zA-Z])(?=.*\d).+$/
    //获取验证码
    getcode.onclick=()=>{
        var time=60;
        //随机生成四个数字进行拼接
        num=(Math.random()*9).toFixed(0)+(Math.random()*9).toFixed(0)+(Math.random()*9).toFixed(0)+(Math.random()*9).toFixed(0)
        getcode.disabled=true;
        alert('验证码：'+num)
        var timer=setInterval(function(){
            time--;
            getcode.innerHTML=time+' 秒';
            if(time==0){
                clearInterval(timer);
                time=60;
                getcode.disabled=false;
                getcode.innerHTML='发送验证码'
            }
        },1000)
        return num;
    }
    //登录验证
    login1.onclick = function () {
        var phone = regnumber.test(number1.value)
        var password = regpwd.test(pwd.value)
        var number = getCookie('number')
        var password_ = getCookie('password')
        if (phone && password) {
            if (number1.value == number) {
                if (pwd.value == password_) {
                    window.open('./my-success.html', '_self')
                } else {
                    alert('两次密码输入不一样')
                }
            } else {
                alert('手机号未注册\n请先注册！')
            }
        } else {
            alert('手机号或密码错误！\n请重新输入')
            number1.value = '';
            pwd.value = ''
        }
    }
    login2.onclick = function () {
        var phone = regnumber.test(number2.value)
        var vreify = num == code.value
        var number = getCookie('number')
        if (phone && vreify) {
            if (number2.value == number) {
                window.open('./my-success.html', '_self')
            } else {
                alert('手机号未注册\n请先注册！')
            }
        } else {
            alert('手机号或验证码或密码错误！\n请重新输入')
            number2.value = '';
            code.value = ''
        }
    }
    
}
window.addEventListener('load',login,false)