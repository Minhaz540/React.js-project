import React from 'react';
import Car from './components/car';
import Hall from './components/hall'

export default class App extends React.Component {
    render() {
        const total = [10,20,30];
        const models = {top: "t53wd", cheap: "k46lk"};
        return (
            <div>
                <Car model={models} totalCount={total[1]}/>
                <Car model={models} totalCount={total[2]}/>
                <Hall hallName="Kingdom war" locate = "Dhaka"/>
            </div>
        );
    }
}

