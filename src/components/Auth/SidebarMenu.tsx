interface MenuProp {
  icon: React.ReactNode;
  menuTitle: string;
}
export const SidebarMenu: React.FC<MenuProp> = ({ icon, menuTitle }) => {
  return (
    <div className="flex gap-2 items-center mt-5 cursor-pointer">
      <div>{icon}</div>
      <h1 className="font-bold font-customNunito">{menuTitle}</h1>
    </div>
  );
};
