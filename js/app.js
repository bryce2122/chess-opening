



import {Motion, spring} from 'react-motion';
import range from 'lodash.range';
var React = require('react');
var ReactDOM = require('react-dom');
var DragDropContext = require('react-dnd').DragDropContext
var square;
var i;
var checkmecount = 0
var HTML5Backend = require('react-dnd-html5-backend');
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var flow = require('lodash/flow');
var count = 0;
var BS1;
var dragstate;
var kkillcount = 0;
var arr = []
var prevept;
var prevepl;
var kntop = 0
var knleft = 0
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
var PropTypes = React.PropTypes;
var eptop = 265
var epleft = 133
var epkillcount = 0;
var style;
var style1;
var stylek1;
var stylec;
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
var thetop = 15
var thetop1;
var countme = 0;
var move;
var theleft = -245
var countmeup = 0
var theleft1;
var countup = 0;
var countleft = 0;
var bleft = 70;
var btop = 15;
var countbdr = 0;
var countbdl = 0;
var countbur = 0;
var countbul = 0;
var k1left = 133;
var k1top = 15;
var qleft = 196;
var qtop = 15;
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
var kingtop = 15;
var kingleft = 259;
var countkd = 0;
var countku = 0;
var countkr = 0;
var countkl = 0;
var countkdr = 0;
var countkdl = 0;
var countkur = 0;
var countkul = 0;
var k2top = 15;
var k2left = 322;
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
var b2top = 15
var countme2 = 0;
var countmeup2 = 0
var countup2 = 0;
var countleft2 = 0;
var c2left = 448;
var c2top =  15;
var p1left = 7;
var p1top = 81;
var p2left = 70;
var p2top = 81;
var p3left = 133;
var p3top = 81;
var p4left = 196;
var p4top = 81;
var p5left = 259;
var p5top = 81;
var p6left = 322;
var p6top = 81;
var p7left = 385;
var p7top = 81;
var p8left = 448;
var p8top = 81;
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
var check = []
var a;
var grid = []
var killsquare = [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15]
var prevkillsquare = [0,1,2,3,4,5,6,7,8,9,10,12,13,14,15]
var prevc = []
var pcheck = [2,7,5,7]
 
var whosemove;


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
  
   
// setInterval(this.animateChildButtonsWithDelay, 5000);
 


  


// setInterval(this.cPosition, 200) 
//   }

  


//   cPosition(){
//     check = []
//     grid = []
//     var top = 18
//     var left = 15
//    prevkillsquare = killsquare.slice();
    
//     for(i = 0; i < 64; i++) {
//     square = {[i]: {top: top, left: left, empty: true}}
//      grid.push(square)
//      left = left + 63
//      if((i + 1) % 8 == 0) {
//      left = 15
//      top = top + 63
//          }
//  }






//     // console.log("The position of castle one is" + " " + JSON.stringify($("#C1").offset(),null,4))
//     check.push([$("#C1").offset().top,$("#C1").offset().left])
//     // console.log("The position of knight one is" + " " + JSON.stringify($("#k1").offset(),null,4))
//     check.push([$("#k1").offset().top,$("#k1").offset().left])
//     // console.log("The position of bishop one is" + " " + JSON.stringify($("#b1").offset(),null,4))
//     check.push([$("#b1").offset().top,$("#b1").offset().left])
//     // console.log("The position of the queen one is" + " " + JSON.stringify($("#q").offset(),null,4))
//     check.push([$("#q").offset().top,$("#q").offset().left])
//     // console.log("The position of the king one is" + " " + JSON.stringify($("#k").offset(),null,4))
//     check.push([$("#k").offset().top,$("#k").offset().left])
//     // console.log("The position of knight two is" + " " + JSON.stringify($("#k2").offset(),null,4))
//     check.push([$("#k2").offset().top,$("#k2").offset().left])
//     // console.log("The position of bishop two is" + " " + JSON.stringify($("#b2").offset(),null,4))
//     check.push([$("#b2").offset().top,$("#b2").offset().left])
//     // console.log("The position of castle two is" + " " + JSON.stringify($("#c2").offset(),null,4))
//     check.push([$("#c2").offset().top,$("#c2").offset().left])
//     // console.log("The position of pawn one is" + " " + JSON.stringify($("#p1").offset(),null,4))
//     check.push([$("#p1").offset().top,$("#p1").offset().left])
//     // console.log("The position of pawn two is" + " " + JSON.stringify($("#p2").offset(),null,4))
//     check.push([$("#p2").offset().top,$("#p2").offset().left])
//     // console.log("The position of pawn three is" + " " + JSON.stringify($("#p3").offset(),null,4))
//     check.push([$("#p3").offset().top,$("#p3").offset().left])
//     // console.log("The position of pawn four is" + " " + JSON.stringify($("#p4").offset(),null,4))
//     check.push([$("#p4").offset().top,$("#C1").offset().left])
//     // console.log("The position of pawn five is" + " " + JSON.stringify($("#p5").offset(),null,4))
//     check.push([$("#p5").offset().top,$("#p5").offset().left])
//     // console.log("The position of pawn six is" + " " + JSON.stringify($("#p6").offset(),null,4))
//     check.push([$("#p6").offset().top,$("#p6").offset().left])
//     // console.log("The position of pawn seven is" + " " + JSON.stringify($("#p7").offset(),null,4))
//     check.push([$("#p7").offset().top,$("#p7").offset().left])
//     // console.log("The position of pawn eight is" + " " + JSON.stringify($("#p8").offset(),null,4))
//     check.push([$("#p8").offset().top,$("#p8").offset().left])
//     // console.log("Getting top pos of cast1 is " + " " + $("#C1").offset().top )
 


