import { Route, Routes} from 'react-router-dom';
import { Home } from '../../pages/home/home';
import { MyProfile } from '../../pages/profile/myProfile'; 

export const RouteCreate =()=>{
    return(
        <Routes>
            <Route path="/zero-duvida/home"  element={<Home />} />
            <Route path='/zero-duvida/profile'  element={<MyProfile />} />
        </Routes>
    )
}