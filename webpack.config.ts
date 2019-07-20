import * as path from 'path';

import {
  Configuration,
  IgnorePlugin,
  HotModuleReplacementPlugin
} from 'webpack';
import * as webpackNodeExternals from 'webpack-node-externals';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as TerserWebpackPlugin from 'terser-webpack-plugin';

/**
 * Webpack Configuration (DEV & PROD)
 */
const createWebpackConfig: ( env: string, argv: any ) => Configuration = (
  env: string,
  argv: any
): Configuration => {
  return {
    mode: argv.mode,
    stats: argv.mode === 'development' ? 'errors-only' : true,
    watch: argv.mode === 'development',
    entry: [
      ...(
        argv.mode === 'development'
          ? ['webpack/hot/poll?100']
          : []
      ),
      './src/main.ts'
    ],
    target: 'node',
    output: {
      path: path.join( __dirname, 'build' ),
      filename: 'app.js'
    },
    resolve: {
      extensions: [
        '.ts',
        '.js'
      ]
    },
    ...( argv.mode === 'development'
      ? {
        externals: [
          webpackNodeExternals( {
            whitelist: [
              'webpack/hot/poll?100'
            ]
          } )
        ]
      }
      : {} ),
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.ts$/,
          use: [
            'ts-loader'
          ]
        }
      ]
    },
    plugins: [
      ...(
        argv.mode === 'development'
          ? [
            new HotModuleReplacementPlugin()
          ]
          : []
      ),
      ...(
        argv.mode === 'production'
          ? [
            new IgnorePlugin( {
              checkResource( resource: any ): boolean {
                const lazyImports: Array<string> = [
                  '@nestjs/microservices',
                  '@nestjs/platform-express',
                  '@nestjs/grahpql',
                  'cache-manager',
                  'class-validator',
                  'class-transformer'
                ];
                if ( !lazyImports.includes( resource ) ) {
                  return false;
                }
                try {
                  require.resolve( resource );
                } catch ( err ) {
                  return true;
                }
                return false;
              }
            } )
          ]
          : []
      ),
      new CleanWebpackPlugin()
    ],
    ...(
      argv.mode === 'production'
        ? {
          optimization: {
            minimizer: [
              new TerserWebpackPlugin( {
                terserOptions: {
                  keep_classnames: true, // Keep classnames (preserves the context info, amongst other things)
                  output: {
                    comments: false // Get rid of all comments
                  }
                }
              } )
            ]
          }
        }
        : {}
    )
  };
};

export default createWebpackConfig;
