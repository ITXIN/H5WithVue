import React from 'react';

export function HOCCom1(WrappedComponent) {
    const newProps = { type: 'HOC' };
    return props => <WrappedComponent {...props} {...newProps}></WrappedComponent>;
}

export function HOCCom2(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: '',
            };
            this.onChange = this.onChange.bind(this);
        }

        onChange = event => {
            this.setState({
                name: event.target.value,
            });
        };

        render() {
            const newProps = { type: 'HOC' };
            return <WrappedComponent {...this.props} {...newProps}></WrappedComponent>;
        }
    };
}
