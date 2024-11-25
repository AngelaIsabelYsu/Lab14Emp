import React , {useState} from "react";
import PropTypes from 'prop-types';

const AppContext = React.createContext();
const { Provider } = AppContext;

function AppProvider({children}){
    const [usuario, setUsuario] = useState(localStorage.usuario);

    function login(data){
        setUsuario(data.username);
        localStorage.usuario = data.username;
    }

    function logout(){
        setUsuario(null);
        localStorage.removeItem('usuario');
    }

    return (
        <Provider value={{ usuario, login, logout }}>
            {children}
        </Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AppProvider, AppContext };