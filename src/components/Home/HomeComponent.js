import React, { PureComponent } from 'react'
import { Container } from 'reactstrap'

import './HomeComponent.css'

import Watermark from './Watermark/WatermarkComponent'

export default class HomeComponent extends PureComponent {
    render() {
        return (
            <Container className="weather-container" fluid={true}>
                <Watermark />
            </Container>
        )
    }
}
