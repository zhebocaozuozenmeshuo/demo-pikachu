!function(){
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        }, 1000/77)
    }
    let code =    
`
/*
* 今天准备画一只皮卡丘
* 先画皮卡丘的皮
*/
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
}
.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
}
/*
* 再画皮卡丘的鼻子
*/
.nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent ;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
    /* transform: translateX(-50%) */
}
/*
* 继续画皮卡丘的眼睛
*/
.eye {
    height: 49px;
    width: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
}
/*
* 画带光的眼球~
*/
.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -2px;
    border: 2px solid #000;
}
/*
* 把左眼放到左边
*/
.eye.left{
    right: 50%;
    margin-right: 90px;
}
/*
* 再把右眼放到右边
*/
.eye.right {
    left: 50%;
    margin-left: 90px;
}
/*
* 接着画皮卡丘害羞的脸
*/
.face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*
* 把左脸放到左边
*/
.face.left {
    right: 50%;
    margin-right: 116px;
}
/*
* 再把右脸放到右边
*/
.face.right {
    left: 50%;
    margin-left: 116px;
}
/*
* emms 那么，要画皮卡丘的上嘴唇了
*/
.upperLip {
    height: 30px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top: 45px;
    background: #FEE433;
}
/*
* 放到左边
*/
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 70px 30px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
/*
* 放到右边
*/
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 70px 30px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
/*
* 画皮卡丘的下嘴唇
*/
.lowerLip-wrapper {
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -150px;
    /* z-index: -1; */
    height: 140px;
    width: 300px;
    overflow: hidden;
}

.lowerLip{
    height: 35000px;
    width: 300px;
    background: #990513;
    border-radius: 200px/ 2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/*
* 画皮卡丘的舌头
*/
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width: 130px;
    height: 130px;
    background: #FC4A62;
    left: 50%;
    margin-left: -65px;
    border-radius: 50%;
}
/* 喏 皮卡丘 画完了 */
    `
    writeCode('', code)
}.call()