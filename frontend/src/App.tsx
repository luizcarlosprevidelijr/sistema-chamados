import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import NovoChamado from "./pages/NovoChamado";
import ChamadoDetalhe from "./pages/ChamadoDetalhe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/novo-chamado" element={<NovoChamado />} />
          <Route path="/chamado/:id" element={<ChamadoDetalhe />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
