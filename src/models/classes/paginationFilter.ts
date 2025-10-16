export class PaginationFilter { 
    
    public page_size: number
    public page_number: number 
    
    constructor(page_number: number = 1 , page_size: number =10 ) {
        this.page_number = page_number;  
        this.page_size = page_size;
        
    }
} 