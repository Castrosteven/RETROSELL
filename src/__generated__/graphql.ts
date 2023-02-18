/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateConsole = {
  __typename?: 'AggregateConsole';
  _count?: Maybe<ConsoleCountAggregate>;
  _max?: Maybe<ConsoleMaxAggregate>;
  _min?: Maybe<ConsoleMinAggregate>;
};

export type AggregateManufacturer = {
  __typename?: 'AggregateManufacturer';
  _count?: Maybe<ManufacturerCountAggregate>;
  _max?: Maybe<ManufacturerMaxAggregate>;
  _min?: Maybe<ManufacturerMinAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregateSection = {
  __typename?: 'AggregateSection';
  _count?: Maybe<SectionCountAggregate>;
  _max?: Maybe<SectionMaxAggregate>;
  _min?: Maybe<SectionMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type Console = {
  __typename?: 'Console';
  _count?: Maybe<ConsoleCount>;
  id: Scalars['String'];
  manufacturer: Manufacturer;
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  products: Array<Product>;
  type: Array<ConsoleType>;
};


export type ConsoleProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ConsoleCount = {
  __typename?: 'ConsoleCount';
  products: Scalars['Int'];
};

export type ConsoleCountAggregate = {
  __typename?: 'ConsoleCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  manufacturerId: Scalars['Int'];
  name: Scalars['Int'];
  type: Scalars['Int'];
};

export type ConsoleCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ConsoleCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  manufacturer: ManufacturerCreateNestedOneWithoutConsolesInput;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutConsoleInput>;
  type?: InputMaybe<ConsoleCreatetypeInput>;
};

export type ConsoleCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  type?: InputMaybe<ConsoleCreatetypeInput>;
};

export type ConsoleCreateManyManufacturerInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type?: InputMaybe<ConsoleCreatetypeInput>;
};

export type ConsoleCreateManyManufacturerInputEnvelope = {
  data: Array<ConsoleCreateManyManufacturerInput>;
};

export type ConsoleCreateNestedManyWithoutManufacturerInput = {
  connect?: InputMaybe<Array<ConsoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConsoleCreateOrConnectWithoutManufacturerInput>>;
  create?: InputMaybe<Array<ConsoleCreateWithoutManufacturerInput>>;
  createMany?: InputMaybe<ConsoleCreateManyManufacturerInputEnvelope>;
};

export type ConsoleCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<ConsoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConsoleCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ConsoleCreateWithoutProductsInput>;
};

export type ConsoleCreateOrConnectWithoutManufacturerInput = {
  create: ConsoleCreateWithoutManufacturerInput;
  where: ConsoleWhereUniqueInput;
};

export type ConsoleCreateOrConnectWithoutProductsInput = {
  create: ConsoleCreateWithoutProductsInput;
  where: ConsoleWhereUniqueInput;
};

export type ConsoleCreateWithoutManufacturerInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutConsoleInput>;
  type?: InputMaybe<ConsoleCreatetypeInput>;
};

export type ConsoleCreateWithoutProductsInput = {
  id?: InputMaybe<Scalars['String']>;
  manufacturer: ManufacturerCreateNestedOneWithoutConsolesInput;
  name: Scalars['String'];
  type?: InputMaybe<ConsoleCreatetypeInput>;
};

export type ConsoleCreatetypeInput = {
  set: Array<ConsoleType>;
};

export type ConsoleGroupBy = {
  __typename?: 'ConsoleGroupBy';
  _count?: Maybe<ConsoleCountAggregate>;
  _max?: Maybe<ConsoleMaxAggregate>;
  _min?: Maybe<ConsoleMinAggregate>;
  id: Scalars['String'];
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  type?: Maybe<Array<ConsoleType>>;
};

export type ConsoleListRelationFilter = {
  every?: InputMaybe<ConsoleWhereInput>;
  none?: InputMaybe<ConsoleWhereInput>;
  some?: InputMaybe<ConsoleWhereInput>;
};

