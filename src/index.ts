import App from './app.js'

async function main(): Promise<void> {
    const app = new App();
    app.listen();
}

if (import.meta.url === `file://${process.argv[1]}`) {
    main().catch((err) => {
        console.error('Unhandled error', err);
        process.exit(1);
    });
}

export default main;