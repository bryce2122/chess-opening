



import {Motion, spring} from 'react-motion';
import range from 'lodash.range';
var React = require('react');
var ReactDOM = require('react-dom');
var DragDropContext = require('react-dnd').DragDropContext


var HTML5Backend = require('react-dnd-html5-backend');
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var flow = require('lodash/flow');
var count = 0;
var BS1;
var dragstate;
var arr = []
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
var PropTypes = React.PropTypes;
var style;
var style1;
var stylek1;
var styleq;
var styleking;
var stylek2;
var styleb2;
var stylec2;
var stylep1;
var stylep2;
var stylep3;
var stylep4;
var stylep5;
var stylep6;
var stylep7;
var stylep8;
var thetop = -500
var thetop1;
var countme = 0;
var move;
var theleft = 7
var countmeup = 0
var theleft1;
var countup = 0;
var countleft = 0;
var bleft = 70;
var btop = -540;
var countbdr = 0;
var countbdl = 0;
var countbur = 0;
var countbul = 0;
var k1left = 130;
var k1top = -590;
var qleft = 200;
var qtop = -640;
var countk1rightup2 = 0;
var countk1rightup1 = 0;
var countk1rightdown2 = 0;
var countk1rightdown1 = 0;
var countk1leftup2 = 0;
var countk1leftup1 = 0;
var countk1leftdown2 = 0;
var countk1leftdown1 = 0;

var index = 0;
var countqd = 0;
var countqu = 0;
var countqr = 0;
var countql = 0;
var countqdr = 0;
var countqdl = 0;
var countqur = 0;
var countqul = 0;
var kingtop = -685;
var kingleft = 260;
var countkd = 0;
var countku = 0;
var countkr = 0;
var countkl = 0;
var countkdr = 0;
var countkdl = 0;
var countkur = 0;
var countkul = 0;
var k2top = -730;
var k2left = 320;
var countk2rightup2 = 0;
var countk2rightup1 = 0;
var countk2rightdown2 = 0;
var countk2rightdown1 = 0;
var countk2leftup2 = 0;
var countk2leftup1 = 0;
var countk2leftdown2 = 0;
var countk2leftdown1 = 0;
var countb2dr = 0;
var countb2dl = 0;
var countb2ur = 0;
var countb2ul = 0;
var b2left = 385;
var b2top = -780
var countme2 = 0;
var countmeup2 = 0
var countup2 = 0;
var countleft2 = 0;
var c2left = 445;
var c2top =  -830;
var p1left = 5;
var p1top = -810;
var p2left = 70;
var p2top = -860;
var p3left = 130;
var p3top = -910;
var p4left = 200;
var p4top = -960;
var p5left = 260;
var p5top = -1010;
var p6left = 320;
var p6top = -1055;
var p7left = 380;
var p7top = -1100;
var p8left = 440;
var p8top = -1150;
var countp1up = 0;
var countp1right = 0;
var countp1left = 0;
var countp2up = 0;
var countp2right = 0;
var countp2left = 0;
var countp3up = 0;
var countp3right = 0;
var countp3left = 0;
var countp4up = 0;
var countp4right = 0;
var countp4left = 0;
var countp5up = 0;
var countp5right = 0;
var countp5left = 0;
var countp6up = 0;
var countp6right = 0;
var countp6left = 0;
var countp7up = 0;
var countp7right = 0;
var countp7left = 0;
var countp8up = 0;
var countp8right = 0;
var countp8left = 0;






// Components 

//Constants 

// Diameter of the main button in pixels
const MAIN_BUTTON_DIAM = 90;
const CHILD_BUTTON_DIAM = 48;
// The number of child buttons that fly out from the main button
const NUM_CHILDREN = 16;
// Hard code the position values of the mainButton
const M_X = 490;
const M_Y = 450;

const SPRING_CONFIG = [400, 28];

// How far away from the main button does the child buttons go
const FLY_OUT_RADIUS = 130,
  SEPARATION_ANGLE = 40, //degrees
  FAN_ANGLE = (NUM_CHILDREN - 1) * SEPARATION_ANGLE, //degrees
  BASE_ANGLE = ((180 - FAN_ANGLE)/2); // degrees

// Names of icons for each button retreived from fontAwesome, we'll add a little extra just in case 
// the NUM_CHILDREN is changed to a bigger value
let childButtonIcons = 'pencil'


// Utility functions

function toRadians(degrees) {
  return degrees * 0.0174533;
}

function finalChildDeltaPositions(index) {
  let angle = BASE_ANGLE + (index* SEPARATION_ANGLE);
  return {
    deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) - (CHILD_BUTTON_DIAM/2),
    deltaY: FLY_OUT_RADIUS * Math.sin(toRadians(angle)) + (CHILD_BUTTON_DIAM/2)
  };
}



function RightOneCastle(d) {
    if(countmeup == 0) {
    theleft1 = theleft + (63 * d)
    theleft = theleft1}
    countmeup++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(thetop , SPRING_CONFIG),
      left: spring( theleft , SPRING_CONFIG),
      
      
    };


  }