export type ConsoleMaxAggregate = {
  __typename?: 'ConsoleMaxAggregate';
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ConsoleMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ConsoleMinAggregate = {
  __typename?: 'ConsoleMinAggregate';
  id?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ConsoleMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ConsoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ConsoleOrderByWithAggregationInput = {
  _count?: InputMaybe<ConsoleCountOrderByAggregateInput>;
  _max?: InputMaybe<ConsoleMaxOrderByAggregateInput>;
  _min?: InputMaybe<ConsoleMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ConsoleOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  manufacturer?: InputMaybe<ManufacturerOrderByWithRelationInput>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
};

export type ConsoleRelationFilter = {
  is?: InputMaybe<ConsoleWhereInput>;
  isNot?: InputMaybe<ConsoleWhereInput>;
};

export enum ConsoleScalarFieldEnum {
  Id = 'id',
  ManufacturerId = 'manufacturerId',
  Name = 'name',
  Type = 'type'
}

export type ConsoleScalarWhereInput = {
  AND?: InputMaybe<Array<ConsoleScalarWhereInput>>;
  NOT?: InputMaybe<Array<ConsoleScalarWhereInput>>;
  OR?: InputMaybe<Array<ConsoleScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  manufacturerId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumConsoleTypeNullableListFilter>;
};

export type ConsoleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ConsoleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ConsoleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ConsoleScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  manufacturerId?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumConsoleTypeNullableListFilter>;
};

export enum ConsoleType {
  Console = 'CONSOLE',
  Handheld = 'HANDHELD'
}

export type ConsoleUpdateInput = {
  manufacturer?: InputMaybe<ManufacturerUpdateOneRequiredWithoutConsolesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutConsoleNestedInput>;
  type?: InputMaybe<ConsoleUpdatetypeInput>;
};

export type ConsoleUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<ConsoleUpdatetypeInput>;
};

export type ConsoleUpdateManyWithWhereWithoutManufacturerInput = {
  data: ConsoleUpdateManyMutationInput;
  where: ConsoleScalarWhereInput;
};

export type ConsoleUpdateManyWithoutManufacturerNestedInput = {
  connect?: InputMaybe<Array<ConsoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConsoleCreateOrConnectWithoutManufacturerInput>>;
  create?: InputMaybe<Array<ConsoleCreateWithoutManufacturerInput>>;
  createMany?: InputMaybe<ConsoleCreateManyManufacturerInputEnvelope>;
  delete?: InputMaybe<Array<ConsoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConsoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConsoleWhereUniqueInput>>;
  set?: InputMaybe<Array<ConsoleWhereUniqueInput>>;
  update?: InputMaybe<Array<ConsoleUpdateWithWhereUniqueWithoutManufacturerInput>>;
  updateMany?: InputMaybe<Array<ConsoleUpdateManyWithWhereWithoutManufacturerInput>>;
  upsert?: InputMaybe<Array<ConsoleUpsertWithWhereUniqueWithoutManufacturerInput>>;
};

export type ConsoleUpdateOneRequiredWithoutProductsNestedInput = {
  connect?: InputMaybe<ConsoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConsoleCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ConsoleCreateWithoutProductsInput>;
  update?: InputMaybe<ConsoleUpdateWithoutProductsInput>;
  upsert?: InputMaybe<ConsoleUpsertWithoutProductsInput>;
};

export type ConsoleUpdateWithWhereUniqueWithoutManufacturerInput = {
  data: ConsoleUpdateWithoutManufacturerInput;
  where: ConsoleWhereUniqueInput;
};

export type ConsoleUpdateWithoutManufacturerInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutConsoleNestedInput>;
  type?: InputMaybe<ConsoleUpdatetypeInput>;
};

export type ConsoleUpdateWithoutProductsInput = {
  manufacturer?: InputMaybe<ManufacturerUpdateOneRequiredWithoutConsolesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<ConsoleUpdatetypeInput>;
};

export type ConsoleUpdatetypeInput = {
  push?: InputMaybe<Array<ConsoleType>>;
  set?: InputMaybe<Array<ConsoleType>>;
};

export type ConsoleUpsertWithWhereUniqueWithoutManufacturerInput = {
  create: ConsoleCreateWithoutManufacturerInput;
  update: ConsoleUpdateWithoutManufacturerInput;
  where: ConsoleWhereUniqueInput;
};

export type ConsoleUpsertWithoutProductsInput = {
  create: ConsoleCreateWithoutProductsInput;
  update: ConsoleUpdateWithoutProductsInput;
};

