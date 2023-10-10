import { githubBaseUrl } from '@config/urls';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IssueService {

  constructor(
    private httpService:
      HttpService,
  ) { }

  findAll(
    page: number
  ) {

    return new Promise((
      resolve,
      reject
    ) => {
      try {

        this.httpService.get(
          `${githubBaseUrl}/repos/facebook/react/issues?page=${page}`,
        ).subscribe(value =>

          resolve(value.data)
        )
      } catch (error) {

        reject(error?.message)
      }
    })

  }
}