var mstyle = RightOneCastle(4)




class APP extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      isOpen: false,
      childButtons: []
    };

    // Bind this to the functions 
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.animateChildButtonsWithDelay = this.animateChildButtonsWithDelay.bind(this);
   
  }

  componentDidMount() {
    window.addEventListener('click', this.closeMenu);
    let childButtons = [];
   range(NUM_CHILDREN).forEach(index => {
      childButtons.push(this.renderChildButton(index));
    });

    this.setState({childButtons: childButtons.slice(0)});
  
   
setInterval(this.animateChildButtonsWithDelay, 5000);

  }

  





  mainButtonStyles() {
    return {
      width: MAIN_BUTTON_DIAM,
      height: MAIN_BUTTON_DIAM,
      top: M_Y - (MAIN_BUTTON_DIAM/2),
      left: M_X - (MAIN_BUTTON_DIAM/2)
    };
  }

  initialChildButtonStyles() {
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-500, SPRING_CONFIG),
      left: spring(5, SPRING_CONFIG),
      
      
    };
  }

  

    initialP1(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-810, SPRING_CONFIG),
      left: spring(5, SPRING_CONFIG),
      
      
    };
  }


  p1Up(d){

    if (countp1up == 0) {

      p1top = p1top + (63 * d)
     countp1up++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p1top, SPRING_CONFIG),
      left: spring(p1left, SPRING_CONFIG),
      
      
    };
  
  }
  p1Right(){

    if (countp1right == 0) {

      p1left = p1left + 63
      p1top = p1top + 63
      countp1right++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p1top, SPRING_CONFIG),
      left: spring(p1left, SPRING_CONFIG),
      
      
    };



  }



    p1Left(){

    if (countp1left == 0) {

      p1left = p1left - 63
      p1top = p1top + 63
      countp1left++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p1top, SPRING_CONFIG),
      left: spring(p1left, SPRING_CONFIG),
      
      
    };



  }

















  initialP2(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-860, SPRING_CONFIG),
      left: spring(70, SPRING_CONFIG),
      
      
    };
  }


  p2Up(d){

    if (countp2up == 0) {

      p2top = p2top + (63 * d)
     countp2up++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p2top, SPRING_CONFIG),
      left: spring(p2left, SPRING_CONFIG),
      
      
    };
  
  }
  p2Right(){

    if (countp2right == 0) {

      p2left = p2left + 63
      p2top = p2top + 63
      countp2right++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p2top, SPRING_CONFIG),
      left: spring(p2left, SPRING_CONFIG),
      
      
    };



  }



    p2Left(){

    if (countp2left == 0) {

      p2left = p2left - 63
      p2top = p2top + 63
      countp2left++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p2top, SPRING_CONFIG),
      left: spring(p2left, SPRING_CONFIG),
      
      
    };



  }





























initialP3(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-910, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  }


  p3Up(d){

    if (countp3up == 0) {

      p3top = p3top + (63 * d)
     countp3up++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p3top, SPRING_CONFIG),
      left: spring(p3left, SPRING_CONFIG),
      
      
    };
  
  }
  p3Right(){

    if (countp3right == 0) {

      p3left = p3left + 63
      p3top = p3top + 63
      countp3right++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p3top, SPRING_CONFIG),
      left: spring(p3left, SPRING_CONFIG),
      
      
    };



  }



    p3Left(){

    if (countp3left == 0) {

      p3left = p3left - 63
      p3top = p3top + 63
      countp3left++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p3top, SPRING_CONFIG),
      left: spring(p3left, SPRING_CONFIG),
      
      
    };



  }



























initialP4(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-960, SPRING_CONFIG),
      left: spring(200, SPRING_CONFIG),
      
      
    };
  }
    


  p4Up(d){

    if (countp4up == 0) {

      p4top = p4top + (63 * d)
     countp4up++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p4top, SPRING_CONFIG),
      left: spring(p4left, SPRING_CONFIG),
      
      
    };
  
  }
  p4Right(){

    if (countp4right == 0) {

      p4left = p4left + 63
      p4top = p4top + 63
      countp4right++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p4top, SPRING_CONFIG),
      left: spring(p4left, SPRING_CONFIG),
      
      
    };



  }



    p4Left(){

    if (countp4left == 0) {

      p4left = p4left - 63
      p4top = p4top + 63
      countp4left++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p4top, SPRING_CONFIG),
      left: spring(p4left, SPRING_CONFIG),
      
      
    };



  }




























initialP5(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-1010, SPRING_CONFIG),
      left: spring(260, SPRING_CONFIG),
      
      
    };
  }



  p5Up(d){

    if (countp5up == 0) {

      p5top = p5top + (63 * d)
     countp5up++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p5top, SPRING_CONFIG),
      left: spring(p5left, SPRING_CONFIG),
      
      
    };
  
  }
  p5Right(){

    if (countp5right == 0) {

      p5left = p5left + 63
      p5top = p5top + 63
      countp5right++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p5top, SPRING_CONFIG),
      left: spring(p5left, SPRING_CONFIG),
      
      
    };



  }



    p5Left(){

    if (countp5left == 0) {

      p5left = p5left - 63
      p5top = p5top + 63
      countp5left++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p5top, SPRING_CONFIG),
      left: spring(p5left, SPRING_CONFIG),
      
      
    };



  }




