//     grid.forEach(c => {
     
//      check.forEach(b => {
//  if(b[0] == c[Object.keys(c)].top && b[1] == c[Object.keys(c)].left){
//      c[Object.keys(c)].empty = false
//      }
   

//     })
//      })

// // console.log(check)

// // console.log(grid)
// killsquare = grid.filter(c => c[Object.keys(c)].empty === false).map(c => Object.keys(c)).reduce(
//     (a,b) => a.concat(b))




// // console.log("the killsquare" + " " + killsquare)









  }


  


  mainButtonStyles() {
    return {
      width: MAIN_BUTTON_DIAM,
      height: MAIN_BUTTON_DIAM,
      top: M_Y - (MAIN_BUTTON_DIAM/2),
      left: M_X - (MAIN_BUTTON_DIAM/2)
    };
  }

  

  

    initialP1(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(p1top, SPRING_CONFIG),
      left: spring(p1left, SPRING_CONFIG),
      
      
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
      top: spring(p2top, SPRING_CONFIG),
      left: spring(p2left, SPRING_CONFIG),
      
      
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
      top: spring(p3top, SPRING_CONFIG),
      left: spring(p3left, SPRING_CONFIG),
      
      
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
      top: spring(p4top, SPRING_CONFIG),
      left: spring(p4left, SPRING_CONFIG),
      
      
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
      top: spring(p5top, SPRING_CONFIG),
      left: spring(p5left, SPRING_CONFIG),
      
      
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
      top: spring(p6top, SPRING_CONFIG),
      left: spring(p6left, SPRING_CONFIG),
      
      
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
      top: spring(p7top, SPRING_CONFIG),
      left: spring(p7left, SPRING_CONFIG),
      
      
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
      top: spring(p8top, SPRING_CONFIG),
      left: spring(p8left, SPRING_CONFIG),
      
      
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
      top: spring(k2top, SPRING_CONFIG),
      left: spring(k2left, SPRING_CONFIG),
      
      
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
      top: spring(b2top, SPRING_CONFIG),
      left: spring(b2left, SPRING_CONFIG),
      
      
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
      top: spring(c2top, SPRING_CONFIG),
      left: spring(c2left, SPRING_CONFIG),
      
      
    };
  

   }

 DownOneCastle2(d) {
    
    // console.log("thetop is" + " " + thetop)
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
      top: spring(qtop, SPRING_CONFIG),
      left: spring(qleft, SPRING_CONFIG),
      
      
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
      top: spring(kingtop, SPRING_CONFIG),
      left: spring(kingleft, SPRING_CONFIG),
      
      
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
      top: spring(k1top, SPRING_CONFIG),
      left: spring(k1left, SPRING_CONFIG),
      
      
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
      top: spring(btop, SPRING_CONFIG),
      left: spring(bleft, SPRING_CONFIG),
      
      
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



initialCastle() {
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(thetop, SPRING_CONFIG),
      left: spring(theleft, SPRING_CONFIG),
      
      
    };
  }






  DownOneCastle(d) {
    
    // console.log("thetop is" + " " + thetop)
    if(countme == 0) {
    thetop = thetop + (63 * d)
    }
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
    thelef1 = theleft + (63 * d)
    }
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
    thetop = thetop - (63 * d)
    }
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
    theleft = theleft - (63 * d)
    }
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
     // console.log("animating")
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
        // console.log("the index is " + index)
        childButtons[index]  = this.renderChildButton(index);
        this.setState({childButtons: childButtons.slice(0)});
      }, index * 50);
    


    });
  

