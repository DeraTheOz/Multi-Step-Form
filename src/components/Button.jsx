function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={
        type === "next"
          ? "btn-next"
          : type === "confirm"
          ? "btn-confirm"
          : "btn-back"
      }
    >
      {children}
    </button>
  );
}

export default Button;
