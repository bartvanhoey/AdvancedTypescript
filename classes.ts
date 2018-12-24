import * as Interfaces from './interfaces';
import { sealed, logger, writable } from './decorators';


class Employee {
    title: string;

    addToSchedule(): void {
        console.log('Employee added to schedule.');
    }

    logTitle(): void {;
        console.log(`Employee has the title ${this.title}.`);
    }
}

class Researcher {

    doResearch(topic: string): void {
        console.log(`Doing research on ${topic}.`);
    }
}
// @logger
// @sealed("UniversityLibrarian")
export class UniversityLibrarian implements Interfaces.Librarian, Employee, Researcher {
    title: string;
    addToSchedule: () => void;
    logTitle: () => void;
    doResearch: (topic: string) => void;
    
    name: string;
    email: string;
    department: string;
    
    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }

    @writable(true)
    assistFaculty(){
        console.log('Assisting faculty.');
    }
}

//@logger
export class PublicLibrarian implements Interfaces.Librarian {
    department: string;    
    name: string;
    email: string;
    
    assistCustomer (custName: string) {
        console.log('Assisting Customer');
    }

    @writable(false)
    teachCommunitiy () {
        console.log('Teaching community');
    }
}

abstract class ReferenceItem {
    
    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }
    
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    
    abstract printCitation(): void;
}

export {  ReferenceItem, Employee, Researcher };