if(count == 1){

$("#p4").hide()

}

  }

  renderChildButton(index) {
    let {isOpen} = this.state;
    // let style = isOpen ? this.finalChildButtonStyles(index) : this.initialChildButtonStyles() ;
    
   


    // console.log("the index is" + index)
    
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
 // console.log(es);

    
    
      // console.log("animation")
    if(index == 0){

    if (count == 0) {
      
      style1 = this.initialBishopOne();
      stylec = this.initialCastle()
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

    else if (count == 1) {
      // style1 = this.BishopDownRight(4,4);
      // move = 6
      // stylec = this.DownOneCastle(2)
      // stylek1 = this.KnightOneLeftDownTwo()
      // styleq = this.QueenDown(7)
      // styleking = this.KingDown()
      // stylek2 = this.Knight2LeftDownTwo()
      // styleb2 = this.Bishop2DownLeft(4,4)
      // stylec2 = this.DownOneCastle2(7)
      // stylep1 = this.p1Up(1)
      // stylep2 = this.p2Up(2)
      // stylep3 = this.p3Up(2)
      stylep4 = this.p4Up(2)
      // stylep5 = this.p5Up(1)
      // stylep6 = this.p6Up(1)
      // stylep7 = this.p7Up(2)
      // stylep8 = this.p8Up(2)




    }

    else if (count == 2)

    {
    // move = 6;
    // stylec = this.RightOneCastle(move)
    // style1 = this.BishopDownLeft(3,3)
    // stylek1 = this.KnightOneRightDownOne()
    // styleq = this.QueenUp(6)
    // styleking = this.KingRight();
    // stylek2 = this.Knight2RightDownOne()
    // styleb2 = this.Bishop2DownRight(3,3)
    // stylec2 = this.LeftOneCastle2(6)
    // stylep1 = this.p1Right()
    // stylep2 = this.p2Right()
    // stylep3 = this.p3Right()
    // stylep4 = this.p4Right()
    // stylep5 = this.p5Left()
    // stylep6 = this.p6Left()
    // stylep7 = this.p7Left()
    // stylep8 = this.p8Left()

    }

    else if (count == 3) {
  // move = 3
  // stylec = this.UpOneCastle(1)
  // style1 = this.BishopUpRight(3,3)
  // stylek1 = this.KnightOneLeftUpOne()
  // styleq = this.QueenRight(4)
  // styleking = this.KingUp() 
  // stylek2 = this.Knight2LeftUpOne()  
  // styleb2 = this.Bishop2UpLeft(3,3) 
  // stylec2 = this.UpOneCastle2(1)
    }
else if (count == 4) {
//     move = 4
//    stylec = this.RightOneCastle(3)
//  style1 = this.BishopUpLeft(2,2)
// stylek1 = this.KnightOneRightDownTwo()
// styleq = this.QueenLeft(4)
// styleking = this.KingLeft();
// stylek2 = this.Knight2RightDownTwo()
// styleb2 = this.Bishop2UpRight(2,2)
// stylec2 = this.RightOneCastle2(5)
}


else if(count == 5){

// stylek1 = this.KnightOneRightUpTwo()
// styleq = this.QueenDownRight(4,4)
// styleking = this.KingDownLeft();
// stylek2 = this.Knight2RightUpTwo()
}
    
else if(count == 6){
// stylek1 = this.KnightOneLeftDownOne()
// styleq = this.QueenUpLeft(4,4)
// styleking = this.KingDownRight()  
// stylek2 = this.Knight2LeftDownOne() 
  } 


else if(count == 7){

// stylek1 = this.KnightOneLeftUpTwo()
// styleq = this.QueenDownLeft(3,3)
// styleking =this.KingUpLeft();
// stylek2 = this.Knight2LeftUpTwo()
}

 else if(count == 8) {


// stylek1 = this.KnightOneRightUpOne()
// styleq = this.QueenUpRight(4,4)
// styleking = this.KingUpRight();
// stylek2 = this.Knight2RightUpOne()
 }  

}



    if(index == 0) {

    return (
      <Motion style={stylec} key={index}>
        {({width, height, top, left,  scale}) => 
          <div  
            className="child-button"
            id = "C1"
            style={{
              width: width,
              height: height,
              top: top,
              left: left
              
            }}>
      
          
          <span style={{
        
        color: "black",
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',

        
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
            id = "b1"
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
            id = "k1"
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
            id = "q"
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
            id = "k"
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
            id = "k2"
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
            id = "b2"
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
            id = "c2"
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
            id = "p1"
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
            id = "p2"
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
            id = "p3"
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
            id = "p4"
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
            id = "p5"
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
            id = "p6"
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
            id = "p7"
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
            id = "p8"
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
    // console.log("rendering");
    
    return (
      
      <div className="t">
        


        {childButtons.map( (button, index) => {
          return childButtons[index];
        })}
        
     
      </div>
    );
  } 
};
 























 var ECastle1 = React.createClass({
  render: function () {

    
  
return <span id="ec1" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♜</span>

  }
 });    

 var ECastle2 = React.createClass({
  render: function () {

    
  
return <span id="ec2" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♜</span>

  }
 });  






var EBishop = React.createClass({
  render: function () {

    
  
return <span id="eb" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♝</span>

  }
 });

var EBishop2 = React.createClass({
  render: function () {

    
  
return <span id="eb2" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♝</span>

  }
 });


var EKnight = React.createClass({
  render: function () {

    
  
return <span id="ek" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♞</span>

  }
 });


var EKnight2 = React.createClass({
  render: function () {

    
  
return <span id="ek2" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
      ♞</span>

  }
 });












var EQueen = React.createClass({
  render: function () {

    
  
return <span id ="eq" style={{
        
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

    
  
return <span id="ek" style={{
        
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

    
  
return <span id="ep" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });




var EPawn2 = React.createClass({
  render: function () {

    
  
return <span id="ep2" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });

 var EPawn3 = React.createClass({
  render: function () {

    
  
return <span id="ep3" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });
 


var EPawn4 = React.createClass({
  render: function () {

    
  
return <span id="ep4" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });


var EPawn5 = React.createClass({
  render: function () {

    
  
return <span id="ep5" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });


var EPawn6 = React.createClass({
  render: function () {

    
  
return <span id="ep6" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });


var EPawn7 = React.createClass({
  render: function () {

    
  
return <span id="ep7" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });


var EPawn8 = React.createClass({
  render: function () {

    
  
return <span id="ep8" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
      }}>
      ♟</span>

  }
 });













var castlePosition1 = [0,7]
var castlePosition2 = [7,7]
var queenPosition = [4,7]
var kingPosition = [3,7]
var knightPosition = [2, 7];
var knightPosition2 = [5,7]
var bishopPosition = [1,7]
var bishopPosition2 = [6,7]
var pawnPosition1 = [0,6]
var pawnPosition2 = [1,6]
var pawnPosition3 = [2,6]
var pawnPosition4 = [3,6]
var pawnPosition5 = [4,6]
var pawnPosition6 = [5,6]
var pawnPosition7 = [6,6]
var pawnPosition8 = [7,6]






var observer = null;

function emitChange() {
  observer(knightPosition2);

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

var moveBishop = function (toX, toY) {
  bishopPosition = [toX, toY];
  emitChange();
}

var canMoveBishop = function (toX, toY) {
  const x = bishopPosition[0];
  const y = bishopPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}







var moveBishop2 = function (toX, toY) {
  bishopPosition2 = [toX, toY];
  emitChange();
}

var canMoveBishop2 = function (toX, toY) {
  const x = bishopPosition2[0];
  const y = bishopPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

var movePawn1 = function (toX, toY) {
  pawnPosition1 = [toX, toY];
  emitChange();
}

var canMovePawn1 = function (toX, toY) {
  const x = pawnPosition1[0];
  const y = pawnPosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn2 = function (toX, toY) {
  pawnPosition2 = [toX, toY];
  emitChange();
}

var canMovePawn2 = function (toX, toY) {
  const x = pawnPosition2[0];
  const y = pawnPosition2[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn3 = function (toX, toY) {
  pawnPosition3 = [toX, toY];
  emitChange();
}

var canMovePawn3 = function (toX, toY) {
  const x = pawnPosition3[0];
  const y = pawnPosition3[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn4 = function (toX, toY) {
  pawnPosition4 = [toX, toY];
  emitChange();
}

var canMovePawn4 = function (toX, toY) {
  const x = pawnPosition4[0];
  const y = pawnPosition4[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn5 = function (toX, toY) {
  pawnPosition5 = [toX, toY];
  emitChange();
}

var canMovePawn5 = function (toX, toY) {
  const x = pawnPosition5[0];
  const y = pawnPosition5[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

var movePawn6 = function (toX, toY) {
  pawnPosition6 = [toX, toY];
  emitChange();
}

var canMovePawn6 = function (toX, toY) {
  const x = pawnPosition6[0];
  const y = pawnPosition6[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}



var movePawn7 = function (toX, toY) {
  pawnPosition7 = [toX, toY];
  emitChange();
}

var canMovePawn1 = function (toX, toY) {
  const x = pawnPosition7[0];
  const y = pawnPosition7[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var movePawn8 = function (toX, toY) {
  pawnPosition8 = [toX, toY];
  emitChange();
}

var canMovePawn1 = function (toX, toY) {
  const x = pawnPosition8[0];
  const y = pawnPosition8[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}




var moveQueen = function (toX, toY) {
  queenPosition = [toX, toY];
  emitChange();
}

var canMoveQueen = function (toX, toY) {
  const x = queenPosition[0];
  const y = queenPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var moveKing = function (toX, toY) {
  kingPosition = [toX, toY];
  emitChange();
}

var canMoveKing = function (toX, toY) {
  const x = kingPosition[0];
  const y = kingPosition[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}


var moveCastle1 = function (toX, toY) {
  castlePosition1 = [toX, toY];
  emitChange();
}

var canMoveCastle1 = function (toX, toY) {
  const x = castlePosition1[0];
  const y = castlePosition1[1];
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

var moveCastle2 = function (toX, toY) {
  castlePosition2 = [toX, toY];
  emitChange();
}

var canMoveCastle2 = function (toX, toY) {
  const x = castlePosition2[0];
  const y = castlePosition2[1];
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


var bishopSource = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var bishop2Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn1Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};
var pawn2Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn3Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn4Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn5Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn6Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn7Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var pawn8Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};


var castle1Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};

var castle2Source = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};


var queenSource = {
  beginDrag: function (props) {
    return {name: props.id};
  }
};


var kingSource = {
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
      <span id="wk" style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
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
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♘
      </span>
    );
  }
});


var k2 = "knight2"

var K2 = DragSource(k2, knight2Source, collect)(Knight2);



var Bishop1 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♗
      </span>
    );
  }
});

var b1 = "bishop"

var B1 = DragSource(b1, bishopSource, collect)(Bishop1);






var Bishop2 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♗
      </span>
    );
  }
});


var b2 = "bishop2"

var B2 = DragSource(b2, bishop2Source, collect)(Bishop2);



var Pawn1 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♙
      </span>
    );
  }
});


var p1 = "pawn1"

var P1 = DragSource(p1, pawn1Source, collect)(Pawn1);

var Pawn2 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♙
      </span>
    );
  }
});


var p2 = "pawn2"

var P2 = DragSource(p2, pawn2Source, collect)(Pawn2);


var Pawn3 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♙
      </span>
    );
  }
});


var p3 = "pawn3"

var P3 = DragSource(p3, pawn3Source, collect)(Pawn3);

var Pawn4 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♙
      </span>
    );
  }
});


var p4 = "pawn4"

var P4 = DragSource(p4, pawn4Source, collect)(Pawn4);



var Pawn5 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♙
      </span>
    );
  }
});


