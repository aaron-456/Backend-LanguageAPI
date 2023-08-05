import { Module } from '@nestjs/common';
import { EducationalResourcesService } from './educational_resources.service';
import { EducationalResourcesController } from './educational_resources.controller';

@Module({
  controllers: [EducationalResourcesController],
  providers: [EducationalResourcesService]
})
export class EducationalResourcesModule {}
