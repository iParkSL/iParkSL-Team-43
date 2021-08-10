import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

function Timer({interval, style}) {
  const pad = n => (n < 10 ? '0' + n : n);
  const duration = moment.duration(interval);
  // const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.textStyle} >{pad(duration.hours())}</Text>
      <Text style={styles.textStyle} >:</Text>
      <Text style={styles.textStyle}>{pad(duration.minutes())}</Text>
      <Text style={styles.textStyle}>:</Text>
      <Text style={styles.textStyle}>{pad(duration.seconds())}</Text>
    </View>
  );
}

function RoundButton({title, color, background, onPress, disabled}) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[styles.button, {backgroundColor: background}]}
      activeOpacity={disabled ? 1.0 : 0.7}>
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function ButtonsRow({children}) {
  return <View style={styles.buttonsRow}>{children}</View>;
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      now: 0,
      laps: [],
    };
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  start = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
      laps: [0],
    });
    this.timer = setInterval(() => {
      this.setState({now: new Date().getTime()});
    }, 100);
  };

  lap = () => {
    const timestamp = new Date().getTime();
    const {laps, now, start} = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp,
    });
  };

  stop = () => {
    clearInterval(this.timer);
    const {laps, now, start} = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
    });
  };
  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    });
  };
  resume = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
    });
    this.timer = setInterval(() => {
      this.setState({now: new Date().getTime()});
    }, 100);
  };
  render() {
    const {now, start, laps} = this.state;
    const timer = now - start;
    return (
      <View style={styles.container}>
        {/* <View style={{flexDirection:'row',padding:10,backgroundColor:'#ffd700'}}> */}
        <View style={{width: '10%'}}>
          {/* <Icon size={30}  name="arrow-left"/> */}
        </View>
        <View style={{width: '90%'}}>
          {/* <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>Timer</Text> */}
        </View>
        {/* </View> */}

       
        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
          style={styles.timer}
        />
        <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => this.props.navigation.push('payment')} >
        
          <LinearGradient
            colors={['#FDC73E', '#ffb907']}
            style={[styles.signIn]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000000',
                },
              ]}>
              Pay Now >>
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize:50,
    alignSelf:'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // paddingTop: 130,
    // paddingHorizontal: 20,
  },
  timer: {
    color: '#ffd700',
    fontSize: 76,
    fontWeight: '200',
    width: 80,
    paddingTop: 100,
    alignItems: 'center',
  },
  button: {
    width: '50%',
    height: 50,
    borderRadius: 12,    
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  buttonTitle: {
    fontSize: 20,
  alignSelf:'center',
  },
  buttonBorder: {
    width: '100%',
    height: 76,
    borderRadius: 15,
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 30,
  },
  scrollView: {
    alignSelf: 'stretch',
  },

  timerContainer: {
    marginTop: 100,
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center', 
    borderWidth:1.5,
    borderColor:'#ffb907',
    borderRadius:125,
    height:250,
    width:250,
    alignSelf:'center',
    

  },

  signIn: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
  textSign: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    // borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    paddingBottom: 5,
    alignSelf: 'center',
    marginBottom: 20,
    
  },
});
