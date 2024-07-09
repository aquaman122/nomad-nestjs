import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';


// 데코레이터 <-- 
@Module({
  imports: [],
  // express 의 라우터 같은 존재
  controllers: [AppController, MoviesController],
  providers: [AppService, MoviesService],
})
export class AppModule {}
