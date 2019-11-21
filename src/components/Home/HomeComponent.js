import React, { PureComponent } from 'react'
import { Container } from 'reactstrap'

import './HomeComponent.css'

import Watermark from './Watermark/WatermarkComponent'
import SearchBarComponent from './SearchBar/SearchBarComponent'

export default class HomeComponent extends PureComponent {
    render() {
        return (
            <>
                <Container className="weather-container" fluid={true}>
                    <SearchBarComponent />
                </Container>
                <Watermark />
            </>
        )
    }
}
