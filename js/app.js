



import {Motion, spring} from 'react-motion';
import range from 'lodash.range';
var React = require('react');
var ReactDOM = require('react-dom');
var DragDropContext = require('react-dnd').DragDropContext


var HTML5Backend = require('react-dnd-html5-backend');
var DragSource = require('react-dnd').DragSource;
var DropTarget = require('react-dnd').DropTarget;
var count = 0;
var arr = []
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
var PropTypes = React.PropTypes;
var style;
var style1;
var stylek1;
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
// Components 

//Constants 

// Diameter of the main button in pixels
const MAIN_BUTTON_DIAM = 90;
const CHILD_BUTTON_DIAM = 48;
// The number of child buttons that fly out from the main button
const NUM_CHILDREN = 3;
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

  

  

  initialKnightOne(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }

KnightOneLeftUpTwo(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }

KnightOneLeftUpOne(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }


KnightOneLeftDownTwo(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }
  
KnightOneLeftDownOne(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }

  
KnightOneRightUpTwo(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }


KnightOneRightUpOne(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }
  
KnightOneRightDownTwo(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
    };
  


  }

KnightOneRightDownOne(){

  return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(-590, SPRING_CONFIG),
      left: spring(130, SPRING_CONFIG),
      
      
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










  finalChildButtonStyles(childIndex) {
    let {deltaX, deltaY} = finalChildDeltaPositions(childIndex);
    console.log("thetop is" + " " + thetop)
    if(countme == 0) {
    thetop1 = thetop + 450
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
      
    else {

      var c = 9822
    }



  var es =  decodeURIComponent(escape(c));
 console.log(es);

    
    
      console.log("animation")
    if(index == 0){

    if (count <= 128) {
      style1 = this.initialBishopOne();
      style = this.initialChildButtonStyles()
      stylek1 = this.initialKnightOne()
    }

    else if (count < 300 && count > 127) {
      style1 = this.BishopDownRight(4,4);
      style = this.finalChildButtonStyles(index)
    }

    else if (count > 300 && count < 500)

    {
    move = 6;
    style = this.RightOneCastle(move)
    style1 = this.BishopDownLeft(3,3)
    }

    else if (count > 500 && count < 700) {
  move = 3
  style = this.UpOneCastle(move)
  style1 = this.BishopUpRight(3,3)

    }
else {
    move = 4
   style = this.LeftOneCastle(move)
 style1 = this.BishopUpLeft(2,2)
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

else {

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

    
  
return <span className="k" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative'
      }}>
      ♘</span>

  }
 });


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
















var knightPosition = [1, 7];

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

var ItemTypes = {
  KNIGHT: 'knight'
};

var knightSource = {
  beginDrag: function (props) {
    return {};
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



var K = DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);










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


var squareTarget = {
  canDrop: function (props) {
    return canMoveKnight(props.x, props.y);
  },

  drop: function (props) {
    moveKnight(props.x, props.y);
  }
};

function collectme(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
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
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    );
  }
})

var BS = DropTarget(ItemTypes.KNIGHT, squareTarget, collectme)(BoardSquare);

  arr.push(<K/>)
    arr.push(<EKnight/>)



var Board = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  },

  

renderSquare: function (i) {
  var x = i % 8;
  var y = Math.floor(i / 8);
  var kn = this.renderPiece(x,y)
 console.log(kn)
  return (
    <div key={i}
         style={{ width: '12.5%', height: '12.5%' }}>
      <BS x={x}
                   y={y}>
        {this.renderPiece(x, y)}
      </BS>
    </div>
  );
},

renderPiece: function (x, y) {
  var knightX = this.props.knightPosition[0]
  var knightY = this.props.knightPosition[1];
  console.log(knightPosition[0])
  console.log(count);
  count++;
  if (x === knightX && y === knightY) {
  
    return <K/>
  }
else if(x == 0 && y == 0) {

  
}

else if(x == 7 && y == 0){
  
  return <APP/>
}

else if(x == 1 && y == 0){

  
}

else if(x == 2 && y == 0){

  return 
    
          <EBishop/>
      
}


else if(x == 3 && y == 0){

  return <EQueen/>
}

else if(x == 4 && y == 0){

  return <EKing/>
}
else if(x == 5 && y == 0 && count < 127){

  return <EKnight/>
}

else if(x == 6 && y == 2 && count > 127){
  return <EKnight/>

}


else if(x == 6 && y == 0){

  return <EBishop/>
}

else if(y == 1 ){

  return <EPawn/>
}



},




render: function () {
var squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
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

observe(function (knightPosition) {
  ReactDOM.render(
    <span>
    
    <B knightPosition={knightPosition} />
   <APP/>
    </span>,
   
    document.getElementById('container')
  );
});




$(".t").animate({
      left: 100,
      top: 100

    }, 'slow');