initialP6(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-1055, SPRING_CONFIG),
      left: spring(320, SPRING_CONFIG),
      
      
    };
  }



    p6Up(d){

    if (countp6up == 0) {

      p6top = p6top + (63 * d)
     countp6up++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p6top, SPRING_CONFIG),
      left: spring(p6left, SPRING_CONFIG),
      
      
    };
  
  }
  p6Right(){

    if (countp6right == 0) {

      p6left = p6left + 63
      p6top = p6top + 63
      countp6right++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p6top, SPRING_CONFIG),
      left: spring(p6left, SPRING_CONFIG),
      
      
    };



  }



    p6Left(){

    if (countp6left == 0) {

      p6left = p6left - 63
      p6top = p6top + 63
      countp6left++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p6top, SPRING_CONFIG),
      left: spring(p6left, SPRING_CONFIG),
      
      
    };



  }






























   initialP7(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-1100, SPRING_CONFIG),
      left: spring(380, SPRING_CONFIG),
      
      
    };
  } 




  p7Up(d){

    if (countp7up == 0) {

      p7top = p7top + (63 * d)
     countp7up++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p7top, SPRING_CONFIG),
      left: spring(p7left, SPRING_CONFIG),
      
      
    };
  
  }
  p7Right(){

    if (countp7right == 0) {

      p7left = p7left + 63
      p7top = p7top + 63
      countp7right++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p7top, SPRING_CONFIG),
      left: spring(p7left, SPRING_CONFIG),
      
      
    };



  }



    p7Left(){

    if (countp7left == 0) {

      p7left = p7left - 63
      p7top = p7top + 63
      countp7left++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p7top, SPRING_CONFIG),
      left: spring(p7left, SPRING_CONFIG),
      
      
    };



  }





























initialP8(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-1150, SPRING_CONFIG),
      left: spring(440, SPRING_CONFIG),
      
      
    };
  }


  p8Up(d){

    if (countp8up == 0) {

      p8top = p8top + (63 * d)
     countp8up++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p8top, SPRING_CONFIG),
      left: spring(p8left, SPRING_CONFIG),
      
      
    };
  
  }
  p8Right(){

    if (countp8right == 0) {

      p8left = p8left + 63
      p8top = p8top + 63
      countp8right++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p8top, SPRING_CONFIG),
      left: spring(p8left, SPRING_CONFIG),
      
      
    };



  }



    p8Left(){

    if (countp8left == 0) {

      p8left = p8left - 63
      p8top = p8top + 63
      countp8left++;
    }

    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p8top, SPRING_CONFIG),
      left: spring(p8left, SPRING_CONFIG),
      
      
    };



  }



    









    initialKnight2(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-730, SPRING_CONFIG),
      left: spring(320, SPRING_CONFIG),
      
      
    };
  }

 Knight2LeftUpTwo(){
 if (countk2leftup2 == 0) {

  k2left = k2left - 63
  k2top = k2top - 126
 }
  countk2leftup2++;

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
    };
  


  }

Knight2LeftUpOne(){

  if (countk2leftup1 == 0) {

  k2left = k2left - 126
  k2top = k2top - 63
 }
  countk2leftup1++;




  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
    };
  


  }


Knight2LeftDownTwo(){

  if (countk2leftdown2 == 0) {

  k2left = k2left - 63
  k2top = k2top + 126
 }
  countk2leftdown2++;



  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
    };
  


  }
  
Knight2LeftDownOne(){

  if (countk2leftdown1 == 0) {

  k2left = k2left - 126
  k2top = k2top + 63
 }
  countk2leftdown1++;






  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
    };
  


  }

  
Knight2RightUpTwo(){

 
 if (countk2rightup2 == 0) {

  k2left = k2left + 63
  k2top = k2top - 126
 }
  countk2rightup2++;




  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
    };
  


  }


Knight2RightUpOne(){

  
   if (countk2rightup1 == 0) {

  k2left = k2left + 126
  k2top = k2top - 63
 }
  countk2rightup1++;



  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
    };
  


  }
  
Knight2RightDownTwo(){

  
   if (countk2rightdown2 == 0) {

  k2left = k2left + 63
  k2top = k2top + 126
 }
  countk2rightdown2++;





  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
    };
  


  }

