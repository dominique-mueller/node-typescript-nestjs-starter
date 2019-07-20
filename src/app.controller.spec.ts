import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * App Controller - Unit Test
 */
describe( 'App Controller', () => {

  let appController: AppController;

  beforeEach( async () => {

    const testingModule: TestingModule = await Test
      .createTestingModule( {
        controllers: [
          AppController
        ],
        providers: [
          AppService
        ],
      } )
      .compile();

    appController = testingModule.get<AppController>( AppController );

  } );

  it( 'should return "Hello World!"', () => {

    expect( appController.getHello() ).toBe( 'Hello World!' );

  } );

} );
