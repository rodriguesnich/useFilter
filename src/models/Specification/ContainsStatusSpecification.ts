import { Specification } from "./Specification";

export default class ConainsStatusSpecification extends Specification<{
  [key: string]: any;
}> {
  private property: string;
  private statuses: string[];

  constructor(property: string, statuses: string[]) {
    super();
    this.property = property;
    this.statuses = statuses;
  }

  isSatisfied(candidate: { [key: string]: any }): boolean {
    if (!Array.isArray(this.statuses)) {
      throw new Error("Statuses must be an array");
    }
    return this.statuses.includes(candidate[this.property]);
  }
}
