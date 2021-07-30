import { KeyValueObject } from "../system/key-value.model";

export class ApiRequest {
  public url: string;
  public body: any;
  public searchForm: KeyValueObject[];

  constructor(o: any = {}) {
    this.url = (o['url']) ? o['url'] : "";
    this.body = (o['body']) ? o['body'] : null;
    this.searchForm = (o['searchForm']) ? o['searchForm'] : [];
  }
}
