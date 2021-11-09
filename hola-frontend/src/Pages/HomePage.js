import React from 'react';

function Navibar ()  {
    return (
        <div>
        <Navibar>
        <h1>Navbar</h1>
        </Navibar>
        </div>
    );
}

function HomePage() {
    return (
        <div>
            <Navibar/>
            <Content/>
        </div>
    );
}


const Content = () => {
    return (
        <div>
            
        <h1>Bienvenido A Hola TL </h1>
        <h2> Cambiamos Vidas!</h2>
        </div>
    );
}
export default HomePage;

