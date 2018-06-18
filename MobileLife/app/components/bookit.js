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

const MAIN_COLOR = "#62c623";

class BookitScreen extends Component {
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
    headerTintColor: "#fff",
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={{
            uri:
              "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/AusGeo/2016/12/05/64305/Direction-Island-HR-(4-of-18).jpg"
          }}
        />
        <ScrollView style={styles.innerContent}>
          <View style={styles.tp}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              placeholderTextColor="white"
              placeholder="Cancun, Miami"
              onChangeText={text => this.setState({ input: text })}
              windowSoftInputMode="adjustPan"
            />
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              placeholderTextColor="white"
              placeholder="23 - 26"
              onChangeText={text => this.setState({ input: text })}
              onPress={() => this.openUpPicker()}
              windowSoftInputMode="adjustPan"
            />

            <TextInput
              underlineColorAndroid="transparent"
              style={[styles.input, styles.noBorder]}
              placeholderTextColor="white"
              placeholder="1 Room: 2 Adults"
              onChangeText={text => this.setState({ input: text })}
              windowSoftInputMode="adjustPan"
            />
            <TouchableOpacity style={styles.searchBtn}>
              <Text style={styles.colorWhite}>Search for Hotels</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hotelsSection}>
            <Text>Recent Searches</Text>
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
                <Text style={styles.hotelName}>Caribe Royale</Text>
                <Text style={styles.perNight}>
                  From $315 / <Text style={styles.small}>night</Text>
                </Text>
              </View>
              <Image
                key={1}
                source={{
                  uri:
                    "https://greenvalleyranch.sclv.com/~/media/Images/Page-Background-Images/GVR/Hotel/GV_Hotel_Exterior4Pool-2012.jpg?h=630&la=en&w=1080"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
              <Text style={styles.hotelName}>Caribe Royale</Text>
              <Text style={styles.perNight}>
                From $315 / <Text style={styles.small}>night</Text>
              </Text>
              <Image
                key={2}
                source={{
                  uri:
                    "https://t-ec.bstatic.com/images/hotel/max1280x900/172/17239785.jpg"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
              <Text style={styles.hotelName}>Caribe Royale</Text>
              <Text style={styles.perNight}>
                From $315 / <Text style={styles.small}>night</Text>
              </Text>
            </ScrollView>
            <Text>Deals in Orlando</Text>
            <ScrollView
              style={styles.carousel}
              horizontal //scrolling left to right instead of top to bottom
              showsHorizontalScrollIndicator={false} //hides native scrollbar
              scrollEventThrottle={10} //how often we update the position of the indicator bar
              pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
            >
              <Image
                key={0}
                source={{
                  uri:
                    "http://resorts.hiltonbusinessonline.com/wp-content/uploads/2016/12/hybiscus-800x500.jpg"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
              <Image
                key={1}
                source={{
                  uri:
                    "https://greenvalleyranch.sclv.com/~/media/Images/Page-Background-Images/GVR/Hotel/GV_Hotel_Exterior4Pool-2012.jpg?h=630&la=en&w=1080"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
              <Image
                key={2}
                source={{
                  uri:
                    "https://t-ec.bstatic.com/images/hotel/max1280x900/172/17239785.jpg"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
            </ScrollView>
            <Text>Top Ten Deals</Text>
            <ScrollView
              style={styles.carousel}
              horizontal //scrolling left to right instead of top to bottom
              showsHorizontalScrollIndicator={false} //hides native scrollbar
              scrollEventThrottle={10} //how often we update the position of the indicator bar
              pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
            >
              <Image
                key={0}
                source={{
                  uri:
                    "http://resorts.hiltonbusinessonline.com/wp-content/uploads/2016/12/hybiscus-800x500.jpg"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
              <Image
                key={1}
                source={{
                  uri:
                    "https://greenvalleyranch.sclv.com/~/media/Images/Page-Background-Images/GVR/Hotel/GV_Hotel_Exterior4Pool-2012.jpg?h=630&la=en&w=1080"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
              <Image
                key={2}
                source={{
                  uri:
                    "https://t-ec.bstatic.com/images/hotel/max1280x900/172/17239785.jpg"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
            </ScrollView>
            <Text>Popular Deals in Miami</Text>
            <ScrollView
              style={styles.carousel}
              horizontal //scrolling left to right instead of top to bottom
              showsHorizontalScrollIndicator={false} //hides native scrollbar
              scrollEventThrottle={10} //how often we update the position of the indicator bar
              pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
            >
              <Image
                key={0}
                source={{
                  uri:
                    "http://resorts.hiltonbusinessonline.com/wp-content/uploads/2016/12/hybiscus-800x500.jpg"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
              <Image
                key={1}
                source={{
                  uri:
                    "https://greenvalleyranch.sclv.com/~/media/Images/Page-Background-Images/GVR/Hotel/GV_Hotel_Exterior4Pool-2012.jpg?h=630&la=en&w=1080"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
              <Image
                key={2}
                source={{
                  uri:
                    "https://t-ec.bstatic.com/images/hotel/max1280x900/172/17239785.jpg"
                }}
                style={{ width: 290, height: 200, marginRight: 25 }}
              />
            </ScrollView>
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
    backgroundColor: MAIN_COLOR,
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
    backgroundColor: MAIN_COLOR,
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

export default BookitScreen;
