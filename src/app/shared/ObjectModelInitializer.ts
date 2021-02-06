import { Injectable } from '@angular/core';

@Injectable()
export class ObjectModelInitializer {

    getConst() {
        return {
            // Idiomas
            idiomaEs: 1,
            idiomaEn: 2
        }
    }
}