import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

const MAIN_COLOR = "#face55";

class LPTScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      text: ""
    };
  }
  openUpPicker() {
    try {
      const { action, year, month, day } = DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date(2020, 4, 25)
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: MAIN_COLOR
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.innerContent}>
          <View>
            <Text>Section</Text>
            <Text>1. Choose Category & Product</Text>
            <ScrollView
              style={styles.carousel}
              horizontal //scrolling left to right instead of top to bottom
              showsHorizontalScrollIndicator={false} //hides native scrollbar
              scrollEventThrottle={10} //how often we update the position of the indicator bar
              pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
            >
              <View>
                <Image
                  key={0}
                  source={{
                    uri:
                      "http://resorts.hiltonbusinessonline.com/wp-content/uploads/2016/12/hybiscus-800x500.jpg"
                  }}
                  style={{ width: 290, height: 200, marginRight: 25 }}
                />
                <Text>Power Mail</Text>

                <Image
                  key={0}
                  source={{
                    uri:
                      "http://resorts.hiltonbusinessonline.com/wp-content/uploads/2016/12/hybiscus-800x500.jpg"
                  }}
                  style={{ width: 290, height: 200, marginRight: 25 }}
                />
                <Text>Power Mail</Text>

                <Image
                  key={0}
                  source={{
                    uri:
                      "http://resorts.hiltonbusinessonline.com/wp-content/uploads/2016/12/hybiscus-800x500.jpg"
                  }}
                  style={{ width: 290, height: 200, marginRight: 25 }}
                />
                <Text>Power Mail</Text>
              </View>
            </ScrollView>
            <Text> ---------------</Text>
            <Text>2. Configure & Approve</Text>
            <Text>Template</Text>
            <Text>Template Color</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  innerContent: {
    overflow: "scroll",
    paddingTop: 30
  },
  bg: {
    position: "absolute",
    width: "auto",
    height: "50%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingLeft: 15,
    paddingRight: 15
  },
  tp: {
    backgroundColor: "rgba(0,0,0, .8)",
    alignSelf: "center",
    width: 290
  },
  input: {
    marginRight: 15,
    marginTop: 0,
    marginLeft: 15,
    marginBottom: 0,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    color: "white"
  },
  noBorder: {
    borderBottomWidth: 0
  },
  searchBtn: {
    backgroundColor: "#62c623",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8
  },
  colorWhite: {
    color: "white"
  },
  hotelsSection: {
    marginTop: 75,
    backgroundColor: "white",
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 15
  },
  hotelName: {
    position: "absolute",
    bottom: 50,
    left: 20,
    color: "white"
  },
  perNight: {
    backgroundColor: "#62c623",
    position: "absolute",
    bottom: 15,
    left: 0,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    color: "white"
  },
  small: {
    fontSize: 10
  },
  carousel: {
    marginTop: 10,
    marginBottom: 30
  }
});

export default LPTScreen;
