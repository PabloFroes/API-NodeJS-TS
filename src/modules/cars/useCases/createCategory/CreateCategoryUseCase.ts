import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";



interface IRequest {
    name: string;
    description: string;
}
/**
 * Definir tipo de retorno
 * alterar o retorno de erro
 * acessar o repositório
 * retornar algo
 */
class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository){}

    execute({ description, name}: IRequest): void{
    
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error("Category Already Exists")
        }
    
        this.categoriesRepository.create({name,description})
    }
}

export { CreateCategoryUseCase }