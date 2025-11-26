# Life OS Pro

A comprehensive personal management dashboard serving as a central hub for Finance, Project Management, Knowledge Management (Library/Notes), Fitness tracking, and Meal planning.

## 🌟 Features

- 📊 **Finance Module**: Track transactions, subscriptions, and net worth
- 📋 **Project Management**: Kanban boards and task management with dependencies
- 📚 **Second Brain**: Book tracking, notes, and highlights
- 💪 **Fitness Lab**: Exercise library, workout logging, and PR tracking
- 🍳 **Kitchen & Nutrition**: Recipe management and smart shopping lists
- ✅ **Task Management**: Create, update, and organize tasks with priorities
- 📱 **PWA Support**: Install on iPhone/Android like a native app
- 🔄 **Real-time Sync**: Firebase integration for cloud storage

## 🚀 Live Demo

[View Live App](https://YOUR_USERNAME.github.io/life-os/) (Update this after deployment)

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: Zustand / React Context
- **Backend**: Firebase (Firestore & Auth)
- **Charts**: Recharts
- **Date Handling**: date-fns
- **Routing**: React Router DOM
- **Notifications**: React Hot Toast
- **PWA**: Vite PWA Plugin

## 📱 Installation on iPhone

1. Open the app in Safari
2. Tap the **Share button** (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"**
5. The app will appear on your home screen like a native app!

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn
- Firebase account (for data persistence)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/life-os.git
   cd life-os
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a `.env` file in the root directory
   - Add your Firebase configuration:
     ```
     VITE_FIREBASE_API_KEY=your-api-key
     VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
     VITE_FIREBASE_PROJECT_ID=your-project-id
     VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     VITE_FIREBASE_APP_ID=your-app-id
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── modules/         # Feature-specific components
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── layouts/             # Layout components
├── lib/                 # Utilities and Firebase config
├── pages/               # Page components
└── types/               # TypeScript type definitions
```

## 🎨 Design System

### Color Palette

- **Finance**: Emerald-600 (#059669)
- **Projects**: Blue-600 (#2563eb)
- **Library**: Amber-500 (#f59e0b)
- **Fitness**: Violet-600 (#7c3aed)
- **Kitchen**: Orange-500 (#f97316)

### Typography

- **Font**: Inter / Geist Sans
- **Base**: Slate-900 for text, Slate-50 for backgrounds

## 📝 Usage

### Creating Tasks

- Click "Add Task" button on Dashboard or Projects page
- Use the floating + button on mobile
- Fill in task details (title, description, priority, due date)
- Tasks automatically sync via Firebase

### Managing Tasks

- Click the status icon to cycle: todo → in-progress → done
- Click the trash icon to delete a task
- Use Inbox for quick task capture
- Assign tasks to projects from the Projects page

## 🚢 Deployment

### GitHub Pages

See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for detailed instructions.

### Other Platforms

- **Netlify**: Drag & drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: `vercel --prod`
- **Firebase Hosting**: `firebase deploy --only hosting`

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
