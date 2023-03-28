import './NavToggle.css';
const NavToggle = ({ checked = false, onClick = () => {} }) => {
  const classNames = ["menu_toggle_icon", checked ? "menu_show" : ""].join(' ');
  return (
    <>
      <div className={classNames} onClick={onClick}>
        <div className="hmb dgn pt-1"></div>
        <div className="hmb hrz"></div>
        <div className="hmb dgn pt-2"></div>
      </div>
    </>
  );
}

export default NavToggle;
