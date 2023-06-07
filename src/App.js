import "./App.css";
import Layout from "./components/Layout";
import { ContextWrapper } from "./context/ContextWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { GlobalStyles } from "./components/GlobalStyles";
import KicksHub from "./pages/kicksHub";
import TravelGo from "./pages/travelGo";
import PreviewLayout from "./components/PreviewLayout";

function App() {
  const Wrapper = (items) => {
    return (
      <ContextWrapper>
        <GlobalStyles />
        <Layout theme>{items}</Layout>
      </ContextWrapper>
    );
  };

  const PreviewWrapper = (items) => {
    return (
      <ContextWrapper>
        <GlobalStyles />
        <PreviewLayout theme>{items}</PreviewLayout>
      </ContextWrapper>
    );
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={Wrapper(<Home />)} />
          <Route
            exact
            path="/kickshub-preview"
            element={PreviewWrapper(<KicksHub />)}
          />
          <Route
            exact
            path="/travelgo-preview"
            element={PreviewWrapper(<TravelGo />)}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
