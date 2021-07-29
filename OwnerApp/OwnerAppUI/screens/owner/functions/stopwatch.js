import React, { Component } from 'react'
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity,Image
  } from 'react-native'
import moment from 'moment'

function Timer({ interval, style }) {
  const pad = (n) => n < 10 ? '0' + n : n
  const duration = moment.duration(interval)
  // const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <View style={styles.timerContainer}>
      <Text style={style}>{pad(duration.hours())}:</Text>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())}</Text>
    </View>
  )
}

function RoundButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[ styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [ ],
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  start = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
  }
  
  lap = () => {
    const timestamp = new Date().getTime()
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp,
    })
  }

  stop = () => {
    clearInterval(this.timer)
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0,
    })
  }
  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    })
  }
  resume = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
  }
  render() {
    const { now, start, laps } = this.state
    const timer = now - start
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',padding:10,backgroundColor:'#ffd700'}}>
            <View style={{width:"10%"}}>
                {/* <Icon size={30}  name="arrow-left"/> */}
            </View>
            <View style={{width:"90%"}}>
                <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>Timer</Text>
            </View>
        </View>
        
    
        <View style={{marginLeft:20,marginTop:20}}>
          <View  style={{width:'40%'}}>
            
          </View>
          <View style={{width:'60%'}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Kamal Perera</Text>
            <Text style={{fontSize:20}}>2021/2/27</Text>
            <Text style={{fontSize:20}}>1.30 pm</Text>
          </View>
          
        </View>
        
        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
          style={styles.timer}
        />
        {laps.length === 0 && (
          <ButtonsRow>
            
            <RoundButton
              title='Start'
              color='black'
              background='#50D167'
              onPress={this.start}
            />
          </ButtonsRow>
        )}
        {start > 0 && (
          <ButtonsRow>
            
            <RoundButton
              title='Stop'
              color='black'
              background='#E33935'
              onPress={this.stop}
            />
          </ButtonsRow>
        )}
        
      </View>
    )
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

  }
})