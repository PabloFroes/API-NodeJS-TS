import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUsaCase";


class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase){

    }

    handle(request: Request, response: Response): Response{
        const { file } = request
        
        this.importCategoryUseCase.execute(file);

        return response.send()
    }
}

export { ImportCategoryController }