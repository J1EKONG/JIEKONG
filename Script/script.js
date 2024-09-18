const body = document.querySelector('body');
const one = document.querySelector('.one');
const JIEKONG = document.querySelector('.JIEKONG');//JIEKONG
const onemy = document.querySelector('.onemy');//导航球
const one_back = document.querySelector('.one_back');//返回球
const GitHub = document.querySelector('.GitHub');// GitHub链接
const group = document.querySelector('.group');//输入框
const head = document.querySelector('.head');//导航盒
const I = document.querySelectorAll('.I')//获取导航列表
const h1 = document.querySelectorAll('h1')//获取标题列表
const tale = document.querySelectorAll('.tale')//获取章节列表
const article_head = document.querySelector('.article_head');


let onemy_switch = true;//onemy的总开关
let article_head_sw = true;

let currentView = 'head';
function back() {
    //判断未关闭的即可
    //若在文章导航界面
    if (currentView == 'article_head' || currentView == 'GitHub' || currentView == 'group') {
        head.style.opacity = '1';
        group.style.opacity = '0';
        article_head.style.opacity = '0';
        GitHub.style.opacity = '0';
        one_back.style.opacity = '0';
        setTimeout(function () {
            onemy.style.display = 'flex';
            head.style.display = 'flex';
            GitHub.style.display = 'none';
            article_head.style.display = 'none';
            group.style.display = 'none';
            one_back.style.display = 'none';
            currentView = 'head';
        }, 700);
    }

    if (currentView == 'tale') {
        article_head.style.opacity = '1';
        tale[tr].style.opacity = '0';
        setTimeout(function () {
            article_head.style.display = 'block';
            tale[tr].style.display = 'none';
            currentView = 'article_head';
        }, 900);
    }


}

//事件：
//返回球的点击事件
one_back.addEventListener('click', back);
//one的点击事件
one.addEventListener('click', function () {

    body.style.backgroundColor = '#cccccc'; //点击后，背景变白
    one.style.opacity = '0';

    setTimeout(function () {
        one.style.display = 'none';
        JIEKONG.style.display = 'flex';
        setTimeout(function () {
            JIEKONG.classList.add('JIEKONGreal'); //触发二次过渡，类中的opacity触发，再加上延时
        }, 100);
    }, 500);

});




let first = true;//第一次悬停，不触发
//onemy的hover事件
onemy.addEventListener('mouseenter', function () {
    if (!onemy_switch) return;//若开关为假，禁用该监听
    if (first) {
        first = false;
    }
    else {
        onemy.style.opacity = '0';
        head.style.opacity = '1';
        setTimeout(function () {
            onemy.style.display = 'none';
            head.style.display = 'flex';
        }, 700); //等待小球接近透明后显示
    }
});


//鼠标离开时
head.addEventListener('mouseleave', function () {

    if (!onemy_switch) return;//若开关为假，禁用该监听
    //球逐渐出现，导航逐渐关闭
    onemy.style.opacity = '1';
    head.style.opacity = '0';

    setTimeout(function () {
        onemy.style.display = 'flex';
        head.style.display = 'none';
    }, 370);

});

//惦记我
I[1].addEventListener('click', function () {
    article_head_sw = true;
    onemy_switch = false;//禁用onemy的监听事件
    head.style.opacity = '0';
    article_head.style.opacity = '1';
    one_back.style.opacity = '1';
    setTimeout(function () {
        head.style.display = 'none';
        onemy.style.display = 'none';
        article_head.style.display = 'block';
        one_back.style.display = 'block';
        currentView = 'article_head';//更新图层级
    }, 700);
});

//惦记他
I[2].addEventListener('click', function () {
    onemy_switch = false;//禁用onemy的监听事件
    head.style.opacity = '0';
    GitHub.style.opacity = '1';
    one_back.style.opacity = '1';
    setTimeout(function () {
        head.style.display = 'none';
        onemy.style.display = 'none';
        GitHub.style.display = 'block';
        one_back.style.display = 'block';
        currentView = 'GitHub'//更新图层级
    }, 700);
});


//惦记你
I[0].addEventListener('click', function () {
    onemy_switch = false;//禁用onemy的监听事件
    head.style.opacity = '0';
    group.style.opacity = '1';
    one_back.style.opacity = '1';//返回球出现
    setTimeout(function () {
        head.style.display = 'none';
        onemy.style.display = 'none';
        group.style.display = 'block';
        one_back.style.display = 'block';
        currentView = 'group'//更新图层级
    }, 700);
});

let tr = 0;//目前被打开的文章

//点击标题，文章显示
for (let i = 0; i < tale.length; i++) {

    h1[i].addEventListener("click", function () {
        article_head.style.opacity = '0';
        tale[i].style.opacity = '1';
        setTimeout(function () {
            article_head.style.display = 'none';
            tale[i].style.display = 'block';
            currentView = 'tale';
            tr = i;//记录当前文章索引
        }, 900);
    }
    );
}