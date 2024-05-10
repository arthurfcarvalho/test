import { Pageable } from "./pageable";
import { Sort } from "./sort.model";

export interface ApiResponsePage{
        content: any[];
        pageable: Pageable;
        last: boolean;
        totalPages: number;
        totalElements: number;
        size: number;
        number: number;
        sort: Sort;
        first: boolean;
        numberOfElements: number;
        empty: boolean;
}