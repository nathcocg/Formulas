import { Text, Image, SafeAreaView } from "react-native";

import BottomTabNavigator from "../navigation/TabNavigator";

export default class AlarmScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false,
          light_theme: true,
          posts: this.props.post
        };
      }
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Alarmes</Text>
                    </View>
                </View>
            </View>
        );
    }
}