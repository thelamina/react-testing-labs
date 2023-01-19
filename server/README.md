# ice-cream-server

### A server for the "Ice Cream" app"

## Installing

1. Clone or fork the course repository
2. `cd` into the `ice-cream-server` directory (where this README is located).
3. Run `npm install`

## Starting the server

Run `npm start`. The server will be found at [http://localhost:3030]

## Using the server

Server routes:

-   `GET /scoops` and `GET /toppings` return sundae options (array of objects with keys `name` and `image`)
-   `POST /order` returns a random order number (does not process order)
-   images via static `/images` directory.

## Testing

To test, run `npm test`.
