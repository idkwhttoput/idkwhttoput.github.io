interface SkillBarProps {
  name: string;
  percentage: number;
  color?: "primary" | "accent";
}

export function SkillBar({ name, percentage, color = "primary" }: SkillBarProps) {
  const colorClass = color === "primary" ? "bg-primary" : "bg-accent";
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
        <span className="text-gray-600 dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`${colorClass} rounded-full h-2.5`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
