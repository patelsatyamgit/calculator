let curretInput=document.querySelector('.currentInput');
let answerearea=document.querySelector('.answerearea');
let buttons=document.querySelectorAll('button');
let evaluate=document.querySelector('#evaluate');
let erase =document.querySelector('#erase');
let clear=document.querySelector('#clear')
let realtimeanswerevalue=[];

clear.addEventListener("click" ,() =>
{
    realtimeanswerevalue=[''];
    answerearea.innerHTML=0;
    curretInput.className='curretInput';
    answerearea.className='answerearea';
    answerearea.style.color='rgba(150,150,150,0.87)';
    location.reload();
    

})

buttons.forEach((btnn) => {

    btnn.addEventListener("click",() =>{
        if(!btnn.id.match("erase"))
        {
            realtimeanswerevalue.push(btnn.value);
            curretInput.innerHTML=realtimeanswerevalue.join("");
            if(btnn.classList.contains('btn'))
            {
                answerearea.innerHTML=eval(realtimeanswerevalue.join(""));
            }
        }
    
    if(btnn.id.match('erase'))
    {
        realtimeanswerevalue.pop();
        curretInput.innerHTML=realtimeanswerevalue.join('');
        answerearea.innerHTML=eval(realtimeanswerevalue.join(""));
    }

    if(btnn.id.match('evaluate'))
    {
        curretInput.className='answerearea';
        answerearea.className='currentInput'
        answerearea.style.color='while';
    }

    if(typeof eval(realtimeanswerevalue.join(''))=='undefined')
    {
        answerearea.innerHTML=0;
    }
})
})
