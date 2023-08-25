import "./index.css";

export default function ColorText({ Text, className }) {
  return (
    <div className={`color-text ${className}`}>
      <svg viewBox="0 0 600 100">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">
            {Text}
          </text>
        </symbol>
        <use className="text" href="#s-text"></use>
        <use className="text" href="#s-text"></use>
        <use className="text" href="#s-text"></use>
        <use className="text" href="#s-text"></use>
        <use className="text" href="#s-text"></use>
      </svg>
    </div>
  );
}
