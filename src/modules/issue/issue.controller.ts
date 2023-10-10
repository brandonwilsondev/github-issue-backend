import {
  Controller,
  Get,
  Param
} from '@nestjs/common';
import {
  IssueService
} from './issue.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('issue')
@Controller('issue')
export class IssueController {
  constructor(
    private issueService:
      IssueService
  ) { }

  @Get(':page')
  findAll(
    @Param('page') page: number
  ) {
    return this.issueService.findAll(
      page
    );
  }
}
