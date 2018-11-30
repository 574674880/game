
var images = 'http://static2.chainplanet.cn/halloween'
// var images = './images/'
window.src = [
    'back0.png',
    'back1.jpg',
    'man1.png',
    'manc1.png',
    'back2.jpg',
    'man2.png',
    'manc2.png',
    'man3.png',
    'manc3.png',
    'back3.jpg',
    'man4.png',
    'manc4.png',
    'back4.jpg',
    'man5.png',
    'manc5.png',
    'back5.jpg',
    'sugar1.png',
    'sugar2.png',
    'sugar3.png',
    'sugar4.png',
    'sugar5.png',
    'light.png',
    'mask.png',
    'loginback.png',
    'zong.jpg',
    'manh1.png',
    'manh2.png',
    'manh3.png',
    'manh4.png',
    'manh5.png',
    'no.png',
    'yes.png',
    'sugar6.png',
    'geback.png',
    'share.png',
    'see.png',
    'once.png',
    'l.png',
    'text.png',
    'text1.png',
    'startbtn.png',
    'xieyi.png',
    'loginback.png',
    'shareback.png'
]
window.objSrc = [
    {
        back: 'back1.jpg',
        man: 'man1.png',
        manc: 'manc1.png',
    }
]
var csnum = 1;  
var imgscount = 0;
var tokeni =window.localStorage.halloweentoken?window.localStorage.halloweentoken :''
var loading = document.getElementById('loading')
src.forEach(function (v, i) {
    window.src[i] = images + v
    var imgs = new Image();
    imgs.onload = function () {
        if (src.length > imgscount) {
            // loading.innerText = Math.round(imgscount / src.length * 100)
            document.getElementById('amintiao').style.width = Math.round(imgscount / src.length * 100)+'%'
            // console.log(Math.round(imgscount / src.length * 100))
            imgscount++
        }
        if(imgscount == src.length) {
            loading.style.display ='none'
        }
    }
    imgs.onerror = function(){
        loading.style.display ='none'
    }
    imgs.src = src[i]
});
console.log(src)