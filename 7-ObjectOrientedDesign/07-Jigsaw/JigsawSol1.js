class Puzzle {

}

class Piece {

}

class Edge {
  shape;
  parentPiece;

  static shapeTypes = {
    OUTER: 'outer',
    INNER: 'inner',
    FLAT: 'flat',
  }

  static orientationTypes = {
    LEFT: 'left',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
  }

  constructor (inputShapeType, inputParentPiece) {
    this.shape = inputShapeType;
    this.parentPiece = inputParentPiece;
  }
  
  getOppositeShape (shape) {
    if (shape === Edge.shapeTypes.INNER) return Edge.shapeTypes.OUTER;
    if (shape === Edge.shapeTypes.OUTER) return Edge.shapeTypes.INNER;
    if (shape === Edge.shapeTypes.FLAT) return Edge.shapeTypes.FLAT;
  }

  getOppositeOrientation (orientation) {
    if (orientation === Edge.orientationTypes.LEFT) return Edge.orientationTypes.RIGHT;
    if (orientation === Edge.orientationTypes.TOP) return Edge.orientationTypes.BOTTOM;
    if (orientation === Edge.orientationTypes.RIGHT) return Edge.orientationTypes.LEFT;
    if (orientation === Edge.orientationTypes.BOTTOM) return Edge.orientationTypes.TOP;
  }
}