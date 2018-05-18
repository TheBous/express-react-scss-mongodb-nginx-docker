import React, {Component} from 'react';

import FirstComponent from "./components/FirstComponent";
import './styles/main.css';

class App extends Component {
    render() {
        return (
            <div>
                <FirstComponent/>
                <h1>change</h1>
            </div>
        );
    }
}

export default App;
