import { HttpBaseService } from "../http.base-service";
import { AuthService } from "../auth/auth.service";

export class TranslationService extends HttpBaseService {
  public static async getTranslations() {
    const response = await this.Post({
      path: "translation/getTranslations",
      body: {
        scopes: ["*"],
      },
      token: AuthService.getToken(),
    });
    if (!response) return null;
    return response.translations;
  }
}
