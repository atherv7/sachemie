document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.getElementById('btn1'); 
    const btn1Close = document.getElementById('btn1.2'); 
    const btn2 = document.getElementById('btn2'); 
    const btn2Close = document.getElementById('btn2.2'); 
    const btn3 = document.getElementById('btn3'); 
    const btn3Close = document.getElementById('btn3.2'); 
    const btn4 = document.getElementById('btn4'); 
    const btn4Close = document.getElementById('btn4.2'); 
    const btn5 = document.getElementById('btn5'); 
    const btn5Close = document.getElementById('btn5.2'); 
    const btn6 = document.getElementById('btn6'); 
    const btn6Close = document.getElementById('btn6.2'); 
    const btn7 = document.getElementById('btn7'); 
    const btn7Close = document.getElementById('btn7.2'); 
    const btns = document.querySelectorAll('.btn'); 
    const btnsClose = document.querySelectorAll('.close'); 

    btnsClose.forEach(btn => {
        btn.addEventListener('click', 
        () => {
            document.querySelector('html').style.overflow = null; 
            document.body.style.overflow = "hidden"; 
        }); 
    }); 

    btns.forEach(btn => {
        btn.addEventListener('click', 
        () => {
            document.body.style.overflow = "hidden"; 
            document.querySelector('html').style.overflow = "hidden"; 
        }); 
    }); 

    btn1.addEventListener('click', 
    () => {        
        document.querySelector('#concept').style.display = 'flex'; 
        document.querySelector("#concept").style.animation = 'move 1s forwards'; 
        document.querySelector('#btn1').style.color = 'white'; 
        document.querySelector('#btn1').style.backgroundColor = 'black'; 
        document.getElementById('btn2.2').click(); 
        document.getElementById('btn3.2').click(); 
        document.getElementById('btn4.2').click(); 
        document.getElementById('btn5.2').click(); 
        document.getElementById('btn6.2').click(); 
        document.getElementById('btn7.2').click(); 
    }); 

    btn1Close.addEventListener('click', 
    () => {
        document.querySelector('#concept').style.animation = 'moveOut 1s forwards'; 
        setTimeout(() => {document.querySelector('#concept').style.display = 'none'}, 1500); 
        document.querySelector('#btn1').style.color = null; 
        document.querySelector('#btn1').style.backgroundColor = null; 
    });

    btn2.addEventListener('click', 
    () => {
        document.querySelector('#antibody').style.display = 'flex'; 
        document.querySelector("#antibody").style.animation = 'move 1s forwards'; 
        document.querySelector('#btn2').style.color = 'white'; 
        document.querySelector('#btn2').style.backgroundColor = 'black';
        document.getElementById('btn1.2').click(); 
        document.getElementById('btn3.2').click(); 
        document.getElementById('btn4.2').click(); 
        document.getElementById('btn5.2').click(); 
        document.getElementById('btn6.2').click(); 
        document.getElementById('btn7.2').click(); 
    }); 

    btn2Close.addEventListener('click', 
    () => {
        document.querySelector('#antibody').style.animation = 'moveOut 1s forwards'; 
        setTimeout(() => {document.querySelector('#antibody').style.display = 'none'}, 1500); 
        document.querySelector('#btn2').style.color = null; 
        document.querySelector('#btn2').style.backgroundColor = null; 
    });

    btn3.addEventListener('click', 
    () => {
        document.querySelector('#payload').style.display = 'flex'; 
        document.querySelector("#payload").style.animation = 'move 1s forwards'; 
        document.querySelector('#btn3').style.color = 'white'; 
        document.querySelector('#btn3').style.backgroundColor = 'black';
        document.getElementById('btn2.2').click(); 
        document.getElementById('btn1.2').click(); 
        document.getElementById('btn4.2').click(); 
        document.getElementById('btn5.2').click(); 
        document.getElementById('btn6.2').click(); 
        document.getElementById('btn7.2').click(); 
    }); 

    btn3Close.addEventListener('click', 
    () => {
        document.querySelector('#payload').style.animation = 'moveOut 1s forwards'; 
        setTimeout(() => {document.querySelector('#payload').style.display = 'none'}, 1500); 
        document.querySelector('#btn3').style.color = null; 
        document.querySelector('#btn3').style.backgroundColor = null; 
    });

    btn4.addEventListener('click', 
    () => {
        document.querySelector('#strat').style.display = 'flex'; 
        document.querySelector("#strat").style.animation = 'move 1s forwards'; 
        document.querySelector('#btn4').style.color = 'white'; 
        document.querySelector('#btn4').style.backgroundColor = 'black';
        document.getElementById('btn2.2').click(); 
        document.getElementById('btn3.2').click(); 
        document.getElementById('btn1.2').click(); 
        document.getElementById('btn5.2').click(); 
        document.getElementById('btn6.2').click(); 
        document.getElementById('btn7.2').click(); 
    }); 

    btn4Close.addEventListener('click', 
    () => {
        document.querySelector('#strat').style.animation = 'moveOut 1s forwards'; 
        setTimeout(() => {document.querySelector('#strat').style.display = 'none'}, 1500); 
        document.querySelector('#btn4').style.color = null; 
        document.querySelector('#btn4').style.backgroundColor = null; 
    });

    btn5.addEventListener('click', 
    () => {
        document.querySelector('#due').style.display = 'flex'; 
        document.querySelector("#due").style.animation = 'move 1s forwards'; 
        document.querySelector('#btn5').style.color = 'white'; 
        document.querySelector('#btn5').style.backgroundColor = 'black';
        document.getElementById('btn2.2').click(); 
        document.getElementById('btn3.2').click(); 
        document.getElementById('btn4.2').click(); 
        document.getElementById('btn1.2').click(); 
        document.getElementById('btn6.2').click(); 
        document.getElementById('btn7.2').click(); 
    }); 

    btn5Close.addEventListener('click', 
    () => {
        document.querySelector('#due').style.animation = 'moveOut 1s forwards'; 
        setTimeout(() => {document.querySelector('#due').style.display = 'none'}, 1500); 
        document.querySelector('#btn5').style.color = null; 
        document.querySelector('#btn5').style.backgroundColor = null; 
    });

    btn6.addEventListener('click', 
    () => {
        document.querySelector('#post').style.display = 'flex'; 
        document.querySelector("#post").style.animation = 'move 1s forwards'; 
        document.querySelector('#btn6').style.color = 'white'; 
        document.querySelector('#btn6').style.backgroundColor = 'black';
        document.getElementById('btn2.2').click(); 
        document.getElementById('btn3.2').click(); 
        document.getElementById('btn4.2').click(); 
        document.getElementById('btn5.2').click(); 
        document.getElementById('btn1.2').click(); 
        document.getElementById('btn7.2').click(); 
    }); 

    btn6Close.addEventListener('click', 
    () => {
        document.querySelector('#post').style.animation = 'moveOut 1s forwards'; 
        setTimeout(() => {document.querySelector('#post').style.display = 'none'}, 1500); 
        document.querySelector('#btn6').style.color = null; 
        document.querySelector('#btn6').style.backgroundColor = null; 
    });

    btn7.addEventListener('click', 
    () => {
        document.querySelector('#port').style.display = 'flex'; 
        document.querySelector("#port").style.animation = 'move 1s forwards'; 
        document.querySelector('#btn7').style.color = 'white'; 
        document.querySelector('#btn7').style.backgroundColor = 'black';
        document.getElementById('btn2.2').click(); 
        document.getElementById('btn3.2').click(); 
        document.getElementById('btn4.2').click(); 
        document.getElementById('btn5.2').click(); 
        document.getElementById('btn6.2').click(); 
        document.getElementById('btn1.2').click(); 
    }); 

    btn7Close.addEventListener('click', 
    () => {
        document.querySelector('#port').style.animation = 'moveOut 1s forwards'; 
        setTimeout(() => {document.querySelector('#port').style.display = 'none'}, 1500); 
        document.querySelector('#btn7').style.color = null; 
        document.querySelector('#btn7').style.backgroundColor = null; 
    });
})