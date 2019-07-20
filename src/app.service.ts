import { Injectable } from '@nestjs/common';

/**
 * App Service
 */
@Injectable()
export class AppService {

  /**
   * Get "Hello World"
   *
   * @returns Hello World
   */
  public getHello(): string {
    return 'Hello World!';
  }

}