var p5 = "pawn5"

var P5 = DragSource(p5, pawn5Source, collect)(Pawn5);

var Pawn6 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♙
      </span>
    );
  }
});


var p6 = "pawn6"

var P6 = DragSource(p6, pawn6Source, collect)(Pawn6);


var Pawn7 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♙
      </span>
    );
  }
});


var p7 = "pawn7"

var P7 = DragSource(p7, pawn7Source, collect)(Pawn7);


var Pawn8 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♙
      </span>
    );
  }
});


var p8 = "pawn8"

var P8 = DragSource(p8, pawn8Source, collect)(Pawn8);



var Castle1 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♖
      </span>
    );
  }
});


var c1 = "castle1"

var C1 = DragSource(c1, castle1Source, collect)(Castle1);


var Castle2 = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♖
      </span>
    );
  }
});


var c2 = "castle2"

var C2 = DragSource(c2, castle2Source, collect)(Castle2);




var Queen = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♕
      </span>
    );
  }
});


var q = "queen"

var Q = DragSource(q, queenSource, collect)(Queen);

var King = React.createClass({
  propTypes: {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  },

  render: function () {
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    

    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: 3
      }}>
        ♔
      </span>
    );
  }
});


var king = "king"

var KING = DragSource(king, kingSource, collect)(King);

















