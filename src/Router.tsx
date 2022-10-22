import { Route, Routes, Navigate } from "react-router-dom";
import { PixList } from "./pages/PixList";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PixList />} />
    </Routes>
  );
}