Knight2RightDownOne(){

   if (countk2rightdown1 == 0) {

  k2left = k2left + 126
  k2top = k2top + 63
 }

countk2rightdown1++;

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
    };
  


  }
  





































 initialBishop2(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-780, SPRING_CONFIG),
      left: spring(385, SPRING_CONFIG),
      
      
    };
  

}


  Bishop2DownRight(d,l) {

  if(countb2dr == 0){
  b2left = b2left + (63 * l)
  b2top = b2top + (63 * d)
  }
  countb2dr++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(b2top, SPRING_CONFIG),
      left: spring(b2left, SPRING_CONFIG),
      
      
    };


  }

  Bishop2DownLeft(d,l) {

  if(countb2dl == 0){
  b2left = b2left - (63 * l)
  b2top = b2top + (63 * d)
  }
  countb2dl++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(b2top, SPRING_CONFIG),
      left: spring(b2left, SPRING_CONFIG),
      
      
    };


  }

  Bishop2UpRight(d,l) {

  if(countb2ur == 0){
  b2left = b2left + (63 * l)
  b2top = b2top - (63 * d)
  }
  countb2ur++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(b2top, SPRING_CONFIG),
      left: spring(b2left, SPRING_CONFIG),
      
      
    };


  }
  
  Bishop2UpLeft(d,l) {

  if(countb2ul == 0){
  b2left = b2left - (63 * l)
  b2top = b2top - (63 * d)
  }
  countb2ul++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(b2top, SPRING_CONFIG),
      left: spring(b2left, SPRING_CONFIG),
      
      
    };


  }

































 initialCastle2(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-830, SPRING_CONFIG),
      left: spring(445, SPRING_CONFIG),
      
      
    };
  

   }

 DownOneCastle2(d) {
    
    console.log("thetop is" + " " + thetop)
    if(countme2 == 0) {
    c2top = c2top + (63 * d)
    }
    countme2++;
   
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(c2top  , SPRING_CONFIG),
      left: spring(c2left , SPRING_CONFIG),
      
      
    };
  }

  RightOneCastle2(d) {
    if(countmeup2 == 0) {
    c2left = c2left + (63 * d)
    }
    countmeup2++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(c2top , SPRING_CONFIG),
      left: spring(c2left , SPRING_CONFIG),
      
      
    };


  }
    UpOneCastle2(d) {
       if(countup2 == 0) {
    c2top = c2top - (63 * d)
    }
    countup2++;
       
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(c2top , SPRING_CONFIG),
      left: spring(c2left , SPRING_CONFIG),
      
      
    };


  }
  
   LeftOneCastle2(d) {
    if(countleft2 == 0) {
    c2left = c2left - (63 * d)
    }
    countleft2++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(c2top , SPRING_CONFIG),
      left: spring( c2left , SPRING_CONFIG),
      
      
    };
}



   










































   initialQueen(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-640, SPRING_CONFIG),
      left: spring(200, SPRING_CONFIG),
      
      
    };
  


  }

QueenDown(d) {
    
    if(countqd == 0) {
    qtop = qtop + (63 * d)
    }
    countqd++;
   
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(qtop  , SPRING_CONFIG),
      left: spring(qleft , SPRING_CONFIG),
      
      
    };
  }

  QueenRight(d) {
    if(countqr == 0) {
    qleft = qleft + (63 * d)
    }
    countqr++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(qtop , SPRING_CONFIG),
      left: spring( qleft , SPRING_CONFIG),
      
      
    };


  }
    QueenUp(d) {
       if(countqu == 0) {
    qtop = qtop - (63 * d)
    }
    countqu++;
       
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(qtop , SPRING_CONFIG),
      left: spring(qleft , SPRING_CONFIG),
      
      
    };


  }
  
   QueenLeft(d) {
    if(countql == 0) {
    qleft = qleft - (63 * d)
    }
    countql++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(qtop , SPRING_CONFIG),
      left: spring( qleft , SPRING_CONFIG),
      
      
    };
}
     

QueenDownRight(d,l) {

  if(countqdr == 0){
  qleft = qleft + (63 * l)
  qtop = qtop + (63 * d)
  }
  countqdr++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(qtop, SPRING_CONFIG),
      left: spring(qleft, SPRING_CONFIG),
      
      
    };


  }

  QueenDownLeft(d,l) {

  if(countqdl == 0){
  qleft = qleft - (63 * l)
  qtop = qtop + (63 * d)
  }
  countqdl++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(qtop, SPRING_CONFIG),
      left: spring(qleft, SPRING_CONFIG),
      
      
    };


  }

  QueenUpRight(d,l) {

  if(countqur == 0){
  qleft = qleft + (63 * l)
  qtop = qtop - (63 * d)
  }
  countqur++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(qtop, SPRING_CONFIG),
      left: spring(qleft, SPRING_CONFIG),
      
      
    };


  }
  
  QueenUpLeft(d,l) {

  if(countqul == 0){
  qleft = qleft - (63 * l)
  qtop = qtop - (63 * d)
  }
  countqul++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(qtop, SPRING_CONFIG),
      left: spring(qleft, SPRING_CONFIG),
      
      
    };


  }


























































     initialKing(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-685, SPRING_CONFIG),
      left: spring(260, SPRING_CONFIG),
      
      
    };
  


  }

