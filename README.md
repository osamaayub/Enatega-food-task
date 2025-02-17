# Restaurant Finder Enatega

This is a [Next.js](https://nextjs.org) project.

## Getting Started

First, install npm packages:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Functionalities

1. Getting the current location of the user.
2. Displaying user location in the text area.
3. Displaying user location in the dropdown.
4. Clicking "Find Restaurant" queries the endpoint of the GraphQL server with latitude and longitude.
5. Clicking "Find Restaurants" displays restaurants in a grid format for the user's location.

## Technologies

- **Next.js > 14.x** (using app router)
- **Tailwind CSS** with **PrimeReact**
- **Cypress** for end-to-end and unit testing
- **TypeScript**
- **Apollo Client**

## Implementation Notes

You need to implement the design of the new homepage. Exact pixel-perfect implementation is not required, but scalability and responsiveness are important. You can refer to the current implementation for functionalities. The functionalities that need to work include:

1. Getting the current location of the user.
2. Displaying user location in the text area.
3. Displaying user location in the dropdown.
4. Clicking "Find Restaurant" should query the endpoint that is already deployed in the final version with latitude and longitude.
5. Clicking "Find Restaurants" should display restaurants in a grid format for the user's location.
