import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import { StackNavigator, createStackNavigator } from "react-navigation";
import { YellowBox } from "react-native";

import BookitScreen from "./src/components/bookit.js";
import FARScreen from "./src/components/far.js";
import LPTScreen from "./src/components/lpt.js";

//Get rid of https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const MAIN_COLOR = "#b71c1c";

type Props = {};

class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.colorWhite}>LJ</Text>
        <Text style={styles.colorWhite}>Logo</Text>
        <Text style={styles.colorWhite}>Menu</Text>
      </View>
    );
  }
}

class MainScreen extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: MAIN_COLOR
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerTitle: <Header />
  };
  render() {
    var projectList = [
      { title: "Bookit.com", path: "Bookit" },
      { title: "LPT", path: "LPT" },
      { title: "FAR", path: "FAR" }
    ];
    var buttons = [];

    for (var i = 0; i < projectList.length; i++) {
      var name = projectList[i].path;
      buttons.push(
        <TouchableOpacity
          style={styles.projectBtn}
          key={i}
          onPress={() =>
            this.props.navigation.navigate(name, {
              name: "data"
            })
          }
        >
          <Text style={styles.projectBtnTxt}>{projectList[i].title}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>
            Hello all, At this time I would like to think you for taking time
            out of your day to visit my site. Have a look around and tell me
            what you think.In case you wanted to know, let me introduce myself.
            My name is Loveson Joseph, but I usually go by LJ. I graduated from
            UCF with a degree in Information Technology and a minor in digital
            media
          </Text>
          <View style={styles.btnContainer}>{buttons}</View>
        </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: MainScreen,
    Details: DetailsScreen,
    Bookit: BookitScreen,
    LPT: LPTScreen,
    FAR: FARScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFAFA"
  },
  header: {
    height: 50,
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3
  },
  colorWhite: {
    color: "white"
  },
  footer: {
    alignContent: "flex-end",
    display: "flex",
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 50,
    borderTopWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: "#EEEEEE"
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 15,
    paddingTop: 20
  },
  textCenter: {
    textAlign: "center",
    marginBottom: 10
  },
  siteBtn: {
    marginBottom: "15px",
    backgroundColor: MAIN_COLOR
  },
  headerTxt: {
    color: "white",
    alignItems: "center"
  },
  footerTxt: {},
  btnContainer: {
    marginTop: 100
  },
  projectBtn: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: MAIN_COLOR,
    backgroundColor: "#fff",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 3
  },
  projectBtnTxt: {
    textAlign: "center",
    color: "#990000"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
