import React, { PureComponent } from 'react'

import './MainComponent.css'

import Home from './Home/HomeComponent'

export default class MainComponent extends PureComponent {
    render() {
        return (
            <>
                <Home />
            </>
        )
    }
}
