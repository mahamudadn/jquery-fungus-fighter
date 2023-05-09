$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;





function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.arcane-scepter').on('click', arcaneHandle)
    $('.entangle').on('click', entangleHandle)
    $('.dragon-blade').on('click', bladerHandle)
    $('.star-fire').on('click', fireHandle)
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

// created a global variable outside of the onready function.

let hp = 100;
let ap = 100;

function arcaneHandle() {
    console.log('arcaneHandle', arcaneHandle)
   ap -=12;
   hp -= 14;

   if (ap < 0) { ap = 0;}
   if (hp < 0) { hp = 0; }

   console.log(ap)

   render();

}

// function that handles when ectangle is clicked
// that will deduct both ap and a hp whenever is clicked.
// called render function to see the my result on the DOM.

function entangleHandle() {
    
    ap -= 23;
    hp -= 9 ;

    if (ap < 0) { ap = 0;
    }
       if (hp < 0) { hp = 0;}

    render();

}

//function that handles when blader is clicked

function bladerHandle() {
    
    ap -= 38;
    hp -= 47;
  
    if (ap < 0) { ap = 0;}
       if (hp < 0) {hp = 0;}

    render();

}


function fireHandle() {
    
    ap -= 33;
    hp -= 25;


    if (ap < 0) { ap = 0;}
       if (hp < 0) { hp = 0; }

    render();
}



// function that changes of the vlue of hp and ah.
function humanityDoom() {
    if(hp === 0){
        // function that that changes walk to dead when its 0
        $('.freaky-fungus').removeClass('walk').addClass('dead');
        // disables onclick ap when ever the valu gets zero.
        $('.attack-btn').prop('disabled', true)

    // render funtion that prints result in to the DOM.
     render();    
    // condition that checks the value of ap.
    } else if(ap === 0 ) {
       // changes walk to champ. 
     $('.freaky-fungus').removeClass('walk').addClass('jump');
     $('.attack-btn').prop('disabled',true)

    }
// renders value in to DOM.
    render();
}

// renders onclick function from state to the DOM.
function render() {
    $('.ap-text').text(ap)
    $('.hp-text').text(hp)
    humanityDoom();

}