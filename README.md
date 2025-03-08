# 🍽️ Restaurant Finder Enatega

Restaurant Finder Enatega is a **Next.js** application that helps users find nearby restaurants based on their current location. The app fetches restaurant data using **GraphQL** and displays them in a user-friendly grid format.

## 🚀 Getting Started

Follow these steps to set up and run the project:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd restaurant-finder-enatega
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the app.

## 🎯 Features

✅ Get the user's current location automatically.  
✅ Display the user's location in a text area and dropdown.  
✅ Search for restaurants using latitude and longitude via GraphQL API.  
✅ Display restaurants in a **grid format** based on the user’s location.  
✅ Fully responsive and scalable design.  
✅ End-to-end and unit testing with **Cypress**.  

## 🛠️ Technologies Used

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** with **PrimeReact**
- **Apollo Client** (GraphQL API integration)
- **Cypress** (Testing framework)

## 📌 Implementation Notes

- The new homepage design needs to be implemented.
- Pixel-perfect accuracy is **not required**, but scalability and responsiveness are crucial.
- The existing functionalities should be retained:
  - Location retrieval
  - Displaying location in UI components
  - Fetching and displaying restaurant data from the GraphQL endpoint

## 🤝 Contributing
Feel free to submit pull requests or report issues. We welcome contributions that improve the project’s features and performance!

## 📜 License
This project is licensed under the MIT License.

---

💡 **Tip:** If you encounter issues, ensure you have the correct environment variables and dependencies installed. Happy coding! 🚀
