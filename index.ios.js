/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import "github.com/lyft/lyft-go-sdk/lyft";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Logo extends Component {
  render(){
    let pic = {
      uri: 'https://2ecyvk3piszv4e6gv2yz9867-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/uber-and-lyft-side-by-side.png'
    };
    debugger;
    return (
      <Image source={pic} style={{width: 193, height: 110, marginTop: 20}}/>
    );
  }
}

export default class AwesomeProject extends Component {
  render() {
    let ride1= {
      rideType: 'Line',
      name: 'Tony',
      price: 2.50,
      eta: 3
    };

    let ride2 = {
      rideType: 'Pool',
      name: 'Vinson',
      price: 3.25,
      eta: 5
    };

    let rides = [ride1, ride2];
    return (
      // <Logo />
      // <LotsOfGreetings />
      // <LyftCar car={ride1} />
      <LyftCars rides={rides} />
      // <PrintLyft />
    )
  }
}

class LyftCars extends Component {
  render(){
    let list = [];

    this.props.rides.forEach(ride => (
      list.push(<LyftCar car={ride} />)
    ))



    return (
      <View style={{alignItems: 'center', marginTop: 20}}>
        {list}
      </View>
    );
  }
}

class LyftCar extends Component {
  render(){
    return (
      <View style={{marginTop: 20}}>
        <Text>{this.props.car.rideType}</Text>
        <Text>${this.props.car.price}</Text>
        <Text>{this.props.car.eta} minutes</Text>
      </View>
    )
  }
}

// class PrintLyft extends Component {
//   render(){
//     opt := map[string]interface{}{
//     	"endLat": 37.7972,
//     	"endLng": -122.4533,
//     }
//
//     result, resp, err := client.PublicApi.GetCost(37.7763, -122.3918, opt)
//
//     return(
//       <View>
//         {result}
//       </View>
//     )
//   }
// }

class Greeting extends Component {
  render(){
    return (
      <Text>Hello, {this.props.name}!</Text>
    )
  }
}

class LotsOfGreetings extends Component {
  render(){
    return (
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    )
  }
}

// const requestRides = (lat,long) => (
//   $.ajax({
//     method: 'GET'
//     url: 'https://api.lyft.com/v1/cost'
//     data: ()
//   })
// )



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
// AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
