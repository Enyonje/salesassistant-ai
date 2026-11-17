
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SalesProfile
 * 
 */
export type SalesProfile = $Result.DefaultSelection<Prisma.$SalesProfilePayload>
/**
 * Model SalesLead
 * 
 */
export type SalesLead = $Result.DefaultSelection<Prisma.$SalesLeadPayload>
/**
 * Model SalesActivity
 * 
 */
export type SalesActivity = $Result.DefaultSelection<Prisma.$SalesActivityPayload>
/**
 * Model SalesOutreachMessage
 * 
 */
export type SalesOutreachMessage = $Result.DefaultSelection<Prisma.$SalesOutreachMessagePayload>
/**
 * Model SalesCampaign
 * 
 */
export type SalesCampaign = $Result.DefaultSelection<Prisma.$SalesCampaignPayload>
/**
 * Model SalesCampaignEnrollment
 * 
 */
export type SalesCampaignEnrollment = $Result.DefaultSelection<Prisma.$SalesCampaignEnrollmentPayload>
/**
 * Model SalesWebhookEvent
 * 
 */
export type SalesWebhookEvent = $Result.DefaultSelection<Prisma.$SalesWebhookEventPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.salesProfile`: Exposes CRUD operations for the **SalesProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesProfiles
    * const salesProfiles = await prisma.salesProfile.findMany()
    * ```
    */
  get salesProfile(): Prisma.SalesProfileDelegate<ExtArgs>;

  /**
   * `prisma.salesLead`: Exposes CRUD operations for the **SalesLead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesLeads
    * const salesLeads = await prisma.salesLead.findMany()
    * ```
    */
  get salesLead(): Prisma.SalesLeadDelegate<ExtArgs>;

  /**
   * `prisma.salesActivity`: Exposes CRUD operations for the **SalesActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesActivities
    * const salesActivities = await prisma.salesActivity.findMany()
    * ```
    */
  get salesActivity(): Prisma.SalesActivityDelegate<ExtArgs>;

  /**
   * `prisma.salesOutreachMessage`: Exposes CRUD operations for the **SalesOutreachMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOutreachMessages
    * const salesOutreachMessages = await prisma.salesOutreachMessage.findMany()
    * ```
    */
  get salesOutreachMessage(): Prisma.SalesOutreachMessageDelegate<ExtArgs>;

  /**
   * `prisma.salesCampaign`: Exposes CRUD operations for the **SalesCampaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesCampaigns
    * const salesCampaigns = await prisma.salesCampaign.findMany()
    * ```
    */
  get salesCampaign(): Prisma.SalesCampaignDelegate<ExtArgs>;

  /**
   * `prisma.salesCampaignEnrollment`: Exposes CRUD operations for the **SalesCampaignEnrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesCampaignEnrollments
    * const salesCampaignEnrollments = await prisma.salesCampaignEnrollment.findMany()
    * ```
    */
  get salesCampaignEnrollment(): Prisma.SalesCampaignEnrollmentDelegate<ExtArgs>;

  /**
   * `prisma.salesWebhookEvent`: Exposes CRUD operations for the **SalesWebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesWebhookEvents
    * const salesWebhookEvents = await prisma.salesWebhookEvent.findMany()
    * ```
    */
  get salesWebhookEvent(): Prisma.SalesWebhookEventDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SalesProfile: 'SalesProfile',
    SalesLead: 'SalesLead',
    SalesActivity: 'SalesActivity',
    SalesOutreachMessage: 'SalesOutreachMessage',
    SalesCampaign: 'SalesCampaign',
    SalesCampaignEnrollment: 'SalesCampaignEnrollment',
    SalesWebhookEvent: 'SalesWebhookEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "salesProfile" | "salesLead" | "salesActivity" | "salesOutreachMessage" | "salesCampaign" | "salesCampaignEnrollment" | "salesWebhookEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SalesProfile: {
        payload: Prisma.$SalesProfilePayload<ExtArgs>
        fields: Prisma.SalesProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload>
          }
          findFirst: {
            args: Prisma.SalesProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload>
          }
          findMany: {
            args: Prisma.SalesProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload>[]
          }
          create: {
            args: Prisma.SalesProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload>
          }
          createMany: {
            args: Prisma.SalesProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload>[]
          }
          delete: {
            args: Prisma.SalesProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload>
          }
          update: {
            args: Prisma.SalesProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload>
          }
          deleteMany: {
            args: Prisma.SalesProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesProfilePayload>
          }
          aggregate: {
            args: Prisma.SalesProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesProfile>
          }
          groupBy: {
            args: Prisma.SalesProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SalesProfileCountAggregateOutputType> | number
          }
        }
      }
      SalesLead: {
        payload: Prisma.$SalesLeadPayload<ExtArgs>
        fields: Prisma.SalesLeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesLeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesLeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload>
          }
          findFirst: {
            args: Prisma.SalesLeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesLeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload>
          }
          findMany: {
            args: Prisma.SalesLeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload>[]
          }
          create: {
            args: Prisma.SalesLeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload>
          }
          createMany: {
            args: Prisma.SalesLeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesLeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload>[]
          }
          delete: {
            args: Prisma.SalesLeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload>
          }
          update: {
            args: Prisma.SalesLeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload>
          }
          deleteMany: {
            args: Prisma.SalesLeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesLeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesLeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesLeadPayload>
          }
          aggregate: {
            args: Prisma.SalesLeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesLead>
          }
          groupBy: {
            args: Prisma.SalesLeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesLeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesLeadCountArgs<ExtArgs>
            result: $Utils.Optional<SalesLeadCountAggregateOutputType> | number
          }
        }
      }
      SalesActivity: {
        payload: Prisma.$SalesActivityPayload<ExtArgs>
        fields: Prisma.SalesActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload>
          }
          findFirst: {
            args: Prisma.SalesActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload>
          }
          findMany: {
            args: Prisma.SalesActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload>[]
          }
          create: {
            args: Prisma.SalesActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload>
          }
          createMany: {
            args: Prisma.SalesActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload>[]
          }
          delete: {
            args: Prisma.SalesActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload>
          }
          update: {
            args: Prisma.SalesActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload>
          }
          deleteMany: {
            args: Prisma.SalesActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesActivityPayload>
          }
          aggregate: {
            args: Prisma.SalesActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesActivity>
          }
          groupBy: {
            args: Prisma.SalesActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesActivityCountArgs<ExtArgs>
            result: $Utils.Optional<SalesActivityCountAggregateOutputType> | number
          }
        }
      }
      SalesOutreachMessage: {
        payload: Prisma.$SalesOutreachMessagePayload<ExtArgs>
        fields: Prisma.SalesOutreachMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesOutreachMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOutreachMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload>
          }
          findFirst: {
            args: Prisma.SalesOutreachMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOutreachMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload>
          }
          findMany: {
            args: Prisma.SalesOutreachMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload>[]
          }
          create: {
            args: Prisma.SalesOutreachMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload>
          }
          createMany: {
            args: Prisma.SalesOutreachMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesOutreachMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload>[]
          }
          delete: {
            args: Prisma.SalesOutreachMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload>
          }
          update: {
            args: Prisma.SalesOutreachMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload>
          }
          deleteMany: {
            args: Prisma.SalesOutreachMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOutreachMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesOutreachMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOutreachMessagePayload>
          }
          aggregate: {
            args: Prisma.SalesOutreachMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesOutreachMessage>
          }
          groupBy: {
            args: Prisma.SalesOutreachMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesOutreachMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOutreachMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SalesOutreachMessageCountAggregateOutputType> | number
          }
        }
      }
      SalesCampaign: {
        payload: Prisma.$SalesCampaignPayload<ExtArgs>
        fields: Prisma.SalesCampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesCampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesCampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload>
          }
          findFirst: {
            args: Prisma.SalesCampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesCampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload>
          }
          findMany: {
            args: Prisma.SalesCampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload>[]
          }
          create: {
            args: Prisma.SalesCampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload>
          }
          createMany: {
            args: Prisma.SalesCampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload>[]
          }
          delete: {
            args: Prisma.SalesCampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload>
          }
          update: {
            args: Prisma.SalesCampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload>
          }
          deleteMany: {
            args: Prisma.SalesCampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesCampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesCampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignPayload>
          }
          aggregate: {
            args: Prisma.SalesCampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesCampaign>
          }
          groupBy: {
            args: Prisma.SalesCampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesCampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCampaignCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCampaignCountAggregateOutputType> | number
          }
        }
      }
      SalesCampaignEnrollment: {
        payload: Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>
        fields: Prisma.SalesCampaignEnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesCampaignEnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesCampaignEnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload>
          }
          findFirst: {
            args: Prisma.SalesCampaignEnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesCampaignEnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload>
          }
          findMany: {
            args: Prisma.SalesCampaignEnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload>[]
          }
          create: {
            args: Prisma.SalesCampaignEnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload>
          }
          createMany: {
            args: Prisma.SalesCampaignEnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCampaignEnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload>[]
          }
          delete: {
            args: Prisma.SalesCampaignEnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload>
          }
          update: {
            args: Prisma.SalesCampaignEnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.SalesCampaignEnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesCampaignEnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesCampaignEnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesCampaignEnrollmentPayload>
          }
          aggregate: {
            args: Prisma.SalesCampaignEnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesCampaignEnrollment>
          }
          groupBy: {
            args: Prisma.SalesCampaignEnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesCampaignEnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCampaignEnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCampaignEnrollmentCountAggregateOutputType> | number
          }
        }
      }
      SalesWebhookEvent: {
        payload: Prisma.$SalesWebhookEventPayload<ExtArgs>
        fields: Prisma.SalesWebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesWebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesWebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload>
          }
          findFirst: {
            args: Prisma.SalesWebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesWebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload>
          }
          findMany: {
            args: Prisma.SalesWebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload>[]
          }
          create: {
            args: Prisma.SalesWebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload>
          }
          createMany: {
            args: Prisma.SalesWebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesWebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload>[]
          }
          delete: {
            args: Prisma.SalesWebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload>
          }
          update: {
            args: Prisma.SalesWebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.SalesWebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesWebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesWebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesWebhookEventPayload>
          }
          aggregate: {
            args: Prisma.SalesWebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesWebhookEvent>
          }
          groupBy: {
            args: Prisma.SalesWebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesWebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesWebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<SalesWebhookEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    org_id: string | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    org_id: string | null
    created_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    name: number
    org_id: number
    created_at: number
    deleted_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    org_id?: true
    created_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    org_id?: true
    created_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    org_id?: true
    created_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    name: string | null
    org_id: string | null
    created_at: Date
    deleted_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    org_id?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    org_id?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    org_id?: boolean
    created_at?: boolean
    deleted_at?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      name: string | null
      org_id: string | null
      created_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly org_id: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model SalesProfile
   */

  export type AggregateSalesProfile = {
    _count: SalesProfileCountAggregateOutputType | null
    _min: SalesProfileMinAggregateOutputType | null
    _max: SalesProfileMaxAggregateOutputType | null
  }

  export type SalesProfileMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    business_name: string | null
    website: string | null
    product_description: string | null
    target_customer: string | null
    value_proposition: string | null
    tone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesProfileMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    business_name: string | null
    website: string | null
    product_description: string | null
    target_customer: string | null
    value_proposition: string | null
    tone: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesProfileCountAggregateOutputType = {
    id: number
    tenant_id: number
    owner_user_id: number
    business_name: number
    website: number
    product_description: number
    target_customer: number
    value_proposition: number
    tone: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesProfileMinAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    business_name?: true
    website?: true
    product_description?: true
    target_customer?: true
    value_proposition?: true
    tone?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesProfileMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    business_name?: true
    website?: true
    product_description?: true
    target_customer?: true
    value_proposition?: true
    tone?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesProfileCountAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    business_name?: true
    website?: true
    product_description?: true
    target_customer?: true
    value_proposition?: true
    tone?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesProfile to aggregate.
     */
    where?: SalesProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesProfiles to fetch.
     */
    orderBy?: SalesProfileOrderByWithRelationInput | SalesProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesProfiles
    **/
    _count?: true | SalesProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesProfileMaxAggregateInputType
  }

  export type GetSalesProfileAggregateType<T extends SalesProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesProfile[P]>
      : GetScalarType<T[P], AggregateSalesProfile[P]>
  }




  export type SalesProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesProfileWhereInput
    orderBy?: SalesProfileOrderByWithAggregationInput | SalesProfileOrderByWithAggregationInput[]
    by: SalesProfileScalarFieldEnum[] | SalesProfileScalarFieldEnum
    having?: SalesProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesProfileCountAggregateInputType | true
    _min?: SalesProfileMinAggregateInputType
    _max?: SalesProfileMaxAggregateInputType
  }

  export type SalesProfileGroupByOutputType = {
    id: string
    tenant_id: string
    owner_user_id: string
    business_name: string | null
    website: string | null
    product_description: string | null
    target_customer: string | null
    value_proposition: string | null
    tone: string
    created_at: Date
    updated_at: Date
    _count: SalesProfileCountAggregateOutputType | null
    _min: SalesProfileMinAggregateOutputType | null
    _max: SalesProfileMaxAggregateOutputType | null
  }

  type GetSalesProfileGroupByPayload<T extends SalesProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SalesProfileGroupByOutputType[P]>
        }
      >
    >


  export type SalesProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    business_name?: boolean
    website?: boolean
    product_description?: boolean
    target_customer?: boolean
    value_proposition?: boolean
    tone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesProfile"]>

  export type SalesProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    business_name?: boolean
    website?: boolean
    product_description?: boolean
    target_customer?: boolean
    value_proposition?: boolean
    tone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesProfile"]>

  export type SalesProfileSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    business_name?: boolean
    website?: boolean
    product_description?: boolean
    target_customer?: boolean
    value_proposition?: boolean
    tone?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $SalesProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      owner_user_id: string
      business_name: string | null
      website: string | null
      product_description: string | null
      target_customer: string | null
      value_proposition: string | null
      tone: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["salesProfile"]>
    composites: {}
  }

  type SalesProfileGetPayload<S extends boolean | null | undefined | SalesProfileDefaultArgs> = $Result.GetResult<Prisma.$SalesProfilePayload, S>

  type SalesProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesProfileCountAggregateInputType | true
    }

  export interface SalesProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesProfile'], meta: { name: 'SalesProfile' } }
    /**
     * Find zero or one SalesProfile that matches the filter.
     * @param {SalesProfileFindUniqueArgs} args - Arguments to find a SalesProfile
     * @example
     * // Get one SalesProfile
     * const salesProfile = await prisma.salesProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesProfileFindUniqueArgs>(args: SelectSubset<T, SalesProfileFindUniqueArgs<ExtArgs>>): Prisma__SalesProfileClient<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesProfileFindUniqueOrThrowArgs} args - Arguments to find a SalesProfile
     * @example
     * // Get one SalesProfile
     * const salesProfile = await prisma.salesProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesProfileClient<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesProfileFindFirstArgs} args - Arguments to find a SalesProfile
     * @example
     * // Get one SalesProfile
     * const salesProfile = await prisma.salesProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesProfileFindFirstArgs>(args?: SelectSubset<T, SalesProfileFindFirstArgs<ExtArgs>>): Prisma__SalesProfileClient<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesProfileFindFirstOrThrowArgs} args - Arguments to find a SalesProfile
     * @example
     * // Get one SalesProfile
     * const salesProfile = await prisma.salesProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesProfileClient<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesProfiles
     * const salesProfiles = await prisma.salesProfile.findMany()
     * 
     * // Get first 10 SalesProfiles
     * const salesProfiles = await prisma.salesProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesProfileWithIdOnly = await prisma.salesProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesProfileFindManyArgs>(args?: SelectSubset<T, SalesProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesProfile.
     * @param {SalesProfileCreateArgs} args - Arguments to create a SalesProfile.
     * @example
     * // Create one SalesProfile
     * const SalesProfile = await prisma.salesProfile.create({
     *   data: {
     *     // ... data to create a SalesProfile
     *   }
     * })
     * 
     */
    create<T extends SalesProfileCreateArgs>(args: SelectSubset<T, SalesProfileCreateArgs<ExtArgs>>): Prisma__SalesProfileClient<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesProfiles.
     * @param {SalesProfileCreateManyArgs} args - Arguments to create many SalesProfiles.
     * @example
     * // Create many SalesProfiles
     * const salesProfile = await prisma.salesProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesProfileCreateManyArgs>(args?: SelectSubset<T, SalesProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesProfiles and returns the data saved in the database.
     * @param {SalesProfileCreateManyAndReturnArgs} args - Arguments to create many SalesProfiles.
     * @example
     * // Create many SalesProfiles
     * const salesProfile = await prisma.salesProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesProfiles and only return the `id`
     * const salesProfileWithIdOnly = await prisma.salesProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesProfile.
     * @param {SalesProfileDeleteArgs} args - Arguments to delete one SalesProfile.
     * @example
     * // Delete one SalesProfile
     * const SalesProfile = await prisma.salesProfile.delete({
     *   where: {
     *     // ... filter to delete one SalesProfile
     *   }
     * })
     * 
     */
    delete<T extends SalesProfileDeleteArgs>(args: SelectSubset<T, SalesProfileDeleteArgs<ExtArgs>>): Prisma__SalesProfileClient<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesProfile.
     * @param {SalesProfileUpdateArgs} args - Arguments to update one SalesProfile.
     * @example
     * // Update one SalesProfile
     * const salesProfile = await prisma.salesProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesProfileUpdateArgs>(args: SelectSubset<T, SalesProfileUpdateArgs<ExtArgs>>): Prisma__SalesProfileClient<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesProfiles.
     * @param {SalesProfileDeleteManyArgs} args - Arguments to filter SalesProfiles to delete.
     * @example
     * // Delete a few SalesProfiles
     * const { count } = await prisma.salesProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesProfileDeleteManyArgs>(args?: SelectSubset<T, SalesProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesProfiles
     * const salesProfile = await prisma.salesProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesProfileUpdateManyArgs>(args: SelectSubset<T, SalesProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesProfile.
     * @param {SalesProfileUpsertArgs} args - Arguments to update or create a SalesProfile.
     * @example
     * // Update or create a SalesProfile
     * const salesProfile = await prisma.salesProfile.upsert({
     *   create: {
     *     // ... data to create a SalesProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesProfile we want to update
     *   }
     * })
     */
    upsert<T extends SalesProfileUpsertArgs>(args: SelectSubset<T, SalesProfileUpsertArgs<ExtArgs>>): Prisma__SalesProfileClient<$Result.GetResult<Prisma.$SalesProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesProfileCountArgs} args - Arguments to filter SalesProfiles to count.
     * @example
     * // Count the number of SalesProfiles
     * const count = await prisma.salesProfile.count({
     *   where: {
     *     // ... the filter for the SalesProfiles we want to count
     *   }
     * })
    **/
    count<T extends SalesProfileCountArgs>(
      args?: Subset<T, SalesProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesProfileAggregateArgs>(args: Subset<T, SalesProfileAggregateArgs>): Prisma.PrismaPromise<GetSalesProfileAggregateType<T>>

    /**
     * Group by SalesProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesProfileGroupByArgs['orderBy'] }
        : { orderBy?: SalesProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesProfile model
   */
  readonly fields: SalesProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesProfile model
   */ 
  interface SalesProfileFieldRefs {
    readonly id: FieldRef<"SalesProfile", 'String'>
    readonly tenant_id: FieldRef<"SalesProfile", 'String'>
    readonly owner_user_id: FieldRef<"SalesProfile", 'String'>
    readonly business_name: FieldRef<"SalesProfile", 'String'>
    readonly website: FieldRef<"SalesProfile", 'String'>
    readonly product_description: FieldRef<"SalesProfile", 'String'>
    readonly target_customer: FieldRef<"SalesProfile", 'String'>
    readonly value_proposition: FieldRef<"SalesProfile", 'String'>
    readonly tone: FieldRef<"SalesProfile", 'String'>
    readonly created_at: FieldRef<"SalesProfile", 'DateTime'>
    readonly updated_at: FieldRef<"SalesProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesProfile findUnique
   */
  export type SalesProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * Filter, which SalesProfile to fetch.
     */
    where: SalesProfileWhereUniqueInput
  }

  /**
   * SalesProfile findUniqueOrThrow
   */
  export type SalesProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * Filter, which SalesProfile to fetch.
     */
    where: SalesProfileWhereUniqueInput
  }

  /**
   * SalesProfile findFirst
   */
  export type SalesProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * Filter, which SalesProfile to fetch.
     */
    where?: SalesProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesProfiles to fetch.
     */
    orderBy?: SalesProfileOrderByWithRelationInput | SalesProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesProfiles.
     */
    cursor?: SalesProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesProfiles.
     */
    distinct?: SalesProfileScalarFieldEnum | SalesProfileScalarFieldEnum[]
  }

  /**
   * SalesProfile findFirstOrThrow
   */
  export type SalesProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * Filter, which SalesProfile to fetch.
     */
    where?: SalesProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesProfiles to fetch.
     */
    orderBy?: SalesProfileOrderByWithRelationInput | SalesProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesProfiles.
     */
    cursor?: SalesProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesProfiles.
     */
    distinct?: SalesProfileScalarFieldEnum | SalesProfileScalarFieldEnum[]
  }

  /**
   * SalesProfile findMany
   */
  export type SalesProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * Filter, which SalesProfiles to fetch.
     */
    where?: SalesProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesProfiles to fetch.
     */
    orderBy?: SalesProfileOrderByWithRelationInput | SalesProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesProfiles.
     */
    cursor?: SalesProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesProfiles.
     */
    skip?: number
    distinct?: SalesProfileScalarFieldEnum | SalesProfileScalarFieldEnum[]
  }

  /**
   * SalesProfile create
   */
  export type SalesProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesProfile.
     */
    data: XOR<SalesProfileCreateInput, SalesProfileUncheckedCreateInput>
  }

  /**
   * SalesProfile createMany
   */
  export type SalesProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesProfiles.
     */
    data: SalesProfileCreateManyInput | SalesProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesProfile createManyAndReturn
   */
  export type SalesProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesProfiles.
     */
    data: SalesProfileCreateManyInput | SalesProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesProfile update
   */
  export type SalesProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesProfile.
     */
    data: XOR<SalesProfileUpdateInput, SalesProfileUncheckedUpdateInput>
    /**
     * Choose, which SalesProfile to update.
     */
    where: SalesProfileWhereUniqueInput
  }

  /**
   * SalesProfile updateMany
   */
  export type SalesProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesProfiles.
     */
    data: XOR<SalesProfileUpdateManyMutationInput, SalesProfileUncheckedUpdateManyInput>
    /**
     * Filter which SalesProfiles to update
     */
    where?: SalesProfileWhereInput
  }

  /**
   * SalesProfile upsert
   */
  export type SalesProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesProfile to update in case it exists.
     */
    where: SalesProfileWhereUniqueInput
    /**
     * In case the SalesProfile found by the `where` argument doesn't exist, create a new SalesProfile with this data.
     */
    create: XOR<SalesProfileCreateInput, SalesProfileUncheckedCreateInput>
    /**
     * In case the SalesProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesProfileUpdateInput, SalesProfileUncheckedUpdateInput>
  }

  /**
   * SalesProfile delete
   */
  export type SalesProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
    /**
     * Filter which SalesProfile to delete.
     */
    where: SalesProfileWhereUniqueInput
  }

  /**
   * SalesProfile deleteMany
   */
  export type SalesProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesProfiles to delete
     */
    where?: SalesProfileWhereInput
  }

  /**
   * SalesProfile without action
   */
  export type SalesProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesProfile
     */
    select?: SalesProfileSelect<ExtArgs> | null
  }


  /**
   * Model SalesLead
   */

  export type AggregateSalesLead = {
    _count: SalesLeadCountAggregateOutputType | null
    _avg: SalesLeadAvgAggregateOutputType | null
    _sum: SalesLeadSumAggregateOutputType | null
    _min: SalesLeadMinAggregateOutputType | null
    _max: SalesLeadMaxAggregateOutputType | null
  }

  export type SalesLeadAvgAggregateOutputType = {
    score: number | null
    estimated_value: Decimal | null
  }

  export type SalesLeadSumAggregateOutputType = {
    score: number | null
    estimated_value: Decimal | null
  }

  export type SalesLeadMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    full_name: string | null
    company: string | null
    website: string | null
    email: string | null
    phone: string | null
    source: string | null
    stage: string | null
    score: number | null
    estimated_value: Decimal | null
    notes: string | null
    research_summary: string | null
    research_source_url: string | null
    researched_at: Date | null
    email_consent: boolean | null
    whatsapp_consent: boolean | null
    email_consent_source: string | null
    email_consent_at: Date | null
    whatsapp_consent_source: string | null
    whatsapp_consent_at: Date | null
    email_opted_out_at: Date | null
    whatsapp_opted_out_at: Date | null
    last_contacted_at: Date | null
    next_follow_up_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesLeadMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    full_name: string | null
    company: string | null
    website: string | null
    email: string | null
    phone: string | null
    source: string | null
    stage: string | null
    score: number | null
    estimated_value: Decimal | null
    notes: string | null
    research_summary: string | null
    research_source_url: string | null
    researched_at: Date | null
    email_consent: boolean | null
    whatsapp_consent: boolean | null
    email_consent_source: string | null
    email_consent_at: Date | null
    whatsapp_consent_source: string | null
    whatsapp_consent_at: Date | null
    email_opted_out_at: Date | null
    whatsapp_opted_out_at: Date | null
    last_contacted_at: Date | null
    next_follow_up_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesLeadCountAggregateOutputType = {
    id: number
    tenant_id: number
    owner_user_id: number
    full_name: number
    company: number
    website: number
    email: number
    phone: number
    source: number
    stage: number
    score: number
    estimated_value: number
    notes: number
    research_summary: number
    research_source_url: number
    researched_at: number
    email_consent: number
    whatsapp_consent: number
    email_consent_source: number
    email_consent_at: number
    whatsapp_consent_source: number
    whatsapp_consent_at: number
    email_opted_out_at: number
    whatsapp_opted_out_at: number
    last_contacted_at: number
    next_follow_up_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesLeadAvgAggregateInputType = {
    score?: true
    estimated_value?: true
  }

  export type SalesLeadSumAggregateInputType = {
    score?: true
    estimated_value?: true
  }

  export type SalesLeadMinAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    full_name?: true
    company?: true
    website?: true
    email?: true
    phone?: true
    source?: true
    stage?: true
    score?: true
    estimated_value?: true
    notes?: true
    research_summary?: true
    research_source_url?: true
    researched_at?: true
    email_consent?: true
    whatsapp_consent?: true
    email_consent_source?: true
    email_consent_at?: true
    whatsapp_consent_source?: true
    whatsapp_consent_at?: true
    email_opted_out_at?: true
    whatsapp_opted_out_at?: true
    last_contacted_at?: true
    next_follow_up_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesLeadMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    full_name?: true
    company?: true
    website?: true
    email?: true
    phone?: true
    source?: true
    stage?: true
    score?: true
    estimated_value?: true
    notes?: true
    research_summary?: true
    research_source_url?: true
    researched_at?: true
    email_consent?: true
    whatsapp_consent?: true
    email_consent_source?: true
    email_consent_at?: true
    whatsapp_consent_source?: true
    whatsapp_consent_at?: true
    email_opted_out_at?: true
    whatsapp_opted_out_at?: true
    last_contacted_at?: true
    next_follow_up_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesLeadCountAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    full_name?: true
    company?: true
    website?: true
    email?: true
    phone?: true
    source?: true
    stage?: true
    score?: true
    estimated_value?: true
    notes?: true
    research_summary?: true
    research_source_url?: true
    researched_at?: true
    email_consent?: true
    whatsapp_consent?: true
    email_consent_source?: true
    email_consent_at?: true
    whatsapp_consent_source?: true
    whatsapp_consent_at?: true
    email_opted_out_at?: true
    whatsapp_opted_out_at?: true
    last_contacted_at?: true
    next_follow_up_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesLeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesLead to aggregate.
     */
    where?: SalesLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesLeads to fetch.
     */
    orderBy?: SalesLeadOrderByWithRelationInput | SalesLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesLeads
    **/
    _count?: true | SalesLeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesLeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesLeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesLeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesLeadMaxAggregateInputType
  }

  export type GetSalesLeadAggregateType<T extends SalesLeadAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesLead[P]>
      : GetScalarType<T[P], AggregateSalesLead[P]>
  }




  export type SalesLeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesLeadWhereInput
    orderBy?: SalesLeadOrderByWithAggregationInput | SalesLeadOrderByWithAggregationInput[]
    by: SalesLeadScalarFieldEnum[] | SalesLeadScalarFieldEnum
    having?: SalesLeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesLeadCountAggregateInputType | true
    _avg?: SalesLeadAvgAggregateInputType
    _sum?: SalesLeadSumAggregateInputType
    _min?: SalesLeadMinAggregateInputType
    _max?: SalesLeadMaxAggregateInputType
  }

  export type SalesLeadGroupByOutputType = {
    id: string
    tenant_id: string
    owner_user_id: string
    full_name: string
    company: string | null
    website: string | null
    email: string | null
    phone: string | null
    source: string
    stage: string
    score: number
    estimated_value: Decimal | null
    notes: string | null
    research_summary: string | null
    research_source_url: string | null
    researched_at: Date | null
    email_consent: boolean
    whatsapp_consent: boolean
    email_consent_source: string | null
    email_consent_at: Date | null
    whatsapp_consent_source: string | null
    whatsapp_consent_at: Date | null
    email_opted_out_at: Date | null
    whatsapp_opted_out_at: Date | null
    last_contacted_at: Date | null
    next_follow_up_at: Date | null
    created_at: Date
    updated_at: Date
    _count: SalesLeadCountAggregateOutputType | null
    _avg: SalesLeadAvgAggregateOutputType | null
    _sum: SalesLeadSumAggregateOutputType | null
    _min: SalesLeadMinAggregateOutputType | null
    _max: SalesLeadMaxAggregateOutputType | null
  }

  type GetSalesLeadGroupByPayload<T extends SalesLeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesLeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesLeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesLeadGroupByOutputType[P]>
            : GetScalarType<T[P], SalesLeadGroupByOutputType[P]>
        }
      >
    >


  export type SalesLeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    full_name?: boolean
    company?: boolean
    website?: boolean
    email?: boolean
    phone?: boolean
    source?: boolean
    stage?: boolean
    score?: boolean
    estimated_value?: boolean
    notes?: boolean
    research_summary?: boolean
    research_source_url?: boolean
    researched_at?: boolean
    email_consent?: boolean
    whatsapp_consent?: boolean
    email_consent_source?: boolean
    email_consent_at?: boolean
    whatsapp_consent_source?: boolean
    whatsapp_consent_at?: boolean
    email_opted_out_at?: boolean
    whatsapp_opted_out_at?: boolean
    last_contacted_at?: boolean
    next_follow_up_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesLead"]>

  export type SalesLeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    full_name?: boolean
    company?: boolean
    website?: boolean
    email?: boolean
    phone?: boolean
    source?: boolean
    stage?: boolean
    score?: boolean
    estimated_value?: boolean
    notes?: boolean
    research_summary?: boolean
    research_source_url?: boolean
    researched_at?: boolean
    email_consent?: boolean
    whatsapp_consent?: boolean
    email_consent_source?: boolean
    email_consent_at?: boolean
    whatsapp_consent_source?: boolean
    whatsapp_consent_at?: boolean
    email_opted_out_at?: boolean
    whatsapp_opted_out_at?: boolean
    last_contacted_at?: boolean
    next_follow_up_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesLead"]>

  export type SalesLeadSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    full_name?: boolean
    company?: boolean
    website?: boolean
    email?: boolean
    phone?: boolean
    source?: boolean
    stage?: boolean
    score?: boolean
    estimated_value?: boolean
    notes?: boolean
    research_summary?: boolean
    research_source_url?: boolean
    researched_at?: boolean
    email_consent?: boolean
    whatsapp_consent?: boolean
    email_consent_source?: boolean
    email_consent_at?: boolean
    whatsapp_consent_source?: boolean
    whatsapp_consent_at?: boolean
    email_opted_out_at?: boolean
    whatsapp_opted_out_at?: boolean
    last_contacted_at?: boolean
    next_follow_up_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $SalesLeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesLead"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      owner_user_id: string
      full_name: string
      company: string | null
      website: string | null
      email: string | null
      phone: string | null
      source: string
      stage: string
      score: number
      estimated_value: Prisma.Decimal | null
      notes: string | null
      research_summary: string | null
      research_source_url: string | null
      researched_at: Date | null
      email_consent: boolean
      whatsapp_consent: boolean
      email_consent_source: string | null
      email_consent_at: Date | null
      whatsapp_consent_source: string | null
      whatsapp_consent_at: Date | null
      email_opted_out_at: Date | null
      whatsapp_opted_out_at: Date | null
      last_contacted_at: Date | null
      next_follow_up_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["salesLead"]>
    composites: {}
  }

  type SalesLeadGetPayload<S extends boolean | null | undefined | SalesLeadDefaultArgs> = $Result.GetResult<Prisma.$SalesLeadPayload, S>

  type SalesLeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesLeadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesLeadCountAggregateInputType | true
    }

  export interface SalesLeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesLead'], meta: { name: 'SalesLead' } }
    /**
     * Find zero or one SalesLead that matches the filter.
     * @param {SalesLeadFindUniqueArgs} args - Arguments to find a SalesLead
     * @example
     * // Get one SalesLead
     * const salesLead = await prisma.salesLead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesLeadFindUniqueArgs>(args: SelectSubset<T, SalesLeadFindUniqueArgs<ExtArgs>>): Prisma__SalesLeadClient<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesLead that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesLeadFindUniqueOrThrowArgs} args - Arguments to find a SalesLead
     * @example
     * // Get one SalesLead
     * const salesLead = await prisma.salesLead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesLeadFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesLeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesLeadClient<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesLead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesLeadFindFirstArgs} args - Arguments to find a SalesLead
     * @example
     * // Get one SalesLead
     * const salesLead = await prisma.salesLead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesLeadFindFirstArgs>(args?: SelectSubset<T, SalesLeadFindFirstArgs<ExtArgs>>): Prisma__SalesLeadClient<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesLead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesLeadFindFirstOrThrowArgs} args - Arguments to find a SalesLead
     * @example
     * // Get one SalesLead
     * const salesLead = await prisma.salesLead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesLeadFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesLeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesLeadClient<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesLeads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesLeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesLeads
     * const salesLeads = await prisma.salesLead.findMany()
     * 
     * // Get first 10 SalesLeads
     * const salesLeads = await prisma.salesLead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesLeadWithIdOnly = await prisma.salesLead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesLeadFindManyArgs>(args?: SelectSubset<T, SalesLeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesLead.
     * @param {SalesLeadCreateArgs} args - Arguments to create a SalesLead.
     * @example
     * // Create one SalesLead
     * const SalesLead = await prisma.salesLead.create({
     *   data: {
     *     // ... data to create a SalesLead
     *   }
     * })
     * 
     */
    create<T extends SalesLeadCreateArgs>(args: SelectSubset<T, SalesLeadCreateArgs<ExtArgs>>): Prisma__SalesLeadClient<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesLeads.
     * @param {SalesLeadCreateManyArgs} args - Arguments to create many SalesLeads.
     * @example
     * // Create many SalesLeads
     * const salesLead = await prisma.salesLead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesLeadCreateManyArgs>(args?: SelectSubset<T, SalesLeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesLeads and returns the data saved in the database.
     * @param {SalesLeadCreateManyAndReturnArgs} args - Arguments to create many SalesLeads.
     * @example
     * // Create many SalesLeads
     * const salesLead = await prisma.salesLead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesLeads and only return the `id`
     * const salesLeadWithIdOnly = await prisma.salesLead.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesLeadCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesLeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesLead.
     * @param {SalesLeadDeleteArgs} args - Arguments to delete one SalesLead.
     * @example
     * // Delete one SalesLead
     * const SalesLead = await prisma.salesLead.delete({
     *   where: {
     *     // ... filter to delete one SalesLead
     *   }
     * })
     * 
     */
    delete<T extends SalesLeadDeleteArgs>(args: SelectSubset<T, SalesLeadDeleteArgs<ExtArgs>>): Prisma__SalesLeadClient<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesLead.
     * @param {SalesLeadUpdateArgs} args - Arguments to update one SalesLead.
     * @example
     * // Update one SalesLead
     * const salesLead = await prisma.salesLead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesLeadUpdateArgs>(args: SelectSubset<T, SalesLeadUpdateArgs<ExtArgs>>): Prisma__SalesLeadClient<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesLeads.
     * @param {SalesLeadDeleteManyArgs} args - Arguments to filter SalesLeads to delete.
     * @example
     * // Delete a few SalesLeads
     * const { count } = await prisma.salesLead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesLeadDeleteManyArgs>(args?: SelectSubset<T, SalesLeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesLeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesLeads
     * const salesLead = await prisma.salesLead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesLeadUpdateManyArgs>(args: SelectSubset<T, SalesLeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesLead.
     * @param {SalesLeadUpsertArgs} args - Arguments to update or create a SalesLead.
     * @example
     * // Update or create a SalesLead
     * const salesLead = await prisma.salesLead.upsert({
     *   create: {
     *     // ... data to create a SalesLead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesLead we want to update
     *   }
     * })
     */
    upsert<T extends SalesLeadUpsertArgs>(args: SelectSubset<T, SalesLeadUpsertArgs<ExtArgs>>): Prisma__SalesLeadClient<$Result.GetResult<Prisma.$SalesLeadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesLeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesLeadCountArgs} args - Arguments to filter SalesLeads to count.
     * @example
     * // Count the number of SalesLeads
     * const count = await prisma.salesLead.count({
     *   where: {
     *     // ... the filter for the SalesLeads we want to count
     *   }
     * })
    **/
    count<T extends SalesLeadCountArgs>(
      args?: Subset<T, SalesLeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesLeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesLeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesLeadAggregateArgs>(args: Subset<T, SalesLeadAggregateArgs>): Prisma.PrismaPromise<GetSalesLeadAggregateType<T>>

    /**
     * Group by SalesLead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesLeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesLeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesLeadGroupByArgs['orderBy'] }
        : { orderBy?: SalesLeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesLeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesLead model
   */
  readonly fields: SalesLeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesLead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesLeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesLead model
   */ 
  interface SalesLeadFieldRefs {
    readonly id: FieldRef<"SalesLead", 'String'>
    readonly tenant_id: FieldRef<"SalesLead", 'String'>
    readonly owner_user_id: FieldRef<"SalesLead", 'String'>
    readonly full_name: FieldRef<"SalesLead", 'String'>
    readonly company: FieldRef<"SalesLead", 'String'>
    readonly website: FieldRef<"SalesLead", 'String'>
    readonly email: FieldRef<"SalesLead", 'String'>
    readonly phone: FieldRef<"SalesLead", 'String'>
    readonly source: FieldRef<"SalesLead", 'String'>
    readonly stage: FieldRef<"SalesLead", 'String'>
    readonly score: FieldRef<"SalesLead", 'Int'>
    readonly estimated_value: FieldRef<"SalesLead", 'Decimal'>
    readonly notes: FieldRef<"SalesLead", 'String'>
    readonly research_summary: FieldRef<"SalesLead", 'String'>
    readonly research_source_url: FieldRef<"SalesLead", 'String'>
    readonly researched_at: FieldRef<"SalesLead", 'DateTime'>
    readonly email_consent: FieldRef<"SalesLead", 'Boolean'>
    readonly whatsapp_consent: FieldRef<"SalesLead", 'Boolean'>
    readonly email_consent_source: FieldRef<"SalesLead", 'String'>
    readonly email_consent_at: FieldRef<"SalesLead", 'DateTime'>
    readonly whatsapp_consent_source: FieldRef<"SalesLead", 'String'>
    readonly whatsapp_consent_at: FieldRef<"SalesLead", 'DateTime'>
    readonly email_opted_out_at: FieldRef<"SalesLead", 'DateTime'>
    readonly whatsapp_opted_out_at: FieldRef<"SalesLead", 'DateTime'>
    readonly last_contacted_at: FieldRef<"SalesLead", 'DateTime'>
    readonly next_follow_up_at: FieldRef<"SalesLead", 'DateTime'>
    readonly created_at: FieldRef<"SalesLead", 'DateTime'>
    readonly updated_at: FieldRef<"SalesLead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesLead findUnique
   */
  export type SalesLeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * Filter, which SalesLead to fetch.
     */
    where: SalesLeadWhereUniqueInput
  }

  /**
   * SalesLead findUniqueOrThrow
   */
  export type SalesLeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * Filter, which SalesLead to fetch.
     */
    where: SalesLeadWhereUniqueInput
  }

  /**
   * SalesLead findFirst
   */
  export type SalesLeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * Filter, which SalesLead to fetch.
     */
    where?: SalesLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesLeads to fetch.
     */
    orderBy?: SalesLeadOrderByWithRelationInput | SalesLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesLeads.
     */
    cursor?: SalesLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesLeads.
     */
    distinct?: SalesLeadScalarFieldEnum | SalesLeadScalarFieldEnum[]
  }

  /**
   * SalesLead findFirstOrThrow
   */
  export type SalesLeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * Filter, which SalesLead to fetch.
     */
    where?: SalesLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesLeads to fetch.
     */
    orderBy?: SalesLeadOrderByWithRelationInput | SalesLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesLeads.
     */
    cursor?: SalesLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesLeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesLeads.
     */
    distinct?: SalesLeadScalarFieldEnum | SalesLeadScalarFieldEnum[]
  }

  /**
   * SalesLead findMany
   */
  export type SalesLeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * Filter, which SalesLeads to fetch.
     */
    where?: SalesLeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesLeads to fetch.
     */
    orderBy?: SalesLeadOrderByWithRelationInput | SalesLeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesLeads.
     */
    cursor?: SalesLeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesLeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesLeads.
     */
    skip?: number
    distinct?: SalesLeadScalarFieldEnum | SalesLeadScalarFieldEnum[]
  }

  /**
   * SalesLead create
   */
  export type SalesLeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesLead.
     */
    data: XOR<SalesLeadCreateInput, SalesLeadUncheckedCreateInput>
  }

  /**
   * SalesLead createMany
   */
  export type SalesLeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesLeads.
     */
    data: SalesLeadCreateManyInput | SalesLeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesLead createManyAndReturn
   */
  export type SalesLeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesLeads.
     */
    data: SalesLeadCreateManyInput | SalesLeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesLead update
   */
  export type SalesLeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesLead.
     */
    data: XOR<SalesLeadUpdateInput, SalesLeadUncheckedUpdateInput>
    /**
     * Choose, which SalesLead to update.
     */
    where: SalesLeadWhereUniqueInput
  }

  /**
   * SalesLead updateMany
   */
  export type SalesLeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesLeads.
     */
    data: XOR<SalesLeadUpdateManyMutationInput, SalesLeadUncheckedUpdateManyInput>
    /**
     * Filter which SalesLeads to update
     */
    where?: SalesLeadWhereInput
  }

  /**
   * SalesLead upsert
   */
  export type SalesLeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesLead to update in case it exists.
     */
    where: SalesLeadWhereUniqueInput
    /**
     * In case the SalesLead found by the `where` argument doesn't exist, create a new SalesLead with this data.
     */
    create: XOR<SalesLeadCreateInput, SalesLeadUncheckedCreateInput>
    /**
     * In case the SalesLead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesLeadUpdateInput, SalesLeadUncheckedUpdateInput>
  }

  /**
   * SalesLead delete
   */
  export type SalesLeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
    /**
     * Filter which SalesLead to delete.
     */
    where: SalesLeadWhereUniqueInput
  }

  /**
   * SalesLead deleteMany
   */
  export type SalesLeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesLeads to delete
     */
    where?: SalesLeadWhereInput
  }

  /**
   * SalesLead without action
   */
  export type SalesLeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesLead
     */
    select?: SalesLeadSelect<ExtArgs> | null
  }


  /**
   * Model SalesActivity
   */

  export type AggregateSalesActivity = {
    _count: SalesActivityCountAggregateOutputType | null
    _min: SalesActivityMinAggregateOutputType | null
    _max: SalesActivityMaxAggregateOutputType | null
  }

  export type SalesActivityMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    lead_id: string | null
    activity_type: string | null
    summary: string | null
    created_at: Date | null
  }

  export type SalesActivityMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    lead_id: string | null
    activity_type: string | null
    summary: string | null
    created_at: Date | null
  }

  export type SalesActivityCountAggregateOutputType = {
    id: number
    tenant_id: number
    owner_user_id: number
    lead_id: number
    activity_type: number
    summary: number
    metadata: number
    created_at: number
    _all: number
  }


  export type SalesActivityMinAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    lead_id?: true
    activity_type?: true
    summary?: true
    created_at?: true
  }

  export type SalesActivityMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    lead_id?: true
    activity_type?: true
    summary?: true
    created_at?: true
  }

  export type SalesActivityCountAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    lead_id?: true
    activity_type?: true
    summary?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type SalesActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesActivity to aggregate.
     */
    where?: SalesActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesActivities to fetch.
     */
    orderBy?: SalesActivityOrderByWithRelationInput | SalesActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesActivities
    **/
    _count?: true | SalesActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesActivityMaxAggregateInputType
  }

  export type GetSalesActivityAggregateType<T extends SalesActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesActivity[P]>
      : GetScalarType<T[P], AggregateSalesActivity[P]>
  }




  export type SalesActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesActivityWhereInput
    orderBy?: SalesActivityOrderByWithAggregationInput | SalesActivityOrderByWithAggregationInput[]
    by: SalesActivityScalarFieldEnum[] | SalesActivityScalarFieldEnum
    having?: SalesActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesActivityCountAggregateInputType | true
    _min?: SalesActivityMinAggregateInputType
    _max?: SalesActivityMaxAggregateInputType
  }

  export type SalesActivityGroupByOutputType = {
    id: string
    tenant_id: string
    owner_user_id: string
    lead_id: string | null
    activity_type: string
    summary: string
    metadata: JsonValue | null
    created_at: Date
    _count: SalesActivityCountAggregateOutputType | null
    _min: SalesActivityMinAggregateOutputType | null
    _max: SalesActivityMaxAggregateOutputType | null
  }

  type GetSalesActivityGroupByPayload<T extends SalesActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesActivityGroupByOutputType[P]>
            : GetScalarType<T[P], SalesActivityGroupByOutputType[P]>
        }
      >
    >


  export type SalesActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    lead_id?: boolean
    activity_type?: boolean
    summary?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["salesActivity"]>

  export type SalesActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    lead_id?: boolean
    activity_type?: boolean
    summary?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["salesActivity"]>

  export type SalesActivitySelectScalar = {
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    lead_id?: boolean
    activity_type?: boolean
    summary?: boolean
    metadata?: boolean
    created_at?: boolean
  }


  export type $SalesActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      owner_user_id: string
      lead_id: string | null
      activity_type: string
      summary: string
      metadata: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["salesActivity"]>
    composites: {}
  }

  type SalesActivityGetPayload<S extends boolean | null | undefined | SalesActivityDefaultArgs> = $Result.GetResult<Prisma.$SalesActivityPayload, S>

  type SalesActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesActivityCountAggregateInputType | true
    }

  export interface SalesActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesActivity'], meta: { name: 'SalesActivity' } }
    /**
     * Find zero or one SalesActivity that matches the filter.
     * @param {SalesActivityFindUniqueArgs} args - Arguments to find a SalesActivity
     * @example
     * // Get one SalesActivity
     * const salesActivity = await prisma.salesActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesActivityFindUniqueArgs>(args: SelectSubset<T, SalesActivityFindUniqueArgs<ExtArgs>>): Prisma__SalesActivityClient<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesActivity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesActivityFindUniqueOrThrowArgs} args - Arguments to find a SalesActivity
     * @example
     * // Get one SalesActivity
     * const salesActivity = await prisma.salesActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesActivityClient<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesActivityFindFirstArgs} args - Arguments to find a SalesActivity
     * @example
     * // Get one SalesActivity
     * const salesActivity = await prisma.salesActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesActivityFindFirstArgs>(args?: SelectSubset<T, SalesActivityFindFirstArgs<ExtArgs>>): Prisma__SalesActivityClient<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesActivityFindFirstOrThrowArgs} args - Arguments to find a SalesActivity
     * @example
     * // Get one SalesActivity
     * const salesActivity = await prisma.salesActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesActivityClient<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesActivities
     * const salesActivities = await prisma.salesActivity.findMany()
     * 
     * // Get first 10 SalesActivities
     * const salesActivities = await prisma.salesActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesActivityWithIdOnly = await prisma.salesActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesActivityFindManyArgs>(args?: SelectSubset<T, SalesActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesActivity.
     * @param {SalesActivityCreateArgs} args - Arguments to create a SalesActivity.
     * @example
     * // Create one SalesActivity
     * const SalesActivity = await prisma.salesActivity.create({
     *   data: {
     *     // ... data to create a SalesActivity
     *   }
     * })
     * 
     */
    create<T extends SalesActivityCreateArgs>(args: SelectSubset<T, SalesActivityCreateArgs<ExtArgs>>): Prisma__SalesActivityClient<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesActivities.
     * @param {SalesActivityCreateManyArgs} args - Arguments to create many SalesActivities.
     * @example
     * // Create many SalesActivities
     * const salesActivity = await prisma.salesActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesActivityCreateManyArgs>(args?: SelectSubset<T, SalesActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesActivities and returns the data saved in the database.
     * @param {SalesActivityCreateManyAndReturnArgs} args - Arguments to create many SalesActivities.
     * @example
     * // Create many SalesActivities
     * const salesActivity = await prisma.salesActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesActivities and only return the `id`
     * const salesActivityWithIdOnly = await prisma.salesActivity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesActivity.
     * @param {SalesActivityDeleteArgs} args - Arguments to delete one SalesActivity.
     * @example
     * // Delete one SalesActivity
     * const SalesActivity = await prisma.salesActivity.delete({
     *   where: {
     *     // ... filter to delete one SalesActivity
     *   }
     * })
     * 
     */
    delete<T extends SalesActivityDeleteArgs>(args: SelectSubset<T, SalesActivityDeleteArgs<ExtArgs>>): Prisma__SalesActivityClient<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesActivity.
     * @param {SalesActivityUpdateArgs} args - Arguments to update one SalesActivity.
     * @example
     * // Update one SalesActivity
     * const salesActivity = await prisma.salesActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesActivityUpdateArgs>(args: SelectSubset<T, SalesActivityUpdateArgs<ExtArgs>>): Prisma__SalesActivityClient<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesActivities.
     * @param {SalesActivityDeleteManyArgs} args - Arguments to filter SalesActivities to delete.
     * @example
     * // Delete a few SalesActivities
     * const { count } = await prisma.salesActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesActivityDeleteManyArgs>(args?: SelectSubset<T, SalesActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesActivities
     * const salesActivity = await prisma.salesActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesActivityUpdateManyArgs>(args: SelectSubset<T, SalesActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesActivity.
     * @param {SalesActivityUpsertArgs} args - Arguments to update or create a SalesActivity.
     * @example
     * // Update or create a SalesActivity
     * const salesActivity = await prisma.salesActivity.upsert({
     *   create: {
     *     // ... data to create a SalesActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesActivity we want to update
     *   }
     * })
     */
    upsert<T extends SalesActivityUpsertArgs>(args: SelectSubset<T, SalesActivityUpsertArgs<ExtArgs>>): Prisma__SalesActivityClient<$Result.GetResult<Prisma.$SalesActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesActivityCountArgs} args - Arguments to filter SalesActivities to count.
     * @example
     * // Count the number of SalesActivities
     * const count = await prisma.salesActivity.count({
     *   where: {
     *     // ... the filter for the SalesActivities we want to count
     *   }
     * })
    **/
    count<T extends SalesActivityCountArgs>(
      args?: Subset<T, SalesActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesActivityAggregateArgs>(args: Subset<T, SalesActivityAggregateArgs>): Prisma.PrismaPromise<GetSalesActivityAggregateType<T>>

    /**
     * Group by SalesActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesActivityGroupByArgs['orderBy'] }
        : { orderBy?: SalesActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesActivity model
   */
  readonly fields: SalesActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesActivity model
   */ 
  interface SalesActivityFieldRefs {
    readonly id: FieldRef<"SalesActivity", 'String'>
    readonly tenant_id: FieldRef<"SalesActivity", 'String'>
    readonly owner_user_id: FieldRef<"SalesActivity", 'String'>
    readonly lead_id: FieldRef<"SalesActivity", 'String'>
    readonly activity_type: FieldRef<"SalesActivity", 'String'>
    readonly summary: FieldRef<"SalesActivity", 'String'>
    readonly metadata: FieldRef<"SalesActivity", 'Json'>
    readonly created_at: FieldRef<"SalesActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesActivity findUnique
   */
  export type SalesActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * Filter, which SalesActivity to fetch.
     */
    where: SalesActivityWhereUniqueInput
  }

  /**
   * SalesActivity findUniqueOrThrow
   */
  export type SalesActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * Filter, which SalesActivity to fetch.
     */
    where: SalesActivityWhereUniqueInput
  }

  /**
   * SalesActivity findFirst
   */
  export type SalesActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * Filter, which SalesActivity to fetch.
     */
    where?: SalesActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesActivities to fetch.
     */
    orderBy?: SalesActivityOrderByWithRelationInput | SalesActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesActivities.
     */
    cursor?: SalesActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesActivities.
     */
    distinct?: SalesActivityScalarFieldEnum | SalesActivityScalarFieldEnum[]
  }

  /**
   * SalesActivity findFirstOrThrow
   */
  export type SalesActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * Filter, which SalesActivity to fetch.
     */
    where?: SalesActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesActivities to fetch.
     */
    orderBy?: SalesActivityOrderByWithRelationInput | SalesActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesActivities.
     */
    cursor?: SalesActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesActivities.
     */
    distinct?: SalesActivityScalarFieldEnum | SalesActivityScalarFieldEnum[]
  }

  /**
   * SalesActivity findMany
   */
  export type SalesActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * Filter, which SalesActivities to fetch.
     */
    where?: SalesActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesActivities to fetch.
     */
    orderBy?: SalesActivityOrderByWithRelationInput | SalesActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesActivities.
     */
    cursor?: SalesActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesActivities.
     */
    skip?: number
    distinct?: SalesActivityScalarFieldEnum | SalesActivityScalarFieldEnum[]
  }

  /**
   * SalesActivity create
   */
  export type SalesActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * The data needed to create a SalesActivity.
     */
    data: XOR<SalesActivityCreateInput, SalesActivityUncheckedCreateInput>
  }

  /**
   * SalesActivity createMany
   */
  export type SalesActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesActivities.
     */
    data: SalesActivityCreateManyInput | SalesActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesActivity createManyAndReturn
   */
  export type SalesActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesActivities.
     */
    data: SalesActivityCreateManyInput | SalesActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesActivity update
   */
  export type SalesActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * The data needed to update a SalesActivity.
     */
    data: XOR<SalesActivityUpdateInput, SalesActivityUncheckedUpdateInput>
    /**
     * Choose, which SalesActivity to update.
     */
    where: SalesActivityWhereUniqueInput
  }

  /**
   * SalesActivity updateMany
   */
  export type SalesActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesActivities.
     */
    data: XOR<SalesActivityUpdateManyMutationInput, SalesActivityUncheckedUpdateManyInput>
    /**
     * Filter which SalesActivities to update
     */
    where?: SalesActivityWhereInput
  }

  /**
   * SalesActivity upsert
   */
  export type SalesActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * The filter to search for the SalesActivity to update in case it exists.
     */
    where: SalesActivityWhereUniqueInput
    /**
     * In case the SalesActivity found by the `where` argument doesn't exist, create a new SalesActivity with this data.
     */
    create: XOR<SalesActivityCreateInput, SalesActivityUncheckedCreateInput>
    /**
     * In case the SalesActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesActivityUpdateInput, SalesActivityUncheckedUpdateInput>
  }

  /**
   * SalesActivity delete
   */
  export type SalesActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
    /**
     * Filter which SalesActivity to delete.
     */
    where: SalesActivityWhereUniqueInput
  }

  /**
   * SalesActivity deleteMany
   */
  export type SalesActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesActivities to delete
     */
    where?: SalesActivityWhereInput
  }

  /**
   * SalesActivity without action
   */
  export type SalesActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesActivity
     */
    select?: SalesActivitySelect<ExtArgs> | null
  }


  /**
   * Model SalesOutreachMessage
   */

  export type AggregateSalesOutreachMessage = {
    _count: SalesOutreachMessageCountAggregateOutputType | null
    _min: SalesOutreachMessageMinAggregateOutputType | null
    _max: SalesOutreachMessageMaxAggregateOutputType | null
  }

  export type SalesOutreachMessageMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    lead_id: string | null
    channel: string | null
    destination: string | null
    subject: string | null
    body: string | null
    status: string | null
    provider_message_id: string | null
    delivery_status: string | null
    delivered_at: Date | null
    read_at: Date | null
    error_message: string | null
    sent_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesOutreachMessageMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    lead_id: string | null
    channel: string | null
    destination: string | null
    subject: string | null
    body: string | null
    status: string | null
    provider_message_id: string | null
    delivery_status: string | null
    delivered_at: Date | null
    read_at: Date | null
    error_message: string | null
    sent_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesOutreachMessageCountAggregateOutputType = {
    id: number
    tenant_id: number
    owner_user_id: number
    lead_id: number
    channel: number
    destination: number
    subject: number
    body: number
    status: number
    provider_message_id: number
    delivery_status: number
    delivered_at: number
    read_at: number
    error_message: number
    sent_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesOutreachMessageMinAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    lead_id?: true
    channel?: true
    destination?: true
    subject?: true
    body?: true
    status?: true
    provider_message_id?: true
    delivery_status?: true
    delivered_at?: true
    read_at?: true
    error_message?: true
    sent_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesOutreachMessageMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    lead_id?: true
    channel?: true
    destination?: true
    subject?: true
    body?: true
    status?: true
    provider_message_id?: true
    delivery_status?: true
    delivered_at?: true
    read_at?: true
    error_message?: true
    sent_at?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesOutreachMessageCountAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    lead_id?: true
    channel?: true
    destination?: true
    subject?: true
    body?: true
    status?: true
    provider_message_id?: true
    delivery_status?: true
    delivered_at?: true
    read_at?: true
    error_message?: true
    sent_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesOutreachMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOutreachMessage to aggregate.
     */
    where?: SalesOutreachMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOutreachMessages to fetch.
     */
    orderBy?: SalesOutreachMessageOrderByWithRelationInput | SalesOutreachMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOutreachMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOutreachMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOutreachMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOutreachMessages
    **/
    _count?: true | SalesOutreachMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOutreachMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOutreachMessageMaxAggregateInputType
  }

  export type GetSalesOutreachMessageAggregateType<T extends SalesOutreachMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOutreachMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOutreachMessage[P]>
      : GetScalarType<T[P], AggregateSalesOutreachMessage[P]>
  }




  export type SalesOutreachMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOutreachMessageWhereInput
    orderBy?: SalesOutreachMessageOrderByWithAggregationInput | SalesOutreachMessageOrderByWithAggregationInput[]
    by: SalesOutreachMessageScalarFieldEnum[] | SalesOutreachMessageScalarFieldEnum
    having?: SalesOutreachMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOutreachMessageCountAggregateInputType | true
    _min?: SalesOutreachMessageMinAggregateInputType
    _max?: SalesOutreachMessageMaxAggregateInputType
  }

  export type SalesOutreachMessageGroupByOutputType = {
    id: string
    tenant_id: string
    owner_user_id: string
    lead_id: string
    channel: string
    destination: string
    subject: string | null
    body: string
    status: string
    provider_message_id: string | null
    delivery_status: string
    delivered_at: Date | null
    read_at: Date | null
    error_message: string | null
    sent_at: Date | null
    created_at: Date
    updated_at: Date
    _count: SalesOutreachMessageCountAggregateOutputType | null
    _min: SalesOutreachMessageMinAggregateOutputType | null
    _max: SalesOutreachMessageMaxAggregateOutputType | null
  }

  type GetSalesOutreachMessageGroupByPayload<T extends SalesOutreachMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesOutreachMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOutreachMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOutreachMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOutreachMessageGroupByOutputType[P]>
        }
      >
    >


  export type SalesOutreachMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    lead_id?: boolean
    channel?: boolean
    destination?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    provider_message_id?: boolean
    delivery_status?: boolean
    delivered_at?: boolean
    read_at?: boolean
    error_message?: boolean
    sent_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesOutreachMessage"]>

  export type SalesOutreachMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    lead_id?: boolean
    channel?: boolean
    destination?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    provider_message_id?: boolean
    delivery_status?: boolean
    delivered_at?: boolean
    read_at?: boolean
    error_message?: boolean
    sent_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesOutreachMessage"]>

  export type SalesOutreachMessageSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    lead_id?: boolean
    channel?: boolean
    destination?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    provider_message_id?: boolean
    delivery_status?: boolean
    delivered_at?: boolean
    read_at?: boolean
    error_message?: boolean
    sent_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $SalesOutreachMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesOutreachMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      owner_user_id: string
      lead_id: string
      channel: string
      destination: string
      subject: string | null
      body: string
      status: string
      provider_message_id: string | null
      delivery_status: string
      delivered_at: Date | null
      read_at: Date | null
      error_message: string | null
      sent_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["salesOutreachMessage"]>
    composites: {}
  }

  type SalesOutreachMessageGetPayload<S extends boolean | null | undefined | SalesOutreachMessageDefaultArgs> = $Result.GetResult<Prisma.$SalesOutreachMessagePayload, S>

  type SalesOutreachMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesOutreachMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesOutreachMessageCountAggregateInputType | true
    }

  export interface SalesOutreachMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOutreachMessage'], meta: { name: 'SalesOutreachMessage' } }
    /**
     * Find zero or one SalesOutreachMessage that matches the filter.
     * @param {SalesOutreachMessageFindUniqueArgs} args - Arguments to find a SalesOutreachMessage
     * @example
     * // Get one SalesOutreachMessage
     * const salesOutreachMessage = await prisma.salesOutreachMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesOutreachMessageFindUniqueArgs>(args: SelectSubset<T, SalesOutreachMessageFindUniqueArgs<ExtArgs>>): Prisma__SalesOutreachMessageClient<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesOutreachMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesOutreachMessageFindUniqueOrThrowArgs} args - Arguments to find a SalesOutreachMessage
     * @example
     * // Get one SalesOutreachMessage
     * const salesOutreachMessage = await prisma.salesOutreachMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesOutreachMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesOutreachMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesOutreachMessageClient<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesOutreachMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOutreachMessageFindFirstArgs} args - Arguments to find a SalesOutreachMessage
     * @example
     * // Get one SalesOutreachMessage
     * const salesOutreachMessage = await prisma.salesOutreachMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesOutreachMessageFindFirstArgs>(args?: SelectSubset<T, SalesOutreachMessageFindFirstArgs<ExtArgs>>): Prisma__SalesOutreachMessageClient<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesOutreachMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOutreachMessageFindFirstOrThrowArgs} args - Arguments to find a SalesOutreachMessage
     * @example
     * // Get one SalesOutreachMessage
     * const salesOutreachMessage = await prisma.salesOutreachMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesOutreachMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesOutreachMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesOutreachMessageClient<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesOutreachMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOutreachMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOutreachMessages
     * const salesOutreachMessages = await prisma.salesOutreachMessage.findMany()
     * 
     * // Get first 10 SalesOutreachMessages
     * const salesOutreachMessages = await prisma.salesOutreachMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesOutreachMessageWithIdOnly = await prisma.salesOutreachMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesOutreachMessageFindManyArgs>(args?: SelectSubset<T, SalesOutreachMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesOutreachMessage.
     * @param {SalesOutreachMessageCreateArgs} args - Arguments to create a SalesOutreachMessage.
     * @example
     * // Create one SalesOutreachMessage
     * const SalesOutreachMessage = await prisma.salesOutreachMessage.create({
     *   data: {
     *     // ... data to create a SalesOutreachMessage
     *   }
     * })
     * 
     */
    create<T extends SalesOutreachMessageCreateArgs>(args: SelectSubset<T, SalesOutreachMessageCreateArgs<ExtArgs>>): Prisma__SalesOutreachMessageClient<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesOutreachMessages.
     * @param {SalesOutreachMessageCreateManyArgs} args - Arguments to create many SalesOutreachMessages.
     * @example
     * // Create many SalesOutreachMessages
     * const salesOutreachMessage = await prisma.salesOutreachMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesOutreachMessageCreateManyArgs>(args?: SelectSubset<T, SalesOutreachMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesOutreachMessages and returns the data saved in the database.
     * @param {SalesOutreachMessageCreateManyAndReturnArgs} args - Arguments to create many SalesOutreachMessages.
     * @example
     * // Create many SalesOutreachMessages
     * const salesOutreachMessage = await prisma.salesOutreachMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesOutreachMessages and only return the `id`
     * const salesOutreachMessageWithIdOnly = await prisma.salesOutreachMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesOutreachMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesOutreachMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesOutreachMessage.
     * @param {SalesOutreachMessageDeleteArgs} args - Arguments to delete one SalesOutreachMessage.
     * @example
     * // Delete one SalesOutreachMessage
     * const SalesOutreachMessage = await prisma.salesOutreachMessage.delete({
     *   where: {
     *     // ... filter to delete one SalesOutreachMessage
     *   }
     * })
     * 
     */
    delete<T extends SalesOutreachMessageDeleteArgs>(args: SelectSubset<T, SalesOutreachMessageDeleteArgs<ExtArgs>>): Prisma__SalesOutreachMessageClient<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesOutreachMessage.
     * @param {SalesOutreachMessageUpdateArgs} args - Arguments to update one SalesOutreachMessage.
     * @example
     * // Update one SalesOutreachMessage
     * const salesOutreachMessage = await prisma.salesOutreachMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesOutreachMessageUpdateArgs>(args: SelectSubset<T, SalesOutreachMessageUpdateArgs<ExtArgs>>): Prisma__SalesOutreachMessageClient<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesOutreachMessages.
     * @param {SalesOutreachMessageDeleteManyArgs} args - Arguments to filter SalesOutreachMessages to delete.
     * @example
     * // Delete a few SalesOutreachMessages
     * const { count } = await prisma.salesOutreachMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesOutreachMessageDeleteManyArgs>(args?: SelectSubset<T, SalesOutreachMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOutreachMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOutreachMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOutreachMessages
     * const salesOutreachMessage = await prisma.salesOutreachMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesOutreachMessageUpdateManyArgs>(args: SelectSubset<T, SalesOutreachMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesOutreachMessage.
     * @param {SalesOutreachMessageUpsertArgs} args - Arguments to update or create a SalesOutreachMessage.
     * @example
     * // Update or create a SalesOutreachMessage
     * const salesOutreachMessage = await prisma.salesOutreachMessage.upsert({
     *   create: {
     *     // ... data to create a SalesOutreachMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOutreachMessage we want to update
     *   }
     * })
     */
    upsert<T extends SalesOutreachMessageUpsertArgs>(args: SelectSubset<T, SalesOutreachMessageUpsertArgs<ExtArgs>>): Prisma__SalesOutreachMessageClient<$Result.GetResult<Prisma.$SalesOutreachMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesOutreachMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOutreachMessageCountArgs} args - Arguments to filter SalesOutreachMessages to count.
     * @example
     * // Count the number of SalesOutreachMessages
     * const count = await prisma.salesOutreachMessage.count({
     *   where: {
     *     // ... the filter for the SalesOutreachMessages we want to count
     *   }
     * })
    **/
    count<T extends SalesOutreachMessageCountArgs>(
      args?: Subset<T, SalesOutreachMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOutreachMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOutreachMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOutreachMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesOutreachMessageAggregateArgs>(args: Subset<T, SalesOutreachMessageAggregateArgs>): Prisma.PrismaPromise<GetSalesOutreachMessageAggregateType<T>>

    /**
     * Group by SalesOutreachMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOutreachMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesOutreachMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOutreachMessageGroupByArgs['orderBy'] }
        : { orderBy?: SalesOutreachMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesOutreachMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOutreachMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesOutreachMessage model
   */
  readonly fields: SalesOutreachMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOutreachMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesOutreachMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesOutreachMessage model
   */ 
  interface SalesOutreachMessageFieldRefs {
    readonly id: FieldRef<"SalesOutreachMessage", 'String'>
    readonly tenant_id: FieldRef<"SalesOutreachMessage", 'String'>
    readonly owner_user_id: FieldRef<"SalesOutreachMessage", 'String'>
    readonly lead_id: FieldRef<"SalesOutreachMessage", 'String'>
    readonly channel: FieldRef<"SalesOutreachMessage", 'String'>
    readonly destination: FieldRef<"SalesOutreachMessage", 'String'>
    readonly subject: FieldRef<"SalesOutreachMessage", 'String'>
    readonly body: FieldRef<"SalesOutreachMessage", 'String'>
    readonly status: FieldRef<"SalesOutreachMessage", 'String'>
    readonly provider_message_id: FieldRef<"SalesOutreachMessage", 'String'>
    readonly delivery_status: FieldRef<"SalesOutreachMessage", 'String'>
    readonly delivered_at: FieldRef<"SalesOutreachMessage", 'DateTime'>
    readonly read_at: FieldRef<"SalesOutreachMessage", 'DateTime'>
    readonly error_message: FieldRef<"SalesOutreachMessage", 'String'>
    readonly sent_at: FieldRef<"SalesOutreachMessage", 'DateTime'>
    readonly created_at: FieldRef<"SalesOutreachMessage", 'DateTime'>
    readonly updated_at: FieldRef<"SalesOutreachMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesOutreachMessage findUnique
   */
  export type SalesOutreachMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * Filter, which SalesOutreachMessage to fetch.
     */
    where: SalesOutreachMessageWhereUniqueInput
  }

  /**
   * SalesOutreachMessage findUniqueOrThrow
   */
  export type SalesOutreachMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * Filter, which SalesOutreachMessage to fetch.
     */
    where: SalesOutreachMessageWhereUniqueInput
  }

  /**
   * SalesOutreachMessage findFirst
   */
  export type SalesOutreachMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * Filter, which SalesOutreachMessage to fetch.
     */
    where?: SalesOutreachMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOutreachMessages to fetch.
     */
    orderBy?: SalesOutreachMessageOrderByWithRelationInput | SalesOutreachMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOutreachMessages.
     */
    cursor?: SalesOutreachMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOutreachMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOutreachMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOutreachMessages.
     */
    distinct?: SalesOutreachMessageScalarFieldEnum | SalesOutreachMessageScalarFieldEnum[]
  }

  /**
   * SalesOutreachMessage findFirstOrThrow
   */
  export type SalesOutreachMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * Filter, which SalesOutreachMessage to fetch.
     */
    where?: SalesOutreachMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOutreachMessages to fetch.
     */
    orderBy?: SalesOutreachMessageOrderByWithRelationInput | SalesOutreachMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOutreachMessages.
     */
    cursor?: SalesOutreachMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOutreachMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOutreachMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOutreachMessages.
     */
    distinct?: SalesOutreachMessageScalarFieldEnum | SalesOutreachMessageScalarFieldEnum[]
  }

  /**
   * SalesOutreachMessage findMany
   */
  export type SalesOutreachMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * Filter, which SalesOutreachMessages to fetch.
     */
    where?: SalesOutreachMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOutreachMessages to fetch.
     */
    orderBy?: SalesOutreachMessageOrderByWithRelationInput | SalesOutreachMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOutreachMessages.
     */
    cursor?: SalesOutreachMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOutreachMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOutreachMessages.
     */
    skip?: number
    distinct?: SalesOutreachMessageScalarFieldEnum | SalesOutreachMessageScalarFieldEnum[]
  }

  /**
   * SalesOutreachMessage create
   */
  export type SalesOutreachMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesOutreachMessage.
     */
    data: XOR<SalesOutreachMessageCreateInput, SalesOutreachMessageUncheckedCreateInput>
  }

  /**
   * SalesOutreachMessage createMany
   */
  export type SalesOutreachMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOutreachMessages.
     */
    data: SalesOutreachMessageCreateManyInput | SalesOutreachMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOutreachMessage createManyAndReturn
   */
  export type SalesOutreachMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesOutreachMessages.
     */
    data: SalesOutreachMessageCreateManyInput | SalesOutreachMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOutreachMessage update
   */
  export type SalesOutreachMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesOutreachMessage.
     */
    data: XOR<SalesOutreachMessageUpdateInput, SalesOutreachMessageUncheckedUpdateInput>
    /**
     * Choose, which SalesOutreachMessage to update.
     */
    where: SalesOutreachMessageWhereUniqueInput
  }

  /**
   * SalesOutreachMessage updateMany
   */
  export type SalesOutreachMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOutreachMessages.
     */
    data: XOR<SalesOutreachMessageUpdateManyMutationInput, SalesOutreachMessageUncheckedUpdateManyInput>
    /**
     * Filter which SalesOutreachMessages to update
     */
    where?: SalesOutreachMessageWhereInput
  }

  /**
   * SalesOutreachMessage upsert
   */
  export type SalesOutreachMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesOutreachMessage to update in case it exists.
     */
    where: SalesOutreachMessageWhereUniqueInput
    /**
     * In case the SalesOutreachMessage found by the `where` argument doesn't exist, create a new SalesOutreachMessage with this data.
     */
    create: XOR<SalesOutreachMessageCreateInput, SalesOutreachMessageUncheckedCreateInput>
    /**
     * In case the SalesOutreachMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOutreachMessageUpdateInput, SalesOutreachMessageUncheckedUpdateInput>
  }

  /**
   * SalesOutreachMessage delete
   */
  export type SalesOutreachMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
    /**
     * Filter which SalesOutreachMessage to delete.
     */
    where: SalesOutreachMessageWhereUniqueInput
  }

  /**
   * SalesOutreachMessage deleteMany
   */
  export type SalesOutreachMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOutreachMessages to delete
     */
    where?: SalesOutreachMessageWhereInput
  }

  /**
   * SalesOutreachMessage without action
   */
  export type SalesOutreachMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOutreachMessage
     */
    select?: SalesOutreachMessageSelect<ExtArgs> | null
  }


  /**
   * Model SalesCampaign
   */

  export type AggregateSalesCampaign = {
    _count: SalesCampaignCountAggregateOutputType | null
    _min: SalesCampaignMinAggregateOutputType | null
    _max: SalesCampaignMaxAggregateOutputType | null
  }

  export type SalesCampaignMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    name: string | null
    channel: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesCampaignMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    owner_user_id: string | null
    name: string | null
    channel: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesCampaignCountAggregateOutputType = {
    id: number
    tenant_id: number
    owner_user_id: number
    name: number
    channel: number
    status: number
    steps: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesCampaignMinAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    name?: true
    channel?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesCampaignMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    name?: true
    channel?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesCampaignCountAggregateInputType = {
    id?: true
    tenant_id?: true
    owner_user_id?: true
    name?: true
    channel?: true
    status?: true
    steps?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesCampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesCampaign to aggregate.
     */
    where?: SalesCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesCampaigns to fetch.
     */
    orderBy?: SalesCampaignOrderByWithRelationInput | SalesCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesCampaigns
    **/
    _count?: true | SalesCampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesCampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesCampaignMaxAggregateInputType
  }

  export type GetSalesCampaignAggregateType<T extends SalesCampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesCampaign[P]>
      : GetScalarType<T[P], AggregateSalesCampaign[P]>
  }




  export type SalesCampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesCampaignWhereInput
    orderBy?: SalesCampaignOrderByWithAggregationInput | SalesCampaignOrderByWithAggregationInput[]
    by: SalesCampaignScalarFieldEnum[] | SalesCampaignScalarFieldEnum
    having?: SalesCampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCampaignCountAggregateInputType | true
    _min?: SalesCampaignMinAggregateInputType
    _max?: SalesCampaignMaxAggregateInputType
  }

  export type SalesCampaignGroupByOutputType = {
    id: string
    tenant_id: string
    owner_user_id: string
    name: string
    channel: string
    status: string
    steps: JsonValue
    created_at: Date
    updated_at: Date
    _count: SalesCampaignCountAggregateOutputType | null
    _min: SalesCampaignMinAggregateOutputType | null
    _max: SalesCampaignMaxAggregateOutputType | null
  }

  type GetSalesCampaignGroupByPayload<T extends SalesCampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesCampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesCampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesCampaignGroupByOutputType[P]>
            : GetScalarType<T[P], SalesCampaignGroupByOutputType[P]>
        }
      >
    >


  export type SalesCampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    name?: boolean
    channel?: boolean
    status?: boolean
    steps?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesCampaign"]>

  export type SalesCampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    name?: boolean
    channel?: boolean
    status?: boolean
    steps?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesCampaign"]>

  export type SalesCampaignSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    owner_user_id?: boolean
    name?: boolean
    channel?: boolean
    status?: boolean
    steps?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $SalesCampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesCampaign"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      owner_user_id: string
      name: string
      channel: string
      status: string
      steps: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["salesCampaign"]>
    composites: {}
  }

  type SalesCampaignGetPayload<S extends boolean | null | undefined | SalesCampaignDefaultArgs> = $Result.GetResult<Prisma.$SalesCampaignPayload, S>

  type SalesCampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesCampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesCampaignCountAggregateInputType | true
    }

  export interface SalesCampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesCampaign'], meta: { name: 'SalesCampaign' } }
    /**
     * Find zero or one SalesCampaign that matches the filter.
     * @param {SalesCampaignFindUniqueArgs} args - Arguments to find a SalesCampaign
     * @example
     * // Get one SalesCampaign
     * const salesCampaign = await prisma.salesCampaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesCampaignFindUniqueArgs>(args: SelectSubset<T, SalesCampaignFindUniqueArgs<ExtArgs>>): Prisma__SalesCampaignClient<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesCampaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesCampaignFindUniqueOrThrowArgs} args - Arguments to find a SalesCampaign
     * @example
     * // Get one SalesCampaign
     * const salesCampaign = await prisma.salesCampaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesCampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesCampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesCampaignClient<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesCampaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignFindFirstArgs} args - Arguments to find a SalesCampaign
     * @example
     * // Get one SalesCampaign
     * const salesCampaign = await prisma.salesCampaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesCampaignFindFirstArgs>(args?: SelectSubset<T, SalesCampaignFindFirstArgs<ExtArgs>>): Prisma__SalesCampaignClient<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesCampaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignFindFirstOrThrowArgs} args - Arguments to find a SalesCampaign
     * @example
     * // Get one SalesCampaign
     * const salesCampaign = await prisma.salesCampaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesCampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesCampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesCampaignClient<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesCampaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesCampaigns
     * const salesCampaigns = await prisma.salesCampaign.findMany()
     * 
     * // Get first 10 SalesCampaigns
     * const salesCampaigns = await prisma.salesCampaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesCampaignWithIdOnly = await prisma.salesCampaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesCampaignFindManyArgs>(args?: SelectSubset<T, SalesCampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesCampaign.
     * @param {SalesCampaignCreateArgs} args - Arguments to create a SalesCampaign.
     * @example
     * // Create one SalesCampaign
     * const SalesCampaign = await prisma.salesCampaign.create({
     *   data: {
     *     // ... data to create a SalesCampaign
     *   }
     * })
     * 
     */
    create<T extends SalesCampaignCreateArgs>(args: SelectSubset<T, SalesCampaignCreateArgs<ExtArgs>>): Prisma__SalesCampaignClient<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesCampaigns.
     * @param {SalesCampaignCreateManyArgs} args - Arguments to create many SalesCampaigns.
     * @example
     * // Create many SalesCampaigns
     * const salesCampaign = await prisma.salesCampaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCampaignCreateManyArgs>(args?: SelectSubset<T, SalesCampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesCampaigns and returns the data saved in the database.
     * @param {SalesCampaignCreateManyAndReturnArgs} args - Arguments to create many SalesCampaigns.
     * @example
     * // Create many SalesCampaigns
     * const salesCampaign = await prisma.salesCampaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesCampaigns and only return the `id`
     * const salesCampaignWithIdOnly = await prisma.salesCampaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesCampaign.
     * @param {SalesCampaignDeleteArgs} args - Arguments to delete one SalesCampaign.
     * @example
     * // Delete one SalesCampaign
     * const SalesCampaign = await prisma.salesCampaign.delete({
     *   where: {
     *     // ... filter to delete one SalesCampaign
     *   }
     * })
     * 
     */
    delete<T extends SalesCampaignDeleteArgs>(args: SelectSubset<T, SalesCampaignDeleteArgs<ExtArgs>>): Prisma__SalesCampaignClient<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesCampaign.
     * @param {SalesCampaignUpdateArgs} args - Arguments to update one SalesCampaign.
     * @example
     * // Update one SalesCampaign
     * const salesCampaign = await prisma.salesCampaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesCampaignUpdateArgs>(args: SelectSubset<T, SalesCampaignUpdateArgs<ExtArgs>>): Prisma__SalesCampaignClient<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesCampaigns.
     * @param {SalesCampaignDeleteManyArgs} args - Arguments to filter SalesCampaigns to delete.
     * @example
     * // Delete a few SalesCampaigns
     * const { count } = await prisma.salesCampaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesCampaignDeleteManyArgs>(args?: SelectSubset<T, SalesCampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesCampaigns
     * const salesCampaign = await prisma.salesCampaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesCampaignUpdateManyArgs>(args: SelectSubset<T, SalesCampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesCampaign.
     * @param {SalesCampaignUpsertArgs} args - Arguments to update or create a SalesCampaign.
     * @example
     * // Update or create a SalesCampaign
     * const salesCampaign = await prisma.salesCampaign.upsert({
     *   create: {
     *     // ... data to create a SalesCampaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesCampaign we want to update
     *   }
     * })
     */
    upsert<T extends SalesCampaignUpsertArgs>(args: SelectSubset<T, SalesCampaignUpsertArgs<ExtArgs>>): Prisma__SalesCampaignClient<$Result.GetResult<Prisma.$SalesCampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignCountArgs} args - Arguments to filter SalesCampaigns to count.
     * @example
     * // Count the number of SalesCampaigns
     * const count = await prisma.salesCampaign.count({
     *   where: {
     *     // ... the filter for the SalesCampaigns we want to count
     *   }
     * })
    **/
    count<T extends SalesCampaignCountArgs>(
      args?: Subset<T, SalesCampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesCampaignAggregateArgs>(args: Subset<T, SalesCampaignAggregateArgs>): Prisma.PrismaPromise<GetSalesCampaignAggregateType<T>>

    /**
     * Group by SalesCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesCampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesCampaignGroupByArgs['orderBy'] }
        : { orderBy?: SalesCampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesCampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesCampaign model
   */
  readonly fields: SalesCampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesCampaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesCampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesCampaign model
   */ 
  interface SalesCampaignFieldRefs {
    readonly id: FieldRef<"SalesCampaign", 'String'>
    readonly tenant_id: FieldRef<"SalesCampaign", 'String'>
    readonly owner_user_id: FieldRef<"SalesCampaign", 'String'>
    readonly name: FieldRef<"SalesCampaign", 'String'>
    readonly channel: FieldRef<"SalesCampaign", 'String'>
    readonly status: FieldRef<"SalesCampaign", 'String'>
    readonly steps: FieldRef<"SalesCampaign", 'Json'>
    readonly created_at: FieldRef<"SalesCampaign", 'DateTime'>
    readonly updated_at: FieldRef<"SalesCampaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesCampaign findUnique
   */
  export type SalesCampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaign to fetch.
     */
    where: SalesCampaignWhereUniqueInput
  }

  /**
   * SalesCampaign findUniqueOrThrow
   */
  export type SalesCampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaign to fetch.
     */
    where: SalesCampaignWhereUniqueInput
  }

  /**
   * SalesCampaign findFirst
   */
  export type SalesCampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaign to fetch.
     */
    where?: SalesCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesCampaigns to fetch.
     */
    orderBy?: SalesCampaignOrderByWithRelationInput | SalesCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesCampaigns.
     */
    cursor?: SalesCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesCampaigns.
     */
    distinct?: SalesCampaignScalarFieldEnum | SalesCampaignScalarFieldEnum[]
  }

  /**
   * SalesCampaign findFirstOrThrow
   */
  export type SalesCampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaign to fetch.
     */
    where?: SalesCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesCampaigns to fetch.
     */
    orderBy?: SalesCampaignOrderByWithRelationInput | SalesCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesCampaigns.
     */
    cursor?: SalesCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesCampaigns.
     */
    distinct?: SalesCampaignScalarFieldEnum | SalesCampaignScalarFieldEnum[]
  }

  /**
   * SalesCampaign findMany
   */
  export type SalesCampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaigns to fetch.
     */
    where?: SalesCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesCampaigns to fetch.
     */
    orderBy?: SalesCampaignOrderByWithRelationInput | SalesCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesCampaigns.
     */
    cursor?: SalesCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesCampaigns.
     */
    skip?: number
    distinct?: SalesCampaignScalarFieldEnum | SalesCampaignScalarFieldEnum[]
  }

  /**
   * SalesCampaign create
   */
  export type SalesCampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesCampaign.
     */
    data: XOR<SalesCampaignCreateInput, SalesCampaignUncheckedCreateInput>
  }

  /**
   * SalesCampaign createMany
   */
  export type SalesCampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesCampaigns.
     */
    data: SalesCampaignCreateManyInput | SalesCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesCampaign createManyAndReturn
   */
  export type SalesCampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesCampaigns.
     */
    data: SalesCampaignCreateManyInput | SalesCampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesCampaign update
   */
  export type SalesCampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesCampaign.
     */
    data: XOR<SalesCampaignUpdateInput, SalesCampaignUncheckedUpdateInput>
    /**
     * Choose, which SalesCampaign to update.
     */
    where: SalesCampaignWhereUniqueInput
  }

  /**
   * SalesCampaign updateMany
   */
  export type SalesCampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesCampaigns.
     */
    data: XOR<SalesCampaignUpdateManyMutationInput, SalesCampaignUncheckedUpdateManyInput>
    /**
     * Filter which SalesCampaigns to update
     */
    where?: SalesCampaignWhereInput
  }

  /**
   * SalesCampaign upsert
   */
  export type SalesCampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesCampaign to update in case it exists.
     */
    where: SalesCampaignWhereUniqueInput
    /**
     * In case the SalesCampaign found by the `where` argument doesn't exist, create a new SalesCampaign with this data.
     */
    create: XOR<SalesCampaignCreateInput, SalesCampaignUncheckedCreateInput>
    /**
     * In case the SalesCampaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesCampaignUpdateInput, SalesCampaignUncheckedUpdateInput>
  }

  /**
   * SalesCampaign delete
   */
  export type SalesCampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
    /**
     * Filter which SalesCampaign to delete.
     */
    where: SalesCampaignWhereUniqueInput
  }

  /**
   * SalesCampaign deleteMany
   */
  export type SalesCampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesCampaigns to delete
     */
    where?: SalesCampaignWhereInput
  }

  /**
   * SalesCampaign without action
   */
  export type SalesCampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaign
     */
    select?: SalesCampaignSelect<ExtArgs> | null
  }


  /**
   * Model SalesCampaignEnrollment
   */

  export type AggregateSalesCampaignEnrollment = {
    _count: SalesCampaignEnrollmentCountAggregateOutputType | null
    _avg: SalesCampaignEnrollmentAvgAggregateOutputType | null
    _sum: SalesCampaignEnrollmentSumAggregateOutputType | null
    _min: SalesCampaignEnrollmentMinAggregateOutputType | null
    _max: SalesCampaignEnrollmentMaxAggregateOutputType | null
  }

  export type SalesCampaignEnrollmentAvgAggregateOutputType = {
    current_step: number | null
  }

  export type SalesCampaignEnrollmentSumAggregateOutputType = {
    current_step: number | null
  }

  export type SalesCampaignEnrollmentMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    campaign_id: string | null
    lead_id: string | null
    status: string | null
    current_step: number | null
    next_send_at: Date | null
    last_sent_at: Date | null
    replied_at: Date | null
    stopped_reason: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesCampaignEnrollmentMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    campaign_id: string | null
    lead_id: string | null
    status: string | null
    current_step: number | null
    next_send_at: Date | null
    last_sent_at: Date | null
    replied_at: Date | null
    stopped_reason: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesCampaignEnrollmentCountAggregateOutputType = {
    id: number
    tenant_id: number
    campaign_id: number
    lead_id: number
    status: number
    current_step: number
    next_send_at: number
    last_sent_at: number
    replied_at: number
    stopped_reason: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesCampaignEnrollmentAvgAggregateInputType = {
    current_step?: true
  }

  export type SalesCampaignEnrollmentSumAggregateInputType = {
    current_step?: true
  }

  export type SalesCampaignEnrollmentMinAggregateInputType = {
    id?: true
    tenant_id?: true
    campaign_id?: true
    lead_id?: true
    status?: true
    current_step?: true
    next_send_at?: true
    last_sent_at?: true
    replied_at?: true
    stopped_reason?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesCampaignEnrollmentMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    campaign_id?: true
    lead_id?: true
    status?: true
    current_step?: true
    next_send_at?: true
    last_sent_at?: true
    replied_at?: true
    stopped_reason?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesCampaignEnrollmentCountAggregateInputType = {
    id?: true
    tenant_id?: true
    campaign_id?: true
    lead_id?: true
    status?: true
    current_step?: true
    next_send_at?: true
    last_sent_at?: true
    replied_at?: true
    stopped_reason?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesCampaignEnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesCampaignEnrollment to aggregate.
     */
    where?: SalesCampaignEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesCampaignEnrollments to fetch.
     */
    orderBy?: SalesCampaignEnrollmentOrderByWithRelationInput | SalesCampaignEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesCampaignEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesCampaignEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesCampaignEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesCampaignEnrollments
    **/
    _count?: true | SalesCampaignEnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesCampaignEnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesCampaignEnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesCampaignEnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesCampaignEnrollmentMaxAggregateInputType
  }

  export type GetSalesCampaignEnrollmentAggregateType<T extends SalesCampaignEnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesCampaignEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesCampaignEnrollment[P]>
      : GetScalarType<T[P], AggregateSalesCampaignEnrollment[P]>
  }




  export type SalesCampaignEnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesCampaignEnrollmentWhereInput
    orderBy?: SalesCampaignEnrollmentOrderByWithAggregationInput | SalesCampaignEnrollmentOrderByWithAggregationInput[]
    by: SalesCampaignEnrollmentScalarFieldEnum[] | SalesCampaignEnrollmentScalarFieldEnum
    having?: SalesCampaignEnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCampaignEnrollmentCountAggregateInputType | true
    _avg?: SalesCampaignEnrollmentAvgAggregateInputType
    _sum?: SalesCampaignEnrollmentSumAggregateInputType
    _min?: SalesCampaignEnrollmentMinAggregateInputType
    _max?: SalesCampaignEnrollmentMaxAggregateInputType
  }

  export type SalesCampaignEnrollmentGroupByOutputType = {
    id: string
    tenant_id: string
    campaign_id: string
    lead_id: string
    status: string
    current_step: number
    next_send_at: Date | null
    last_sent_at: Date | null
    replied_at: Date | null
    stopped_reason: string | null
    created_at: Date
    updated_at: Date
    _count: SalesCampaignEnrollmentCountAggregateOutputType | null
    _avg: SalesCampaignEnrollmentAvgAggregateOutputType | null
    _sum: SalesCampaignEnrollmentSumAggregateOutputType | null
    _min: SalesCampaignEnrollmentMinAggregateOutputType | null
    _max: SalesCampaignEnrollmentMaxAggregateOutputType | null
  }

  type GetSalesCampaignEnrollmentGroupByPayload<T extends SalesCampaignEnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesCampaignEnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesCampaignEnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesCampaignEnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], SalesCampaignEnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type SalesCampaignEnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    status?: boolean
    current_step?: boolean
    next_send_at?: boolean
    last_sent_at?: boolean
    replied_at?: boolean
    stopped_reason?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesCampaignEnrollment"]>

  export type SalesCampaignEnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    status?: boolean
    current_step?: boolean
    next_send_at?: boolean
    last_sent_at?: boolean
    replied_at?: boolean
    stopped_reason?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["salesCampaignEnrollment"]>

  export type SalesCampaignEnrollmentSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    campaign_id?: boolean
    lead_id?: boolean
    status?: boolean
    current_step?: boolean
    next_send_at?: boolean
    last_sent_at?: boolean
    replied_at?: boolean
    stopped_reason?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $SalesCampaignEnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesCampaignEnrollment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      campaign_id: string
      lead_id: string
      status: string
      current_step: number
      next_send_at: Date | null
      last_sent_at: Date | null
      replied_at: Date | null
      stopped_reason: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["salesCampaignEnrollment"]>
    composites: {}
  }

  type SalesCampaignEnrollmentGetPayload<S extends boolean | null | undefined | SalesCampaignEnrollmentDefaultArgs> = $Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload, S>

  type SalesCampaignEnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesCampaignEnrollmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesCampaignEnrollmentCountAggregateInputType | true
    }

  export interface SalesCampaignEnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesCampaignEnrollment'], meta: { name: 'SalesCampaignEnrollment' } }
    /**
     * Find zero or one SalesCampaignEnrollment that matches the filter.
     * @param {SalesCampaignEnrollmentFindUniqueArgs} args - Arguments to find a SalesCampaignEnrollment
     * @example
     * // Get one SalesCampaignEnrollment
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesCampaignEnrollmentFindUniqueArgs>(args: SelectSubset<T, SalesCampaignEnrollmentFindUniqueArgs<ExtArgs>>): Prisma__SalesCampaignEnrollmentClient<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesCampaignEnrollment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesCampaignEnrollmentFindUniqueOrThrowArgs} args - Arguments to find a SalesCampaignEnrollment
     * @example
     * // Get one SalesCampaignEnrollment
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesCampaignEnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesCampaignEnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesCampaignEnrollmentClient<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesCampaignEnrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignEnrollmentFindFirstArgs} args - Arguments to find a SalesCampaignEnrollment
     * @example
     * // Get one SalesCampaignEnrollment
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesCampaignEnrollmentFindFirstArgs>(args?: SelectSubset<T, SalesCampaignEnrollmentFindFirstArgs<ExtArgs>>): Prisma__SalesCampaignEnrollmentClient<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesCampaignEnrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignEnrollmentFindFirstOrThrowArgs} args - Arguments to find a SalesCampaignEnrollment
     * @example
     * // Get one SalesCampaignEnrollment
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesCampaignEnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesCampaignEnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesCampaignEnrollmentClient<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesCampaignEnrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignEnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesCampaignEnrollments
     * const salesCampaignEnrollments = await prisma.salesCampaignEnrollment.findMany()
     * 
     * // Get first 10 SalesCampaignEnrollments
     * const salesCampaignEnrollments = await prisma.salesCampaignEnrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesCampaignEnrollmentWithIdOnly = await prisma.salesCampaignEnrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesCampaignEnrollmentFindManyArgs>(args?: SelectSubset<T, SalesCampaignEnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesCampaignEnrollment.
     * @param {SalesCampaignEnrollmentCreateArgs} args - Arguments to create a SalesCampaignEnrollment.
     * @example
     * // Create one SalesCampaignEnrollment
     * const SalesCampaignEnrollment = await prisma.salesCampaignEnrollment.create({
     *   data: {
     *     // ... data to create a SalesCampaignEnrollment
     *   }
     * })
     * 
     */
    create<T extends SalesCampaignEnrollmentCreateArgs>(args: SelectSubset<T, SalesCampaignEnrollmentCreateArgs<ExtArgs>>): Prisma__SalesCampaignEnrollmentClient<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesCampaignEnrollments.
     * @param {SalesCampaignEnrollmentCreateManyArgs} args - Arguments to create many SalesCampaignEnrollments.
     * @example
     * // Create many SalesCampaignEnrollments
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCampaignEnrollmentCreateManyArgs>(args?: SelectSubset<T, SalesCampaignEnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesCampaignEnrollments and returns the data saved in the database.
     * @param {SalesCampaignEnrollmentCreateManyAndReturnArgs} args - Arguments to create many SalesCampaignEnrollments.
     * @example
     * // Create many SalesCampaignEnrollments
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesCampaignEnrollments and only return the `id`
     * const salesCampaignEnrollmentWithIdOnly = await prisma.salesCampaignEnrollment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCampaignEnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCampaignEnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesCampaignEnrollment.
     * @param {SalesCampaignEnrollmentDeleteArgs} args - Arguments to delete one SalesCampaignEnrollment.
     * @example
     * // Delete one SalesCampaignEnrollment
     * const SalesCampaignEnrollment = await prisma.salesCampaignEnrollment.delete({
     *   where: {
     *     // ... filter to delete one SalesCampaignEnrollment
     *   }
     * })
     * 
     */
    delete<T extends SalesCampaignEnrollmentDeleteArgs>(args: SelectSubset<T, SalesCampaignEnrollmentDeleteArgs<ExtArgs>>): Prisma__SalesCampaignEnrollmentClient<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesCampaignEnrollment.
     * @param {SalesCampaignEnrollmentUpdateArgs} args - Arguments to update one SalesCampaignEnrollment.
     * @example
     * // Update one SalesCampaignEnrollment
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesCampaignEnrollmentUpdateArgs>(args: SelectSubset<T, SalesCampaignEnrollmentUpdateArgs<ExtArgs>>): Prisma__SalesCampaignEnrollmentClient<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesCampaignEnrollments.
     * @param {SalesCampaignEnrollmentDeleteManyArgs} args - Arguments to filter SalesCampaignEnrollments to delete.
     * @example
     * // Delete a few SalesCampaignEnrollments
     * const { count } = await prisma.salesCampaignEnrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesCampaignEnrollmentDeleteManyArgs>(args?: SelectSubset<T, SalesCampaignEnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesCampaignEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignEnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesCampaignEnrollments
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesCampaignEnrollmentUpdateManyArgs>(args: SelectSubset<T, SalesCampaignEnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesCampaignEnrollment.
     * @param {SalesCampaignEnrollmentUpsertArgs} args - Arguments to update or create a SalesCampaignEnrollment.
     * @example
     * // Update or create a SalesCampaignEnrollment
     * const salesCampaignEnrollment = await prisma.salesCampaignEnrollment.upsert({
     *   create: {
     *     // ... data to create a SalesCampaignEnrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesCampaignEnrollment we want to update
     *   }
     * })
     */
    upsert<T extends SalesCampaignEnrollmentUpsertArgs>(args: SelectSubset<T, SalesCampaignEnrollmentUpsertArgs<ExtArgs>>): Prisma__SalesCampaignEnrollmentClient<$Result.GetResult<Prisma.$SalesCampaignEnrollmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesCampaignEnrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignEnrollmentCountArgs} args - Arguments to filter SalesCampaignEnrollments to count.
     * @example
     * // Count the number of SalesCampaignEnrollments
     * const count = await prisma.salesCampaignEnrollment.count({
     *   where: {
     *     // ... the filter for the SalesCampaignEnrollments we want to count
     *   }
     * })
    **/
    count<T extends SalesCampaignEnrollmentCountArgs>(
      args?: Subset<T, SalesCampaignEnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCampaignEnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesCampaignEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignEnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesCampaignEnrollmentAggregateArgs>(args: Subset<T, SalesCampaignEnrollmentAggregateArgs>): Prisma.PrismaPromise<GetSalesCampaignEnrollmentAggregateType<T>>

    /**
     * Group by SalesCampaignEnrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCampaignEnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesCampaignEnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesCampaignEnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: SalesCampaignEnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesCampaignEnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesCampaignEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesCampaignEnrollment model
   */
  readonly fields: SalesCampaignEnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesCampaignEnrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesCampaignEnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesCampaignEnrollment model
   */ 
  interface SalesCampaignEnrollmentFieldRefs {
    readonly id: FieldRef<"SalesCampaignEnrollment", 'String'>
    readonly tenant_id: FieldRef<"SalesCampaignEnrollment", 'String'>
    readonly campaign_id: FieldRef<"SalesCampaignEnrollment", 'String'>
    readonly lead_id: FieldRef<"SalesCampaignEnrollment", 'String'>
    readonly status: FieldRef<"SalesCampaignEnrollment", 'String'>
    readonly current_step: FieldRef<"SalesCampaignEnrollment", 'Int'>
    readonly next_send_at: FieldRef<"SalesCampaignEnrollment", 'DateTime'>
    readonly last_sent_at: FieldRef<"SalesCampaignEnrollment", 'DateTime'>
    readonly replied_at: FieldRef<"SalesCampaignEnrollment", 'DateTime'>
    readonly stopped_reason: FieldRef<"SalesCampaignEnrollment", 'String'>
    readonly created_at: FieldRef<"SalesCampaignEnrollment", 'DateTime'>
    readonly updated_at: FieldRef<"SalesCampaignEnrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesCampaignEnrollment findUnique
   */
  export type SalesCampaignEnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaignEnrollment to fetch.
     */
    where: SalesCampaignEnrollmentWhereUniqueInput
  }

  /**
   * SalesCampaignEnrollment findUniqueOrThrow
   */
  export type SalesCampaignEnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaignEnrollment to fetch.
     */
    where: SalesCampaignEnrollmentWhereUniqueInput
  }

  /**
   * SalesCampaignEnrollment findFirst
   */
  export type SalesCampaignEnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaignEnrollment to fetch.
     */
    where?: SalesCampaignEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesCampaignEnrollments to fetch.
     */
    orderBy?: SalesCampaignEnrollmentOrderByWithRelationInput | SalesCampaignEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesCampaignEnrollments.
     */
    cursor?: SalesCampaignEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesCampaignEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesCampaignEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesCampaignEnrollments.
     */
    distinct?: SalesCampaignEnrollmentScalarFieldEnum | SalesCampaignEnrollmentScalarFieldEnum[]
  }

  /**
   * SalesCampaignEnrollment findFirstOrThrow
   */
  export type SalesCampaignEnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaignEnrollment to fetch.
     */
    where?: SalesCampaignEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesCampaignEnrollments to fetch.
     */
    orderBy?: SalesCampaignEnrollmentOrderByWithRelationInput | SalesCampaignEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesCampaignEnrollments.
     */
    cursor?: SalesCampaignEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesCampaignEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesCampaignEnrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesCampaignEnrollments.
     */
    distinct?: SalesCampaignEnrollmentScalarFieldEnum | SalesCampaignEnrollmentScalarFieldEnum[]
  }

  /**
   * SalesCampaignEnrollment findMany
   */
  export type SalesCampaignEnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * Filter, which SalesCampaignEnrollments to fetch.
     */
    where?: SalesCampaignEnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesCampaignEnrollments to fetch.
     */
    orderBy?: SalesCampaignEnrollmentOrderByWithRelationInput | SalesCampaignEnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesCampaignEnrollments.
     */
    cursor?: SalesCampaignEnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesCampaignEnrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesCampaignEnrollments.
     */
    skip?: number
    distinct?: SalesCampaignEnrollmentScalarFieldEnum | SalesCampaignEnrollmentScalarFieldEnum[]
  }

  /**
   * SalesCampaignEnrollment create
   */
  export type SalesCampaignEnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesCampaignEnrollment.
     */
    data: XOR<SalesCampaignEnrollmentCreateInput, SalesCampaignEnrollmentUncheckedCreateInput>
  }

  /**
   * SalesCampaignEnrollment createMany
   */
  export type SalesCampaignEnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesCampaignEnrollments.
     */
    data: SalesCampaignEnrollmentCreateManyInput | SalesCampaignEnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesCampaignEnrollment createManyAndReturn
   */
  export type SalesCampaignEnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesCampaignEnrollments.
     */
    data: SalesCampaignEnrollmentCreateManyInput | SalesCampaignEnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesCampaignEnrollment update
   */
  export type SalesCampaignEnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesCampaignEnrollment.
     */
    data: XOR<SalesCampaignEnrollmentUpdateInput, SalesCampaignEnrollmentUncheckedUpdateInput>
    /**
     * Choose, which SalesCampaignEnrollment to update.
     */
    where: SalesCampaignEnrollmentWhereUniqueInput
  }

  /**
   * SalesCampaignEnrollment updateMany
   */
  export type SalesCampaignEnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesCampaignEnrollments.
     */
    data: XOR<SalesCampaignEnrollmentUpdateManyMutationInput, SalesCampaignEnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which SalesCampaignEnrollments to update
     */
    where?: SalesCampaignEnrollmentWhereInput
  }

  /**
   * SalesCampaignEnrollment upsert
   */
  export type SalesCampaignEnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesCampaignEnrollment to update in case it exists.
     */
    where: SalesCampaignEnrollmentWhereUniqueInput
    /**
     * In case the SalesCampaignEnrollment found by the `where` argument doesn't exist, create a new SalesCampaignEnrollment with this data.
     */
    create: XOR<SalesCampaignEnrollmentCreateInput, SalesCampaignEnrollmentUncheckedCreateInput>
    /**
     * In case the SalesCampaignEnrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesCampaignEnrollmentUpdateInput, SalesCampaignEnrollmentUncheckedUpdateInput>
  }

  /**
   * SalesCampaignEnrollment delete
   */
  export type SalesCampaignEnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
    /**
     * Filter which SalesCampaignEnrollment to delete.
     */
    where: SalesCampaignEnrollmentWhereUniqueInput
  }

  /**
   * SalesCampaignEnrollment deleteMany
   */
  export type SalesCampaignEnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesCampaignEnrollments to delete
     */
    where?: SalesCampaignEnrollmentWhereInput
  }

  /**
   * SalesCampaignEnrollment without action
   */
  export type SalesCampaignEnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCampaignEnrollment
     */
    select?: SalesCampaignEnrollmentSelect<ExtArgs> | null
  }


  /**
   * Model SalesWebhookEvent
   */

  export type AggregateSalesWebhookEvent = {
    _count: SalesWebhookEventCountAggregateOutputType | null
    _min: SalesWebhookEventMinAggregateOutputType | null
    _max: SalesWebhookEventMaxAggregateOutputType | null
  }

  export type SalesWebhookEventMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    provider: string | null
    event_type: string | null
    created_at: Date | null
  }

  export type SalesWebhookEventMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    provider: string | null
    event_type: string | null
    created_at: Date | null
  }

  export type SalesWebhookEventCountAggregateOutputType = {
    id: number
    event_id: number
    provider: number
    event_type: number
    payload: number
    created_at: number
    _all: number
  }


  export type SalesWebhookEventMinAggregateInputType = {
    id?: true
    event_id?: true
    provider?: true
    event_type?: true
    created_at?: true
  }

  export type SalesWebhookEventMaxAggregateInputType = {
    id?: true
    event_id?: true
    provider?: true
    event_type?: true
    created_at?: true
  }

  export type SalesWebhookEventCountAggregateInputType = {
    id?: true
    event_id?: true
    provider?: true
    event_type?: true
    payload?: true
    created_at?: true
    _all?: true
  }

  export type SalesWebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesWebhookEvent to aggregate.
     */
    where?: SalesWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWebhookEvents to fetch.
     */
    orderBy?: SalesWebhookEventOrderByWithRelationInput | SalesWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesWebhookEvents
    **/
    _count?: true | SalesWebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesWebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesWebhookEventMaxAggregateInputType
  }

  export type GetSalesWebhookEventAggregateType<T extends SalesWebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesWebhookEvent[P]>
      : GetScalarType<T[P], AggregateSalesWebhookEvent[P]>
  }




  export type SalesWebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWebhookEventWhereInput
    orderBy?: SalesWebhookEventOrderByWithAggregationInput | SalesWebhookEventOrderByWithAggregationInput[]
    by: SalesWebhookEventScalarFieldEnum[] | SalesWebhookEventScalarFieldEnum
    having?: SalesWebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesWebhookEventCountAggregateInputType | true
    _min?: SalesWebhookEventMinAggregateInputType
    _max?: SalesWebhookEventMaxAggregateInputType
  }

  export type SalesWebhookEventGroupByOutputType = {
    id: string
    event_id: string
    provider: string
    event_type: string
    payload: JsonValue
    created_at: Date
    _count: SalesWebhookEventCountAggregateOutputType | null
    _min: SalesWebhookEventMinAggregateOutputType | null
    _max: SalesWebhookEventMaxAggregateOutputType | null
  }

  type GetSalesWebhookEventGroupByPayload<T extends SalesWebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesWebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesWebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesWebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], SalesWebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type SalesWebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    provider?: boolean
    event_type?: boolean
    payload?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["salesWebhookEvent"]>

  export type SalesWebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    provider?: boolean
    event_type?: boolean
    payload?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["salesWebhookEvent"]>

  export type SalesWebhookEventSelectScalar = {
    id?: boolean
    event_id?: boolean
    provider?: boolean
    event_type?: boolean
    payload?: boolean
    created_at?: boolean
  }


  export type $SalesWebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesWebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      provider: string
      event_type: string
      payload: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["salesWebhookEvent"]>
    composites: {}
  }

  type SalesWebhookEventGetPayload<S extends boolean | null | undefined | SalesWebhookEventDefaultArgs> = $Result.GetResult<Prisma.$SalesWebhookEventPayload, S>

  type SalesWebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesWebhookEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesWebhookEventCountAggregateInputType | true
    }

  export interface SalesWebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesWebhookEvent'], meta: { name: 'SalesWebhookEvent' } }
    /**
     * Find zero or one SalesWebhookEvent that matches the filter.
     * @param {SalesWebhookEventFindUniqueArgs} args - Arguments to find a SalesWebhookEvent
     * @example
     * // Get one SalesWebhookEvent
     * const salesWebhookEvent = await prisma.salesWebhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesWebhookEventFindUniqueArgs>(args: SelectSubset<T, SalesWebhookEventFindUniqueArgs<ExtArgs>>): Prisma__SalesWebhookEventClient<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesWebhookEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesWebhookEventFindUniqueOrThrowArgs} args - Arguments to find a SalesWebhookEvent
     * @example
     * // Get one SalesWebhookEvent
     * const salesWebhookEvent = await prisma.salesWebhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesWebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesWebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesWebhookEventClient<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesWebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWebhookEventFindFirstArgs} args - Arguments to find a SalesWebhookEvent
     * @example
     * // Get one SalesWebhookEvent
     * const salesWebhookEvent = await prisma.salesWebhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesWebhookEventFindFirstArgs>(args?: SelectSubset<T, SalesWebhookEventFindFirstArgs<ExtArgs>>): Prisma__SalesWebhookEventClient<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesWebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWebhookEventFindFirstOrThrowArgs} args - Arguments to find a SalesWebhookEvent
     * @example
     * // Get one SalesWebhookEvent
     * const salesWebhookEvent = await prisma.salesWebhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesWebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesWebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesWebhookEventClient<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesWebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesWebhookEvents
     * const salesWebhookEvents = await prisma.salesWebhookEvent.findMany()
     * 
     * // Get first 10 SalesWebhookEvents
     * const salesWebhookEvents = await prisma.salesWebhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWebhookEventWithIdOnly = await prisma.salesWebhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesWebhookEventFindManyArgs>(args?: SelectSubset<T, SalesWebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesWebhookEvent.
     * @param {SalesWebhookEventCreateArgs} args - Arguments to create a SalesWebhookEvent.
     * @example
     * // Create one SalesWebhookEvent
     * const SalesWebhookEvent = await prisma.salesWebhookEvent.create({
     *   data: {
     *     // ... data to create a SalesWebhookEvent
     *   }
     * })
     * 
     */
    create<T extends SalesWebhookEventCreateArgs>(args: SelectSubset<T, SalesWebhookEventCreateArgs<ExtArgs>>): Prisma__SalesWebhookEventClient<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesWebhookEvents.
     * @param {SalesWebhookEventCreateManyArgs} args - Arguments to create many SalesWebhookEvents.
     * @example
     * // Create many SalesWebhookEvents
     * const salesWebhookEvent = await prisma.salesWebhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesWebhookEventCreateManyArgs>(args?: SelectSubset<T, SalesWebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesWebhookEvents and returns the data saved in the database.
     * @param {SalesWebhookEventCreateManyAndReturnArgs} args - Arguments to create many SalesWebhookEvents.
     * @example
     * // Create many SalesWebhookEvents
     * const salesWebhookEvent = await prisma.salesWebhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesWebhookEvents and only return the `id`
     * const salesWebhookEventWithIdOnly = await prisma.salesWebhookEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesWebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesWebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesWebhookEvent.
     * @param {SalesWebhookEventDeleteArgs} args - Arguments to delete one SalesWebhookEvent.
     * @example
     * // Delete one SalesWebhookEvent
     * const SalesWebhookEvent = await prisma.salesWebhookEvent.delete({
     *   where: {
     *     // ... filter to delete one SalesWebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends SalesWebhookEventDeleteArgs>(args: SelectSubset<T, SalesWebhookEventDeleteArgs<ExtArgs>>): Prisma__SalesWebhookEventClient<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesWebhookEvent.
     * @param {SalesWebhookEventUpdateArgs} args - Arguments to update one SalesWebhookEvent.
     * @example
     * // Update one SalesWebhookEvent
     * const salesWebhookEvent = await prisma.salesWebhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesWebhookEventUpdateArgs>(args: SelectSubset<T, SalesWebhookEventUpdateArgs<ExtArgs>>): Prisma__SalesWebhookEventClient<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesWebhookEvents.
     * @param {SalesWebhookEventDeleteManyArgs} args - Arguments to filter SalesWebhookEvents to delete.
     * @example
     * // Delete a few SalesWebhookEvents
     * const { count } = await prisma.salesWebhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesWebhookEventDeleteManyArgs>(args?: SelectSubset<T, SalesWebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesWebhookEvents
     * const salesWebhookEvent = await prisma.salesWebhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesWebhookEventUpdateManyArgs>(args: SelectSubset<T, SalesWebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesWebhookEvent.
     * @param {SalesWebhookEventUpsertArgs} args - Arguments to update or create a SalesWebhookEvent.
     * @example
     * // Update or create a SalesWebhookEvent
     * const salesWebhookEvent = await prisma.salesWebhookEvent.upsert({
     *   create: {
     *     // ... data to create a SalesWebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesWebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends SalesWebhookEventUpsertArgs>(args: SelectSubset<T, SalesWebhookEventUpsertArgs<ExtArgs>>): Prisma__SalesWebhookEventClient<$Result.GetResult<Prisma.$SalesWebhookEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWebhookEventCountArgs} args - Arguments to filter SalesWebhookEvents to count.
     * @example
     * // Count the number of SalesWebhookEvents
     * const count = await prisma.salesWebhookEvent.count({
     *   where: {
     *     // ... the filter for the SalesWebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends SalesWebhookEventCountArgs>(
      args?: Subset<T, SalesWebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesWebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesWebhookEventAggregateArgs>(args: Subset<T, SalesWebhookEventAggregateArgs>): Prisma.PrismaPromise<GetSalesWebhookEventAggregateType<T>>

    /**
     * Group by SalesWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesWebhookEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesWebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesWebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: SalesWebhookEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesWebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesWebhookEvent model
   */
  readonly fields: SalesWebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesWebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesWebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesWebhookEvent model
   */ 
  interface SalesWebhookEventFieldRefs {
    readonly id: FieldRef<"SalesWebhookEvent", 'String'>
    readonly event_id: FieldRef<"SalesWebhookEvent", 'String'>
    readonly provider: FieldRef<"SalesWebhookEvent", 'String'>
    readonly event_type: FieldRef<"SalesWebhookEvent", 'String'>
    readonly payload: FieldRef<"SalesWebhookEvent", 'Json'>
    readonly created_at: FieldRef<"SalesWebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesWebhookEvent findUnique
   */
  export type SalesWebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which SalesWebhookEvent to fetch.
     */
    where: SalesWebhookEventWhereUniqueInput
  }

  /**
   * SalesWebhookEvent findUniqueOrThrow
   */
  export type SalesWebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which SalesWebhookEvent to fetch.
     */
    where: SalesWebhookEventWhereUniqueInput
  }

  /**
   * SalesWebhookEvent findFirst
   */
  export type SalesWebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which SalesWebhookEvent to fetch.
     */
    where?: SalesWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWebhookEvents to fetch.
     */
    orderBy?: SalesWebhookEventOrderByWithRelationInput | SalesWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesWebhookEvents.
     */
    cursor?: SalesWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesWebhookEvents.
     */
    distinct?: SalesWebhookEventScalarFieldEnum | SalesWebhookEventScalarFieldEnum[]
  }

  /**
   * SalesWebhookEvent findFirstOrThrow
   */
  export type SalesWebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which SalesWebhookEvent to fetch.
     */
    where?: SalesWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWebhookEvents to fetch.
     */
    orderBy?: SalesWebhookEventOrderByWithRelationInput | SalesWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesWebhookEvents.
     */
    cursor?: SalesWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesWebhookEvents.
     */
    distinct?: SalesWebhookEventScalarFieldEnum | SalesWebhookEventScalarFieldEnum[]
  }

  /**
   * SalesWebhookEvent findMany
   */
  export type SalesWebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * Filter, which SalesWebhookEvents to fetch.
     */
    where?: SalesWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesWebhookEvents to fetch.
     */
    orderBy?: SalesWebhookEventOrderByWithRelationInput | SalesWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesWebhookEvents.
     */
    cursor?: SalesWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesWebhookEvents.
     */
    skip?: number
    distinct?: SalesWebhookEventScalarFieldEnum | SalesWebhookEventScalarFieldEnum[]
  }

  /**
   * SalesWebhookEvent create
   */
  export type SalesWebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesWebhookEvent.
     */
    data: XOR<SalesWebhookEventCreateInput, SalesWebhookEventUncheckedCreateInput>
  }

  /**
   * SalesWebhookEvent createMany
   */
  export type SalesWebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesWebhookEvents.
     */
    data: SalesWebhookEventCreateManyInput | SalesWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesWebhookEvent createManyAndReturn
   */
  export type SalesWebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesWebhookEvents.
     */
    data: SalesWebhookEventCreateManyInput | SalesWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesWebhookEvent update
   */
  export type SalesWebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesWebhookEvent.
     */
    data: XOR<SalesWebhookEventUpdateInput, SalesWebhookEventUncheckedUpdateInput>
    /**
     * Choose, which SalesWebhookEvent to update.
     */
    where: SalesWebhookEventWhereUniqueInput
  }

  /**
   * SalesWebhookEvent updateMany
   */
  export type SalesWebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesWebhookEvents.
     */
    data: XOR<SalesWebhookEventUpdateManyMutationInput, SalesWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which SalesWebhookEvents to update
     */
    where?: SalesWebhookEventWhereInput
  }

  /**
   * SalesWebhookEvent upsert
   */
  export type SalesWebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesWebhookEvent to update in case it exists.
     */
    where: SalesWebhookEventWhereUniqueInput
    /**
     * In case the SalesWebhookEvent found by the `where` argument doesn't exist, create a new SalesWebhookEvent with this data.
     */
    create: XOR<SalesWebhookEventCreateInput, SalesWebhookEventUncheckedCreateInput>
    /**
     * In case the SalesWebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesWebhookEventUpdateInput, SalesWebhookEventUncheckedUpdateInput>
  }

  /**
   * SalesWebhookEvent delete
   */
  export type SalesWebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
    /**
     * Filter which SalesWebhookEvent to delete.
     */
    where: SalesWebhookEventWhereUniqueInput
  }

  /**
   * SalesWebhookEvent deleteMany
   */
  export type SalesWebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesWebhookEvents to delete
     */
    where?: SalesWebhookEventWhereInput
  }

  /**
   * SalesWebhookEvent without action
   */
  export type SalesWebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesWebhookEvent
     */
    select?: SalesWebhookEventSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    name: 'name',
    org_id: 'org_id',
    created_at: 'created_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SalesProfileScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    owner_user_id: 'owner_user_id',
    business_name: 'business_name',
    website: 'website',
    product_description: 'product_description',
    target_customer: 'target_customer',
    value_proposition: 'value_proposition',
    tone: 'tone',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesProfileScalarFieldEnum = (typeof SalesProfileScalarFieldEnum)[keyof typeof SalesProfileScalarFieldEnum]


  export const SalesLeadScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    owner_user_id: 'owner_user_id',
    full_name: 'full_name',
    company: 'company',
    website: 'website',
    email: 'email',
    phone: 'phone',
    source: 'source',
    stage: 'stage',
    score: 'score',
    estimated_value: 'estimated_value',
    notes: 'notes',
    research_summary: 'research_summary',
    research_source_url: 'research_source_url',
    researched_at: 'researched_at',
    email_consent: 'email_consent',
    whatsapp_consent: 'whatsapp_consent',
    email_consent_source: 'email_consent_source',
    email_consent_at: 'email_consent_at',
    whatsapp_consent_source: 'whatsapp_consent_source',
    whatsapp_consent_at: 'whatsapp_consent_at',
    email_opted_out_at: 'email_opted_out_at',
    whatsapp_opted_out_at: 'whatsapp_opted_out_at',
    last_contacted_at: 'last_contacted_at',
    next_follow_up_at: 'next_follow_up_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesLeadScalarFieldEnum = (typeof SalesLeadScalarFieldEnum)[keyof typeof SalesLeadScalarFieldEnum]


  export const SalesActivityScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    owner_user_id: 'owner_user_id',
    lead_id: 'lead_id',
    activity_type: 'activity_type',
    summary: 'summary',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type SalesActivityScalarFieldEnum = (typeof SalesActivityScalarFieldEnum)[keyof typeof SalesActivityScalarFieldEnum]


  export const SalesOutreachMessageScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    owner_user_id: 'owner_user_id',
    lead_id: 'lead_id',
    channel: 'channel',
    destination: 'destination',
    subject: 'subject',
    body: 'body',
    status: 'status',
    provider_message_id: 'provider_message_id',
    delivery_status: 'delivery_status',
    delivered_at: 'delivered_at',
    read_at: 'read_at',
    error_message: 'error_message',
    sent_at: 'sent_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesOutreachMessageScalarFieldEnum = (typeof SalesOutreachMessageScalarFieldEnum)[keyof typeof SalesOutreachMessageScalarFieldEnum]


  export const SalesCampaignScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    owner_user_id: 'owner_user_id',
    name: 'name',
    channel: 'channel',
    status: 'status',
    steps: 'steps',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesCampaignScalarFieldEnum = (typeof SalesCampaignScalarFieldEnum)[keyof typeof SalesCampaignScalarFieldEnum]


  export const SalesCampaignEnrollmentScalarFieldEnum: {
    id: 'id',
    tenant_id: 'tenant_id',
    campaign_id: 'campaign_id',
    lead_id: 'lead_id',
    status: 'status',
    current_step: 'current_step',
    next_send_at: 'next_send_at',
    last_sent_at: 'last_sent_at',
    replied_at: 'replied_at',
    stopped_reason: 'stopped_reason',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesCampaignEnrollmentScalarFieldEnum = (typeof SalesCampaignEnrollmentScalarFieldEnum)[keyof typeof SalesCampaignEnrollmentScalarFieldEnum]


  export const SalesWebhookEventScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    provider: 'provider',
    event_type: 'event_type',
    payload: 'payload',
    created_at: 'created_at'
  };

  export type SalesWebhookEventScalarFieldEnum = (typeof SalesWebhookEventScalarFieldEnum)[keyof typeof SalesWebhookEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    org_id?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrderInput | SortOrder
    org_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    org_id?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrderInput | SortOrder
    org_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    org_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SalesProfileWhereInput = {
    AND?: SalesProfileWhereInput | SalesProfileWhereInput[]
    OR?: SalesProfileWhereInput[]
    NOT?: SalesProfileWhereInput | SalesProfileWhereInput[]
    id?: StringFilter<"SalesProfile"> | string
    tenant_id?: StringFilter<"SalesProfile"> | string
    owner_user_id?: StringFilter<"SalesProfile"> | string
    business_name?: StringNullableFilter<"SalesProfile"> | string | null
    website?: StringNullableFilter<"SalesProfile"> | string | null
    product_description?: StringNullableFilter<"SalesProfile"> | string | null
    target_customer?: StringNullableFilter<"SalesProfile"> | string | null
    value_proposition?: StringNullableFilter<"SalesProfile"> | string | null
    tone?: StringFilter<"SalesProfile"> | string
    created_at?: DateTimeFilter<"SalesProfile"> | Date | string
    updated_at?: DateTimeFilter<"SalesProfile"> | Date | string
  }

  export type SalesProfileOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    business_name?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    product_description?: SortOrderInput | SortOrder
    target_customer?: SortOrderInput | SortOrder
    value_proposition?: SortOrderInput | SortOrder
    tone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenant_id?: string
    AND?: SalesProfileWhereInput | SalesProfileWhereInput[]
    OR?: SalesProfileWhereInput[]
    NOT?: SalesProfileWhereInput | SalesProfileWhereInput[]
    owner_user_id?: StringFilter<"SalesProfile"> | string
    business_name?: StringNullableFilter<"SalesProfile"> | string | null
    website?: StringNullableFilter<"SalesProfile"> | string | null
    product_description?: StringNullableFilter<"SalesProfile"> | string | null
    target_customer?: StringNullableFilter<"SalesProfile"> | string | null
    value_proposition?: StringNullableFilter<"SalesProfile"> | string | null
    tone?: StringFilter<"SalesProfile"> | string
    created_at?: DateTimeFilter<"SalesProfile"> | Date | string
    updated_at?: DateTimeFilter<"SalesProfile"> | Date | string
  }, "id" | "tenant_id">

  export type SalesProfileOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    business_name?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    product_description?: SortOrderInput | SortOrder
    target_customer?: SortOrderInput | SortOrder
    value_proposition?: SortOrderInput | SortOrder
    tone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SalesProfileCountOrderByAggregateInput
    _max?: SalesProfileMaxOrderByAggregateInput
    _min?: SalesProfileMinOrderByAggregateInput
  }

  export type SalesProfileScalarWhereWithAggregatesInput = {
    AND?: SalesProfileScalarWhereWithAggregatesInput | SalesProfileScalarWhereWithAggregatesInput[]
    OR?: SalesProfileScalarWhereWithAggregatesInput[]
    NOT?: SalesProfileScalarWhereWithAggregatesInput | SalesProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesProfile"> | string
    tenant_id?: StringWithAggregatesFilter<"SalesProfile"> | string
    owner_user_id?: StringWithAggregatesFilter<"SalesProfile"> | string
    business_name?: StringNullableWithAggregatesFilter<"SalesProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"SalesProfile"> | string | null
    product_description?: StringNullableWithAggregatesFilter<"SalesProfile"> | string | null
    target_customer?: StringNullableWithAggregatesFilter<"SalesProfile"> | string | null
    value_proposition?: StringNullableWithAggregatesFilter<"SalesProfile"> | string | null
    tone?: StringWithAggregatesFilter<"SalesProfile"> | string
    created_at?: DateTimeWithAggregatesFilter<"SalesProfile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SalesProfile"> | Date | string
  }

  export type SalesLeadWhereInput = {
    AND?: SalesLeadWhereInput | SalesLeadWhereInput[]
    OR?: SalesLeadWhereInput[]
    NOT?: SalesLeadWhereInput | SalesLeadWhereInput[]
    id?: StringFilter<"SalesLead"> | string
    tenant_id?: StringFilter<"SalesLead"> | string
    owner_user_id?: StringFilter<"SalesLead"> | string
    full_name?: StringFilter<"SalesLead"> | string
    company?: StringNullableFilter<"SalesLead"> | string | null
    website?: StringNullableFilter<"SalesLead"> | string | null
    email?: StringNullableFilter<"SalesLead"> | string | null
    phone?: StringNullableFilter<"SalesLead"> | string | null
    source?: StringFilter<"SalesLead"> | string
    stage?: StringFilter<"SalesLead"> | string
    score?: IntFilter<"SalesLead"> | number
    estimated_value?: DecimalNullableFilter<"SalesLead"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"SalesLead"> | string | null
    research_summary?: StringNullableFilter<"SalesLead"> | string | null
    research_source_url?: StringNullableFilter<"SalesLead"> | string | null
    researched_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    email_consent?: BoolFilter<"SalesLead"> | boolean
    whatsapp_consent?: BoolFilter<"SalesLead"> | boolean
    email_consent_source?: StringNullableFilter<"SalesLead"> | string | null
    email_consent_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    whatsapp_consent_source?: StringNullableFilter<"SalesLead"> | string | null
    whatsapp_consent_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    email_opted_out_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    whatsapp_opted_out_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    last_contacted_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    next_follow_up_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    created_at?: DateTimeFilter<"SalesLead"> | Date | string
    updated_at?: DateTimeFilter<"SalesLead"> | Date | string
  }

  export type SalesLeadOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    full_name?: SortOrder
    company?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    source?: SortOrder
    stage?: SortOrder
    score?: SortOrder
    estimated_value?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    research_summary?: SortOrderInput | SortOrder
    research_source_url?: SortOrderInput | SortOrder
    researched_at?: SortOrderInput | SortOrder
    email_consent?: SortOrder
    whatsapp_consent?: SortOrder
    email_consent_source?: SortOrderInput | SortOrder
    email_consent_at?: SortOrderInput | SortOrder
    whatsapp_consent_source?: SortOrderInput | SortOrder
    whatsapp_consent_at?: SortOrderInput | SortOrder
    email_opted_out_at?: SortOrderInput | SortOrder
    whatsapp_opted_out_at?: SortOrderInput | SortOrder
    last_contacted_at?: SortOrderInput | SortOrder
    next_follow_up_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesLeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesLeadWhereInput | SalesLeadWhereInput[]
    OR?: SalesLeadWhereInput[]
    NOT?: SalesLeadWhereInput | SalesLeadWhereInput[]
    tenant_id?: StringFilter<"SalesLead"> | string
    owner_user_id?: StringFilter<"SalesLead"> | string
    full_name?: StringFilter<"SalesLead"> | string
    company?: StringNullableFilter<"SalesLead"> | string | null
    website?: StringNullableFilter<"SalesLead"> | string | null
    email?: StringNullableFilter<"SalesLead"> | string | null
    phone?: StringNullableFilter<"SalesLead"> | string | null
    source?: StringFilter<"SalesLead"> | string
    stage?: StringFilter<"SalesLead"> | string
    score?: IntFilter<"SalesLead"> | number
    estimated_value?: DecimalNullableFilter<"SalesLead"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableFilter<"SalesLead"> | string | null
    research_summary?: StringNullableFilter<"SalesLead"> | string | null
    research_source_url?: StringNullableFilter<"SalesLead"> | string | null
    researched_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    email_consent?: BoolFilter<"SalesLead"> | boolean
    whatsapp_consent?: BoolFilter<"SalesLead"> | boolean
    email_consent_source?: StringNullableFilter<"SalesLead"> | string | null
    email_consent_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    whatsapp_consent_source?: StringNullableFilter<"SalesLead"> | string | null
    whatsapp_consent_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    email_opted_out_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    whatsapp_opted_out_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    last_contacted_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    next_follow_up_at?: DateTimeNullableFilter<"SalesLead"> | Date | string | null
    created_at?: DateTimeFilter<"SalesLead"> | Date | string
    updated_at?: DateTimeFilter<"SalesLead"> | Date | string
  }, "id">

  export type SalesLeadOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    full_name?: SortOrder
    company?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    source?: SortOrder
    stage?: SortOrder
    score?: SortOrder
    estimated_value?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    research_summary?: SortOrderInput | SortOrder
    research_source_url?: SortOrderInput | SortOrder
    researched_at?: SortOrderInput | SortOrder
    email_consent?: SortOrder
    whatsapp_consent?: SortOrder
    email_consent_source?: SortOrderInput | SortOrder
    email_consent_at?: SortOrderInput | SortOrder
    whatsapp_consent_source?: SortOrderInput | SortOrder
    whatsapp_consent_at?: SortOrderInput | SortOrder
    email_opted_out_at?: SortOrderInput | SortOrder
    whatsapp_opted_out_at?: SortOrderInput | SortOrder
    last_contacted_at?: SortOrderInput | SortOrder
    next_follow_up_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SalesLeadCountOrderByAggregateInput
    _avg?: SalesLeadAvgOrderByAggregateInput
    _max?: SalesLeadMaxOrderByAggregateInput
    _min?: SalesLeadMinOrderByAggregateInput
    _sum?: SalesLeadSumOrderByAggregateInput
  }

  export type SalesLeadScalarWhereWithAggregatesInput = {
    AND?: SalesLeadScalarWhereWithAggregatesInput | SalesLeadScalarWhereWithAggregatesInput[]
    OR?: SalesLeadScalarWhereWithAggregatesInput[]
    NOT?: SalesLeadScalarWhereWithAggregatesInput | SalesLeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesLead"> | string
    tenant_id?: StringWithAggregatesFilter<"SalesLead"> | string
    owner_user_id?: StringWithAggregatesFilter<"SalesLead"> | string
    full_name?: StringWithAggregatesFilter<"SalesLead"> | string
    company?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    website?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    email?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    phone?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    source?: StringWithAggregatesFilter<"SalesLead"> | string
    stage?: StringWithAggregatesFilter<"SalesLead"> | string
    score?: IntWithAggregatesFilter<"SalesLead"> | number
    estimated_value?: DecimalNullableWithAggregatesFilter<"SalesLead"> | Decimal | DecimalJsLike | number | string | null
    notes?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    research_summary?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    research_source_url?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    researched_at?: DateTimeNullableWithAggregatesFilter<"SalesLead"> | Date | string | null
    email_consent?: BoolWithAggregatesFilter<"SalesLead"> | boolean
    whatsapp_consent?: BoolWithAggregatesFilter<"SalesLead"> | boolean
    email_consent_source?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    email_consent_at?: DateTimeNullableWithAggregatesFilter<"SalesLead"> | Date | string | null
    whatsapp_consent_source?: StringNullableWithAggregatesFilter<"SalesLead"> | string | null
    whatsapp_consent_at?: DateTimeNullableWithAggregatesFilter<"SalesLead"> | Date | string | null
    email_opted_out_at?: DateTimeNullableWithAggregatesFilter<"SalesLead"> | Date | string | null
    whatsapp_opted_out_at?: DateTimeNullableWithAggregatesFilter<"SalesLead"> | Date | string | null
    last_contacted_at?: DateTimeNullableWithAggregatesFilter<"SalesLead"> | Date | string | null
    next_follow_up_at?: DateTimeNullableWithAggregatesFilter<"SalesLead"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"SalesLead"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SalesLead"> | Date | string
  }

  export type SalesActivityWhereInput = {
    AND?: SalesActivityWhereInput | SalesActivityWhereInput[]
    OR?: SalesActivityWhereInput[]
    NOT?: SalesActivityWhereInput | SalesActivityWhereInput[]
    id?: StringFilter<"SalesActivity"> | string
    tenant_id?: StringFilter<"SalesActivity"> | string
    owner_user_id?: StringFilter<"SalesActivity"> | string
    lead_id?: StringNullableFilter<"SalesActivity"> | string | null
    activity_type?: StringFilter<"SalesActivity"> | string
    summary?: StringFilter<"SalesActivity"> | string
    metadata?: JsonNullableFilter<"SalesActivity">
    created_at?: DateTimeFilter<"SalesActivity"> | Date | string
  }

  export type SalesActivityOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrderInput | SortOrder
    activity_type?: SortOrder
    summary?: SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type SalesActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesActivityWhereInput | SalesActivityWhereInput[]
    OR?: SalesActivityWhereInput[]
    NOT?: SalesActivityWhereInput | SalesActivityWhereInput[]
    tenant_id?: StringFilter<"SalesActivity"> | string
    owner_user_id?: StringFilter<"SalesActivity"> | string
    lead_id?: StringNullableFilter<"SalesActivity"> | string | null
    activity_type?: StringFilter<"SalesActivity"> | string
    summary?: StringFilter<"SalesActivity"> | string
    metadata?: JsonNullableFilter<"SalesActivity">
    created_at?: DateTimeFilter<"SalesActivity"> | Date | string
  }, "id">

  export type SalesActivityOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrderInput | SortOrder
    activity_type?: SortOrder
    summary?: SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: SalesActivityCountOrderByAggregateInput
    _max?: SalesActivityMaxOrderByAggregateInput
    _min?: SalesActivityMinOrderByAggregateInput
  }

  export type SalesActivityScalarWhereWithAggregatesInput = {
    AND?: SalesActivityScalarWhereWithAggregatesInput | SalesActivityScalarWhereWithAggregatesInput[]
    OR?: SalesActivityScalarWhereWithAggregatesInput[]
    NOT?: SalesActivityScalarWhereWithAggregatesInput | SalesActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesActivity"> | string
    tenant_id?: StringWithAggregatesFilter<"SalesActivity"> | string
    owner_user_id?: StringWithAggregatesFilter<"SalesActivity"> | string
    lead_id?: StringNullableWithAggregatesFilter<"SalesActivity"> | string | null
    activity_type?: StringWithAggregatesFilter<"SalesActivity"> | string
    summary?: StringWithAggregatesFilter<"SalesActivity"> | string
    metadata?: JsonNullableWithAggregatesFilter<"SalesActivity">
    created_at?: DateTimeWithAggregatesFilter<"SalesActivity"> | Date | string
  }

  export type SalesOutreachMessageWhereInput = {
    AND?: SalesOutreachMessageWhereInput | SalesOutreachMessageWhereInput[]
    OR?: SalesOutreachMessageWhereInput[]
    NOT?: SalesOutreachMessageWhereInput | SalesOutreachMessageWhereInput[]
    id?: StringFilter<"SalesOutreachMessage"> | string
    tenant_id?: StringFilter<"SalesOutreachMessage"> | string
    owner_user_id?: StringFilter<"SalesOutreachMessage"> | string
    lead_id?: StringFilter<"SalesOutreachMessage"> | string
    channel?: StringFilter<"SalesOutreachMessage"> | string
    destination?: StringFilter<"SalesOutreachMessage"> | string
    subject?: StringNullableFilter<"SalesOutreachMessage"> | string | null
    body?: StringFilter<"SalesOutreachMessage"> | string
    status?: StringFilter<"SalesOutreachMessage"> | string
    provider_message_id?: StringNullableFilter<"SalesOutreachMessage"> | string | null
    delivery_status?: StringFilter<"SalesOutreachMessage"> | string
    delivered_at?: DateTimeNullableFilter<"SalesOutreachMessage"> | Date | string | null
    read_at?: DateTimeNullableFilter<"SalesOutreachMessage"> | Date | string | null
    error_message?: StringNullableFilter<"SalesOutreachMessage"> | string | null
    sent_at?: DateTimeNullableFilter<"SalesOutreachMessage"> | Date | string | null
    created_at?: DateTimeFilter<"SalesOutreachMessage"> | Date | string
    updated_at?: DateTimeFilter<"SalesOutreachMessage"> | Date | string
  }

  export type SalesOutreachMessageOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrder
    status?: SortOrder
    provider_message_id?: SortOrderInput | SortOrder
    delivery_status?: SortOrder
    delivered_at?: SortOrderInput | SortOrder
    read_at?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesOutreachMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesOutreachMessageWhereInput | SalesOutreachMessageWhereInput[]
    OR?: SalesOutreachMessageWhereInput[]
    NOT?: SalesOutreachMessageWhereInput | SalesOutreachMessageWhereInput[]
    tenant_id?: StringFilter<"SalesOutreachMessage"> | string
    owner_user_id?: StringFilter<"SalesOutreachMessage"> | string
    lead_id?: StringFilter<"SalesOutreachMessage"> | string
    channel?: StringFilter<"SalesOutreachMessage"> | string
    destination?: StringFilter<"SalesOutreachMessage"> | string
    subject?: StringNullableFilter<"SalesOutreachMessage"> | string | null
    body?: StringFilter<"SalesOutreachMessage"> | string
    status?: StringFilter<"SalesOutreachMessage"> | string
    provider_message_id?: StringNullableFilter<"SalesOutreachMessage"> | string | null
    delivery_status?: StringFilter<"SalesOutreachMessage"> | string
    delivered_at?: DateTimeNullableFilter<"SalesOutreachMessage"> | Date | string | null
    read_at?: DateTimeNullableFilter<"SalesOutreachMessage"> | Date | string | null
    error_message?: StringNullableFilter<"SalesOutreachMessage"> | string | null
    sent_at?: DateTimeNullableFilter<"SalesOutreachMessage"> | Date | string | null
    created_at?: DateTimeFilter<"SalesOutreachMessage"> | Date | string
    updated_at?: DateTimeFilter<"SalesOutreachMessage"> | Date | string
  }, "id">

  export type SalesOutreachMessageOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrder
    status?: SortOrder
    provider_message_id?: SortOrderInput | SortOrder
    delivery_status?: SortOrder
    delivered_at?: SortOrderInput | SortOrder
    read_at?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SalesOutreachMessageCountOrderByAggregateInput
    _max?: SalesOutreachMessageMaxOrderByAggregateInput
    _min?: SalesOutreachMessageMinOrderByAggregateInput
  }

  export type SalesOutreachMessageScalarWhereWithAggregatesInput = {
    AND?: SalesOutreachMessageScalarWhereWithAggregatesInput | SalesOutreachMessageScalarWhereWithAggregatesInput[]
    OR?: SalesOutreachMessageScalarWhereWithAggregatesInput[]
    NOT?: SalesOutreachMessageScalarWhereWithAggregatesInput | SalesOutreachMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    tenant_id?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    owner_user_id?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    lead_id?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    channel?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    destination?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    subject?: StringNullableWithAggregatesFilter<"SalesOutreachMessage"> | string | null
    body?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    status?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    provider_message_id?: StringNullableWithAggregatesFilter<"SalesOutreachMessage"> | string | null
    delivery_status?: StringWithAggregatesFilter<"SalesOutreachMessage"> | string
    delivered_at?: DateTimeNullableWithAggregatesFilter<"SalesOutreachMessage"> | Date | string | null
    read_at?: DateTimeNullableWithAggregatesFilter<"SalesOutreachMessage"> | Date | string | null
    error_message?: StringNullableWithAggregatesFilter<"SalesOutreachMessage"> | string | null
    sent_at?: DateTimeNullableWithAggregatesFilter<"SalesOutreachMessage"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"SalesOutreachMessage"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SalesOutreachMessage"> | Date | string
  }

  export type SalesCampaignWhereInput = {
    AND?: SalesCampaignWhereInput | SalesCampaignWhereInput[]
    OR?: SalesCampaignWhereInput[]
    NOT?: SalesCampaignWhereInput | SalesCampaignWhereInput[]
    id?: StringFilter<"SalesCampaign"> | string
    tenant_id?: StringFilter<"SalesCampaign"> | string
    owner_user_id?: StringFilter<"SalesCampaign"> | string
    name?: StringFilter<"SalesCampaign"> | string
    channel?: StringFilter<"SalesCampaign"> | string
    status?: StringFilter<"SalesCampaign"> | string
    steps?: JsonFilter<"SalesCampaign">
    created_at?: DateTimeFilter<"SalesCampaign"> | Date | string
    updated_at?: DateTimeFilter<"SalesCampaign"> | Date | string
  }

  export type SalesCampaignOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    steps?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesCampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesCampaignWhereInput | SalesCampaignWhereInput[]
    OR?: SalesCampaignWhereInput[]
    NOT?: SalesCampaignWhereInput | SalesCampaignWhereInput[]
    tenant_id?: StringFilter<"SalesCampaign"> | string
    owner_user_id?: StringFilter<"SalesCampaign"> | string
    name?: StringFilter<"SalesCampaign"> | string
    channel?: StringFilter<"SalesCampaign"> | string
    status?: StringFilter<"SalesCampaign"> | string
    steps?: JsonFilter<"SalesCampaign">
    created_at?: DateTimeFilter<"SalesCampaign"> | Date | string
    updated_at?: DateTimeFilter<"SalesCampaign"> | Date | string
  }, "id">

  export type SalesCampaignOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    steps?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SalesCampaignCountOrderByAggregateInput
    _max?: SalesCampaignMaxOrderByAggregateInput
    _min?: SalesCampaignMinOrderByAggregateInput
  }

  export type SalesCampaignScalarWhereWithAggregatesInput = {
    AND?: SalesCampaignScalarWhereWithAggregatesInput | SalesCampaignScalarWhereWithAggregatesInput[]
    OR?: SalesCampaignScalarWhereWithAggregatesInput[]
    NOT?: SalesCampaignScalarWhereWithAggregatesInput | SalesCampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesCampaign"> | string
    tenant_id?: StringWithAggregatesFilter<"SalesCampaign"> | string
    owner_user_id?: StringWithAggregatesFilter<"SalesCampaign"> | string
    name?: StringWithAggregatesFilter<"SalesCampaign"> | string
    channel?: StringWithAggregatesFilter<"SalesCampaign"> | string
    status?: StringWithAggregatesFilter<"SalesCampaign"> | string
    steps?: JsonWithAggregatesFilter<"SalesCampaign">
    created_at?: DateTimeWithAggregatesFilter<"SalesCampaign"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SalesCampaign"> | Date | string
  }

  export type SalesCampaignEnrollmentWhereInput = {
    AND?: SalesCampaignEnrollmentWhereInput | SalesCampaignEnrollmentWhereInput[]
    OR?: SalesCampaignEnrollmentWhereInput[]
    NOT?: SalesCampaignEnrollmentWhereInput | SalesCampaignEnrollmentWhereInput[]
    id?: StringFilter<"SalesCampaignEnrollment"> | string
    tenant_id?: StringFilter<"SalesCampaignEnrollment"> | string
    campaign_id?: StringFilter<"SalesCampaignEnrollment"> | string
    lead_id?: StringFilter<"SalesCampaignEnrollment"> | string
    status?: StringFilter<"SalesCampaignEnrollment"> | string
    current_step?: IntFilter<"SalesCampaignEnrollment"> | number
    next_send_at?: DateTimeNullableFilter<"SalesCampaignEnrollment"> | Date | string | null
    last_sent_at?: DateTimeNullableFilter<"SalesCampaignEnrollment"> | Date | string | null
    replied_at?: DateTimeNullableFilter<"SalesCampaignEnrollment"> | Date | string | null
    stopped_reason?: StringNullableFilter<"SalesCampaignEnrollment"> | string | null
    created_at?: DateTimeFilter<"SalesCampaignEnrollment"> | Date | string
    updated_at?: DateTimeFilter<"SalesCampaignEnrollment"> | Date | string
  }

  export type SalesCampaignEnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    status?: SortOrder
    current_step?: SortOrder
    next_send_at?: SortOrderInput | SortOrder
    last_sent_at?: SortOrderInput | SortOrder
    replied_at?: SortOrderInput | SortOrder
    stopped_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesCampaignEnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaign_id_lead_id?: SalesCampaignEnrollmentCampaign_idLead_idCompoundUniqueInput
    AND?: SalesCampaignEnrollmentWhereInput | SalesCampaignEnrollmentWhereInput[]
    OR?: SalesCampaignEnrollmentWhereInput[]
    NOT?: SalesCampaignEnrollmentWhereInput | SalesCampaignEnrollmentWhereInput[]
    tenant_id?: StringFilter<"SalesCampaignEnrollment"> | string
    campaign_id?: StringFilter<"SalesCampaignEnrollment"> | string
    lead_id?: StringFilter<"SalesCampaignEnrollment"> | string
    status?: StringFilter<"SalesCampaignEnrollment"> | string
    current_step?: IntFilter<"SalesCampaignEnrollment"> | number
    next_send_at?: DateTimeNullableFilter<"SalesCampaignEnrollment"> | Date | string | null
    last_sent_at?: DateTimeNullableFilter<"SalesCampaignEnrollment"> | Date | string | null
    replied_at?: DateTimeNullableFilter<"SalesCampaignEnrollment"> | Date | string | null
    stopped_reason?: StringNullableFilter<"SalesCampaignEnrollment"> | string | null
    created_at?: DateTimeFilter<"SalesCampaignEnrollment"> | Date | string
    updated_at?: DateTimeFilter<"SalesCampaignEnrollment"> | Date | string
  }, "id" | "campaign_id_lead_id">

  export type SalesCampaignEnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    status?: SortOrder
    current_step?: SortOrder
    next_send_at?: SortOrderInput | SortOrder
    last_sent_at?: SortOrderInput | SortOrder
    replied_at?: SortOrderInput | SortOrder
    stopped_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SalesCampaignEnrollmentCountOrderByAggregateInput
    _avg?: SalesCampaignEnrollmentAvgOrderByAggregateInput
    _max?: SalesCampaignEnrollmentMaxOrderByAggregateInput
    _min?: SalesCampaignEnrollmentMinOrderByAggregateInput
    _sum?: SalesCampaignEnrollmentSumOrderByAggregateInput
  }

  export type SalesCampaignEnrollmentScalarWhereWithAggregatesInput = {
    AND?: SalesCampaignEnrollmentScalarWhereWithAggregatesInput | SalesCampaignEnrollmentScalarWhereWithAggregatesInput[]
    OR?: SalesCampaignEnrollmentScalarWhereWithAggregatesInput[]
    NOT?: SalesCampaignEnrollmentScalarWhereWithAggregatesInput | SalesCampaignEnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesCampaignEnrollment"> | string
    tenant_id?: StringWithAggregatesFilter<"SalesCampaignEnrollment"> | string
    campaign_id?: StringWithAggregatesFilter<"SalesCampaignEnrollment"> | string
    lead_id?: StringWithAggregatesFilter<"SalesCampaignEnrollment"> | string
    status?: StringWithAggregatesFilter<"SalesCampaignEnrollment"> | string
    current_step?: IntWithAggregatesFilter<"SalesCampaignEnrollment"> | number
    next_send_at?: DateTimeNullableWithAggregatesFilter<"SalesCampaignEnrollment"> | Date | string | null
    last_sent_at?: DateTimeNullableWithAggregatesFilter<"SalesCampaignEnrollment"> | Date | string | null
    replied_at?: DateTimeNullableWithAggregatesFilter<"SalesCampaignEnrollment"> | Date | string | null
    stopped_reason?: StringNullableWithAggregatesFilter<"SalesCampaignEnrollment"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"SalesCampaignEnrollment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SalesCampaignEnrollment"> | Date | string
  }

  export type SalesWebhookEventWhereInput = {
    AND?: SalesWebhookEventWhereInput | SalesWebhookEventWhereInput[]
    OR?: SalesWebhookEventWhereInput[]
    NOT?: SalesWebhookEventWhereInput | SalesWebhookEventWhereInput[]
    id?: StringFilter<"SalesWebhookEvent"> | string
    event_id?: StringFilter<"SalesWebhookEvent"> | string
    provider?: StringFilter<"SalesWebhookEvent"> | string
    event_type?: StringFilter<"SalesWebhookEvent"> | string
    payload?: JsonFilter<"SalesWebhookEvent">
    created_at?: DateTimeFilter<"SalesWebhookEvent"> | Date | string
  }

  export type SalesWebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
  }

  export type SalesWebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    event_id?: string
    AND?: SalesWebhookEventWhereInput | SalesWebhookEventWhereInput[]
    OR?: SalesWebhookEventWhereInput[]
    NOT?: SalesWebhookEventWhereInput | SalesWebhookEventWhereInput[]
    provider?: StringFilter<"SalesWebhookEvent"> | string
    event_type?: StringFilter<"SalesWebhookEvent"> | string
    payload?: JsonFilter<"SalesWebhookEvent">
    created_at?: DateTimeFilter<"SalesWebhookEvent"> | Date | string
  }, "id" | "event_id">

  export type SalesWebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
    _count?: SalesWebhookEventCountOrderByAggregateInput
    _max?: SalesWebhookEventMaxOrderByAggregateInput
    _min?: SalesWebhookEventMinOrderByAggregateInput
  }

  export type SalesWebhookEventScalarWhereWithAggregatesInput = {
    AND?: SalesWebhookEventScalarWhereWithAggregatesInput | SalesWebhookEventScalarWhereWithAggregatesInput[]
    OR?: SalesWebhookEventScalarWhereWithAggregatesInput[]
    NOT?: SalesWebhookEventScalarWhereWithAggregatesInput | SalesWebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesWebhookEvent"> | string
    event_id?: StringWithAggregatesFilter<"SalesWebhookEvent"> | string
    provider?: StringWithAggregatesFilter<"SalesWebhookEvent"> | string
    event_type?: StringWithAggregatesFilter<"SalesWebhookEvent"> | string
    payload?: JsonWithAggregatesFilter<"SalesWebhookEvent">
    created_at?: DateTimeWithAggregatesFilter<"SalesWebhookEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    org_id?: string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    org_id?: string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    name?: string | null
    org_id?: string | null
    created_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesProfileCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    business_name?: string | null
    website?: string | null
    product_description?: string | null
    target_customer?: string | null
    value_proposition?: string | null
    tone?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesProfileUncheckedCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    business_name?: string | null
    website?: string | null
    product_description?: string | null
    target_customer?: string | null
    value_proposition?: string | null
    tone?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    product_description?: NullableStringFieldUpdateOperationsInput | string | null
    target_customer?: NullableStringFieldUpdateOperationsInput | string | null
    value_proposition?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    product_description?: NullableStringFieldUpdateOperationsInput | string | null
    target_customer?: NullableStringFieldUpdateOperationsInput | string | null
    value_proposition?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesProfileCreateManyInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    business_name?: string | null
    website?: string | null
    product_description?: string | null
    target_customer?: string | null
    value_proposition?: string | null
    tone?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    product_description?: NullableStringFieldUpdateOperationsInput | string | null
    target_customer?: NullableStringFieldUpdateOperationsInput | string | null
    value_proposition?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    business_name?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    product_description?: NullableStringFieldUpdateOperationsInput | string | null
    target_customer?: NullableStringFieldUpdateOperationsInput | string | null
    value_proposition?: NullableStringFieldUpdateOperationsInput | string | null
    tone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesLeadCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    full_name: string
    company?: string | null
    website?: string | null
    email?: string | null
    phone?: string | null
    source?: string
    stage?: string
    score?: number
    estimated_value?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    research_summary?: string | null
    research_source_url?: string | null
    researched_at?: Date | string | null
    email_consent?: boolean
    whatsapp_consent?: boolean
    email_consent_source?: string | null
    email_consent_at?: Date | string | null
    whatsapp_consent_source?: string | null
    whatsapp_consent_at?: Date | string | null
    email_opted_out_at?: Date | string | null
    whatsapp_opted_out_at?: Date | string | null
    last_contacted_at?: Date | string | null
    next_follow_up_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesLeadUncheckedCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    full_name: string
    company?: string | null
    website?: string | null
    email?: string | null
    phone?: string | null
    source?: string
    stage?: string
    score?: number
    estimated_value?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    research_summary?: string | null
    research_source_url?: string | null
    researched_at?: Date | string | null
    email_consent?: boolean
    whatsapp_consent?: boolean
    email_consent_source?: string | null
    email_consent_at?: Date | string | null
    whatsapp_consent_source?: string | null
    whatsapp_consent_at?: Date | string | null
    email_opted_out_at?: Date | string | null
    whatsapp_opted_out_at?: Date | string | null
    last_contacted_at?: Date | string | null
    next_follow_up_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesLeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    estimated_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    research_summary?: NullableStringFieldUpdateOperationsInput | string | null
    research_source_url?: NullableStringFieldUpdateOperationsInput | string | null
    researched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_consent?: BoolFieldUpdateOperationsInput | boolean
    whatsapp_consent?: BoolFieldUpdateOperationsInput | boolean
    email_consent_source?: NullableStringFieldUpdateOperationsInput | string | null
    email_consent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_consent_source?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_consent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_opted_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_opted_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_contacted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_follow_up_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesLeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    estimated_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    research_summary?: NullableStringFieldUpdateOperationsInput | string | null
    research_source_url?: NullableStringFieldUpdateOperationsInput | string | null
    researched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_consent?: BoolFieldUpdateOperationsInput | boolean
    whatsapp_consent?: BoolFieldUpdateOperationsInput | boolean
    email_consent_source?: NullableStringFieldUpdateOperationsInput | string | null
    email_consent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_consent_source?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_consent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_opted_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_opted_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_contacted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_follow_up_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesLeadCreateManyInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    full_name: string
    company?: string | null
    website?: string | null
    email?: string | null
    phone?: string | null
    source?: string
    stage?: string
    score?: number
    estimated_value?: Decimal | DecimalJsLike | number | string | null
    notes?: string | null
    research_summary?: string | null
    research_source_url?: string | null
    researched_at?: Date | string | null
    email_consent?: boolean
    whatsapp_consent?: boolean
    email_consent_source?: string | null
    email_consent_at?: Date | string | null
    whatsapp_consent_source?: string | null
    whatsapp_consent_at?: Date | string | null
    email_opted_out_at?: Date | string | null
    whatsapp_opted_out_at?: Date | string | null
    last_contacted_at?: Date | string | null
    next_follow_up_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesLeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    estimated_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    research_summary?: NullableStringFieldUpdateOperationsInput | string | null
    research_source_url?: NullableStringFieldUpdateOperationsInput | string | null
    researched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_consent?: BoolFieldUpdateOperationsInput | boolean
    whatsapp_consent?: BoolFieldUpdateOperationsInput | boolean
    email_consent_source?: NullableStringFieldUpdateOperationsInput | string | null
    email_consent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_consent_source?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_consent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_opted_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_opted_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_contacted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_follow_up_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesLeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    source?: StringFieldUpdateOperationsInput | string
    stage?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    estimated_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    research_summary?: NullableStringFieldUpdateOperationsInput | string | null
    research_source_url?: NullableStringFieldUpdateOperationsInput | string | null
    researched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_consent?: BoolFieldUpdateOperationsInput | boolean
    whatsapp_consent?: BoolFieldUpdateOperationsInput | boolean
    email_consent_source?: NullableStringFieldUpdateOperationsInput | string | null
    email_consent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_consent_source?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp_consent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_opted_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    whatsapp_opted_out_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_contacted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    next_follow_up_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesActivityCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    lead_id?: string | null
    activity_type: string
    summary: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type SalesActivityUncheckedCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    lead_id?: string | null
    activity_type: string
    summary: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type SalesActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: NullableStringFieldUpdateOperationsInput | string | null
    activity_type?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: NullableStringFieldUpdateOperationsInput | string | null
    activity_type?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesActivityCreateManyInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    lead_id?: string | null
    activity_type: string
    summary: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type SalesActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: NullableStringFieldUpdateOperationsInput | string | null
    activity_type?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: NullableStringFieldUpdateOperationsInput | string | null
    activity_type?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOutreachMessageCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    lead_id: string
    channel: string
    destination: string
    subject?: string | null
    body: string
    status?: string
    provider_message_id?: string | null
    delivery_status?: string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesOutreachMessageUncheckedCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    lead_id: string
    channel: string
    destination: string
    subject?: string | null
    body: string
    status?: string
    provider_message_id?: string | null
    delivery_status?: string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesOutreachMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_status?: StringFieldUpdateOperationsInput | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOutreachMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_status?: StringFieldUpdateOperationsInput | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOutreachMessageCreateManyInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    lead_id: string
    channel: string
    destination: string
    subject?: string | null
    body: string
    status?: string
    provider_message_id?: string | null
    delivery_status?: string
    delivered_at?: Date | string | null
    read_at?: Date | string | null
    error_message?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesOutreachMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_status?: StringFieldUpdateOperationsInput | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOutreachMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider_message_id?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_status?: StringFieldUpdateOperationsInput | string
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    read_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCampaignCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    name: string
    channel: string
    status?: string
    steps: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesCampaignUncheckedCreateInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    name: string
    channel: string
    status?: string
    steps: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesCampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCampaignCreateManyInput = {
    id?: string
    tenant_id: string
    owner_user_id: string
    name: string
    channel: string
    status?: string
    steps: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesCampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    owner_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    steps?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCampaignEnrollmentCreateInput = {
    id?: string
    tenant_id: string
    campaign_id: string
    lead_id: string
    status?: string
    current_step?: number
    next_send_at?: Date | string | null
    last_sent_at?: Date | string | null
    replied_at?: Date | string | null
    stopped_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesCampaignEnrollmentUncheckedCreateInput = {
    id?: string
    tenant_id: string
    campaign_id: string
    lead_id: string
    status?: string
    current_step?: number
    next_send_at?: Date | string | null
    last_sent_at?: Date | string | null
    replied_at?: Date | string | null
    stopped_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesCampaignEnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    current_step?: IntFieldUpdateOperationsInput | number
    next_send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stopped_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCampaignEnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    current_step?: IntFieldUpdateOperationsInput | number
    next_send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stopped_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCampaignEnrollmentCreateManyInput = {
    id?: string
    tenant_id: string
    campaign_id: string
    lead_id: string
    status?: string
    current_step?: number
    next_send_at?: Date | string | null
    last_sent_at?: Date | string | null
    replied_at?: Date | string | null
    stopped_reason?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SalesCampaignEnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    current_step?: IntFieldUpdateOperationsInput | number
    next_send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stopped_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCampaignEnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    campaign_id?: StringFieldUpdateOperationsInput | string
    lead_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    current_step?: IntFieldUpdateOperationsInput | number
    next_send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stopped_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesWebhookEventCreateInput = {
    id?: string
    event_id: string
    provider: string
    event_type: string
    payload: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type SalesWebhookEventUncheckedCreateInput = {
    id?: string
    event_id: string
    provider: string
    event_type: string
    payload: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type SalesWebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesWebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesWebhookEventCreateManyInput = {
    id?: string
    event_id: string
    provider: string
    event_type: string
    payload: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type SalesWebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesWebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    org_id?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    org_id?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    org_id?: SortOrder
    created_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SalesProfileCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    business_name?: SortOrder
    website?: SortOrder
    product_description?: SortOrder
    target_customer?: SortOrder
    value_proposition?: SortOrder
    tone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    business_name?: SortOrder
    website?: SortOrder
    product_description?: SortOrder
    target_customer?: SortOrder
    value_proposition?: SortOrder
    tone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesProfileMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    business_name?: SortOrder
    website?: SortOrder
    product_description?: SortOrder
    target_customer?: SortOrder
    value_proposition?: SortOrder
    tone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SalesLeadCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    full_name?: SortOrder
    company?: SortOrder
    website?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    source?: SortOrder
    stage?: SortOrder
    score?: SortOrder
    estimated_value?: SortOrder
    notes?: SortOrder
    research_summary?: SortOrder
    research_source_url?: SortOrder
    researched_at?: SortOrder
    email_consent?: SortOrder
    whatsapp_consent?: SortOrder
    email_consent_source?: SortOrder
    email_consent_at?: SortOrder
    whatsapp_consent_source?: SortOrder
    whatsapp_consent_at?: SortOrder
    email_opted_out_at?: SortOrder
    whatsapp_opted_out_at?: SortOrder
    last_contacted_at?: SortOrder
    next_follow_up_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesLeadAvgOrderByAggregateInput = {
    score?: SortOrder
    estimated_value?: SortOrder
  }

  export type SalesLeadMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    full_name?: SortOrder
    company?: SortOrder
    website?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    source?: SortOrder
    stage?: SortOrder
    score?: SortOrder
    estimated_value?: SortOrder
    notes?: SortOrder
    research_summary?: SortOrder
    research_source_url?: SortOrder
    researched_at?: SortOrder
    email_consent?: SortOrder
    whatsapp_consent?: SortOrder
    email_consent_source?: SortOrder
    email_consent_at?: SortOrder
    whatsapp_consent_source?: SortOrder
    whatsapp_consent_at?: SortOrder
    email_opted_out_at?: SortOrder
    whatsapp_opted_out_at?: SortOrder
    last_contacted_at?: SortOrder
    next_follow_up_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesLeadMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    full_name?: SortOrder
    company?: SortOrder
    website?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    source?: SortOrder
    stage?: SortOrder
    score?: SortOrder
    estimated_value?: SortOrder
    notes?: SortOrder
    research_summary?: SortOrder
    research_source_url?: SortOrder
    researched_at?: SortOrder
    email_consent?: SortOrder
    whatsapp_consent?: SortOrder
    email_consent_source?: SortOrder
    email_consent_at?: SortOrder
    whatsapp_consent_source?: SortOrder
    whatsapp_consent_at?: SortOrder
    email_opted_out_at?: SortOrder
    whatsapp_opted_out_at?: SortOrder
    last_contacted_at?: SortOrder
    next_follow_up_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesLeadSumOrderByAggregateInput = {
    score?: SortOrder
    estimated_value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SalesActivityCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrder
    activity_type?: SortOrder
    summary?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type SalesActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrder
    activity_type?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
  }

  export type SalesActivityMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrder
    activity_type?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SalesOutreachMessageCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider_message_id?: SortOrder
    delivery_status?: SortOrder
    delivered_at?: SortOrder
    read_at?: SortOrder
    error_message?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesOutreachMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider_message_id?: SortOrder
    delivery_status?: SortOrder
    delivered_at?: SortOrder
    read_at?: SortOrder
    error_message?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesOutreachMessageMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    lead_id?: SortOrder
    channel?: SortOrder
    destination?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    provider_message_id?: SortOrder
    delivery_status?: SortOrder
    delivered_at?: SortOrder
    read_at?: SortOrder
    error_message?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SalesCampaignCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    steps?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesCampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesCampaignMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    owner_user_id?: SortOrder
    name?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SalesCampaignEnrollmentCampaign_idLead_idCompoundUniqueInput = {
    campaign_id: string
    lead_id: string
  }

  export type SalesCampaignEnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    status?: SortOrder
    current_step?: SortOrder
    next_send_at?: SortOrder
    last_sent_at?: SortOrder
    replied_at?: SortOrder
    stopped_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesCampaignEnrollmentAvgOrderByAggregateInput = {
    current_step?: SortOrder
  }

  export type SalesCampaignEnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    status?: SortOrder
    current_step?: SortOrder
    next_send_at?: SortOrder
    last_sent_at?: SortOrder
    replied_at?: SortOrder
    stopped_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesCampaignEnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    campaign_id?: SortOrder
    lead_id?: SortOrder
    status?: SortOrder
    current_step?: SortOrder
    next_send_at?: SortOrder
    last_sent_at?: SortOrder
    replied_at?: SortOrder
    stopped_reason?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SalesCampaignEnrollmentSumOrderByAggregateInput = {
    current_step?: SortOrder
  }

  export type SalesWebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    payload?: SortOrder
    created_at?: SortOrder
  }

  export type SalesWebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    created_at?: SortOrder
  }

  export type SalesWebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    provider?: SortOrder
    event_type?: SortOrder
    created_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesProfileDefaultArgs instead
     */
    export type SalesProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesLeadDefaultArgs instead
     */
    export type SalesLeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesLeadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesActivityDefaultArgs instead
     */
    export type SalesActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesOutreachMessageDefaultArgs instead
     */
    export type SalesOutreachMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesOutreachMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesCampaignDefaultArgs instead
     */
    export type SalesCampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesCampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesCampaignEnrollmentDefaultArgs instead
     */
    export type SalesCampaignEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesCampaignEnrollmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesWebhookEventDefaultArgs instead
     */
    export type SalesWebhookEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesWebhookEventDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}