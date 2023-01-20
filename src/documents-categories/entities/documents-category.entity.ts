import {
  Field,
  Int,
  registerEnumType,
  ObjectType,
  OmitType,
} from '@nestjs/graphql';
import { ResolveDocuments } from 'src/documents/entities/document.entity';
import { DocumentCodeFormat, DocumentType } from '@prisma/client';

registerEnumType(DocumentType, {
  name: 'DocumentType',
});
registerEnumType(DocumentCodeFormat, {
  name: 'DocumentCodeFormat',
});

@ObjectType()
export class DocumentsCategory {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => DocumentType)
  documentType: DocumentType;
  @Field(() => DocumentCodeFormat, { defaultValue: 'SIMPLE' })
  codeFormat: DocumentCodeFormat;
  @Field(() => [ResolveDocuments], { nullable: true })
  documents?: ResolveDocuments[];
}

@ObjectType()
export class ResolveDocumentsCategory extends OmitType(DocumentsCategory, [
  'documents',
] as const) {}
