export class APIResponse<T = any> {
  statusCode?: number
  result?: T
  description?: string
}
