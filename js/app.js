



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
var count = -1;
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

var ec1offsetx = 8
var ec1offsety = 15
var eb1offsetx = 70.5
var eb1offsety = 15
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




























 var ECastle1 = React.createClass({
  render: function () {

    
  
return <span id="ec1" style={{
        
        color: "black",
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
        position: 'relative',
        zIndex: "20"
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
        cursor: 'move',
        position: 'relative'
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
        cursor: 'move',
        position: 'relative'
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
        cursor: 'move',
        position: 'relative'
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
        cursor: 'move',
        position: 'relative'
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
        cursor: 'move',
        position: 'relative'
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
        cursor: 'move',
        position: 'relative'
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
        cursor: 'move',
        position: 'relative'
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
var queenPosition = [3,7]
var kingPosition = [4,7]
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

  return (dy === -1 && dx === 0);
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

 var t = ($("#ec1").offset().top - 15) % 62.5 == 0
var l = ( $("#ec1").offset().left- 8) % 62.5 == 0
// console.log(eptop)
// console.log(epleft)
console.log("BOOLEAN")
console.log(t)
console.log(l)

console.log(ec1offsety)
console.log($("#ec1").offset().top)
if(ec1offsetx != $("#ec1").offset().left && t === true && l === true ||
ec1offsety != $("#ec1").offset().top && t === true && l === true ){
  // console.log(eptop % 62.5 == 0)
  // console.log(epleft % 62.5 == 0)
  // console.log("yes,damnitt")
  // console.log("eptop is " + " " + eptop)
  // console.log("epleft is" +  " " + epleft)
  // console.log("prevept is" + " " + prevept)
  // console.log("prevepl is" + " " + prevepl)
  emitChange();
  whosemove = "black"
  this.forceUpdate()
  count--;
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
  
  

  var ECASTLE1X = (ec1offsetx - 8) / 62.5 
  
  var ECASTLE1y = (ec1offsety - 15) / 62.5

  
  var EBISHOP1X = (eb1offsetx - 8) / 62.5

  var EBISHOP1Y = (eb1offsety - 15) / 62.5
  console.log(eb1offsety)
  console.log(eb1offsetx - 8)
  console.log(EBISHOP1X)
  console.log(EBISHOP1X)
  console.log("OFFSET")


console.log("the count is" + " " + count)











  // console.log(knightPosition[0])
  // console.log(count);
  
  

  // console.log("knightx" + " " + knightX)
  // console.log("knighty" + " " + knightY)
  // console.log("knight2X" + " " + knight2X)
  // console.log("knight2Y" + " " + knight2Y)

prevc = pcheck.slice(0)

pcheck = []

pcheck.push(knightX,knightY,knight2X,knight2Y, bishopX,bishopY,bishop2X, bishop2Y,
  pawn1X,pawn1Y,pawn2X,pawn2Y,pawn3X,pawn3Y,pawn4X,pawn4Y,pawn5X,pawn5Y,pawn6X,
  pawn6Y, pawn7X, pawn7Y, pawn8X, pawn8Y, castle1X, castle1Y, castle2X, castle2Y,
  queenX,queenY,kingX,kingY)

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


  // if(eptop == 265 && epleft == 133 && epkillcount < 300000){

  // if(knightX == 2 && knightY == 4 || knight2X == 2 && knight2Y == 4){

  //   epkillcount++;
  // }


  // return <EPawn/>
            
  //  }   
}


else if(x == 2 && y == 5 ){

 // if(eptop == 327.5 && epleft == 133 && epkillcount < 3000000){

 //  if(knightX == 2 && knightY == 5 || knight2X == 2 && knight2Y == 5){

 //    epkillcount++;
 //  }


 //  return <EPawn/>
 // } 


}

else if(x == 3 && y == 5){

// if(eptop == 327.5 && epleft == 195.5 && epkillcount < 300000){

//   if(knightX == 3 && knightY == 5 || knight2X == 3 && knight2Y == 5){

//     epkillcount++;
//   }


//   return <EPawn/>
//  } 
  






}


else if(x == ECASTLE1X && y == ECASTLE1y ){

 return <ECastle1/> 

}

else if(x == EBISHOP1X && y == EBISHOP1Y){
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


  // if(eptop == 265 && epleft == 133 && epkillcount < 300000){

  // if(knightX == 2 && knightY == 4 || knight2X == 2 && knight2Y == 4){

  //   epkillcount++;
  // }


  // return <EPawn/>
            
  //  }   
}


else if(x == 2 && y == 5 ){

 // if(eptop == 327.5 && epleft == 133 && epkillcount < 3000000){

 //  if(knightX == 2 && knightY == 5 || knight2X == 2 && knight2Y == 5){

 //    epkillcount++;
 //  }


 //  return <EPawn/>
 // } 


}

else if(x == 3 && y == 5){

// if(eptop == 327.5 && epleft == 195.5 && epkillcount < 300000){

//   if(knightX == 3 && knightY == 5 || knight2X == 3 && knight2Y == 5){

//     epkillcount++;
//   }


//   return <EPawn/>
 // } 
  






}
else if(x == ECASTLE1X && y == ECASTLE1y ){

 return <ECastle1/> 

}

else if(x == EBISHOP1X && y == EBISHOP1Y){
return <EBishop/>

}


else if(x == 2 && y == 0){

return <EKnight/>  


}

else if(x == 3 && y == 0 ){

return <EQueen/>
 
}

else if(x == 4 && y == 0){

  return <EKing/>
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
    
 console.log("the count is " + " " + count)

    for (let i = 0; i < 64; i++) {
      

      if(count ==  0) {
        // console.log("the count is 0 push bs1")
        squares.push(this.renderSquare(i,PB5));}

        else if (count == 1) {
          // console.log("the count is 1 push bs2")
          squares.push(this.renderSquare(i,PB3));

        
        }
    
      else if (count == 2) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,PB5));

      }
      
     
       else if (count == 3) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,PB5));

      }

     
  else if (count == 4) {
              // console.log("the count is 2 push bs1")
              squares.push(this.renderSquare(i,PB5));

      }



     else {

      squares.push(this.renderSquare(i,PB5));

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

function pawnDown(element) {

$(element).animate(
                {
                        
                        
                        "top" : "437.5px"
                }, 
                1000
        );
}

function animate () {


  if(count == 1){

    pawnDown("#ec1")
  }
}


setInterval(animate, 100);


function checkOffset(){


   
  
  var eptop = $("#ec1").offset().top 
  ec1offsety = eptop
 var epleft = $("#ec1").offset().left  
 ec1offsetx = epleft
 var bisht = $("#eb").offset().top 
 eb1offsety = bisht
 var bishl = $("#eb").offset().left 
eb1offsetx = bishl
 var eknt = $("#ek").offset().top
 var eknl = $("#ek").offset().left

  
  console.log("CASTLE")
  console.log(eptop)
   console.log(epleft)
  console.log("BISHOP")
  console.log(bisht)
   console.log(bishl)
   console.log("KNIGHT")
   console.log(eknt)
   console.log(eknl)


// console.log(prevept)
// console.log(prevepl)
// console.log("break")









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
