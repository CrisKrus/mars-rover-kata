class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Direction {
  facingNorth() {
    return '';
  }
}

class Position {
  private point: Point;
  private direction: string;

  constructor(point: Point, direction: string) {
    this.point = point;
    this.direction = direction;
  }
}

class Rover {
  private position: Position;

  constructor(initialPosition: Position) {
    this.position = initialPosition;
  }

  currentPosition(): Position {
    return this.position;
  }
}

describe('Rover', () => {
  it('should start on an initial point and direction', () => {
    const point = new Point(0, 0);
    const direction = new Direction().facingNorth();
    const initialPosition = new Position(point, direction);

    const rover = new Rover(initialPosition);

    const expectedPosition = new Position(
      new Point(0, 0),
      new Direction().facingNorth(),
    );

    expect(rover.currentPosition()).toBe(expectedPosition);
  });
});
