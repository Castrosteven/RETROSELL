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

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type Console = {
  __typename?: 'Console';
  id: Scalars['String'];
  manufacturer: Manufacturer;
  manufacturerId: Scalars['String'];
  name: Scalars['String'];
  type: Array<ConsoleType>;
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

export type ConsoleCreateOrConnectWithoutManufacturerInput = {
  create: ConsoleCreateWithoutManufacturerInput;
  where: ConsoleWhereUniqueInput;
};

export type ConsoleCreateWithoutManufacturerInput = {
  id?: InputMaybe<Scalars['String']>;
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
  type?: InputMaybe<SortOrder>;
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

export type ConsoleUpdateWithWhereUniqueWithoutManufacturerInput = {
  data: ConsoleUpdateWithoutManufacturerInput;
  where: ConsoleWhereUniqueInput;
};

export type ConsoleUpdateWithoutManufacturerInput = {
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

export type ConsoleWhereInput = {
  AND?: InputMaybe<Array<ConsoleWhereInput>>;
  NOT?: InputMaybe<Array<ConsoleWhereInput>>;
  OR?: InputMaybe<Array<ConsoleWhereInput>>;
  id?: InputMaybe<StringFilter>;
  manufacturer?: InputMaybe<ManufacturerRelationFilter>;
  manufacturerId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
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

export type Manufacturer = {
  __typename?: 'Manufacturer';
  _count?: Maybe<ManufacturerCount>;
  consoles: Array<Console>;
  id: Scalars['String'];
  name: Scalars['String'];
};


export type ManufacturerConsolesArgs = {
  cursor?: InputMaybe<ConsoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConsoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConsoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConsoleWhereInput>;
};

export type ManufacturerCount = {
  __typename?: 'ManufacturerCount';
  consoles: Scalars['Int'];
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

export type ManufacturerCreateOrConnectWithoutConsolesInput = {
  create: ManufacturerCreateWithoutConsolesInput;
  where: ManufacturerWhereUniqueInput;
};

export type ManufacturerCreateWithoutConsolesInput = {
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

export type ManufacturerUpdateWithoutConsolesInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ManufacturerUpsertWithoutConsolesInput = {
  create: ManufacturerCreateWithoutConsolesInput;
  update: ManufacturerUpdateWithoutConsolesInput;
};

export type ManufacturerWhereInput = {
  AND?: InputMaybe<Array<ManufacturerWhereInput>>;
  NOT?: InputMaybe<Array<ManufacturerWhereInput>>;
  OR?: InputMaybe<Array<ManufacturerWhereInput>>;
  consoles?: InputMaybe<ConsoleListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ManufacturerWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyConsole: AffectedRowsOutput;
  createManyManufacturer: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneConsole: Console;
  createOneManufacturer: Manufacturer;
  createOneUser: User;
  deleteManyConsole: AffectedRowsOutput;
  deleteManyManufacturer: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneConsole?: Maybe<Console>;
  deleteOneManufacturer?: Maybe<Manufacturer>;
  deleteOneUser?: Maybe<User>;
  updateManyConsole: AffectedRowsOutput;
  updateManyManufacturer: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneConsole?: Maybe<Console>;
  updateOneManufacturer?: Maybe<Manufacturer>;
  updateOneUser?: Maybe<User>;
  upsertOneConsole: Console;
  upsertOneManufacturer: Manufacturer;
  upsertOneUser: User;
};


export type MutationCreateManyConsoleArgs = {
  data: Array<ConsoleCreateManyInput>;
};


export type MutationCreateManyManufacturerArgs = {
  data: Array<ManufacturerCreateManyInput>;
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


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyConsoleArgs = {
  where?: InputMaybe<ConsoleWhereInput>;
};


export type MutationDeleteManyManufacturerArgs = {
  where?: InputMaybe<ManufacturerWhereInput>;
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


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
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

export type Query = {
  __typename?: 'Query';
  aggregateConsole: AggregateConsole;
  aggregateManufacturer: AggregateManufacturer;
  aggregateUser: AggregateUser;
  console?: Maybe<Console>;
  consoles: Array<Console>;
  findFirstConsole?: Maybe<Console>;
  findFirstConsoleOrThrow?: Maybe<Console>;
  findFirstManufacturer?: Maybe<Manufacturer>;
  findFirstManufacturerOrThrow?: Maybe<Manufacturer>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getConsole?: Maybe<Console>;
  getManufacturer?: Maybe<Manufacturer>;
  getUser?: Maybe<User>;
  groupByConsole: Array<ConsoleGroupBy>;
  groupByManufacturer: Array<ManufacturerGroupBy>;
  groupByUser: Array<UserGroupBy>;
  manufacturer?: Maybe<Manufacturer>;
  manufacturers: Array<Manufacturer>;
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
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  phoneNumber: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
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
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  PhoneNumber = 'phoneNumber'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type GetManufacturersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetManufacturersQuery = { __typename?: 'Query', manufacturers: Array<{ __typename?: 'Manufacturer', name: string }> };


export const GetManufacturersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetManufacturers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"manufacturers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetManufacturersQuery, GetManufacturersQueryVariables>;