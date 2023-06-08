import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Player from "./pages/Player";
import NotFound from "./pages/NaoEncontrada";
import Base from "./pages/Base";

const AppRoutes = () => {
    return(
        <BrowserRouter>
                    <Routes>
                        <Route path="/"element={<Base/>}>
                            <Route index element={<Inicio/>}></Route>
                            <Route path="Favoritos" element={<Favoritos/>}></Route>
                            <Route path=":id" element={<Player/>}></Route>
                            <Route path="*" element={<NotFound/>}></Route>
                        </Route>

                    </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes;