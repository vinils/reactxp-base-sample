/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
import { Item, Input, Button, Text, Container, Content, Left, Right } from "reactxp-base";

const styles = {
    input: RX.Styles.createTextInputStyle({
      paddingLeft: 10,
      color: '#FFF',
    }),
    loginBtn: RX.Styles.createButtonStyle({
      marginTop: 10,
      height: 50,
      alignItems: 'center',
      
      backgroundColor: "#fff",
    }),
    inputGrp: RX.Styles.createViewStyle({
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
        borderWidth: 0,
        borderColor: 'transparent',
    }),
    otherLinksContainer: RX.Styles.createViewStyle({
        flexDirection: 'row',
    }),
    helpBtns: RX.Styles.createTextInputStyle({
        opacity: 0.9,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF'
    }),
};


class MainPanel extends RX.Component<null, null> {
    render() {
        return (
            <Container>
                <Content style={RX.Styles.createScrollViewStyle({marginTop:70})}>
                    <Item rounded style={ styles.inputGrp }>
                        <Input
                        placeholder="E-mail"
                        placeholderTextColor="#FFF"
                        style={styles.input}
                        />
                    </Item>
                    <Item rounded style={ styles.inputGrp }>
                        <Input
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#FFF"
                        style={styles.input}
                        />
                    </Item>
                    <Button 
                      rounded primary
                      style={ styles.loginBtn }
                    >
                        <Text 
                          style={RX.Styles.createTextInputStyle({ fontSize: 16, textAlign: 'center', color:'#efa317', fontWeight: 'bold'})}
                        >
                            Get Started
                        </Text>
                    </Button>
                    <RX.View style={styles.otherLinksContainer}>
                        <Left>
                            <Button transparent style={{ alignSelf: 'flex-start' }}>
                                <Text style={styles.helpBtns}>
                                    Creat Account
                                </Text>
                            </Button>
                        </Left>

                        <Right>
                            <Button transparent style={{ alignSelf: 'flex-end' }}>
                                <Text
                                    style={styles.helpBtns}
                                >
                                    Help?
                                </Text>
                            </Button>
                        </Right>
                    </RX.View>
                </Content>
            </Container>
        );
    }
}

export = MainPanel;