KingDown() {
    
    if(countkd == 0) {
    kingtop = kingtop + 63 
    }
    countkd++;
   
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(kingtop  , SPRING_CONFIG),
      left: spring(kingleft , SPRING_CONFIG),
      
      
    };
  }

  KingRight() {
    if(countkr == 0) {
    kingleft = kingleft + 63 
    }
    countkr++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(kingtop , SPRING_CONFIG),
      left: spring( kingleft , SPRING_CONFIG),
      
      
    };


  }
    KingUp(d) {
       if(countku == 0) {
    kingtop = kingtop - 63 
    }
    countku++;
       
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(kingtop , SPRING_CONFIG),
      left: spring(kingleft , SPRING_CONFIG),
      
      
    };


  }
  
   KingLeft(d) {
    if(countkl == 0) {
    kingleft = kingleft - 63 
    }
    countkl++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(kingtop , SPRING_CONFIG),
      left: spring( kingleft , SPRING_CONFIG),
      
      
    };
}
     

KingDownRight() {

  if(countkdr == 0){
  kingleft = kingleft + 63 
  kingtop = kingtop + 63 
  }
  countkdr++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(kingtop, SPRING_CONFIG),
      left: spring(kingleft, SPRING_CONFIG),
      
      
    };


  }

  KingDownLeft() {

  if(countkdl == 0){
  kingleft = kingleft - 63 
  kingtop = kingtop + 63 
  }
  countkdl++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(kingtop, SPRING_CONFIG),
      left: spring(kingleft, SPRING_CONFIG),
      
      
    };


  }

  KingUpRight() {

  if(countkur == 0){
  kingleft = kingleft + 63 
  kingtop = kingtop - 63 
  }
  countkur++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(kingtop, SPRING_CONFIG),
      left: spring(kingleft, SPRING_CONFIG),
      
      
    };


  }
  
  KingUpLeft() {

  if(countkul == 0){
  kingleft = kingleft - 63 
  kingtop = kingtop - 63 
  }
  countkul++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(kingtop, SPRING_CONFIG),
      left: spring(kingleft, SPRING_CONFIG),
      
      
    };


  }











  initialKnightOne(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }

KnightOneLeftUpTwo(){
 if (countk1leftup2 == 0) {

  k1left = k1left - 63
  k1top = k1top - 126
 }
  countk1leftup2++;

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
    };
  


  }

KnightOneLeftUpOne(){

  if (countk1leftup1 == 0) {

  k1left = k1left - 126
  k1top = k1top - 63
 }
  countk1leftup1++;




  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
    };
  


  }


KnightOneLeftDownTwo(){

  if (countk1leftdown2 == 0) {

  k1left = k1left - 63
  k1top = k1top + 126
 }
  countk1leftdown2++;



  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
    };
  


  }
  
KnightOneLeftDownOne(){

  if (countk1leftdown1 == 0) {

  k1left = k1left - 126
  k1top = k1top + 63
 }
  countk1leftdown1++;






  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
    };
  


  }

  
KnightOneRightUpTwo(){

 
 if (countk1rightup2 == 0) {

  k1left = k1left + 63
  k1top = k1top - 126
 }
  countk1rightup2++;




  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
    };
  


  }


KnightOneRightUpOne(){

  
   if (countk1rightup1 == 0) {

  k1left = k1left + 126
  k1top = k1top - 63
 }
  countk1rightup1++;



  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
    };
  


  }
  
KnightOneRightDownTwo(){

  
   if (countk1rightdown2 == 0) {

  k1left = k1left + 63
  k1top = k1top + 126
 }
  countk1rightdown2++;





  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
    };
  


  }

