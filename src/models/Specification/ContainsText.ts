import { Specification } from "./Specification";

export default class ContainsTextSpecification extends Specification<{ [key: string]: any }> {
    private property: string;
    private text: string;
  
    constructor(property: string, text: string) {
      super();
      this.property = property;
      this.text = text;
    }
  
    isSatisfied(candidate: { [key: string]: any }): boolean {
      if (typeof candidate[this.property] !== 'string') {
        throw new Error(`Property ${this.property} must be a string`);
      }
      return candidate[this.property].includes(this.text);
    }
  }