var Square = React.createClass({
  propTypes: {
    black: PropTypes.bool
  },

  render: function () {
    var black = this.props.black;
    var fill = black ? 'grey' : 'green';
    var stroke = "black"
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

var squareTargetB1 = {
  canDrop: function (props) {
    return canMoveBishop(props.x, props.y);
  },

  drop: function (props) {
   moveBishop(props.x, props.y);
  }


};


var squareTargetB2 = {
  canDrop: function (props) {
    return canMoveBishop2(props.x, props.y);
  },

  drop: function (props) {
    moveBishop2(props.x, props.y);
  }


};


var squareTargetP1 = {
  canDrop: function (props) {
    return canMovePawn1(props.x, props.y);
  },

  drop: function (props) {
    movePawn1(props.x, props.y);
  }


};

var squareTargetP2 = {
  canDrop: function (props) {
    return canMovePawn2(props.x, props.y);
  },

  drop: function (props) {
    movePawn2(props.x, props.y);
  }


};


var squareTargetP3 = {
  canDrop: function (props) {
    return canMovePawn3(props.x, props.y);
  },

  drop: function (props) {
    movePawn3(props.x, props.y);
  }


};


var squareTargetP4 = {
  canDrop: function (props) {
    return canMovePawn4(props.x, props.y);
  },

  drop: function (props) {
    movePawn4(props.x, props.y);
  }


};


var squareTargetP5 = {
  canDrop: function (props) {
    return canMovePawn5(props.x, props.y);
  },

  drop: function (props) {
    movePawn5(props.x, props.y);
  }


};


var squareTargetP6 = {
  canDrop: function (props) {
    return canMovePawn6(props.x, props.y);
  },

  drop: function (props) {
    movePawn6(props.x, props.y);
  }


};


var squareTargetP7 = {
  canDrop: function (props) {
    return canMovePawn7(props.x, props.y);
  },

  drop: function (props) {
    movePawn7(props.x, props.y);
  }


};

var squareTargetP8 = {
  canDrop: function (props) {
    return canMovePawn8(props.x, props.y);
  },

  drop: function (props) {
    movePawn8(props.x, props.y);
  }


};



var squareTargetC1 = {
  canDrop: function (props) {
    return canMoveCastle1(props.x, props.y);
  },

  drop: function (props) {
    moveCastle1(props.x, props.y);
  }


};

var squareTargetC2 = {
  canDrop: function (props) {
    return canMoveCastle2(props.x, props.y);
  },

  drop: function (props) {
    moveCastle2(props.x, props.y);
  }


};


var squareTargetQ = {
  canDrop: function (props) {
    return canMoveQueen(props.x, props.y);
  },

  drop: function (props) {
    moveQueen(props.x, props.y);
  }


};

var squareTargetKING = {
  canDrop: function (props) {
    return canMoveKing(props.x, props.y);
  },

  drop: function (props) {
    moveKing(props.x, props.y);
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






// var BoardSquare = React.createClass({
//   propTypes: {
//     x: PropTypes.number.isRequired,
//     y: PropTypes.number.isRequired,
//     isOver: PropTypes.bool.isRequired,
//     canDrop: PropTypes.bool.isRequired
//   },

//   renderOverlay: function (color) {
//     return (
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         height: '100%',
//         width: '100%',
//         zIndex: 6, 
//         opacity: 0.5,
//         backgroundColor: color,
//       }} />
//     );
//   },

//   render: function () {
//     var x = this.props.x;
//     var y = this.props.y;
//     var connectDropTarget = this.props.connectDropTarget;
//     var isOver = this.props.isOver;
//     var black = (x + y) % 2 === 1;
//     var canDrop = this.props.canDrop
//     return connectDropTarget(
//       <div style={{
       
//         width: '100%',
//         height: '100%',
        
//       }}>
//         <Square black={black}>
//           {this.props.children}
//         </Square>
//         {x == 2 && y == 7 && count < 140 && this.renderOverlay('purple')}
//         {x == 5 && y == 7 && count > 140 && count < 260 && this.renderOverlay('purple')}
//         {isOver && !canDrop && this.renderOverlay('red')}
//         {!isOver && canDrop && this.renderOverlay('yellow')}
//         {isOver && canDrop && this.renderOverlay('blue')}
//       </div>
//     );
//   }
// })

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
        zIndex: 1,
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
        {x == 2 && y == 7 && count == 0 && this.renderOverlay('purple')}
        {x == 5 && y == 7 && count == 1 && this.renderOverlay('purple')}
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
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
 
 var BS2 = DropTarget(k2, squareTargetK2, collectme)(BoardSquare)

 var BishopBoard1 = DropTarget(b1, squareTargetB1, collectme)(BoardSquare)

var BishopBoard2 = DropTarget(b2, squareTargetB2, collectme)(BoardSquare)
    
var PB1 =  DropTarget(p1, squareTargetP1, collectme)(BoardSquare)
var PB2 =  DropTarget(p2, squareTargetP2, collectme)(BoardSquare)
var PB3 =  DropTarget(p3, squareTargetP3, collectme)(BoardSquare)
var PB4 =  DropTarget(p4, squareTargetP4, collectme)(BoardSquare)
var PB5 =  DropTarget(p5, squareTargetP5, collectme)(BoardSquare)
var PB6 =  DropTarget(p6, squareTargetP6, collectme)(BoardSquare)
var PB7 =  DropTarget(p7, squareTargetP7, collectme)(BoardSquare)
var PB8 =  DropTarget(p8, squareTargetP8, collectme)(BoardSquare)
var CB1 =  DropTarget(c1, squareTargetC1, collectme)(BoardSquare)
var CB2 =  DropTarget(c2, squareTargetC2, collectme)(BoardSquare)
var QB =  DropTarget(q, squareTargetQ, collectme)(BoardSquare)
var KB =  DropTarget(king, squareTargetKING, collectme)(BoardSquare)





var Board = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  },

  

componentDidMount() {

setInterval(this.checkpos,100)


},


checkpos() {

 var t = (eptop - 15) % 62.5 == 0
var l = (epleft - 8) % 62.5 == 0
console.log(eptop)
console.log(epleft)
console.log(t)
console.log(l)

console.log(125 % 62.5 == 0)

if(eptop != prevept  && t === true && l === true ||  epleft != prevepl && t === true && l === true ){
  console.log(eptop % 62.5 == 0)
  console.log(epleft % 62.5 == 0)
  console.log("yes,damnitt")
  console.log("eptop is " + " " + eptop)
  console.log("epleft is" +  " " + epleft)
  console.log("prevept is" + " " + prevept)
  console.log("prevepl is" + " " + prevepl)
  whosemove = "black"
  this.forceUpdate()
  count++;
}

else {

  whosemove = "white"
}





},



renderSquare: function (i,BS) {
  var x = i % 8;
  var y = Math.floor(i / 8);
  var kn = this.renderPiece(x,y)
 // console.log(kn)
  
  // var black = (x + y) % 2 === 1;




     

      
  return (
    <div key={i}
         style={{ width: '12.5%', height: '12.5%', color: "red",  backgroundColor: "blue",
         position: 'relative', zIndex: -{i}}}>
      <span id ={i} style={{position:'relative', zIndex: 0}}>

      <BS x = {x} 
          y = {y}>
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
  var bishopX = this.props.bishopPosition[0]
  var bishopY = this.props.bishopPosition[1]
  var bishop2X = this.props.bishopPosition2[0]
  var bishop2Y = this.props.bishopPosition2[1]
  var pawn1X = this.props.pawnPosition1[0]
  var pawn1Y = this.props.pawnPosition1[1]
  var pawn2X = this.props.pawnPosition2[0]
  var pawn2Y = this.props.pawnPosition2[1]
  var pawn3X = this.props.pawnPosition3[0]
  var pawn3Y = this.props.pawnPosition3[1]
  var pawn4X = this.props.pawnPosition4[0]
  var pawn4Y = this.props.pawnPosition4[1]
  var pawn5X = this.props.pawnPosition5[0]
  var pawn5Y = this.props.pawnPosition5[1]
  var pawn6X = this.props.pawnPosition6[0]
  var pawn6Y = this.props.pawnPosition6[1]
  var pawn7X = this.props.pawnPosition7[0]
  var pawn7Y = this.props.pawnPosition7[1]
  var pawn8X = this.props.pawnPosition8[0]
  var pawn8Y = this.props.pawnPosition8[1]
  var castle1X = this.props.castlePosition1[0]
  var castle1Y = this.props.castlePosition1[1]
  var castle2X = this.props.castlePosition2[0]
  var castle2Y = this.props.castlePosition2[1]
  var queenX = this.props.queenPosition[0]
  var queenY = this.props.queenPosition[1]
  var kingX = this.props.kingPosition[0]
  var kingY = this.props.kingPosition[1]
  
  

  
  



















  // console.log(knightPosition[0])
  // console.log(count);
  
  

  // console.log("knightx" + " " + knightX)
  // console.log("knighty" + " " + knightY)
  // console.log("knight2X" + " " + knight2X)
  // console.log("knight2Y" + " " + knight2Y)

prevc = pcheck.slice(0)

pcheck = []

pcheck.push(knightX,knightY,knight2X,knight2Y, bishopX,bishopY,bishop2X, bishop2Y)

if(pcheck.toString() != prevc.toString()){

  count++;
}

  


  if(whosemove == "white"){

  

  if (x === knightX && y === knightY && kkillcount == 0  ) {
  
    return <K/>
  }
else if(x == knight2X && y == knight2Y) {

return <K2/>
  
}

else if(x == bishopX && y == bishopY){
  
  return <B1/>
  
}

else if(x == bishop2X && y == bishop2Y){

  return <B2/>

  
}


else if(x == pawn1X && y == pawn1Y){


  return <P1/>
}

else if(x == pawn2X && y == pawn2Y){


  return <P2/>
}


else if(x == pawn3X && y == pawn3Y){


  return <P3/>
}

else if(x == pawn4X && y == pawn4Y){


  return <P4/>
}

else if(x == pawn5X && y == pawn5Y){


  return <P5/>
}

else if(x == pawn6X && y == pawn6Y){


  return <P6/>
}

else if(x == pawn7X && y == pawn7Y){


  return <P7/>
}


else if(x == pawn8X && y == pawn8Y){


  return <P8/>
}

else if(x == castle1X && y == castle1Y){


  return <C1/>
}

else if(x == castle2X && y == castle2Y){


  return <C2/>
}

else if(x == queenX && y == queenY){


  return <Q/>
}

else if(x == kingX && y == kingY){


  return <KING/>
}

else if( x == 0 && y == 1) {


  return <EPawn/>
}

else if( x == 1 && y == 1) {


  return <EPawn2/>
}

else if( x == 2 && y == 1) {


  return <EPawn3/>
}


else if( x == 3 && y == 1) {


  return <EPawn4/>
}


else if( x == 4 && y == 1) {


  return <EPawn5/>
}


else if( x == 5 && y == 1) {


  return <EPawn6/>
}

else if( x == 6  && y == 1) {


  return <EPawn7/>
}


else if( x == 7 && y == 1) {


  return <EPawn8/>
}









else if(x == 2 && y == 4 ){


  if(eptop == 265 && epleft == 133 && epkillcount < 300000){

  if(knightX == 2 && knightY == 4 || knight2X == 2 && knight2Y == 4){

    epkillcount++;
  }


  return <EPawn/>
            
   }   
}


else if(x == 2 && y == 5 ){

 if(eptop == 327.5 && epleft == 133 && epkillcount < 3000000){

  if(knightX == 2 && knightY == 5 || knight2X == 2 && knight2Y == 5){

    epkillcount++;
  }


  return <EPawn/>
 } 


}

else if(x == 3 && y == 5){

if(eptop == 327.5 && epleft == 195.5 && epkillcount < 300000){

  if(knightX == 3 && knightY == 5 || knight2X == 3 && knight2Y == 5){

    epkillcount++;
  }


  return <EPawn/>
 } 
  






}


else if(x == 0 && y == 0 ){

 return <ECastle1/> 

}

else if(x == 1 && y == 0){
return <EBishop/>

}


else if(x == 2 && y == 0){

return <EKnight/>  


}

else if(x == 3 && y == 0 ){

return <EKing/>
 
}

else if(x == 4 && y == 0){

  return <EQueen/>
}


else if(x == 5 && y == 0){

  return <EKnight2/>
}


else if(x == 6 && y == 0){

  return <EBishop2/>
}


else if(x == 7 && y == 0){

  return <ECastle2/>
}

}
else {


 if( x == 0 && y == 1) {


  return <EPawn/>
}

else if( x == 1 && y == 1) {


  return <EPawn2/>
}

else if( x == 2 && y == 1) {


  return <EPawn3/>
}


else if( x == 3 && y == 1) {


  return <EPawn4/>
}


else if( x == 4 && y == 1) {


  return <EPawn5/>
}


else if( x == 5 && y == 1) {


  return <EPawn6/>
}

else if( x == 6 && y == 1) {


  return <EPawn7/>
}


else if( x == 7 && y == 1) {


  return <EPawn8/>
}



else if(x == 2 && y == 4 ){


  if(eptop == 265 && epleft == 133 && epkillcount < 300000){

  if(knightX == 2 && knightY == 4 || knight2X == 2 && knight2Y == 4){

    epkillcount++;
  }


  return <EPawn/>
            
   }   
}


else if(x == 2 && y == 5 ){

 if(eptop == 327.5 && epleft == 133 && epkillcount < 3000000){

  if(knightX == 2 && knightY == 5 || knight2X == 2 && knight2Y == 5){

    epkillcount++;
  }


  return <EPawn/>
 } 


}

else if(x == 3 && y == 5){

if(eptop == 327.5 && epleft == 195.5 && epkillcount < 300000){

  if(knightX == 3 && knightY == 5 || knight2X == 3 && knight2Y == 5){

    epkillcount++;
  }


  return <EPawn/>
 } 
  






}
else if(x == 0 && y == 0 ){

 return <ECastle1/> 

}

else if(x == 1 && y == 0){
return <EBishop/>

}


else if(x == 2 && y == 0){

return <EKnight/>  


}

else if(x == 3 && y == 0 ){

return <EKing/>
 
}

else if(x == 4 && y == 0){

  return <EQueen/>
}


else if(x == 5 && y == 0){

  return <EKnight2/>
}


else if(x == 6 && y == 0){

  return <EBishop2/>
}


else if(x == 7 && y == 0){

  return <ECastle2/>
}


else if (x === knightX && y === knightY && kkillcount == 0  ) {
  
    return <K/>
  }
else if(x == knight2X && y == knight2Y) {

return <K2/>
  
}

else if(x == 7 && y == 3){
  
  
}

else if(x == bishopX && y == bishopY){
  
  return <B1/>
  
}

else if(x == bishop2X && y == bishop2Y){

  return <B2/>

  
}


else if(x == pawn1X && y == pawn1Y){


  return <P1/>
}

else if(x == pawn2X && y == pawn2Y){


  return <P2/>
}


else if(x == pawn3X && y == pawn3Y){


  return <P3/>
}

else if(x == pawn4X && y == pawn4Y){


  return <P4/>
}

else if(x == pawn5X && y == pawn5Y){


  return <P5/>
}

else if(x == pawn6X && y == pawn6Y){


  return <P6/>
}

else if(x == pawn7X && y == pawn7Y){


  return <P7/>
}


else if(x == pawn8X && y == pawn8Y){


  return <P8/>
}

else if(x == castle1X && y == castle1Y){


  return <C1/>
}

else if(x == castle2X && y == castle2Y){


  return <C2/>
}

else if(x == queenX && y == queenY){


  return <Q/>
}

else if(x == kingX && y == kingY){


  return <KING/>
}

}

},




render: function () {
var squares = [];
    // console.log("rerendering")
    // console.log(BS1)
    


    for (let i = 0; i < 64; i++) {
      

      if(count ==  0) {
        // console.log("the count is 0 push bs1")
        squares.push(this.renderSquare(i,BS1));}

        else if (count == 1) {
          // console.log("the count is 1 push bs2")
          squares.push(this.renderSquare(i,BS2));

        
        }
    
      else if (count == 2) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,BishopBoard1));

      }
      
     
       else if (count == 3) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,BishopBoard2));

      }

     
  else if (count == 4) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,BishopBoard1));

      }



     else {

      squares.push(this.renderSquare(i,BishopBoard2));

     }

    

    }
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 0
      }}>

      {squares}
      </div>
    );
  }
});



