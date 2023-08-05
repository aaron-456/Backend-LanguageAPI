import { Injectable } from '@nestjs/common';
import { CreateEducationalResourceDto } from './dto/create-educational_resource.dto';
import { UpdateEducationalResourceDto } from './dto/update-educational_resource.dto';

@Injectable()
export class EducationalResourcesService {
  create(createEducationalResourceDto: CreateEducationalResourceDto) {
    return 'This action adds a new educationalResource';
  }

  findAll() {
    return `This action returns all educationalResources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} educationalResource`;
  }

  update(
    id: number,
    updateEducationalResourceDto: UpdateEducationalResourceDto,
  ) {
    return `This action updates a #${id} educationalResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} educationalResource`;
  }
}
