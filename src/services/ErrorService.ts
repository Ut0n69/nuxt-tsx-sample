export default class ErrorService {
  errorMessage: string
  constructor(context: string) {
    this.errorMessage = context
  }

  public showErrorMessage(): void {
    alert(this.errorMessage)
  }
}
