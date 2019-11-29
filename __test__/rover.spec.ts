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

  private constructor(initialPosition: Position) {
    this.position = initialPosition;
  }

  public static startFacingNorth(): Rover {
    return new Rover(
      new Position(new Point(0, 0), new Direction().facingNorth()),
    );
  }

  currentPosition(): Position {
    return this.position;
  }
}

describe('Rover', () => {
  it('should start on an initial point and facing a direction', () => {
    const rover = Rover.startFacingNorth();

    const expectedPosition = new Position(
      new Point(0, 0),
      new Direction().facingNorth(),
    );

    expect(rover.currentPosition()).toStrictEqual(expectedPosition);
  });
});
