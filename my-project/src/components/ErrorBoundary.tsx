
import PropTypes from 'prop-types'
import React from 'react'
import { Plateform } from 'react-native'


interface Props{
  title:string,
  children:any
}
export default class ErrorBoundary extends React.PureComponent{
  static propTypes:{children:PropTypes.Requireable<any>;title?:string}
  constructor(props:Props){
    super(props)
    this.state = {
      error:null,
      errorInfo:null
    }
  }
  componentDidCatch(error,errorInfo:React.Errorinfo):void{
    this.setState({error,errorInfo},()=>{
      if(Plateform.OS === 'web'){
        try {
          setTimeout(()=>{
            if(self){
              const iframe = self.document.getElementsByTagName('iframe')
              Array.prototype.forEach.call(iframe,(element)=>{
                if(element){
                  self.document.body.removeChild(element)
                }
              })
            }
          },2000)
        } catch (error) {
          
        }
      }


      try {
        const errName = this.props.title ?? ''
        // 上报日志
        console.log(errName);
        
      } catch (error) {
        
      }

    })
  }

  render(){
    if(this.state.errorInfo){
      return null
    }
    return <>{this.props.children}</>
  }
}
ErrorBoundary.propTypes = {
  children:PropTypes.any
}
