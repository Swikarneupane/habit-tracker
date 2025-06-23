import type { CompletedHabitsType, Habit } from "../App";

//HabitItem props type
interface Props {
  item: Habit;
  completedHabits: CompletedHabitsType;
  handleToggleCompletion: (arg: number) => void;
}

const HabitItem = ({
  item,
  completedHabits,
  handleToggleCompletion,
}: Props) => {
  return (
    <div key={item.id} className="habitItemWrapper">
      <p className="habitItemTitle">{item.title}</p>
      <label className="habitItemLabel">
        <input
          type="checkbox"
          readOnly
          placeholder="Done"
          checked={completedHabits[item.id]}
          className="habitItemCheckbox"
          onChange={() => handleToggleCompletion(item.id)}
        />
      </label>
    </div>
  );
};

export default HabitItem;
