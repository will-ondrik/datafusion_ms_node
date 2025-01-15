import { Router, Request, Response } from 'express';

export interface IController {
    initializeRoutes(router: Router): void
    getBasepath(): string
}