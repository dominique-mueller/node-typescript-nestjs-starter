import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

/**
 * App Controller
 */
@Controller()
export class AppController {

  /**
   * Constructor
   *
   * @param appService App Service
   */
  constructor(
    private readonly appService: AppService
  ) { }

  /**
   * Get "Hello World"
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