KnightOneRightDownOne(){

   if (countk1rightdown1 == 0) {

  k1left = k1left + 126
  k1top = k1top + 63
 }

countk1rightdown1++;

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
    };
  


  }
  





  




  initialBishopOne() {

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-540, SPRING_CONFIG),
      left: spring(70, SPRING_CONFIG),
      
      
    };


  }
  BishopDownRight(d,l) {

  if(countbdr == 0){
  bleft = bleft + (63 * l)
  btop = btop + (63 * d)
  }
  countbdr++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(btop, SPRING_CONFIG),
      left: spring(bleft, SPRING_CONFIG),
      
      
    };


  }

  BishopDownLeft(d,l) {

  if(countbdl == 0){
  bleft = bleft - (63 * l)
  btop = btop + (63 * d)
  }
  countbdl++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(btop, SPRING_CONFIG),
      left: spring(bleft, SPRING_CONFIG),
      
      
    };


  }

  BishopUpRight(d,l) {

  if(countbur == 0){
  bleft = bleft + (63 * l)
  btop = btop - (63 * d)
  }
  countbur++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(btop, SPRING_CONFIG),
      left: spring(bleft, SPRING_CONFIG),
      
      
    };


  }
  
  BishopUpLeft(d,l) {

  if(countbul == 0){
  bleft = bleft - (63 * l)
  btop = btop - (63 * d)
  }
  countbul++;

  return {
      
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(btop, SPRING_CONFIG),
      left: spring(bleft, SPRING_CONFIG),
      
      
    };


  }










  DownOneCastle(d) {
    
    console.log("thetop is" + " " + thetop)
    if(countme == 0) {
    thetop1 = thetop + (63 * d)
    thetop = thetop1}
    countme++;
   
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(thetop  , SPRING_CONFIG),
      left: spring(theleft , SPRING_CONFIG),
      
      
    };
  }

  RightOneCastle(d) {
    if(countmeup == 0) {
    theleft1 = theleft + (63 * d)
    theleft = theleft1}
    countmeup++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(thetop , SPRING_CONFIG),
      left: spring( theleft , SPRING_CONFIG),
      
      
    };


  }
    UpOneCastle(d) {
       if(countup == 0) {
    thetop1 = thetop - (63 * d)
    thetop = thetop1}
    countup++;
       
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(thetop , SPRING_CONFIG),
      left: spring(theleft , SPRING_CONFIG),
      
      
    };


  }
  
   LeftOneCastle(d) {
    if(countleft == 0) {
    theleft1 = theleft - (63 * d)
    theleft = theleft1}
    countleft++;
       return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(thetop , SPRING_CONFIG),
      left: spring( theleft , SPRING_CONFIG),
      
      
    };
}



  toggleMenu() {
    // e.stopPropagation();
    if (count > 200){
    let{isOpen} = this.state;
    this.setState({
      isOpen: !isOpen
    });

     this.animateChildButtonsWithDelay();
     console.log("animating")
   }
  }

  closeMenu() {
    this.setState({ isOpen: false});
    this.animateChildButtonsWithDelay();
  }

  animateChildButtonsWithDelay() {
    range(NUM_CHILDREN).forEach((index) => {
      let {childButtons} = this.state;
      setTimeout(() => {
        console.log("the index is " + index)
        childButtons[index]  = this.renderChildButton(index);
        this.setState({childButtons: childButtons.slice(0)});
      }, index * 50);
    });
  }

  renderChildButton(index) {
    let {isOpen} = this.state;
    // let style = isOpen ? this.finalChildButtonStyles(index) : this.initialChildButtonStyles() ;
    
   


    console.log("the index is" + index)
    
    if(index == 0){
    
      var c  = 9820}
      else if(index == 1) {

        var c = 9821}
      
    else if(index == 2) {

      var c = 9822
    }
   else if(index == 3){

    var c = 9819
   }
else if(index == 4) {

 var c = 9818
}

else if(index == 5) {
 var c = 9822

}

else if(index == 6){
 var c = 9821

}

else if(index == 7){
 var c = 9820

} 

else {

  var c = 9823
}



  var es =  decodeURIComponent(escape(c));
 console.log(es);

    
    
      console.log("animation")
    if(index == 0){

    if (count <= 128) {
      style1 = this.initialBishopOne();
      style = this.initialChildButtonStyles()
      stylek1 = this.initialKnightOne()
      styleq = this.initialQueen()
      styleking = this.initialKing()
      stylek2 = this.initialKnight2()
      styleb2 = this.initialBishop2()
      stylec2 = this.initialCastle2()
      stylep1 = this.initialP1()
      stylep2 = this.initialP2()
      stylep3 = this.initialP3()
      stylep4 = this.initialP4()
      stylep5 = this.initialP5()
      stylep6 = this.initialP6()
      stylep7 = this.initialP7()
      stylep8 = this.initialP8()
    }

    else if (count < 300 && count > 127) {
      style1 = this.BishopDownRight(4,4);
      style = this.DownOneCastle(7)
      stylek1 = this.KnightOneLeftDownTwo()
      styleq = this.QueenDown(7)
      styleking = this.KingDown()
      stylek2 = this.Knight2LeftDownTwo()
      styleb2 = this.Bishop2DownLeft(4,4)
      stylec2 = this.DownOneCastle2(7)
      stylep1 = this.p1Up(1)
      stylep2 = this.p2Up(2)
      stylep3 = this.p3Up(2)
      stylep4 = this.p4Up(1)
      stylep5 = this.p5Up(1)
      stylep6 = this.p6Up(1)
      stylep7 = this.p7Up(2)
      stylep8 = this.p8Up(2)




    }

    else if (count > 300 && count < 400)

    {
    move = 6;
    style = this.RightOneCastle(move)
    style1 = this.BishopDownLeft(3,3)
    stylek1 = this.KnightOneRightDownOne()
    styleq = this.QueenUp(6)
    styleking = this.KingRight();
    stylek2 = this.Knight2RightDownOne()
    styleb2 = this.Bishop2DownRight(3,3)
    stylec2 = this.LeftOneCastle2(6)
    stylep1 = this.p1Right()
    stylep2 = this.p2Right()
    stylep3 = this.p3Right()
    stylep4 = this.p4Right()
    stylep5 = this.p5Left()
    stylep6 = this.p6Left()
    stylep7 = this.p7Left()
    stylep8 = this.p8Left()

    }

    else if (count > 400 && count < 600) {
  move = 3
  style = this.UpOneCastle(move)
  style1 = this.BishopUpRight(3,3)
  stylek1 = this.KnightOneLeftUpOne()
  styleq = this.QueenRight(4)
  styleking = this.KingUp() 
  stylek2 = this.Knight2LeftUpOne()  
  styleb2 = this.Bishop2UpLeft(3,3) 
  stylec2 = this.UpOneCastle2(6)
    }
else if (count > 650 && count < 800) {
    move = 4
   style = this.LeftOneCastle(move)
 style1 = this.BishopUpLeft(2,2)
stylek1 = this.KnightOneRightDownTwo()
styleq = this.QueenLeft(4)
styleking = this.KingLeft();
stylek2 = this.Knight2RightDownTwo()
styleb2 = this.Bishop2UpRight(2,2)
stylec2 = this.RightOneCastle2(5)
}


else if(count > 800 && count < 950){

stylek1 = this.KnightOneRightUpTwo()
styleq = this.QueenDownRight(4,4)
styleking = this.KingDownLeft();
stylek2 = this.Knight2RightUpTwo()
}
    
else if(count > 950 && count < 1100){
stylek1 = this.KnightOneLeftDownOne()
styleq = this.QueenUpLeft(4,4)
styleking = this.KingDownRight()  
stylek2 = this.Knight2LeftDownOne() 
  } 


else if(count > 1100 && count < 1250){

stylek1 = this.KnightOneLeftUpTwo()
styleq = this.QueenDownLeft(3,3)
styleking =this.KingUpLeft();
stylek2 = this.Knight2LeftUpTwo()
}

 else if(count > 1250) {


stylek1 = this.KnightOneRightUpOne()
styleq = this.QueenUpRight(4,4)
styleking = this.KingUpRight();
stylek2 = this.Knight2RightUpOne()
 }  

}



    if(index == 0) {

    return (
      <Motion style={style} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>

{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
 } 

else if(index == 1) {

    return (
      <Motion style={style1} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );

}

else if(index == 2) {

    return (
      <Motion style={stylek1} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );

}

 else if(index == 3) {


 return (
      <Motion style={styleq} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}

else if(index == 4){

return (
      <Motion style={styleking} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}
else if(index == 5){

return (
      <Motion style={stylek2} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}

else if(index == 6){

return (
      <Motion style={styleb2} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}

else if(index == 7){

return (
      <Motion style={stylec2} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}
else if(index == 8){

return (
      <Motion style={stylep1} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}

else if(index == 9){

return (
      <Motion style={stylep2} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}
else if(index == 10){

return (
      <Motion style={stylep3} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}
else if(index == 11){

return (
      <Motion style={stylep4} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}

else if(index == 12){

return (
      <Motion style={stylep5} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}

else if(index == 13){

return (
      <Motion style={stylep6} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}
else if(index == 14){

return (
      <Motion style={stylep7} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}

else if(index == 15){

return (
      <Motion style={stylep8} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(c) }</span>
      </div>

    }
      </Motion>
    );
}





}
  

  












  renderBishopButton(index) {

   return (
      <Motion style={style} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♜</span>
      </div>

    }
      </Motion>
    );
  }

















  render() {
    let {isOpen, childButtons} = this.state;
    let mainButtonRotation = isOpen ? {rotate: spring(0, [500, 30])} : {rotate: spring(-135, [500, 30])};
    console.log("rendering");
    
    return (
      
      <div className="t">
        


        {childButtons.map( (button, index) => {
          return childButtons[index];
        })}
        
     
      </div>
    );
  } 
};
 























 var ECastle = React.createClass({
  render: function () {

    
  
return <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♜</span>

  }
 });    

 var EKnight = React.createClass({
  















  render: function () {

    
  


return (
      <Motion style={mstyle} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        zIndex: 3,
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
{ String.fromCharCode(9820) }</span>
      </div>

    }
      </Motion>
    );
 }});


var EBishop = React.createClass({
  render: function () {

    
  
return <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♝</span>

  }
 });


var EQueen = React.createClass({
  render: function () {

    
  
return <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♛</span>

  }
 });

var EKing = React.createClass({
  render: function () {

    
  
return <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♚</span>

  }
 });



var EPawn = React.createClass({
  render: function () {

    
  
return <span style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♟</span>

  }
 });
















var knightPosition = [2, 7];
var knightPosition2 = [5,7]
var observer = null;

function emitChange() {
  observer(knightPosition);

}

var observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

var moveKnight = function (toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

var canMoveKnight = function (toX, toY) {
  const x = knightPosition[0];
  const y = knightPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

var moveKnight2 = function (toX, toY) {
  knightPosition2 = [toX, toY];
  emitChange();
}

var canMoveKnight2 = function (toX, toY) {
  const x = knightPosition2[0];
  const y = knightPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}












var ItemTypes = {
  KNIGHT: 'knight',
  KNIGHT2: 'knight'

};

var knightSource = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var knight2Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


var Knight = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;
    if(isDragging){
      dragstate = "k"
    }
    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        ♘
      </span>
    );
  }
});


var k = "knight"
var K = DragSource(k, knightSource, collect)(Knight);




var Knight2 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    if(isDragging){

      dragstate = "k2";
    }

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        ♘
      </span>
    );
  }
});

var k2 = "knight2"

var K2 = DragSource(k2, knight2Source, collect)(Knight2);

















var Square = React.createClass({
  propTypes: {
    black: PropTypes.bool
  },

  render: function () {
    var black = this.props.black;
    var fill = black ? 'grey' : 'green';
    var stroke = black ? 'green' : 'grey';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
      }}>
        {this.props.children}
      </div>
    );
  }
});


