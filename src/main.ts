import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

/**
 * Bootstrap the backend application
 */
async function bootstrap(): Promise<void> {

  // Create application
  const app: INestApplication = await NestFactory.create( AppModule );

  // Start application
  await app.listen( 3000 );

  // Enable hot module reloading (HMR) - only relevant in development mode
  if ( module.hot ) {
    module.hot.accept();
    module.hot.dispose( () => app.close() );
  }

}

// Run!!
bootstrap();
