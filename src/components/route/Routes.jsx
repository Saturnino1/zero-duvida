import { Route, Routes} from 'react-router-dom';
import { Home } from '../../pages/home/home';
import { Login } from '../../pages/login/login';
import { MyProfile } from '../../pages/profile/myProfile'; 
import { Welcome } from '../../pages/welcome/wel';

export const RouteCreate =()=>{
    return(
        <Routes>
            <Route path="/zero-duvida"  element={<Welcome />} />
            <Route path="/zero-duvida/login"  element={<Login />} />
            {/* <Route path="/zero-duvida/solicitar" element={<Home />} /> */}
            <Route path="/zero-duvida/home"  element={<Home />} />
            <Route path='/zero-duvida/profile'  element={<MyProfile />} />
        </Routes>
    )
}