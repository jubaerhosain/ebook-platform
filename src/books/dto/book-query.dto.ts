import { IsString, IsOptional, IsIn, IsInt, IsPositive } from 'class-validator';

export class BookQueryDto {
  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  @IsOptional()
  sort?: string;

  @IsIn(['asc', 'desc'])
  @IsOptional()
  order?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  limit?: number;
}