var squareTargetK = {
  canDrop: function (props) {
    return canMoveKnight(props.x, props.y);
  },

  drop: function (props) {
    moveKnight(props.x, props.y);
  }


};

var squareTargetK2 = {
  canDrop: function (props) {
    return canMoveKnight2(props.x, props.y);
  },

  drop: function (props) {
    moveKnight2(props.x, props.y);
  }


};





function collectme(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    


  };
}
 function collectme2(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    


  };
}






var BoardSquare = React.createClass({
  propTypes: {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  },

  renderOverlay: function (color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 0, 
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  },

  render: function () {
    var x = this.props.x;
    var y = this.props.y;
    var connectDropTarget = this.props.connectDropTarget;
    var isOver = this.props.isOver;
    var black = (x + y) % 2 === 1;
    var canDrop = this.props.canDrop
    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('blue')}
      </div>
    );
  }
})

 

var BoardSquare2 = React.createClass({
  propTypes: {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  },

  renderOverlay: function (color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 0, 
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  },

  render: function () {
    var x = this.props.x;
    var y = this.props.y;
    var connectDropTarget = this.props.connectDropTarget;
    var isOver = this.props.isOver;
    var black = (x + y) % 2 === 1;
    var canDrop = this.props.canDrop
    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('blue')}
      </div>
    );
  }
})


















 var flowme = "what"
 function bf() {

  return (flow(
   DropTarget(ItemTypes.KNIGHT, squareTargetK, collectme),
   DropTarget(yes, squareTargetK2, collectme),
   DropTarget(ItemTypes.KNIGHT, squareTargetK, collectme)
   


)(BoardSquare));


 }

 var BS1 = DropTarget(ItemTypes.KNIGHT, squareTargetK, collectme)(BoardSquare)
 
 var BS2 = DropTarget(k2, squareTargetK2, collectme)(BoardSquare2)
