import React from "react";
import Alert from './Alert'

const App = () => {
    return (
        <div className="container mt-5">
            <Alert text="Junco"/>
            <Alert text="Ana"/>
            <Alert />
        </div>
    );
}

export default App;