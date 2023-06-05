import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, UploadedFiles, MaxFileSizeValidator, FileTypeValidator, ParseFilePipe } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { storage } from './storage';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  // @UseInterceptors(FilesInterceptor('aaa', 3, {
  //   dest: 'uploads'
  // }))
  @UseInterceptors(FileFieldsInterceptor([
    {name: 'aaa', maxCount: 2},
    {name: 'bbb', maxCount: 3}, 
  ], {
    dest: 'uploads',
    storage,
  }))
  uploadFile(@UploadedFiles(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 1000 }),
      new FileTypeValidator({ fileType: 'image/jpeg' })
    ]
  })) file: Array<Express.Multer.File>, @Body() body: any) {
    // return this.uploadService.create(createUploadDto);
    console.log('body', body);
    console.log('file', file);
    
  }

  @Get()
  findAll() {
    return this.uploadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadService.update(+id, updateUploadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadService.remove(+id);
  }
}
