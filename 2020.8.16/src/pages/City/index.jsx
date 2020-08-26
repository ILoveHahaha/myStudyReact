import React from 'react'
import CityHeader from '../../components/Header'
import CurrentCity from './CurrentCity'
import HotCity from './HotCity'

import { connect } from 'react-redux'
import * as cityActions from '../../action/city'
import {bindActionCreators} from 'redux'

class City extends React.Component{

    onCityNameHandler = (cityName) => {
        this.props.cityActions.updateCity({
            cityName: cityName
        });

        window.history.back(-1)
        localStorage.setItem('city', cityName);
    };

    render () {
        return (
            <div>
                <CityHeader title={'城市选择'} />
                <CurrentCity city={this.props.city.cityName} />
                <HotCity cityNameHandler={this.onCityNameHandler} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        city:state.city
    }
}

function mapDispatchToProps(dispatch) {
    return{
        cityActions: bindActionCreators(cityActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
