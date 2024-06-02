export abstract class Specification<T> {
  abstract isSatisfied(candidate: T): boolean;
}

export class AndSpecification<T> extends Specification<T> {
  private specs: Specification<T>[];

  constructor(...specs: Specification<T>[]) {
    super();
    this.specs = specs;
  }

  isSatisfied(candidate: T): boolean {
    return this.specs.every((spec) => spec.isSatisfied(candidate));
  }
}
