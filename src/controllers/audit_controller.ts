import { Router, Request, Response } from 'express';
import { IController } from "../interfaces/controller_interface";

class AuditController implements IController {
    private basepath: string;

    constructor() {
        this.basepath = '/audit';
    }

    getBasepath(): string {
        return this.basepath;
    }

    initializeRoutes(router: Router): void {
        const auditRoutes = Router();
        auditRoutes.post('/', this.runAudit);

        // Attach the grouped router to the main router
        router.use(this.basepath, auditRoutes);
    }

    async runAudit(req: Request, res: Response) {
        
    }
}


export default AuditController;