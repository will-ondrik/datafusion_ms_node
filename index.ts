import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';

async function main(): Promise<void> {
    dotenv.config();
    const app: Application = express();
    
    app.use(cors())
    const corsOptions = {
        origin: `${process.env.CLIENT_URL}`,
    }

    const PORT: Number = Number(process.env.PORT) || -1;
    if (PORT === -1) {
        console.error('Port already in use. Shutting down server...')
        process.exit(1);
    }

    // init routes


    try {
        app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`);
        });
    } catch (err) {
        console.error('Error starting the server', err);
        throw err;
    }
}

if (require.main === module) {
    main().catch((err) => {
        console.error('Unhandled error', err);
        process.exit(1);
    });
}

export default main;