// var Board = React.createClass({
//   propTypes: {
    

//     knightPosition2: PropTypes.arrayOf(
//       PropTypes.number.isRequired
//     ).isRequired,
  
// knightPosition: PropTypes.arrayOf(
//       PropTypes.number.isRequired
//     ).isRequired
  




//   },

//   renderSquare: function (i) {
//     var x = i % 8;
//     var y = Math.floor(i / 8);
//     var black = (x + y) % 2 === 1;

//     var knightX = this.props.knightPosition[0]
//     var knightY = this.props.knightPosition[1]
//     var knight2X = this.props.knightPosition2[0];
//     var knight2Y = this.props.knightPosition2[1]
//     if (x === 3 && y === 4){

//       var piece = <EPawn /> 
//     }
    
//     else if(x === knight2X && y === knight2Y){

      
//     }
    
//     else {

//       var piece = null;
//     }



//     return (
//       <div key={i}
//            style={{ width: '12.5%', height: '12.5%' }}>
//         <Square black={black}>
//           {piece}
//         </Square>
//       </div>
//     );
//   },

//   render: function () {
//     var squares = [];
//     for (let i = 0; i < 64; i++) {
//       squares.push(this.renderSquare(i));
//     }

//     return (
//       <div style={{
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         flexWrap: 'wrap'
//       }}>
//         {squares}
//       </div>
//     );
//   }
// });


















 var B = DragDropContext(HTML5Backend)(Board);



