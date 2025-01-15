import { Router, Request, Response } from 'express';
import { IController } from "../interfaces/controller_interface";
import LighthouseService from '../services/lighthouse_service.js';

class AuditController implements IController {
    private basepath: string;
    private lighthouseService: LighthouseService;

    constructor() {
        this.basepath = '/audit';
        this.initializeRoutes = this.initializeRoutes.bind(this);
        this.lighthouseService = new LighthouseService();
    }

    getBasepath(): string {
        return this.basepath;
    }

    initializeRoutes(router: Router): void {
        console.log('Initializing audit routes');
        const auditRoutes = Router();
        auditRoutes.post('/', this.runAudit.bind(this));

        // Attach the grouped router to the main router
        router.use(this.basepath, auditRoutes);
    }

    async runAudit(req: Request, res: Response) {
        console.log(req.body);
        const { url } = req.body;

        if (!url) {
            res.status(400).json({ error: 'Missing required parameter: url' });
        }
        try {
            const auditResults = await this.lighthouseService.runAudit(url);
            console.log('auditResults', auditResults);
            res.json(auditResults);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }
}


export default AuditController;