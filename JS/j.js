window.onload=function () {


//轮播图
let t = setInterval(run, 2000);
let index = 0;
let imgbox =$(" .category_photo li");
function run(type = "next") {
    if (type == "next") {
        index++;
        if (index >= imgbox.length) {
            index = 0;
        }
    } else if (type == "prev") {
        index--;
        if (index < 0) {
            index = imgbox.length - 1;
        }
    }
    imgbox.css("z-index", "5")
        .eq(index)
        .css("z-index", "10")
    $(".circleBtn div").removeClass("hot").eq(index).addClass("hot");

}

$(".category_photo_left").click(function () {
    run("prev")
});
$(".category_photo_right").click(function () {
    run("next")
});
$(".category").hover(function () {
    clearInterval(t);
}, function () {
    t = setInterval(run, 2000);
});
$(".circleBtn div").click(function () {
    let index = $(this).index();
    imgbox.css("z-index", "5")
        .eq(index)
        .css("z-index", "10");
    $(".circleBtn div").removeClass("hot").eq(index).addClass("hot");
});


//选项卡

$(".nav").mouseenter(function () {
    $(".small").css("display","block");
});
$(".nav").mouseleave(function () {
    $(".small").css("display","none");
});
$(".nav .bigli").mouseenter(function () {
    let index = $(this).index();
    $(".small1").eq(index).css("display","block")
});
$(".nav .bigli").mouseleave(function () {
    $(".small1").css("display", "none");
});


let cali = $(".category_title li");
let cabox = $(".category_title_box");
console.log(cali, cabox);
cali.hover(function () {
    let index = $(this).index();
    cabox.eq(index).css({"display": "block"});

}, function () {
    cabox.css({"display": "none", "boxShadow": "none"});

})
}
