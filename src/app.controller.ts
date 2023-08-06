import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/trigger-job')
  async triggerJob() {
    const res = await this.appService.handleJob();
    return res;
  }
}
