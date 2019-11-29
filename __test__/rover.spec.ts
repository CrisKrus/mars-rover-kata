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
    return 'N';
  }

  facingWest() {
    return 'W';
  }
}

class Position {
  private point: Point;
  private direction: string;

  constructor(point: Point, direction: string) {
    this.point = point;
    this.direction = direction;
  }

  getPoint() {
    return this.point;
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

  execute(command: string) {
    const currentPoint = this.position.getPoint();
    const newDirection = new Direction().facingWest();

    return new Rover(new Position(currentPoint, newDirection));
  }
}

describe('Rover', () => {
  it('should start on an initial point and facing a direction', () => {
    const rover = Rover.startFacingNorth();
    rover.execute('L');

    const expectedPosition = new Position(
      new Point(0, 0),
      new Direction().facingNorth(),
    );

    expect(rover.currentPosition()).toStrictEqual(expectedPosition);
  });

  it('should rotate itself', () => {
    const rover = Rover.startFacingNorth();
    // commands: L => rover facing W
    rover.execute('L');

    const expectedPosition = new Position(
      new Point(0, 0),
      new Direction().facingWest(),
    );
    expect(rover.currentPosition()).toStrictEqual(expectedPosition);
  });
});
