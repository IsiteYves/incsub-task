import "./App.css";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="Main-container flex">
      {/* CONTENT HOLDER */}
      <Content />

      {/* RIGHT SIDEBAR */}
      <RightSidebar
        title="Dummy Heading"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
}

export default App;
