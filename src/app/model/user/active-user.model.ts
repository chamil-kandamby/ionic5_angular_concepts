export class ActiveUser {
  public id: number;
  public email: string;
  public firstName: string;
  public lastName: string;
  public role: string;
  public roleId: number;

  constructor(o: any = {}) {
    this.email = o['email'] ?? "";
    this.firstName = o['first_name'] ?? "";
    this.id = o['id'] ?? 0;
    this.lastName = o['last_name'] ?? "";
    this.role = o['role'] ?? "";
    this.roleId = o['role_id'] ?? 0;
  }
}
