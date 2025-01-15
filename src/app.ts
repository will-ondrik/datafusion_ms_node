import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Router } from 'express';
import { IController } from './interfaces/controller_interface';
import AuditController from './controllers/audit_controller.js';

class App {
    public app: Application;
    private PORT: number;
    public router: Router;

    constructor() {
        dotenv.config();
        this.app = express();
        this.PORT = Number(process.env.PORT || -1);
        this.router = Router();

        this.initializeMiddlewares();
        this.initializeControllers();
    }

    private initializeMiddlewares(): void {
        this.app.use(cors());
    }

    private initializeControllers(): void {
        const controllers: IController[] = [
            new AuditController(),
        ]
        for (const controller of controllers) {
            controller.initializeRoutes(this.router)
        }
    }

    public listen(): void {
        if (this.PORT === -1) {
            console.error('Unable to parse port number. Shutting down server...');
            process.exit(1);
        }

        this.app.listen(this.PORT, () => {
            console.log(`Server listening on port: ${this.PORT}`)
        });
    }
}

export default App;