export type ConsoleWhereInput = {
  AND?: InputMaybe<Array<ConsoleWhereInput>>;
  NOT?: InputMaybe<Array<ConsoleWhereInput>>;
  OR?: InputMaybe<Array<ConsoleWhereInput>>;
  id?: InputMaybe<StringFilter>;
  manufacturer?: InputMaybe<ManufacturerRelationFilter>;
  manufacturerId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  type?: InputMaybe<EnumConsoleTypeNullableListFilter>;
};

export type ConsoleWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type EnumConsoleTypeNullableListFilter = {
  equals?: InputMaybe<Array<ConsoleType>>;
  has?: InputMaybe<ConsoleType>;
  hasEvery?: InputMaybe<Array<ConsoleType>>;
  hasSome?: InputMaybe<Array<ConsoleType>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumProductTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ProductType>;
};

export type EnumProductTypeFilter = {
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
};

export type EnumProductTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumProductTypeFilter>;
  _min?: InputMaybe<NestedEnumProductTypeFilter>;
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
};

export type EnumUserTypeNullableListFilter = {
  equals?: InputMaybe<Array<UserType>>;
  has?: InputMaybe<UserType>;
  hasEvery?: InputMaybe<Array<UserType>>;
  hasSome?: InputMaybe<Array<UserType>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  _count?: Maybe<ManufacturerCount>;
  consoles: Array<Console>;
  id: Scalars['String'];
  name: Scalars['String'];
  products: Array<Product>;
};


export type ManufacturerConsolesArgs = {
  cursor?: InputMaybe<ConsoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConsoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConsoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsoleWhereInput>;
};


export type ManufacturerProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ManufacturerCount = {
  __typename?: 'ManufacturerCount';
  consoles: Scalars['Int'];
  products: Scalars['Int'];
};

export type ManufacturerCountAggregate = {
  __typename?: 'ManufacturerCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type ManufacturerCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ManufacturerCreateInput = {
  consoles?: InputMaybe<ConsoleCreateNestedManyWithoutManufacturerInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutManufacturerInput>;
};

export type ManufacturerCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ManufacturerCreateNestedOneWithoutConsolesInput = {
  connect?: InputMaybe<ManufacturerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ManufacturerCreateOrConnectWithoutConsolesInput>;
  create?: InputMaybe<ManufacturerCreateWithoutConsolesInput>;
};

export type ManufacturerCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<ManufacturerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ManufacturerCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ManufacturerCreateWithoutProductsInput>;
};

export type ManufacturerCreateOrConnectWithoutConsolesInput = {
  create: ManufacturerCreateWithoutConsolesInput;
  where: ManufacturerWhereUniqueInput;
};

export type ManufacturerCreateOrConnectWithoutProductsInput = {
  create: ManufacturerCreateWithoutProductsInput;
  where: ManufacturerWhereUniqueInput;
};

export type ManufacturerCreateWithoutConsolesInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateNestedManyWithoutManufacturerInput>;
};