function dragState(){

   B = DragDropContext(HTML5Backend)(Board);
}

setInterval(dragState, 100);


var knightPosition = [2, 7];

var observer = null;

function emitChange() {
  observer(knightPosition2);

}

var observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  } 

  observer = o;
  emitChange();
}



observe(function (knightPosition2) {
  ReactDOM.render(
    <span>
    
    <B knightPosition2={knightPosition2} knightPosition={knightPosition} 

      bishopPosition2={bishopPosition2} bishopPosition={bishopPosition}
      pawnPosition1={pawnPosition1} pawnPosition2={pawnPosition2}
      pawnPosition3={pawnPosition3} pawnPosition4={pawnPosition4}
      pawnPosition5={pawnPosition5} pawnPosition6={pawnPosition6}
      pawnPosition7={pawnPosition7} pawnPosition8={pawnPosition8}
      castlePosition1={castlePosition1} castlePosition2={castlePosition2}
      queenPosition={queenPosition} kingPosition={kingPosition}

    />
   
    </span>,
   
    document.getElementById('container')
  );
});

// $( "#wk" ).hover(function() {
//   $( this ).hide();
  
// });

function pawnDown() {

$("#ep").animate(
                {
                        
                        "left" : "125px",
                        "top" : "125px"
                }, 
                1000
        );
}

function animate () {


  if(count == 2){

    pawnDown()
  }
}


setInterval(animate, 100);


function checkOffset(){

try {
   
   prevept = eptop
    prevepl = epleft
   eptop = $("#ep").offset().top 
  epleft = $("#ep").offset().left  
//   console.log(eptop)
// console.log(epleft)
// console.log(prevept)
// console.log(prevepl)
// console.log("break")
}
catch(e) {
    
epkillcount++;

}








}

setInterval(checkOffset, 100);





// function moveAnimate(element, newParent){
//     //Allow passing in either a jQuery object or selector
//     element = $(element);
//     newParent= $(newParent);

//     var oldOffset = element.offset();
//     element.appendTo(newParent);
//     var newOffset = element.offset();

//     var temp = element.clone().appendTo('body');
//     temp.css({
//         'position': 'absolute',
//         'left': oldOffset.left,
//         'top': oldOffset.top,
//         'z-index': 1000
//     });
//     element.hide();
//     temp.animate({'top': newOffset.top, 'left': newOffset.left}, 'slow', function(){
//        element.show();
//        temp.remove();
//     });
// }

// moveAnimate("#ep", "35" )
