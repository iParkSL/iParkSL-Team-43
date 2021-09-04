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
import axios from 'axios';

var i=0;
var j=1;
function Timer({interval, style}) {
  const pad = n => (n < 10 ? '0' + n : n);
  const duration = moment.duration(interval);
  // const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <View style={styles.timerContainer}>
      <Text style={style}>{pad(duration.hours())}:</Text>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())}</Text>
    </View>
  );
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      now: 0,
      laps: [],
      timerOnOff:0,
      k: 0,
      id:0
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
  componentDidMount(){
    this.timer=setInterval(()=> this.timerFunction(),5000)
  }
  async timerFunction(){
    if(i==0){
      axios.get('http://localhost:8080/timerOn',{params:{id:this.state.id}}
      ).then(res=>{
        console.log(res);
      this.setState({
        timerOnOff:res.data[0].timerOn,
        });
      });
      if(this.state.timerOnOff==1){
        i=1;
        j=0;
        this.start()
      }
    }
    if(j==0){
      axios.get('http://localhost:8080/timerOn',{params:{id:this.state.id}}
      ).then(res=>{
        console.log(res);
      this.setState({
        timerOnOff:res.data[0].timerOn,
        });
      });
      if(this.state.timerOnOff==0){
        i=2;
        j=1;
        this.stop()
      }
    }
    if(i==2){
      axios.get('http://localhost:8080/timerOn',{params:{id:this.state.id}}
      ).then(res=>{
        console.log(res);
      this.setState({
        timerOnOff:res.data[0].timerOn,
        });
      });
      if(this.state.timerOnOff==1){
        i=1;
        j=0;
        this.resume()
      }
    }
  }
  render() {
    const {bid} =this.props.route.params;
    if(this.state.k==0){
      this.setState({
        id:bid,
        k:1
        });
    }
    


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

        <View style={{marginLeft: 20, marginTop: 20}}>
          <View style={{width: '40%'}}></View>
          <View style={{width: '60%'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Kamal Perera</Text>
            <Text style={{fontSize: 20}}>2021/2/27</Text>
            <Text style={{fontSize: 20}}>1.30 pm</Text>
            <Text>{this.state.k}</Text>
          </View>
        </View>

        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
          style={styles.timer}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    width: 110,
    paddingTop: 100,
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 80,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 28,
  },
  buttonBorder: {
    width: '100%',
    height: 76,
    borderRadius: 18,
    borderWidth: 1,
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
