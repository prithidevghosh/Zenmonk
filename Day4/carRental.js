const prompt = require('prompt-sync')();

let cars_map = {
    1: "alto",
    2: "indica"
};

let bookings = [];

class Car {
    static car_id = 1;
    #booking_customer_id = [];
    constructor(carName, brand) {
        this.carName = carName;
        this.brand = brand;
        this.car_id = Car.car_id++;
    }

    get bookings() {
        return this.#booking_customer_id;
    }

    set bookings(customer_id) {
        if (isNaN(customer_id)) {
            console.error("Not a valid form of customer id");
            return;
        }
        this.#booking_customer_id.push(customer_id);
    }

    isAvailable() {
        return this.#booking_customer_id.length === 0;
    }

    getDetails() {
        return `Car ID: ${this.car_id}, Car Name: ${this.carName}, Brand: ${this.brand}`;
    }

    removeBooking(customer_id) {
        const index = this.#booking_customer_id.indexOf(customer_id);
        if (index !== -1) {
            this.#booking_customer_id.splice(index, 1);
        }
    }
}

class User {
    user_name;
    user_contact;
    user_role;
    static user_id = 1;

    constructor(name, contact, role) {
        this.user_name = name;
        this.user_contact = contact;
        this.user_role = role;
        this.user_id = User.user_id++;
    }

    getDetails() {
        return `User ID: ${this.user_id}, Name: ${this.user_name}, Contact: ${this.user_contact}, Role: ${this.user_role}`;
    }
}

class Customer extends User {
    #current_bookings = [];
    #past_bookings = [];
    constructor(name, contact) {
        super(name, contact, "customer");
    }

    get currentBookings() {
        return this.#current_bookings.map((carId) => cars_map[carId]);
    }

    get pastBookings() {
        return this.#past_bookings.map((carId) => cars_map[carId]);
    }

    set bookings(car_id) {
        if (isNaN(car_id)) {
            console.error("Not a valid form of car id");
            return;
        }

        const car = bookings.find((car) => car.car_id === car_id);
        if (!car || !car.isAvailable()) {
            console.error("Car is already booked or does not exist");
            return;
        }

        car.bookings = this.user_id;
        this.#current_bookings.push(car_id);
    }

    completeBooking() {
        const carId = prompt("Enter the ID of the car you want to mark as completed: ");
        const index = this.#current_bookings.indexOf(parseInt(carId));
        if (index !== -1) {
            const completedCarId = this.#current_bookings.splice(index, 1)[0];
            this.#past_bookings.push(completedCarId);
            const car = bookings.find((car) => car.car_id === completedCarId);
            if (car) {
                car.removeBooking(this.user_id);
            }
        }
    }

    cancelBooking() {
        const carId = prompt("Enter the ID of the car you want to cancel: ");
        const index = this.#current_bookings.indexOf(parseInt(carId));
        if (index !== -1) {
            const canceledCarId = this.#current_bookings.splice(index, 1)[0];
            const car = bookings.find((car) => car.car_id === canceledCarId);
            if (car) {
                car.removeBooking(this.user_id);
            }
        }
    }
}

let alto_car = new Car("alto", "maruti");
let indica_car = new Car("indica", "tata");

bookings.push(alto_car, indica_car);

while (true) {
    const name = prompt("Enter your name: ");
    const contact = prompt("Enter your contact number: ");

    let prithvi_customer = new Customer(name, contact);

    // Display available car IDs
    console.log("Available Car IDs:", Object.keys(cars_map));

    const carId = prompt("Enter the ID of the car you want to book: ");
    const carIdInt = parseInt(carId);
    if (!Object.keys(cars_map).includes(carId) || !alto_car.isAvailable()) {
        console.error("Invalid car ID or car is already booked");
        continue;
    }

    prithvi_customer.bookings = carIdInt;

    console.log(prithvi_customer.getDetails());
    console.log("Current Bookings:", prithvi_customer.currentBookings);
    console.log("Past Bookings:", prithvi_customer.pastBookings);

    if (prithvi_customer.currentBookings.length > 0) {
        const option = prompt("Do you want to complete or cancel the booking? (Type 'complete' or 'cancel'): ");
        if (option === "complete") {
            prithvi_customer.completeBooking();
        } else if (option === "cancel") {
            prithvi_customer.cancelBooking();
        }

        else {
            console.log("Invalid option. Booking not completed or canceled.");
        }
    } else {
        console.log("No current bookings. Skipping the option to complete or cancel a booking.");
    }

    console.log("Current Bookings:", prithvi_customer.currentBookings);
    console.log("Past Bookings:", prithvi_customer.pastBookings);
}
