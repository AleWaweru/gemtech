type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: 'btn_dark_green';
  }
  
  const Button = ({ type, title, icon, variant }: ButtonProps) => {
    return (
      <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
         {icon && <img src={icon} alt="Icon" />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    );
  }
  
  export default Button;
  