/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import "github.com/lyft/lyft-go-sdk/lyft";
import MapView from 'react-native-maps';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

class Nav extends Component {
  render() {
    return(
      <View style={{flex:1, flexDirection: 'row', marginTop: 20}}>
        <View style={{flex: 1, height: 44, backgroundColor: 'teal'}}><Text>Map</Text></View>
        <View style={{flex: 1, height: 44, backgroundColor: 'skyblue'}}><Text>Results</Text></View>
        <View style={{flex: 1, height: 44, backgroundColor: 'powderblue'}}><Text>Help</Text></View>

      </View>
    );
  }
}


// fetch('uri', {
//   method: 'GET',
//   headers: {
//
//   },
//   body: {
//
//   }
// });



class Logo extends Component {
  render(){
    let pic = {
      uri: 'https://2ecyvk3piszv4e6gv2yz9867-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/uber-and-lyft-side-by-side.png'
    };

    return (
        <Image source={pic} style={{width: 375, height: 100, marginTop: 44}}/>
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

      <View>
        <Nav />
        <Logo />
        <View className="ridesContainer">
          <LyftCars className="lyftRides" rides={rides} />
        </View>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}

          showsUserLocation={true}

          />
        <Button title="Find your Ride" color="#FF00BF" accessibilityLabel="Book your ride" disabled={true}/>
        <TouchableOpacity disabled={true}><Text>Find your Ride</Text></TouchableOpacity>
      </View>
    );
  }
}

class LyftCars extends Component {
  render(){
    let list = [];

    this.props.rides.forEach(ride => (
      list.push(<LyftCar car={ride} />)
    ));



    return (
      <View>
        {list}
      </View>
    );
  }
}

class LyftCar extends Component {
  render(){
    return (
      <View style={[styles.lyft, styles.lyftContainer]}>
        <Text style={[styles.lyft,styles.row1, styles.rideType]}>{this.props.car.rideType}</Text>
        <Text style={[styles.lyft, styles.row2]}>
          <Text style={[styles.lyft, styles.lyftArrow]}>&laquo;</Text>
          <Text style={[styles.lyft, styles.price]}>${this.props.car.price.toFixed(2)}</Text>


        </Text>
        <Text style={[styles.lyft, styles.row3, styles.eta]}>eta: {this.props.car.eta} minutes</Text>
      </View>
    );
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

// const requestRides = (lat,long) => (
//   $.ajax({
//     method: 'GET'
//     url: 'https://api.lyft.com/v1/cost'
//     data: ()
//   })
// )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  lyftContainer: {
    marginTop: 20,
  },

  rideType: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row2: {
    color: '#FF00BF',
  },

  price: {
    fontSize: 48,
  },
  lyftArrow: {
    fontSize: 80,
    fontWeight: '200',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  }

});



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
// AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
