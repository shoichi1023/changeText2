import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Result_styles';

class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>『 {this.props.out_text} 』</Text>
        <TouchableOpacity style={styles.tOpa} onPress={ () => { this.props.navigation.goBack(); } }>
          <Text style={styles.btnTxt}>戻る</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => state.ct;


export default connect(mapStateToProps)(Result);