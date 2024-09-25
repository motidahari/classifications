import { number } from 'joi';
import { TimeUtil } from '../core/time.util';
import * as yaml from 'js-yaml';

export class Occupation {
  private _id: number;
  private _name: string;
  private _children: {
    id: number;
    name: string;
  };

  constructor(
    id: number,
    name: string,
    children: {
      id: number;
      name: string;
    }
  ) {
    this.id = id;
    this.name = name;
    this.children = children;
  }

  get id(): number {
    return this.id;
  }

  set id(id: number) {
    this.id = id;
  }

  get name(): string {
    return this.name;
  }

  set name(name: string) {
    this.name = name;
  }

  get children(): { id: number; name: string } {
    return this.children;
  }

  set children(children: { id: number; name: string }) {
    this.children = children;
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      children: this.children
    };
  }

  toYaml() {
    const yamlObject = {
      id: this.id,
      name: this.name,
      children: this.children
    };
    return yaml.dump(yamlObject);
  }
}
