<template>
  <div>
    <button
      @click="messageHandler"
      style="font-size: 18px;">
      messageHandler点击
    </button>
    <button
      @click="llBridgeProtocol"
      style="font-size: 18px;">
      llBridgeProtocol点击
    </button>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    messageHandler () {
    //   var action = 'loginS /ucceed'
      //   window.webkit.messageHandler.jsToOc.postMessage(action, token)
      // window.webkit.messageHandlers.<name>.postMessage(<messageBody>)
      // 这个name就是设置MessageHandler的第二个参数
    //   alert('test', token)
      let body = {
        'moduleName': 'sessionstorage',
        'method': 'getItem',
        'params': [
          {
            'param1': 'value1'
          },
          'ocToJsCallBack' ]
      }
      body = JSON.stringify(body)
      window.webkit.messageHandlers.llbridge.postMessage(body)
    },
    llBridgeProtocol () {
      var parms = [{ 'param1': 'value1' }, 'ocToJsCallBackByLLBridge']
      var url = 'llbridge://' + 'sessionstorage.' + 'getItem?' + JSON.stringify(parms)
      window.location.href = url
    }
  }
}
</script>
