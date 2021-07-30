export class KeyValueArray {
  public list: KeyValueObject[] = [];

  constructor(o: any = {}) {
    for (var i in o) {
      var x: KeyValueObject = {
        key: i,
        value: o[i]
      };
      this.list.push(x);
    }
  }

  public findObject(value: any): KeyValueObject | null {
    var result: KeyValueObject | null = null;
    this.list.forEach(element => {
      if (element.value === value) {
        result = element;
      }
    });
    return result;
  }

  public findObjectByKey(key: any): KeyValueObject | null {
    var result: KeyValueObject | null = null;
    this.list.forEach(element => {
      if (element.key === key) {
        result = element;
      }
    });
    return result;
  }
}

export class KeyValueObject {
  public key: string = "";
  public value: any;
}