export type ManufacturerCreateWithoutProductsInput = {
  consoles?: InputMaybe<ConsoleCreateNestedManyWithoutManufacturerInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ManufacturerGroupBy = {
  __typename?: 'ManufacturerGroupBy';
  _count?: Maybe<ManufacturerCountAggregate>;
  _max?: Maybe<ManufacturerMaxAggregate>;
  _min?: Maybe<ManufacturerMinAggregate>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ManufacturerMaxAggregate = {
  __typename?: 'ManufacturerMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ManufacturerMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ManufacturerMinAggregate = {
  __typename?: 'ManufacturerMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ManufacturerMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ManufacturerOrderByWithAggregationInput = {
  _count?: InputMaybe<ManufacturerCountOrderByAggregateInput>;
  _max?: InputMaybe<ManufacturerMaxOrderByAggregateInput>;
  _min?: InputMaybe<ManufacturerMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ManufacturerOrderByWithRelationInput = {
  consoles?: InputMaybe<ConsoleOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
};

export type ManufacturerRelationFilter = {
  is?: InputMaybe<ManufacturerWhereInput>;
  isNot?: InputMaybe<ManufacturerWhereInput>;
};

export enum ManufacturerScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type ManufacturerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ManufacturerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ManufacturerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ManufacturerScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type ManufacturerUpdateInput = {
  consoles?: InputMaybe<ConsoleUpdateManyWithoutManufacturerNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutManufacturerNestedInput>;
};

export type ManufacturerUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ManufacturerUpdateOneRequiredWithoutConsolesNestedInput = {
  connect?: InputMaybe<ManufacturerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ManufacturerCreateOrConnectWithoutConsolesInput>;
  create?: InputMaybe<ManufacturerCreateWithoutConsolesInput>;
  update?: InputMaybe<ManufacturerUpdateWithoutConsolesInput>;
  upsert?: InputMaybe<ManufacturerUpsertWithoutConsolesInput>;
};

export type ManufacturerUpdateOneRequiredWithoutProductsNestedInput = {
  connect?: InputMaybe<ManufacturerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ManufacturerCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<ManufacturerCreateWithoutProductsInput>;
  update?: InputMaybe<ManufacturerUpdateWithoutProductsInput>;
  upsert?: InputMaybe<ManufacturerUpsertWithoutProductsInput>;
};

export type ManufacturerUpdateWithoutConsolesInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutManufacturerNestedInput>;
};

export type ManufacturerUpdateWithoutProductsInput = {
  consoles?: InputMaybe<ConsoleUpdateManyWithoutManufacturerNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ManufacturerUpsertWithoutConsolesInput = {
  create: ManufacturerCreateWithoutConsolesInput;
  update: ManufacturerUpdateWithoutConsolesInput;
};

export type ManufacturerUpsertWithoutProductsInput = {
  create: ManufacturerCreateWithoutProductsInput;
  update: ManufacturerUpdateWithoutProductsInput;
};

export type ManufacturerWhereInput = {
  AND?: InputMaybe<Array<ManufacturerWhereInput>>;
  NOT?: InputMaybe<Array<ManufacturerWhereInput>>;
  OR?: InputMaybe<Array<ManufacturerWhereInput>>;
  consoles?: InputMaybe<ConsoleListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
};

export type ManufacturerWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyConsole: AffectedRowsOutput;
  createManyManufacturer: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createManySection: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneConsole: Console;
  createOneManufacturer: Manufacturer;
  createOneProduct: Product;
  createOneSection: Section;
  createOneUser: User;
  deleteManyConsole: AffectedRowsOutput;
  deleteManyManufacturer: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManySection: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneConsole?: Maybe<Console>;
  deleteOneManufacturer?: Maybe<Manufacturer>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneSection?: Maybe<Section>;
  deleteOneUser?: Maybe<User>;
  updateManyConsole: AffectedRowsOutput;
  updateManyManufacturer: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManySection: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneConsole?: Maybe<Console>;
  updateOneManufacturer?: Maybe<Manufacturer>;
  updateOneProduct?: Maybe<Product>;
  updateOneSection?: Maybe<Section>;
  updateOneUser?: Maybe<User>;
  upsertOneConsole: Console;
  upsertOneManufacturer: Manufacturer;
  upsertOneProduct: Product;
  upsertOneSection: Section;
  upsertOneUser: User;
};


export type MutationCreateManyConsoleArgs = {
  data: Array<ConsoleCreateManyInput>;
};


export type MutationCreateManyManufacturerArgs = {
  data: Array<ManufacturerCreateManyInput>;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
};


export type MutationCreateManySectionArgs = {
  data: Array<SectionCreateManyInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateOneConsoleArgs = {
  data: ConsoleCreateInput;
};


export type MutationCreateOneManufacturerArgs = {
  data: ManufacturerCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOneSectionArgs = {
  data: SectionCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyConsoleArgs = {
  where?: InputMaybe<ConsoleWhereInput>;
};


export type MutationDeleteManyManufacturerArgs = {
  where?: InputMaybe<ManufacturerWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteManySectionArgs = {
  where?: InputMaybe<SectionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneConsoleArgs = {
  where: ConsoleWhereUniqueInput;
};


export type MutationDeleteOneManufacturerArgs = {
  where: ManufacturerWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneSectionArgs = {
  where: SectionWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyConsoleArgs = {
  data: ConsoleUpdateManyMutationInput;
  where?: InputMaybe<ConsoleWhereInput>;
};


export type MutationUpdateManyManufacturerArgs = {
  data: ManufacturerUpdateManyMutationInput;
  where?: InputMaybe<ManufacturerWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateManySectionArgs = {
  data: SectionUpdateManyMutationInput;
  where?: InputMaybe<SectionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneConsoleArgs = {
  data: ConsoleUpdateInput;
  where: ConsoleWhereUniqueInput;
};


export type MutationUpdateOneManufacturerArgs = {
  data: ManufacturerUpdateInput;
  where: ManufacturerWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneSectionArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneConsoleArgs = {
  create: ConsoleCreateInput;
  update: ConsoleUpdateInput;
  where: ConsoleWhereUniqueInput;
};


export type MutationUpsertOneManufacturerArgs = {
  create: ManufacturerCreateInput;
  update: ManufacturerUpdateInput;
  where: ManufacturerWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOneSectionArgs = {
  create: SectionCreateInput;
  update: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedEnumProductTypeFilter = {
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
};

export type NestedEnumProductTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumProductTypeFilter>;
  _min?: InputMaybe<NestedEnumProductTypeFilter>;
  equals?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  not?: InputMaybe<NestedEnumProductTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ProductType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Product = {
  __typename?: 'Product';
  console: Console;
  consoleId: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  manufacturer: Manufacturer;
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  seller: User;
  type: ProductType;
  upc: Scalars['String'];
  userId: Scalars['String'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  price?: Maybe<Scalars['Float']>;
};

export type ProductAvgOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  consoleId: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  manufacturerId: Scalars['Int'];
  name: Scalars['Int'];
  price: Scalars['Int'];
  type: Scalars['Int'];
  upc: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProductCountOrderByAggregateInput = {
  consoleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  upc?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  console: ConsoleCreateNestedOneWithoutProductsInput;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  manufacturer: ManufacturerCreateNestedOneWithoutProductsInput;
  name: Scalars['String'];
  price: Scalars['Int'];
  seller: UserCreateNestedOneWithoutProductsInput;
  type: ProductType;
  upc: Scalars['String'];
};

export type ProductCreateManyConsoleInput = {
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  type: ProductType;
  upc: Scalars['String'];
  userId: Scalars['String'];
};

export type ProductCreateManyConsoleInputEnvelope = {
  data: Array<ProductCreateManyConsoleInput>;
};

export type ProductCreateManyInput = {
  consoleId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  type: ProductType;
  upc: Scalars['String'];
  userId: Scalars['String'];
};

export type ProductCreateManyManufacturerInput = {
  consoleId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  type: ProductType;
  upc: Scalars['String'];
  userId: Scalars['String'];
};

export type ProductCreateManyManufacturerInputEnvelope = {
  data: Array<ProductCreateManyManufacturerInput>;
};

export type ProductCreateManySellerInput = {
  consoleId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  type: ProductType;
  upc: Scalars['String'];
};

export type ProductCreateManySellerInputEnvelope = {
  data: Array<ProductCreateManySellerInput>;
};

export type ProductCreateNestedManyWithoutConsoleInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutConsoleInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutConsoleInput>>;
  createMany?: InputMaybe<ProductCreateManyConsoleInputEnvelope>;
};

export type ProductCreateNestedManyWithoutManufacturerInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutManufacturerInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutManufacturerInput>>;
  createMany?: InputMaybe<ProductCreateManyManufacturerInputEnvelope>;
};

export type ProductCreateNestedManyWithoutSellerInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutSellerInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutSellerInput>>;
  createMany?: InputMaybe<ProductCreateManySellerInputEnvelope>;
};

export type ProductCreateOrConnectWithoutConsoleInput = {
  create: ProductCreateWithoutConsoleInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutManufacturerInput = {
  create: ProductCreateWithoutManufacturerInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutSellerInput = {
  create: ProductCreateWithoutSellerInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutConsoleInput = {
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  manufacturer: ManufacturerCreateNestedOneWithoutProductsInput;
  name: Scalars['String'];
  price: Scalars['Int'];
  seller: UserCreateNestedOneWithoutProductsInput;
  type: ProductType;
  upc: Scalars['String'];
};

export type ProductCreateWithoutManufacturerInput = {
  console: ConsoleCreateNestedOneWithoutProductsInput;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  seller: UserCreateNestedOneWithoutProductsInput;
  type: ProductType;
  upc: Scalars['String'];
};

export type ProductCreateWithoutSellerInput = {
  console: ConsoleCreateNestedOneWithoutProductsInput;
  id?: InputMaybe<Scalars['String']>;
  image: Scalars['String'];
  manufacturer: ManufacturerCreateNestedOneWithoutProductsInput;
  name: Scalars['String'];
  price: Scalars['Int'];
  type: ProductType;
  upc: Scalars['String'];
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  consoleId: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  type: ProductType;
  upc: Scalars['String'];
  userId: Scalars['String'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  consoleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  type?: Maybe<ProductType>;
  upc?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProductMaxOrderByAggregateInput = {
  consoleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  upc?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  consoleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  type?: Maybe<ProductType>;
  upc?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProductMinOrderByAggregateInput = {
  consoleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  upc?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  consoleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  upc?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  console?: InputMaybe<ConsoleOrderByWithRelationInput>;
  consoleId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  manufacturer?: InputMaybe<ManufacturerOrderByWithRelationInput>;
  manufacturerId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  seller?: InputMaybe<UserOrderByWithRelationInput>;
  type?: InputMaybe<SortOrder>;
  upc?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum ProductScalarFieldEnum {
  ConsoleId = 'consoleId',
  Id = 'id',
  Image = 'image',
  ManufacturerId = 'manufacturerId',
  Name = 'name',
  Price = 'price',
  Type = 'type',
  Upc = 'upc',
  UserId = 'userId'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  consoleId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  manufacturerId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumProductTypeFilter>;
  upc?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  consoleId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  manufacturerId?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  price?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<EnumProductTypeWithAggregatesFilter>;
  upc?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  price?: Maybe<Scalars['Int']>;
};

export type ProductSumOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export enum ProductType {
  Console = 'CONSOLE',
  Videogame = 'VIDEOGAME'
}

export type ProductUpdateInput = {
  console?: InputMaybe<ConsoleUpdateOneRequiredWithoutProductsNestedInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  manufacturer?: InputMaybe<ManufacturerUpdateOneRequiredWithoutProductsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  seller?: InputMaybe<UserUpdateOneRequiredWithoutProductsNestedInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  upc?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  upc?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutConsoleInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutManufacturerInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutSellerInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutConsoleNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutConsoleInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutConsoleInput>>;
  createMany?: InputMaybe<ProductCreateManyConsoleInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutConsoleInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutConsoleInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutConsoleInput>>;
};

export type ProductUpdateManyWithoutManufacturerNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutManufacturerInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutManufacturerInput>>;
  createMany?: InputMaybe<ProductCreateManyManufacturerInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutManufacturerInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutManufacturerInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutManufacturerInput>>;
};

export type ProductUpdateManyWithoutSellerNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutSellerInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutSellerInput>>;
  createMany?: InputMaybe<ProductCreateManySellerInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutSellerInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutSellerInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutSellerInput>>;
};

export type ProductUpdateWithWhereUniqueWithoutConsoleInput = {
  data: ProductUpdateWithoutConsoleInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutManufacturerInput = {
  data: ProductUpdateWithoutManufacturerInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutSellerInput = {
  data: ProductUpdateWithoutSellerInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutConsoleInput = {
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  manufacturer?: InputMaybe<ManufacturerUpdateOneRequiredWithoutProductsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  seller?: InputMaybe<UserUpdateOneRequiredWithoutProductsNestedInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  upc?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutManufacturerInput = {
  console?: InputMaybe<ConsoleUpdateOneRequiredWithoutProductsNestedInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  seller?: InputMaybe<UserUpdateOneRequiredWithoutProductsNestedInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  upc?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutSellerInput = {
  console?: InputMaybe<ConsoleUpdateOneRequiredWithoutProductsNestedInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  manufacturer?: InputMaybe<ManufacturerUpdateOneRequiredWithoutProductsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumProductTypeFieldUpdateOperationsInput>;
  upc?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProductUpsertWithWhereUniqueWithoutConsoleInput = {
  create: ProductCreateWithoutConsoleInput;
  update: ProductUpdateWithoutConsoleInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutManufacturerInput = {
  create: ProductCreateWithoutManufacturerInput;
  update: ProductUpdateWithoutManufacturerInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutSellerInput = {
  create: ProductCreateWithoutSellerInput;
  update: ProductUpdateWithoutSellerInput;
  where: ProductWhereUniqueInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  console?: InputMaybe<ConsoleRelationFilter>;
  consoleId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  manufacturer?: InputMaybe<ManufacturerRelationFilter>;
  manufacturerId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  seller?: InputMaybe<UserRelationFilter>;
  type?: InputMaybe<EnumProductTypeFilter>;
  upc?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateConsole: AggregateConsole;
  aggregateManufacturer: AggregateManufacturer;
  aggregateProduct: AggregateProduct;
  aggregateSection: AggregateSection;
  aggregateUser: AggregateUser;
  console?: Maybe<Console>;
  consoles: Array<Console>;
  findFirstConsole?: Maybe<Console>;
  findFirstConsoleOrThrow?: Maybe<Console>;
  findFirstManufacturer?: Maybe<Manufacturer>;
  findFirstManufacturerOrThrow?: Maybe<Manufacturer>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductOrThrow?: Maybe<Product>;
  findFirstSection?: Maybe<Section>;
  findFirstSectionOrThrow?: Maybe<Section>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getConsole?: Maybe<Console>;
  getManufacturer?: Maybe<Manufacturer>;
  getProduct?: Maybe<Product>;
  getSection?: Maybe<Section>;
  getUser?: Maybe<User>;
  groupByConsole: Array<ConsoleGroupBy>;
  groupByManufacturer: Array<ManufacturerGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupBySection: Array<SectionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  manufacturer?: Maybe<Manufacturer>;
  manufacturers: Array<Manufacturer>;
  product?: Maybe<Product>;
  products: Array<Product>;
  section?: Maybe<Section>;
  sections: Array<Section>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateConsoleArgs = {
  cursor?: InputMaybe<ConsoleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ConsoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsoleWhereInput>;
};


export type QueryAggregateManufacturerArgs = {
  cursor?: InputMaybe<ManufacturerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ManufacturerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManufacturerWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAggregateSectionArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryConsoleArgs = {
  where: ConsoleWhereUniqueInput;
};


export type QueryConsolesArgs = {
  cursor?: InputMaybe<ConsoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConsoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConsoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsoleWhereInput>;
};


export type QueryFindFirstConsoleArgs = {
  cursor?: InputMaybe<ConsoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConsoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConsoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsoleWhereInput>;
};


export type QueryFindFirstConsoleOrThrowArgs = {
  cursor?: InputMaybe<ConsoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConsoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConsoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsoleWhereInput>;
};


export type QueryFindFirstManufacturerArgs = {
  cursor?: InputMaybe<ManufacturerWhereUniqueInput>;
  distinct?: InputMaybe<Array<ManufacturerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ManufacturerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManufacturerWhereInput>;
};


export type QueryFindFirstManufacturerOrThrowArgs = {
  cursor?: InputMaybe<ManufacturerWhereUniqueInput>;
  distinct?: InputMaybe<Array<ManufacturerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ManufacturerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManufacturerWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProductOrThrowArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstSectionArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryFindFirstSectionOrThrowArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetConsoleArgs = {
  where: ConsoleWhereUniqueInput;
};


export type QueryGetManufacturerArgs = {
  where: ManufacturerWhereUniqueInput;
};


export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryGetSectionArgs = {
  where: SectionWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByConsoleArgs = {
  by: Array<ConsoleScalarFieldEnum>;
  having?: InputMaybe<ConsoleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ConsoleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsoleWhereInput>;
};


export type QueryGroupByManufacturerArgs = {
  by: Array<ManufacturerScalarFieldEnum>;
  having?: InputMaybe<ManufacturerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ManufacturerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManufacturerWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGroupBySectionArgs = {
  by: Array<SectionScalarFieldEnum>;
  having?: InputMaybe<SectionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SectionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryManufacturerArgs = {
  where: ManufacturerWhereUniqueInput;
};


export type QueryManufacturersArgs = {
  cursor?: InputMaybe<ManufacturerWhereUniqueInput>;
  distinct?: InputMaybe<Array<ManufacturerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ManufacturerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ManufacturerWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QuerySectionArgs = {
  where: SectionWhereUniqueInput;
};


export type QuerySectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Section = {
  __typename?: 'Section';
  fields: Array<SectionFields>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type SectionCountAggregate = {
  __typename?: 'SectionCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type SectionCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SectionCreateInput = {
  fields?: InputMaybe<Array<SectionFieldsCreateInput>>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type SectionCreateManyInput = {
  fields?: InputMaybe<Array<SectionFieldsCreateInput>>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type SectionFields = {
  __typename?: 'SectionFields';
  name: Scalars['String'];
  type: SectionFieldype;
};

export type SectionFieldsCreateInput = {
  name: Scalars['String'];
  type: SectionFieldype;
};

export type SectionFieldsObjectEqualityInput = {
  name: Scalars['String'];
  type: SectionFieldype;
};

export type SectionFieldsOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SectionFieldype {
  Boolean = 'BOOLEAN',
  Pricerange = 'PRICERANGE'
}

export type SectionGroupBy = {
  __typename?: 'SectionGroupBy';
  _count?: Maybe<SectionCountAggregate>;
  _max?: Maybe<SectionMaxAggregate>;
  _min?: Maybe<SectionMinAggregate>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type SectionMaxAggregate = {
  __typename?: 'SectionMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SectionMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SectionMinAggregate = {
  __typename?: 'SectionMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SectionMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SectionOrderByWithAggregationInput = {
  _count?: InputMaybe<SectionCountOrderByAggregateInput>;
  _max?: InputMaybe<SectionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SectionMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type SectionOrderByWithRelationInput = {
  fields?: InputMaybe<SectionFieldsOrderByCompositeAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum SectionScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type SectionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SectionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SectionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SectionScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type SectionUpdateInput = {
  fields?: InputMaybe<Array<SectionFieldsCreateInput>>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpdateManyMutationInput = {
  fields?: InputMaybe<Array<SectionFieldsCreateInput>>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionWhereInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>;
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  OR?: InputMaybe<Array<SectionWhereInput>>;
  fields?: InputMaybe<Array<SectionFieldsObjectEqualityInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  products: Array<Product>;
  role: Array<UserType>;
};


export type UserProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  products: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  phoneNumber: Scalars['Int'];
  role: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductCreateNestedManyWithoutSellerInput>;
  role?: InputMaybe<UserCreateroleInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserCreateroleInput>;
};

export type UserCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<UserCreateWithoutProductsInput>;
};

export type UserCreateOrConnectWithoutProductsInput = {
  create: UserCreateWithoutProductsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutProductsInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserCreateroleInput>;
};

export type UserCreateroleInput = {
  set: Array<UserType>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  role?: Maybe<Array<UserType>>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  PhoneNumber = 'phoneNumber',
  Role = 'role'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumUserTypeNullableListFilter>;
};

export enum UserType {
  Buyer = 'BUYER',
  Seller = 'SELLER'
}

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  products?: InputMaybe<ProductUpdateManyWithoutSellerNestedInput>;
  role?: InputMaybe<UserUpdateroleInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
};

export type UserUpdateOneRequiredWithoutProductsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductsInput>;
  create?: InputMaybe<UserCreateWithoutProductsInput>;
  update?: InputMaybe<UserUpdateWithoutProductsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductsInput>;
};

export type UserUpdateWithoutProductsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<UserUpdateroleInput>;
};

export type UserUpdateroleInput = {
  push?: InputMaybe<Array<UserType>>;
  set?: InputMaybe<Array<UserType>>;
};

export type UserUpsertWithoutProductsInput = {
  create: UserCreateWithoutProductsInput;
  update: UserUpdateWithoutProductsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  role?: InputMaybe<EnumUserTypeNullableListFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type GetManufacturersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetManufacturersQuery = { __typename?: 'Query', manufacturers: Array<{ __typename?: 'Manufacturer', name: string }> };


export const GetManufacturersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetManufacturers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manufacturers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetManufacturersQuery, GetManufacturersQueryVariables>;