import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundry.styles';

class ErrorBoundry extends React.Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {

        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state,hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
                    <ErrorImageText>We are Sorry, this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }

}

export default ErrorBoundry;