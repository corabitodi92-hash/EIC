import "./Programs.css";

export default function Icons({ title, icon }) {
  return (
    <div className="program-card">
      <div className="program-icon">{icon}</div>
      <h4>{title}</h4>
    </div>
  );
}