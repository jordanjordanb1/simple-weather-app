import React, { PureComponent } from 'react'

import './WatermarkComponent.css'

export default class WatermarkComponent extends PureComponent {
    render() {
        return (
            <div className="watermark-container">
                <h1>Made by <a target="_blank" rel="noopener noreferrer" href="https://jordanbarbosa.com">Jordan Barbosa</a> <a href="https://github.com/jordanjordanb1/simple-weather-app" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></h1>
            </div>
        )
    }
}
