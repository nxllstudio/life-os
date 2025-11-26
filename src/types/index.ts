// Finance Types
export interface Transaction {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: Date;
  type: 'income' | 'expense';
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  name: string;
  amount: number;
  frequency: 'monthly' | 'yearly' | 'weekly';
  nextBillingDate: Date;
  category: string;
  createdAt: Date;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  period: 'monthly' | 'yearly';
  currentSpent: number;
  createdAt: Date;
}

// Project Management Types
export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold';
  priority: 'high' | 'medium' | 'low';
  progress: number; // 0-100
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  projectId: string | null; // null for inbox tasks
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'high' | 'medium' | 'low';
  dueDate?: Date;
  dependencies: string[]; // Array of task IDs
  createdAt: Date;
  updatedAt: Date;
}

// Library/Knowledge Management Types
export interface Book {
  id: string;
  title: string;
  author: string;
  rating: number; // 0-5
  status: 'want-to-read' | 'reading' | 'read';
  progress: number; // 0-100
  coverUrl?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Note {
  id: string;
  title: string;
  content: string; // Markdown
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Highlight {
  id: string;
  bookId: string;
  quote: string;
  page?: number;
  note?: string;
  createdAt: Date;
}

// Fitness Types
export interface Exercise {
  id: string;
  name: string;
  muscleGroups: string[];
  description?: string;
  createdAt: Date;
}

export interface WorkoutLog {
  id: string;
  exerciseId: string;
  date: Date;
  sets: WorkoutSet[];
  notes?: string;
  createdAt: Date;
}

export interface WorkoutSet {
  reps: number;
  weight: number;
  isPR: boolean; // Personal Record
}

export interface Routine {
  id: string;
  name: string;
  days: {
    [day: string]: string[]; // day -> exercise IDs
  };
  createdAt: Date;
  updatedAt: Date;
}

// Kitchen/Nutrition Types
export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  ingredients: Ingredient[];
  instructions: string[];
  macros: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  servings: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface ShoppingList {
  id: string;
  items: ShoppingListItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ShoppingListItem {
  name: string;
  quantity: number;
  unit: string;
  checked: boolean;
}

// User Types
export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
}

