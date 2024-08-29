import cn from "classnames";
import type { HTMLAttributes } from "react";

interface IconSwitchProps {
  className?: HTMLAttributes<HTMLButtonElement>['className'];
  icon: 'view_list' | 'view_module';
  onSwitch: () => void;
}

function IconSwitch({ className, icon, onSwitch }: IconSwitchProps) {
  return (
    <button
      className={cn(className, "icon-switch")}
      type="button"
      onClick={onSwitch}
    >
      <span className="icon-switch__icon material-icons">{icon}</span>
    </button>
  );
}

export default IconSwitch;
