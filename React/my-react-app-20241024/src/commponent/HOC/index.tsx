// HOC-属性代理-无状态函数
function HOCProxy1(WrappedComponent) {
  const newProxy = { type: "HOC" };
  return (props) => (
    <WrappedComponent {...props} {...newProxy}></WrappedComponent>
  );
}
// HOC-属性代理-有状态函数
function HOCProxy2(WrappedComponent) {
  return class extends React.Component {
    render(): React.ReactNode {
      const newProxy = { type: "HOC" };
      return (
        <WrappedComponent {...this.props} {...newProxy}></WrappedComponent>
      );
    }
  };
}
// 修改属性
function HOC3(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
      };
      this.onChange = this.onChange.bind(this);
    }
    onChange = (event) => {
      this.setState({
        name: event.target.value,
      });
    };
    render() {
      const newProps = { type: "HOC" };
      return (
        <WrappedComponent {...this.props} {...newProps}></WrappedComponent>
      );
    }
  };
}

// 条件渲染及对原组件封装
function HOC4(WrappedComponent) {
  return (props) => (
    <div style={{ backgroundColor: "red" }}>
      {props.isShow ? (
        <WrappedComponent {...props}></WrappedComponent>
      ) : (
        <div>无数据</div>
      )}
    </div>
  );
}
// 生命周期劫持
function HOC5(WrappedComponent) {
  const didMount = WrappedComponent.prototype.componentDidMount;
  const wrapState = WrappedComponent.prototype.state;
  const state = {
    ...wrapState,
  };
  return class HOC extends WrappedComponent {
    componentDidMount() {
      didMount && didMount.apply(this);
      console.log("HOC5");
      // 修改原组件的状态
      this.setState({ number: 2 });
    }
    render() {
      return super.render();
    }
  };
}

const withFetchingHOC = (WrappedComponent, fetchingMethod, defaultData) => {
  return class extends React.Component {
    state = {
      data: [],
    };
    async componentDidMount() {
      const data = fetchingMethod();
      this.setState({ data });
    }
    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          defaultData={defaultData}
          {...this.props}
        ></WrappedComponent>
      );
    }
  };
};
let str = "hello";
str = str + "world";
console.log(str);
