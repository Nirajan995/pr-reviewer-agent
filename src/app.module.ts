import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';
import { AiModule } from './ai/ai.module';
import { WebhookModule } from './webhook/webhook.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [GithubModule, AiModule, WebhookModule, QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
