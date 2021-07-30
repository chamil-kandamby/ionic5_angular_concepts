export class LoginResponse {
  public email: string;
  public firstName: string;
  public id: number;
  public lastName: string;
  public role: string;
  public roleId: number;
  public sessionToken: string;

  constructor(o: any = {}) {
    this.email = o['email'] ?? "";
    this.firstName = o['first_name'] ?? "";
    this.id = o['id'] ?? 0;
    this.lastName = o['last_name'] ?? "";
    this.role = o['role'] ?? "";
    this.roleId = o['role_id'] ?? 0;
    this.sessionToken = o['session_token'] ?? "";
  }
}
