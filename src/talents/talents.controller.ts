import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './create-talent.dto';

@Controller('talents')
export class TalentsController {
    constructor(private readonly talentsService: TalentsService) { }

    @Post()
    create(@Body() createTalentDto: CreateTalentDto) {
        return this.talentsService.create(createTalentDto);
    }

    @Get()
    findAll() {
        return this.talentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.talentsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.talentsService.remove(id);
    }
}
