import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * App Module
 */
@Module( {
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
} )
export class AppModule { }
