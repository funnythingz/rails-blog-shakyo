class Car {

    constructor(public engine: Engine,
                public body: Body) {}

}

class AirconCar extends Car {

    constructor(engine: Engine,
                body: Body,
                public aircon: Aircon) {

        super(engine, body);
    }

}

class Engine {}
class Body {}
class Aircon {}
