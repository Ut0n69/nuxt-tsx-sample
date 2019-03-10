import axios from 'axios'
import { AjaxRequest } from './AjaxRequest'
import ErrorService from '@/services/ErrorService'

export class Ajax {
  static shared = new Ajax()

  baseURL: string = ''
  timeout: number = 10 * 1000

  get<T>(request: AjaxRequest): Promise<T> {
    return axios({
      method: 'get',
      baseURL: request.baseURL || this.baseURL,
      url: this.baseURL,
      params: request.params,
      timeout: this.timeout
    })
      .then(response => response.data)
      .catch(err => {
        this.errorHandler(err)
      })
  }

  post<T>(request: AjaxRequest): Promise<T> {
    return axios({
      method: 'post',
      baseURL: this.baseURL,
      url: request.path,
      data: request.data,
      timeout: this.timeout
    })
      .then(response => response.data)
      .catch(err => {
        this.errorHandler(err)
      })
  }

  put<T>(request: AjaxRequest): Promise<T> {
    return axios({
      method: 'put',
      baseURL: this.baseURL,
      url: request.path,
      data: request.data,
      timeout: this.timeout
    })
      .then(response => response.data)
      .catch(err => {
        this.errorHandler(err)
      })
  }

  delete<T>(request: AjaxRequest): Promise<T> {
    return axios({
      method: 'delete',
      baseURL: this.baseURL,
      url: request.path,
      data: request.data,
      timeout: this.timeout
    })
      .then(response => response.data)
      .catch(err => {
        this.errorHandler(err)
      })
  }

  private errorHandler(errorMessage: string): void {
    const error = new ErrorService(errorMessage)
    error.showErrorMessage()
    console.log('Error', errorMessage)
  }
}
