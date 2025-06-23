import { useState } from "react";
import "./App.css";
import HabitItem from "./components/HabitItem";

//type for habit
export interface Habit {
  id: number;
  title: string;
}

//type for tracking completed habit
export interface CompletedHabitsType {
  [id: number]: boolean;
}

function App() {
  //habits list
  const habits: Habit[] = [
    { id: 1, title: "Drink Water" },
    { id: 2, title: "Exercise" },
    { id: 3, title: "Read for 30 minutes" },
  ];

  //intial not completed state for all habits
  const initialState = {
    1: false,
    2: false,
    3: false,
  };

  //completedHabits state for tracking which habits have been completed
  const [completedHabits, setCompletedHabits] =
    useState<CompletedHabitsType>(initialState);

  //arrow function to toggle the completion state of a habit
  const handleToggleCompletion = (id: number) => {
    setCompletedHabits((habit) => ({
      ...habit,
      [id]: !habit[id],
    }));
  };

  //arrow function to reset habit to intial state
  const resetHabitCompletion = () => {
    setCompletedHabits(initialState);
  };

  //const to store the number of habits completed
  const totalHabitsCompleted =
    Object.values(completedHabits).filter(Boolean).length;

  //const to store the total habits completed
  const totalHabits = habits.length;

  return (
    <main className="appWrapper">
      <h3 className="appHeading">Welcome to Habits Tracker</h3>
      <p className="progressInfo">
        {totalHabitsCompleted} of {totalHabits} habits completed
      </p>

      <div className="habitsWrapper">
        {habits.map((item) => (
          <HabitItem
            item={item}
            key={item.id}
            completedHabits={completedHabits}
            handleToggleCompletion={handleToggleCompletion}
          />
        ))}
      </div>

      <button className="resetBtn" onClick={resetHabitCompletion}>
        Reset
      </button>
    </main>
  );
}

export default App;
