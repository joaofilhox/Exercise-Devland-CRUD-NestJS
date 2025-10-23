import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { CreateTalentDto } from './create-talent.dto';
import { Talent } from './talent.entity';
import {
    ApiTags,
    ApiOperation,
    ApiCreatedResponse,
    ApiResponse,
    ApiBadRequestResponse,
    ApiNotFoundResponse,
    ApiConflictResponse,
    ApiParam,
} from '@nestjs/swagger';

@ApiTags('talents')
@Controller('talents')
export class TalentsController {
    constructor(private readonly talentsService: TalentsService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new talent' })
    @ApiCreatedResponse({ description: 'Talent created successfully', type: Talent })
    @ApiConflictResponse({ description: 'CNPJ já cadastrado' })
    @ApiBadRequestResponse({ description: 'Validation failed' })
    create(@Body() createTalentDto: CreateTalentDto) {
        return this.talentsService.create(createTalentDto);
    }

    @Get()
    @ApiOperation({ summary: 'List all talents' })
    @ApiResponse({ status: 200, description: 'List of talents', type: [Talent] })
    findAll() {
        return this.talentsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a talent by id' })
    @ApiParam({ name: 'id', description: 'Talent id (uuid)' })
    @ApiResponse({ status: 200, description: 'Talent found', type: Talent })
    @ApiNotFoundResponse({ description: 'Talent não encontrado' })
    findOne(@Param('id') id: string) {
        return this.talentsService.findOne(id);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remove a talent by id' })
    @ApiParam({ name: 'id', description: 'Talent id (uuid)' })
    @ApiResponse({ status: 200, description: 'Talent removed' })
    @ApiNotFoundResponse({ description: 'Talent não encontrado' })
    remove(@Param('id') id: string) {
        return this.talentsService.remove(id);
    }
}
