import Trash from '../../assets/icons/trash.svg'
import Menu from '../../assets/icons/menu.svg'
import Add from "../../assets/icons/add.svg";
import Setting from "../../assets/icons/setting.svg";

const iconMap = {
  trash: Trash,
  menu: Menu,
  add: Add,
  setting: Setting
}

export default function IconComponent({ name, className }) {
  return (
    <img src={iconMap[name]} alt={name} className={className} />
  )
}