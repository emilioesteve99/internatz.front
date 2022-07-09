import { HttpBaseService } from "../http.base-service";

export class AuthService extends HttpBaseService {
  private static accessTokenLocalStorageKey = "accessToken";

  public static async login(email: string, password: string): Promise<boolean> {
    const response: { accessToken: string } = await this.Post({
      path: "auth/login",
      body: {
        email,
        password,
      },
    });
    if (!response) return false;
    localStorage.setItem(this.accessTokenLocalStorageKey, response.accessToken);
    return true;
  }

  public static userJustLogged(): boolean {
    return !!localStorage.getItem(this.accessTokenLocalStorageKey);
  }

  public static getToken() {
    return localStorage.getItem(this.accessTokenLocalStorageKey);
  }

  public static removeTokenFromStorage() {
    localStorage.removeItem(this.accessTokenLocalStorageKey);
  }
}
