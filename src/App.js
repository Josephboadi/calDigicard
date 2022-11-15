import { Routes, Route } from "react-router-dom";
import GetUserInfo from "./components/GetUserInfo";
import { AccessPage, CardPage, NoAccessPage } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/access/:id" element={<AccessPage />} />
      <Route element={<GetUserInfo />}>
        <Route path="/cardpage/:id" element={<CardPage />} />
      </Route>

      <Route path="*" element={<NoAccessPage />} />
    </Routes>
  );
}

export default App;
