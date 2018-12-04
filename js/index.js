function getEventPosition(ev) {
    var x, y;
    if (ev.layerX || ev.layerX == 0) {
        x = ev.layerX;
        y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera  
        x = ev.offsetX;
        y = ev.offsetY;
    }
    return { x: x, y: y };
}
var onre = true;
var dri = 0, dry = 0;
var box = document.getElementById('box')
function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        onre = false
        setTimeout(function () {
            box.style = 'transform: translate3d(0px, ' + document.body.clientHeight + 'px, 0px) rotateZ(-90deg); width:' + document.body.clientHeight + 'px;height:' + document.body.clientWidth + 'px'
            canvas.width = document.body.clientHeight * 4;
            canvas.height = document.body.clientWidth * 4;
            var www = document.body.clientHeight / document.body.clientWidth;
            w = www > 1.875 ? document.body.clientWidth * 1.875 : document.body.clientHeight;
            h = w / 1.875;
            dri = 0
            dry = 0
            if (www > 1.875) {
                dri = (document.body.clientHeight - document.body.clientWidth * 1.875) / 2
            } else {
                dry = document.body.clientWidth - h
            }
            initwh()
        }, 100)
    }

    if (window.orientation == 90 || window.orientation == -90) {
        onre = true
        // alert("横屏状态！")
        setTimeout(function () {
            var www = document.body.clientWidth / document.body.clientHeight
            canvas.width = document.body.clientWidth * 4;
            canvas.height = document.body.clientHeight * 4;
            w = www > 1.875 ? document.body.clientHeight * 1.875 : document.body.clientWidth;
            h = w / 1.875;
            dri = 0
            dry = 0
            if (www > 1.875) {
                dri = (document.body.clientWidth - document.body.clientHeight * 1.875) / 2
            } else {
                dry = document.body.clientHeight - h
            }
            initwh()
        }, 300)
    }
}
function initwh() {
    w = w * 4
    h = h * 4
    cxt.font = "64px Verdana ,Arial, Helvetica, sans-serif";
    cxt.translate(dri, dry);
    box.style = ''
    rw = w * 0.650;
    rh = h * 0.29;
    th = h * 0.64;//文字起点位置高度
    tw = w * 0.1236;//文字起点位置高度
    tmw = tw * 3.5 - 20
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
var startimg = new Image();
startimg.src = src[0];
var lwen = new Image()
lwen.src = src[37]
var cxt = '', w = '', h = '';
var index = parseInt(Math.random() * 29)
var then = Date.now();
var canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
cxt = canvas.getContext('2d');
cxt.font = "64px Verdana ,Arial, Helvetica, sans-serif";
cxt.fillStyle = "green";
window.onload = function () {
    init()
}
function init() {
    hengshuping()
    initCav()
}
function dataInit() {//初始化题目和答案
    index = parseInt(Math.random() * Topic.length)//题目数
    then = Date.now();//动画初始化事件
    hero = {
        speed: 30, // movement in pixels per second
        f: canvas.width
    };
    i = 1, ib = 1, ic = 1, id = 1;
    newText = "";
    newanswera = "";
    newanswerb = "";
    newanswerc = "";
    newanswerd = "";
    animti = true;
    successkey = false;
    fallKif = false;
}
//初始化所有需要得图片
var img = imgs[9];
var man =  imgs[7];//答题图片（人物）
var mans = imgs[8];//答题成功图片（人物）
var succrssimg =imgs[22];//答题成功弹窗图片
var lights = imgs[21];//答题成功弹窗光背景图片
var sugar1 = imgs[16];
var animti = false;
var borderColor = "rgb(187,141,105)";
var successkey = false;
var color = 'rgb(73,94,125)';
var page = 1;
var logiif = false;
var login1 = false;
var animtiif = true;
var zhongjie = false;
var judge = [1, 2, 1, 2, 1]
function pagetitle(page) {
    switch (page) {
        case 1:
            img.src = src[1]
            man.src = src[2]
            mans.src = src[3]
            color = 'rgb(173,132,104)'
            break;
        case 2:
            img.src = src[4]
            man.src = src[5]
            mans.src = src[6]
            color = 'rgb(155,148,122)'
            break;
        case 3:
            img.src = src[12]
            man.src = src[10]
            mans.src = src[11]
            color = 'rgb(89,108,88)'
            break;
        case 4:
            img.src = src[15]
            man.src = src[13]
            mans.src = src[14]
            color = 'rgb(135,120,185)'
            break;
    }
}
var zong = imgs[24];
var man1 = imgs[25];
var man2 = imgs[26];
var man3 = imgs[27];
var man4 = imgs[28];
var man5 = imgs[29];
var no = imgs[30];
var yes = imgs[31];
var sugar6 = imgs[32];
var geback = imgs[33];
var shareImg = imgs[34];
var see = imgs[35];

var once = new Image();
once.src = src[36];
function zhongjief() {
    if (!zhongjie) { return false }
    animti = false;
    current.all = false;
    cxt.beginPath()
    cxt.drawImage(zong, 0 - dri, 0 - dry, canvas.width, canvas.height);
    cxt.drawImage(man1, w * 0.08, h * 0.04, w * 0.14, h * 0.25);
    cxt.drawImage(man2, w * 0.26, h * 0.04, w * 0.14, h * 0.25);
    cxt.drawImage(man3, w * 0.44, h * 0.04, w * 0.14, h * 0.25);
    cxt.drawImage(man4, w * 0.62, h * 0.04, w * 0.14, h * 0.25);
    cxt.drawImage(man5, w * 0.8, h * 0.04, w * 0.14, h * 0.25);
    for (var i = 0; i < 5; i++) {
        if (judge[i] !== 1) {
            cxt.drawImage(no, w * (0.08 + i * 0.18), h * 0.3, w * 0.14, h * 0.25);
        } else {
            cxt.drawImage(yes, w * (0.08 + i * 0.18), h * 0.3, w * 0.14, h * 0.25);
        }
    }
    cxt.drawImage(sugar6, w * 0.08, h * 0.57, w * 0.15, h * 0.18);
    cxt.drawImage(geback, w * 0.24, h * 0.64, w * 0.6, h * 0.07);
    cxt.beginPath();
    cxt.strokeStyle = "rgba(255,255, 255, 1)";
    cxt.fillStyle = "rgba(45,31, 135, 1)";
    cxt.lineWidth = 2;
    cxt.textBaseline = "top";
    cxt.font = "bold 120px Verdana ,Arial, Helvetica, sans-serif";
    var fens = eval(judge.join('+')) > 0 ? eval(judge.join('+')) * 10 : 0
    cxt.fillText(fens, w / 2, h / 1.86)
    cxt.strokeText(fens, w / 2, h / 1.86);
    cxt.drawImage(shareImg, w * 0.08, h * 0.8, w * 0.22, h * 0.2);
    cxt.drawImage(see, w * 0.32, h * 0.8, w * 0.22, h * 0.2);
    cxt.drawImage(once, w * 0.56, h * 0.8, w * 0.22, h * 0.2);
    cxt.save()
    cxt.beginPath();
    cxt.lineCap = "round";
    cxt.strokeStyle = '#9f0'
    cxt.lineWidth = 20;
    cxt.translate(w * 0.259, h * 0.675);
    cxt.moveTo(0, 0);
    cxt.lineTo(fens / 10 * 0.2 * w * 0.562, 0);
    cxt.stroke();
    cxt.closePath();
    cxt.restore()
    animtiif = false;
}
var loginpage = document.getElementById('login')
function drawLogin() {
    if (!logiif) { return false }
    loginpage.style.display = 'block';
    cxt.beginPath()
    cxt.drawImage(sugar1, 0, 0, w * 0.13, h * 0.2);
}

var setval = ''
canvas.addEventListener('click', function (e) {//点击事件
    var e = e || event
    var p = getEventPosition(e)
    console.log(p)
    var xx = p.x;
    var yy = p.y;
    if (!onre) {
        xx = w / 4 - p.y - dri;
        yy = h / 4 - (h / 4 - p.x) - dry;
    } else {
        xx = p.x - dri;
        yy = p.y - dry;
    }
    if (guizheBtn(xx, yy)) {
        $('.xieyi').show();
        return false;
    }
    if (dstartif) {
        if (csnum > 0) {
        } else {
            alert("今日要糖果次数已用完，怪物们也要休息下，明日继续要糖果")
            return false
        }
    }
    // if (!login1) {
    //     if (loginios() == 1) {
    //         return false
    //     }
    //     if (window.appClient) {
    //         window.appClient.login()
    //         return false
    //     }
    //     logiif = true;
    //     return false;
    // }
    if (animtiif) {
        if (successkey) {
            dataInit();
            pagetitle(page++);
            if (page == 6) {
                zhongjie = true;
            }
        };
        if (fallKif) {
            return false
        }
        ci = 0
        clicktext(tw, rw, rh, th, xx, yy, index);
        animti = true;
    } else {
        clickzong(xx, yy);
    }
    if (animti && ci !==0) {
        pai = 20;
        clearInterval(setval)
        setval = setInterval(function () {
            if (pai > 0) {
                pai--;
            } else {
                if (page < 6) {
                    judge[page - 1] = 0
                }
                dataInit();
                pagetitle(page++)
                pai = 20;
                if (page == 6) {
                    clearInterval(setval)
                    //请求
                    zhongjie = true;
                }
            }
        }, 1000)
    }
})
function clickzong(x, y) {//总结页面按钮事件
    if (!zhongjie) { return false }
    var fw = w / 4, fh = h / 4
    if (x > fw * 0.08 && y > fh * 0.8 && x < fw * 0.08 + fw * 0.22 && y < fh * 0.8 + fh * 0.2) {
        //分享按钮
        $('.shareback').show()
    }
    if (x > fw * 0.32 && y > fh * 0.8 && x < fw * 0.32 + fw * 0.22 && y < fh * 0.8 + fh * 0.2) {
        //才看排行
        paihangbang()
        $('.zhongbang').show()
    }
    if (x > fw * 0.56 && y > fh * 0.8 && x < fw * 0.56 + fw * 0.22 && y < fh * 0.8 + fh * 0.2) {
        if (csnum > 0) {
            // csnum--
            //再来一次
            img.src = src[9];
            man.src = src[7];
            mans.src = src[8];
            animtiif = true;
            page = 1;
            animti = true;
            zhongjie = false;
            color = 'rgb(73,94,125)'
        } else {
            alert("今日要糖果次数已用完，怪物们也要休息下，明日继续要糖果")
        }

    }
}
var timg = new Image()
timg.src = src[38]
var timg1 = new Image()
timg1.src = src[39]
var startbtn = new Image()
startbtn.src = src[40]
var dstartif = true
function drawStart() {
    if (!dstartif) return false
    cxt.beginPath();
    cxt.drawImage(startimg, 0 - dri, 0 - dry, canvas.width, canvas.height);
    cxt.drawImage(lwen, w * 0.85, h * 0.05, w * 0.14, h * 0.25);
    cxt.drawImage(timg, w * 0.25, h * 0.58, w * 0.5, h * 0.1);
    cxt.drawImage(timg1, w * 0.3, h * 0.69, w * 0.4, h * 0.038);
    cxt.drawImage(startbtn, w * 0.35, h * 0.75, w * 0.3, h * 0.21);
    cxt.closePath()
}
function guizheBtn(x, y) {
    if (!dstartif) return false
    if (x > w * 0.85 && y > h * 0.05 && x < w * 0.85 + w * 0.14 && y < h * 0.05 + h * 0.25) {
        //规则按钮点击事件
        return true
    }
}
function startBtn(x, y) {//开始页面得加载页面得点击按钮事件
    if (x > w * 0.35 && y > h * 0.75 && x < w * 0.35 + w * 0.4 && y < h * 0.75 + h * 0.21) {
        //点击开始按钮
        return true
    }
}
function initCav() {//所有动画放进去
    var now = Date.now();
    var delta = now - then;
    cxt.clearRect(0 - dri, 0 - dry, canvas.width, canvas.height)
    drawStart()
    drawLogin()
    draw1(delta / 1000, img, man, color)
    SuccessKey(delta / 1000, img, mans, color)
    zhongjief()
    fallKey(delta / 1000, img, man, color)
    requestAnimationFrame(initCav)
}
function backImg(img, manimg) {
    cxt.beginPath()
    cxt.drawImage(img, 0 - dri, 0 - dry, canvas.width, canvas.height);
    cxt.drawImage(manimg, w * 0.48, h * -0.04, w / 2, h * 1.18);
}
function SuccessKey(delt, img, manimg, color) {
    if (!successkey) return false
    dstartif = false
    backImg(img, manimg)
    animText(delt, color)
    cxt.fillStyle = 'rgba(0,0,0,0.5)'
    cxt.rect(0 - dri, 0 - dry, canvas.width, canvas.height)
    cxt.fill()
    cxt.save()
    cxt.translate(canvas.width / 2, canvas.height / 2)
    cxt.rotate(delt * 10 * Math.PI / 180)
    cxt.drawImage(lights, -w * 0.7 / 2, -w * 0.65 / 2, w * 0.7, w * 0.65)
    cxt.restore()
    cxt.drawImage(succrssimg, 0 - dri, 0 - dry, canvas.width, canvas.height);
    cxt.closePath()
    current.all = false
}
function draw1(delt, img, manimg, color) {
    if (!animti) return false;
    dstartif = false
    backImg(img, manimg)
    cxt.beginPath();
    cxt.fillStyle = '#2d1f87';
    cxt.strokeStyle = '#fff';
    cxt.lineWidth = 10;
    cxt.arc(100, 75, 50, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.fill();
    cxt.beginPath();
    cxt.fillStyle = '#9f0';
    cxt.font = "50px Verdana ,Arial, Helvetica, sans-serif";
    cxt.fillText(pai, 100 - cxt.measureText(pai).width / 2, 45);
    animText(delt, color);
    cxt.closePath();
};
function fallKey(delt, img, manimg, color) {
    if (!fallKif) return false
    dstartif = false
    animti = false;
    backImg(img, manimg)
    animText(delt, color);
    drawMivie();
    current.all = false
}
function drawRoundRect(cxt, x, y, width, height, radius, color) {//圆角矩形
    cxt.beginPath();
    cxt.fillStyle = "rgba(255, 255, 255, 0.8)";
    cxt.strokeStyle = color;
    cxt.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
    cxt.lineTo(width - radius + x, y);
    cxt.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
    cxt.lineTo(width + x, height + y - radius);
    cxt.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
    cxt.lineTo(radius + x, height + y);
    cxt.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
    cxt.lineWidth = 4
    cxt.fill();
    cxt.closePath();
    cxt.stroke();
}
var timer = 0, i = 1, ib = 1, ic = 1, id = 1;
var current = {
    ITitle: 0,
    IAnsertA: 0,
    all: false
}
var newText,newanswera,newanswerb,newanswerc,newanswerd,pai = 11;
function sess() {//答题对
    judge[page - 1] = 1
    successkey = true
    animti = false
    fallKif = false
    if (page == 5) {
        clearInterval(setval)
        csnum--
    }
}
var fallKif = false
function fall() {//答题错误
    fallKif = true;
    successkey = false;
    judge[page - 1] = 0
    initnum()
    tang = true
    setTimeout(function () {
        tang = false;
        animti = true;
        fallKif = false;
        if (page < 6) {
            judge[page - 1] = 0
        }
        dataInit();
        pagetitle(page++)
        pai = 20;
        if (page == 6) {
            clearInterval(setval)
            csnum--
            zhongjie = true;
        }
    }, 1300)
    return false
}
var ci = 0
function clicktext(tw, rw, rh, th, x, y, index) {
    tw = tw / 4; rw = rw / 4; rh = rh / 4; th = th / 4
    
    if (!current.all) return false
    if (x > tw && x < tw + (rw / 2 - 10) && y > th - 12 && y < (th - 12) + rh / 3) {
        ci = 1
      if (Topic[index].correct != 1) {
            fall()
            console.log('你打错了1')
        } else {
            sess()
            console.log('你打对了1')
        }
    }
    if (x > tw * 3.5 && x < (tw * 3.5) + rw / 2 - 10 && y > th - 12 && y < (th - 12) + rh / 3) {
         ci = 2
         if (Topic[index].correct != 2) {
            console.log('你打错了2')
            fall()
        } else {
            console.log('你打对了2')
            sess()
        }
    }
    if (x > tw && x < tw + (rw / 2 - 10) && y > (th - 12) + rh / 3 && y < (th - 12) + rh / 3 + rh / 3) {
         ci = 3
         if (Topic[index].correct != 3) {
            console.log('你打错了3')
            fall()
        } else {
            console.log('你打对了3')
            sess()
        }
    }
    if (x > tw * 3.5 && x < (tw * 3.5) + rw / 2 - 10 && y > (th - 12) + rh / 3 && y < (th - 12) + rh / 3 + rh / 3) {
        ci = 4
       if (Topic[index].correct != 4) {
            console.log('你打错了4')
            fall()
        } else {
            console.log('你打对了4')
            sess()
        }
    }
    console.log(ci)
        return ci
}
var rw, rh, th, tw, tmw
function animText(data, color) {//打字效果
    // index = 21
    cxt.font = "64px Verdana ,Arial, Helvetica, sans-serif";
    cxt.fillStyle = "green";
    drawRoundRect(cxt, w * 0.1036, h * 0.525, rw, rh, 40, color);
    cxt.beginPath();
    current.ITitle = parseInt(data * 30)
    cxt.fillStyle = "rgba(0, 0, 0, 1)";
    cxt.textBaseline = "top";
    if (current.ITitle > Topic[index].title.length) {//题目
        newText = Topic[index].title.slice(0, Topic[index].title.length)
        cxt.fillText(newText, tw, h * 0.55, rw - 10)
        current.IAnsertA = parseInt(i += 0.5)
        if (current.IAnsertA < Topic[index].answer[0].length) {//A
            newanswera = Topic[index].answer[0].slice(0, current.IAnsertA)
            cxt.fillText(newanswera, tw, th, tmw)
        } else {
            newanswera = Topic[index].answer[0].slice(0, Topic[index].answer[0].length)
            cxt.fillText(newanswera, tw, th, tmw)
            current.IAnsertB = parseInt(ib += 0.5)
            if (current.IAnsertB < Topic[index].answer[1].length) {//B
                newanswerb = Topic[index].answer[1].slice(0, current.IAnsertB)
                cxt.fillText(newanswerb, tw * 3.5, th, tmw)
            } else {
                newanswerb = Topic[index].answer[1].slice(0, Topic[index].answer[1].length)
                cxt.fillText(newanswerb, tw * 3.5, th, tmw)
                current.IAnsertC = parseInt(ic += 0.5)
                if (current.IAnsertC < Topic[index].answer[1].length) {//C
                    newanswerc = Topic[index].answer[2].slice(0, current.IAnsertC)
                    cxt.fillText(newanswerc, tw, h * 0.719)
                } else {
                    newanswerc = Topic[index].answer[2].slice(0, Topic[index].answer[2].length)
                    cxt.fillText(newanswerc, tw, h * 0.719, tmw)
                    current.IAnsertD = parseInt(id += 0.5)
                    if (current.IAnsertD < Topic[index].answer[1].length) {//D
                        newanswerd = Topic[index].answer[3].slice(0, current.IAnsertD)
                        cxt.fillText(newanswerd, tw * 3.5, h * 0.719, tmw)
                    } else {
                        newanswerd = Topic[index].answer[3].slice(0, Topic[index].answer[3].length)
                        cxt.fillText(newanswerd, tw * 3.5, h * 0.719, tmw)
                        current.all = true
                    }
                }
            }
        }
    } else {
        current.all = false
        newText = Topic[index].title.slice(0, current.ITitle)
        cxt.fillText(newText, tw, h * 0.55, rw - 10)
    }
    cxt.closePath();
}
var hero = {
    speed: 30, // movement in pixels per second
    f: canvas.width
};
var x = 2;
var y = 0;
var t = 1;
var r = 4;
var p = function (x, y) {
    var o = new Object();
    o.x = x;
    o.y = y;
    return o;
}
var point = p(50, 700);
var p0 = p(50, 700);
var p1 = p(98, 178);
var p2 = p(371, 150);
var p3 = p(700, 261);
function drawLine() {
    cxt.beginPath();
    cxt.moveTo(w * 0.05, h * 1.1);
    cxt.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    ctx.stroke();
    cxt.closePath();
}
var sugar1 =imgs[16]
var sugar2 = imgs[17]
var sugar3 = imgs[18]
var sugar4 = imgs[19]
var sugar5 = imgs[20]
var nulrou = []
for (var i = 0; i < 100; i++) {
    nulrou.push(Math.random() * 80 - 40)
}
var nulro2 = []
for (var i = 0; i < 100; i++) {
    nulro2.push(Math.random() * 60 - 20)
}
var rot = 1,rr = 1,rr1 = 1,t1 = 0,t2 = 0,t3 = 0,t4 = 0;
function initnum() {//初始化失败效果
    t2 = 0;
    t1 = 0; t3 = 0;
    t4 = 0
    rr1 = 1;
    rr = 1;
    t = 0
    point = p(50, 700);
    p0 = p(50, 700);
    p1 = p(98, 178);
    p2 = p(371, 150);
    p3 = p(700, 261);
    x = 2;
    y = 0;
}
function dongImg(sugar, x, y, t, r) {
    cxt.save()
    cxt.translate(x + w * 0.045, y + w * 0.045);
    cxt.rotate(t * Math.PI / 180);
    cxt.scale(r, r)
    cxt.drawImage(sugar, 0, 0, w * 0.09, w * 0.09);
    cxt.restore()
}
function drawBall(x, y) {
    //画圆球
    cxt.beginPath();
    cxt.save()
    rot = rot + 0.5
    if (rr > 0) {
        rr = rr - 0.003
    } else {
        rr = 0
    }
    if (rr1 > 0) {
        rr1 = rr1 - 0.002
    } else {
        rr1 = 0
    }
    for (var i = 0; i < 5; i++) {
        if (i == 1) {
            dongImg(sugar1, x + nulrou[i], y + nulro2[i], rot, rr)
            // dongImg(sugar2, x + nulrou[i + 1], y + nulro2[i + 1], rot, rr)
            // dongImg(sugar3, x + nulrou[i + 2], y + nulro2[i + 2], rot, rr)
            // dongImg(sugar4, x + nulrou[i + 3], y + nulro2[i + 3], rot, rr)
            // dongImg(sugar5, x + nulrou[i + 4], y + nulro2[i + 4], rot, rr)
        } else if (i == 2) {
            dongImg(sugar1, x + nulrou[i], y + nulro2[i], rot, rr1)
            // dongImg(sugar2, x + nulrou[i + 1], y + nulro2[i + 1], rot, rr1)
            // dongImg(sugar3, x + nulrou[i + 2], y + nulro2[i + 2], rot, rr1)
            // dongImg(sugar4, x + nulrou[i + 3], y + nulro2[i + 3], rot, rr1)
            // dongImg(sugar5, x + nulrou[i + 4], y + nulro2[i + 4], rot, rr1)
        }

    }
    cxt.restore()
    cxt.closePath();
}
function bezier(t, p0, p1, p2, p3) {
    var point = p(0, 0);
    var temp = 1 - t;
    point.x = p0.x * temp * temp * temp + 3 * p1.x * t * temp * temp + 3 * p2.x * t * t * temp + p3.x * t * t * t;
    point.y = p0.y * temp * temp * temp + 3 * p1.y * t * temp * temp + 3 * p2.y * t * t * temp + p3.y * t * t * t;
    return point;
}
//画移动的线
var tang = false
function drawMivie() {
    if (!tang) { return false }
    t = t + 0.01;
    t1 = t1 + 0.009;
    t2 = t2 + 0.008;
    t3 = t3 + 0.007;
    point = bezier(t, p0, p1, p2, p3)
    point2 = bezier(t1, p0, p1, p2, p3)
    point3 = bezier(t2, p0, p1, p2, p3)
    point4 = bezier(t3, p0, p1, p2, p3)
    if (point.x > 740) {
        t = 1;
    } else {
        ifclare()
    };
    if (point2.x > 740) {
        t1 = 1;
    } else {
        ifclare('2')
    }
    if (point3.x > 740) {
        t2 = 1;
    } else {
        ifclare('3')
    }
    if (point4.x > 740) {
        t3 = 1;
    } else {
        ifclare('4')
    }
}
function ifclare(d) {
    //防止首位相连<br>
    cxt.closePath();
    d ?
        drawBall(eval('point' + d).x, eval('point' + d).y) :
        drawBall(point.x, point.y)
}