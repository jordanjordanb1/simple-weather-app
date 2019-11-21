import React, { PureComponent } from 'react'

import './SearchBarComponent.css'
import { fetchWeather } from '../../../redux/ActionCreators'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
    fetchWeather: values => dispatch(fetchWeather(values))
})

class SearchBarComponent extends PureComponent {
    handleEnter(e, value) {
        if (e.keyCode === 13) {
            e.preventDefault()

            this.props.fetchWeather(value)
        }
    }

    render() {
        return (
            <div className="searchbar-container">
                <h1>Search for a city</h1>
                <input onKeyUp={(e) => this.handleEnter(e, e.target.value)} type="text" maxLength="23" autoFocus className="form-control" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" /><span>USA</span>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SearchBarComponent)