// function checkTarget(){

//   if(dragstate == 'k'){

//     BS1 = DropTarget(k, squareTargetK, collectme)(BoardSquare)

//   }
// else if(dragstate == 'k2'){

//   BS1 = DropTarget(k2, squareTargetK2, collectme)(BoardSquare)
// }

// else {

//   BS1 = DropTarget(k, squareTargetK, collectme)(BoardSquare)

// }


// }


//   setInterval(checkTarget, 100); 
    


var Board = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  },

  

renderSquare: function (i,BS) {
  var x = i % 8;
  var y = Math.floor(i / 8);
  var kn = this.renderPiece(x,y)
 console.log(kn)
  
 




     

      
  return (
    <div key={i}
         style={{ width: '12.5%', height: '12.5%' }}>
      <span>

      <BS x={x}
                   y={y}>
        {this.renderPiece(x, y)}
        
      </BS>
      
    </span>
    </div>
  );
},

renderPiece: function (x, y) {
  var knightX = this.props.knightPosition[0]
  var knightY = this.props.knightPosition[1];
  var knight2X = this.props.knightPosition2[0]
  var knight2Y = this.props.knightPosition2[1]
  console.log(knightPosition[0])
  console.log(count);
  count++;
  if (x === knightX && y === knightY) {
  
    return <K/>
  }
else if(x == knight2X && y == knight2Y) {

return <K2/>
  
}

else if(x == 7 && y == 0){
  
  
}

else if(x == 1 && y == 0){

  
}

else if(x == 2 && y == 0){

  
    
          
      
}


else if(x == 3 && y == 0){

  
}

else if(x == 4 && y == 0){

  
}
else if(x == 5 && y == 0 && count < 127){

  
}

else if(x == 6 && y == 2 && count > 127){


}


else if(x == 6 && y == 0){

  
}

else if(y == 1 ){

 
}



},




render: function () {
var squares = [];
    console.log("rerendering")
    console.log(BS1)
    for (let i = 0; i < 64; i++) {
      

      if(count < 128) {
        squares.push(this.renderSquare(i,BS1));}

        else {
          squares.push(this.renderSquare(i,BS2));

        }
    }
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>

      {squares}
      </div>
    );
  }
});

 var B = DragDropContext(HTML5Backend)(Board);



function dragState(){

   B = DragDropContext(HTML5Backend)(Board);
}

setInterval(dragState, 100);


var knightPosition = [2, 7];

var observer = null;

function emitChange() {
  observer(knightPosition);

}

var observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}



observe(function (knightPosition) {
  ReactDOM.render(
    <span>
    
    <B knightPosition={knightPosition} knightPosition2={knightPosition2} />
   <APP/>
    </span>,
   
    document.getElementById('container')
  );
});




$(".t").animate({
      left: 100,
      top: 100

    }, 'slow');
