export type HttpDtoType = {
  path: string;
  token?: string;
  params?: { [param: string]: string };
  body?: any;
};

export class HttpBaseService {
  private static readonly baseUrl = "http://localhost:4000/api/internatz-back/";

  protected static async Get(dto: HttpDtoType) {
    const url = this.getUrl(dto.path, dto.params);
    const headers = this.getHeaders(dto.token);
    const response = await this.fetch({
      url,
      method: "GET",
      headers,
    });
    return this.getResponseData(response);
  }

  protected static async Post(dto: HttpDtoType) {
    const url = this.getUrl(dto.path, dto.params);
    const headers = this.getHeaders(dto.token);
    const response = await this.fetch({
      url,
      method: "POST",
      headers,
      body: dto.body,
    });
    return this.getResponseData(response);
  }

  private static getResponseData({ data, error }) {
    if (error) {
      console.log(error);
    }
    return data;
  }

  private static getUrl(path: string, params?: { [param: string]: string }) {
    let url = `${this.baseUrl}${path}`;
    if (params) {
      const urlParams = new URLSearchParams(params).toString();
      url = `${url}?${urlParams}`;
    }
    return url;
  }

  private static getHeaders(token?: string) {
    const baseHeaders = {
      "Content-Type": "application/json",
      "App-Name": "internatz.front",
    };
    if (token) baseHeaders["Authorization"] = `Bearer ${token}`;
    return baseHeaders;
  }

  private static async fetch(dto: {
    url: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers: { [header: string]: string };
    body?: any;
    params?: { [param: string]: string };
  }) {
    const response = await fetch(dto.url, {
      method: dto.method,
      headers: dto.headers,
      body: dto.body ? JSON.stringify(dto.body) : null,
    });
    return response.json();
  }
}
