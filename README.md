# SportSee – OC Project 07 🏋️

React-powered user profile dashboard for **SportSee**, a rising startup in sport coaching, visualizing user workout and nutrition data.

---

## 🚀 Project context

This project came out of a front-end mission with **SportSee**, a fast-growing sports coaching startup. The goal was to rebuild the user’s profile page with React, including several data visualizations to help users track their fitness progress (sessions completed, calories burned, etc.). My task was to develop the entire page from scratch in React, closely following the designer’s Figma mockups and the Product Owner’s specifications.

**Heads up: There are actually two versions here!**  
- The **strict-brief branch** sticks *strictly* to the official project brief and Figma design (used for evaluation).
- The **main branch** is a **personal remix** with my own UI touches, experiments, and creative energy.  
  _(The main branch is a live demo and a bit of a playground, so not everything had to be perfect. You might come across elements that don’t do much or quirky leftovers—that’s normal! 😉)_

## ⚠️ Design Disclaimer

**I didn’t design the original UI.** The Figma mockups and overall UX were handed to me. If some spacing or layout feels off, that’s because I followed the spec *to the pixel* 😅. My job was to integrate the design faithfully and build a scalable React app around it, not to reinvent the look and feel.

## 🛠️ Built with

- **React**
- **TypeScript**
- **Styled-Components** (component-level styles)
- **Vite** (blazing-fast dev/build toolchain)
- **Recharts** (charting library for data visualizations)
- **Node.js + Express (API)** (mocked first, then live data)
- **Figma** (design prototypes)

## 📄 Features

- **Data-rich fitness dashboard** — Displays user activity and health stats: daily activity, average session duration, performance by category, and nutrition macros.
- **Interactive charts** — Four custom-styled charts (bar, line, radar, and radial progress) built with Recharts, providing visual insights into the user’s workout performance and goals.
- **Modular React components** — Each chart and info panel is a reusable component (with strong typing via TypeScript), keeping the code organized and maintainable.
- **Desktop-first responsive design** — The UI is optimized for desktop screens (≥1024px width). Ready to extend for mobile in the future.
- **Flexible data sourcing** — Easily switch between **mock data** and **live API data**. Data service layer handles API calls (with Axios) outside of components. Data models adapt the API’s responses to the frontend’s needs.
- **TypeScript advantages** — Clarity, type safety, and fewer bugs. (Trust me, it makes life better.)

## 📸 Preview

- [**Live Demo (Personal Rework)**](https://your-deployment-link-here)

## 💬 Evaluation

> ✅ **Project validated!** — The new profile page meets all the requirements and functions correctly. The code is clean and well-structured, and the integration of charts and API data is spot on!

**Evaluation Highlights:**

- ✅ **Data quality & modeling:** Successfully transformed and formatted the JSON data via custom model classes. Swapping between mocked data and the API requires no component changes—super clean separation!
- ✅ **Advanced charts integration:** Used Recharts and implemented all required graphs (activity, sessions, performance, score) to match the Figma specs. Nailed the design details and UI polish.
- ✅ **API integration & stability:** Fetched data using Axios, handled API responses, and gracefully managed error cases. Even if the backend has issues, the app stays stable and user-friendly.

**Areas for improvement:**

- 📈 **Extended responsiveness:** Next step: adapt the layout for tablet and mobile screens so everyone can access it comfortably.
- 💾 **Commit frequency:** Pro tip—commit code more regularly for better progress tracking and easier reviews.

## 🤖 AI, But Make It Human

I’ll admit, I leaned on AI (OpenAI’s Codex) a lot—but only as a *sidekick*, never a replacement.  
It helped optimize code, experiment with ideas, squash layout bugs, boost accessibility, and speed up boring tasks (like generating or updating JSON data).  
I never asked the AI to “build the whole feature for me.” I always started by writing the code or outlining the solution myself, then called in Codex for polish or the “tedious bits.”

Confession time: I did let Codex code one component *entirely* (the **MealPrepCard**), just as an experiment! Otherwise, it was always me first—AI as my creative turbocharger. If you’re wondering how I built this so quickly, that’s my little secret for those marathon coding nights. 😏

## 📁 Getting Started

1. **Clone the repository**  
   Run the following command in your terminal to clone the repository:  
   ```bash
   git clone https://github.com/Vincentvdt/oc-project-SportSee.git
   ```

2. **Install dependencies**  
   Navigate to the project directory and install the required dependencies:  
   ```bash
   cd oc-project-SportSee
   npm install
   ```

3. **Install Vercel CLI**  
   This project is set up to run locally using Vercel's development environment. Make sure the Vercel CLI is installed globally before starting the development server:  
   ```bash
   npm install -g vercel
   ```

4. **Start the development server**  
   Run the application locally with the following command:  
   ```bash
   npm run vercel
   ```  
   The application will be available at **http://localhost:3000**.

   **Important:** Using `npm run dev` (commonly used in Vite projects) will result in an **"Error"**, as the project is configured to rely on Vercel's dev environment.

5. **Build for production**  
   To create a production build of the app, run:  
   ```bash
   npm run build
   ```  
   The build files will be located in the `dist/` folder.
## 📚 Credits

- [OpenClassrooms](https://openclassrooms.com/)  

---
💡 Bonus tip: If you’re browsing the repository and want to compare the two versions of the project, check out the branches! You can switch to the **strict-brief branch** to see the exact official version of the project, then back to **main** to see my enhanced version. Enjoy exploring both, and pick your favorite view of the SportSee dashboard!