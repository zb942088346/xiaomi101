window.onload=function () {
    let right_box = document.getElementsByClassName("right_box");
    let right_right = document.getElementsByClassName("right_right");
    console.log(right_right, right_box);
    right_right[0].onmouseenter = function () {
        right_box[0].style.height = "98px";
        right_box[0].style.boxShadow = "0 0 2px 2px rgba(0,0,0,0.3)"
    };
    right_right[0].onmouseleave = function () {
        right_box[0].style.height = "0";
        right_box[0].style.boxShadow = "";
    };
    let category_title_box = document.getElementsByClassName("category_title_box");
    let category_title = document.getElementsByClassName("category_title")[0];
    let lis2=category_title.getElementsByTagName("li");
    console.log(category_title, category_title_box,lis2);
    for (let i=0;i<lis2.length;i++){
    lis2[i].onmouseenter = function () {
        category_title_box[i].style.display = "block";
    };
        lis2[i].onmouseleave = function () {
        category_title_box[i].style.display = "none";
    };
}



let jiadianbox = document.getElementsByClassName("jiadianbox");
    let house_electri = document.getElementsByClassName("house_electri")[0];
    let house_electri_top = house_electri.getElementsByClassName("house_electri_top")[0];
    let lis = house_electri_top.getElementsByTagName("li");
    console.log(jiadianbox, lis);
    for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseenter = function () {
            for (let j=0;j<lis.length;j++){
                jiadianbox[j].style.zIndex = "5"
            }
            jiadianbox[i].style.zIndex = "10"
        };

    }

    ///////////////////导航图///////////////////
    let category=document.getElementsByClassName("category")[0];
    let category_photo=document.getElementsByClassName("category_photo")[0];
    let liss=category_photo.getElementsByTagName("li");

    let category_photo_left=document.getElementsByClassName("category_photo_left")[0];
    let category_photo_right=document.getElementsByClassName("category_photo_right")[0];

    let circle=document.getElementsByClassName("circle");
    console.log(circle);
    console.log(circle);
    console.log(category_photo,liss);
    let num=0;
    let t=setInterval(move,2000);
    category.onmouseenter=function(){
        clearInterval(t)
    }
    category.onmouseleave=function () {
        t=setInterval(move,2000);
    };
    category_photo_right.onclick=function () {
        move();
    };
    category_photo_left.onclick=function () {
        move1();
    };
    function move() {
        num++;
        if (num==liss.length){
            num=0;
        }
        for (let i=0;i<liss.length;i++){
            liss[i].style.zIndex="5";
            circle[i].style.background="#92897c";
        }
        liss[num].style.zIndex="10";
        circle[num].style.background="#fff";
    }
    function move1() {
        num--;
        if (num<0){
            num=liss.length-1;
        }
        for (let i=0;i<liss.length;i++){
            liss[i].style.zIndex="5";
            circle[i].style.background="#92897c";
        }
        liss[num].style.zIndex="10";
        circle[num].style.background="#fff";
    }
    for (let i=0;i<circle.length;i++){
        circle[i].onclick=function () {
            for (let j=0;j<circle.length;j++){
                liss[j].style.zIndex="5";
                circle[j].style.background="#92897c";
            }
            liss[i].style.zIndex="10";
            circle[i].style.background="#fff";
            num=i;
        }
    }


    /////////内容轮播图开始///////////////

    let hot=document.querySelectorAll(".content li")[0];
    let box=hot.querySelectorAll(".hot_box");
    let width=parseInt(getComputedStyle(hot,null).width);
    console.log(width);
    console.log(box,hot);
    let hot_left=hot.querySelector(".content_left");
    let hot_right=hot.querySelector(".content_right");
    console.log(hot_left,hot_right);
    let hot1_dian=hot.querySelectorAll(".wheel_nr div");
    console.log(hot1_dian);
    let hot1=document.querySelectorAll(".content li")[1];
    let box1=hot1.querySelectorAll(".hot_box");
    console.log(hot1, box1);
    let now=0;
    let next=0;
    let flag=true;
    hot_left.onclick=function () {
        if (flag==false){
            return;
        }
        if (next==0){
            return;
        }
        move3();
        flag=false;
    };
    hot_right.onclick=function () {
        if (flag==false){
            return;
        }
        if (next==box.length-1){
            return;
        }
        move2();
        flag=false;
    };
    function move2() {
        next++;
        if (next==box.length){
            next=0;
        }
        box[next].style.left=width+"px";
        animate(box[now],{left:-width},function () {
            flag=true
        });
        animate(box[next],{left:0});
        hot1_dian[now].className="";
        hot1_dian[next].className="hot_1";
        now=next;
    }
    function move3() {
        next--;
        if (next<0){
            next=box.length-1;
        }
        box[next].style.left=-width+"px";
        animate(box[now],{left:width},function () {
            flag=true
        });
        animate(box[next],{left:0});
        hot1_dian[now].className="";
        hot1_dian[next].className="hot_1";
        now=next;
    }
    //圆点
    for (let i=0;i<hot1_dian.length;i++){
        hot1_dian[i].onclick=function () {
            if (now==i){
                return;
            }
            else if (now<i){
                box[i].style.left=width+"px";
                animate(box[now],{left:-width});
                animate(box[i],{left:0});
                hot1_dian[now].className="";
                hot1_dian[i].className="hot_1";
            }
            else {
                hot1_dian[i].style.left=-width+"px";
                animate(box[now],{left:width});
                animate(box[i],{left:0});
                hot1_dian[now].className="";
                hot1_dian[i].className="hot_1";
            }
            next=now=i;
        }
    }
}
