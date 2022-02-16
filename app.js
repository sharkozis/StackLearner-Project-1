window.onload = ()=>{
    main();
}
function main(){
    const Root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click',function(){
        const bgColor = generateRGBColor();
        Root.style.backgroundColor = bgColor;
    })
}
function generateRGBColor (){

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`;
}