const taw  = () =>  {
    alert('hello');
    document.getElementById('yes').style.color = 'green';
    alert('yes, next please');
    document.getElementById('yes').innerHTML = 'hello again';
}
    let c = 0;

const count_up = () => {
    document.querySelector('h2').innerHTML = c++;

    // pre-increment : c++
    // post-increment: ++c
    // this highlight the difference between c++ and ++c
    
    // in c++ case, when clicking a button, it will set iner html to c first and when render complete, it increment
    // so when click the button it will print 0 first

    //in ++c casem when clicking the button ti immediately increment ++c and then render the c value on the UI
    // so when click the button it correctly display 1 and not 0
}
const count_down = () => {
    document.querySelector('h2').innerHTML = c--;
}


//a function is global code block that can reuse anytime you want
//a method is a function within a class that can be use in that class