export class Env {
  static getVar(name: string): string {
    return process?.env?.[name];
  }

  static setVar(name: string, value: string) {
    process!.env![name] = value;
  }
}
