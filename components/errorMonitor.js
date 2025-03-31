class MonitoringSDK {
    constructor() {
        this.init();
    }

    init() {
        window.onerror = this.handleError.bind(this);
        window.addEventListener('error', this.handleResourceError.bind(this), true);
        window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
    }

    handleError(message, source, lineno, colno, error) {
        console.error('JS Error:', { message, source, lineno, colno, error });
    }

    handleResourceError(event) {
        if (event.target && (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT')) {
            console.error('Resource Load Error:', event.target.src);
        }
    }

    handlePromiseRejection(event) {
        console.error('Unhandled Promise Rejection:', event.reason);
    }
}

new MonitoringSDK();
