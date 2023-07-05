import { Text, Image, SafeAreaView } from "react-native";

import BottomTabNavigator from "../navigation/TabNavigator";

export default class DetailsScreen extends Component {
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
                        <Text style={styles.appTitleText}>Sobre a fórmula</Text>
                    </View>
                        <View>
                         <Text>Fórmula: (fórmula)</Text>
                         <Text>Dica para gravar: (dica)</Text>
                        <View/>
                    </View>
                </View>
            </View>
        );
    }
}