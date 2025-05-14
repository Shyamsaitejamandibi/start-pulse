
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
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ServiceGroup
 * 
 */
export type ServiceGroup = $Result.DefaultSelection<Prisma.$ServiceGroupPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model IncidentUpdate
 * 
 */
export type IncidentUpdate = $Result.DefaultSelection<Prisma.$IncidentUpdatePayload>
/**
 * Model Maintenance
 * 
 */
export type Maintenance = $Result.DefaultSelection<Prisma.$MaintenancePayload>
/**
 * Model MaintenanceUpdate
 * 
 */
export type MaintenanceUpdate = $Result.DefaultSelection<Prisma.$MaintenanceUpdatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ServiceStatus: {
  operational: 'operational',
  degraded: 'degraded',
  partialOutage: 'partialOutage',
  majorOutage: 'majorOutage',
  maintenance: 'maintenance'
};

export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus]


export const IncidentStatus: {
  investigating: 'investigating',
  identified: 'identified',
  monitoring: 'monitoring',
  resolved: 'resolved'
};

export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus]


export const IncidentImpact: {
  none: 'none',
  minor: 'minor',
  major: 'major',
  critical: 'critical'
};

export type IncidentImpact = (typeof IncidentImpact)[keyof typeof IncidentImpact]


export const MaintenanceStatus: {
  scheduled: 'scheduled',
  in_progress: 'in_progress',
  completed: 'completed'
};

export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus]

}

export type ServiceStatus = $Enums.ServiceStatus

export const ServiceStatus: typeof $Enums.ServiceStatus

export type IncidentStatus = $Enums.IncidentStatus

export const IncidentStatus: typeof $Enums.IncidentStatus

export type IncidentImpact = $Enums.IncidentImpact

export const IncidentImpact: typeof $Enums.IncidentImpact

export type MaintenanceStatus = $Enums.MaintenanceStatus

export const MaintenanceStatus: typeof $Enums.MaintenanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Services
 * const services = await prisma.service.findMany()
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
   * // Fetch zero or more Services
   * const services = await prisma.service.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceGroup`: Exposes CRUD operations for the **ServiceGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceGroups
    * const serviceGroups = await prisma.serviceGroup.findMany()
    * ```
    */
  get serviceGroup(): Prisma.ServiceGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentUpdate`: Exposes CRUD operations for the **IncidentUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentUpdates
    * const incidentUpdates = await prisma.incidentUpdate.findMany()
    * ```
    */
  get incidentUpdate(): Prisma.IncidentUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **Maintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenances
    * const maintenances = await prisma.maintenance.findMany()
    * ```
    */
  get maintenance(): Prisma.MaintenanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceUpdate`: Exposes CRUD operations for the **MaintenanceUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceUpdates
    * const maintenanceUpdates = await prisma.maintenanceUpdate.findMany()
    * ```
    */
  get maintenanceUpdate(): Prisma.MaintenanceUpdateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Service: 'Service',
    ServiceGroup: 'ServiceGroup',
    Incident: 'Incident',
    IncidentUpdate: 'IncidentUpdate',
    Maintenance: 'Maintenance',
    MaintenanceUpdate: 'MaintenanceUpdate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "service" | "serviceGroup" | "incident" | "incidentUpdate" | "maintenance" | "maintenanceUpdate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceGroup: {
        payload: Prisma.$ServiceGroupPayload<ExtArgs>
        fields: Prisma.ServiceGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>
          }
          findFirst: {
            args: Prisma.ServiceGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>
          }
          findMany: {
            args: Prisma.ServiceGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>[]
          }
          create: {
            args: Prisma.ServiceGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>
          }
          createMany: {
            args: Prisma.ServiceGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>[]
          }
          delete: {
            args: Prisma.ServiceGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>
          }
          update: {
            args: Prisma.ServiceGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>
          }
          deleteMany: {
            args: Prisma.ServiceGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>[]
          }
          upsert: {
            args: Prisma.ServiceGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceGroupPayload>
          }
          aggregate: {
            args: Prisma.ServiceGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceGroup>
          }
          groupBy: {
            args: Prisma.ServiceGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      IncidentUpdate: {
        payload: Prisma.$IncidentUpdatePayload<ExtArgs>
        fields: Prisma.IncidentUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          findFirst: {
            args: Prisma.IncidentUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          findMany: {
            args: Prisma.IncidentUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          create: {
            args: Prisma.IncidentUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          createMany: {
            args: Prisma.IncidentUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          delete: {
            args: Prisma.IncidentUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          update: {
            args: Prisma.IncidentUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          deleteMany: {
            args: Prisma.IncidentUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          aggregate: {
            args: Prisma.IncidentUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentUpdate>
          }
          groupBy: {
            args: Prisma.IncidentUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentUpdateCountAggregateOutputType> | number
          }
        }
      }
      Maintenance: {
        payload: Prisma.$MaintenancePayload<ExtArgs>
        fields: Prisma.MaintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findFirst: {
            args: Prisma.MaintenanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findMany: {
            args: Prisma.MaintenanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          create: {
            args: Prisma.MaintenanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          createMany: {
            args: Prisma.MaintenanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          delete: {
            args: Prisma.MaintenanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          update: {
            args: Prisma.MaintenanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance>
          }
          groupBy: {
            args: Prisma.MaintenanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceUpdate: {
        payload: Prisma.$MaintenanceUpdatePayload<ExtArgs>
        fields: Prisma.MaintenanceUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>
          }
          findFirst: {
            args: Prisma.MaintenanceUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>
          }
          findMany: {
            args: Prisma.MaintenanceUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>[]
          }
          create: {
            args: Prisma.MaintenanceUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>
          }
          createMany: {
            args: Prisma.MaintenanceUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>[]
          }
          delete: {
            args: Prisma.MaintenanceUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>
          }
          update: {
            args: Prisma.MaintenanceUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceUpdatePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceUpdate>
          }
          groupBy: {
            args: Prisma.MaintenanceUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceUpdateCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    service?: ServiceOmit
    serviceGroup?: ServiceGroupOmit
    incident?: IncidentOmit
    incidentUpdate?: IncidentUpdateOmit
    maintenance?: MaintenanceOmit
    maintenanceUpdate?: MaintenanceUpdateOmit
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
    | 'updateManyAndReturn'
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
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    incidents: number
    maintenances: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | ServiceCountOutputTypeCountIncidentsArgs
    maintenances?: boolean | ServiceCountOutputTypeCountMaintenancesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }


  /**
   * Count Type ServiceGroupCountOutputType
   */

  export type ServiceGroupCountOutputType = {
    services: number
  }

  export type ServiceGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ServiceGroupCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceGroupCountOutputType without action
   */
  export type ServiceGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroupCountOutputType
     */
    select?: ServiceGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceGroupCountOutputType without action
   */
  export type ServiceGroupCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type IncidentCountOutputType
   */

  export type IncidentCountOutputType = {
    affectedServices: number
    updates: number
  }

  export type IncidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affectedServices?: boolean | IncidentCountOutputTypeCountAffectedServicesArgs
    updates?: boolean | IncidentCountOutputTypeCountUpdatesArgs
  }

  // Custom InputTypes
  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentCountOutputType
     */
    select?: IncidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountAffectedServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentUpdateWhereInput
  }


  /**
   * Count Type MaintenanceCountOutputType
   */

  export type MaintenanceCountOutputType = {
    affectedServices: number
    updates: number
  }

  export type MaintenanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affectedServices?: boolean | MaintenanceCountOutputTypeCountAffectedServicesArgs
    updates?: boolean | MaintenanceCountOutputTypeCountUpdatesArgs
  }

  // Custom InputTypes
  /**
   * MaintenanceCountOutputType without action
   */
  export type MaintenanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceCountOutputType
     */
    select?: MaintenanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaintenanceCountOutputType without action
   */
  export type MaintenanceCountOutputTypeCountAffectedServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * MaintenanceCountOutputType without action
   */
  export type MaintenanceCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceUpdateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.ServiceStatus | null
    updatedAt: Date | null
    groupId: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.ServiceStatus | null
    updatedAt: Date | null
    groupId: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    updatedAt: number
    groupId: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    updatedAt?: true
    groupId?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    updatedAt?: true
    groupId?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    updatedAt?: true
    groupId?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.ServiceStatus
    updatedAt: Date
    groupId: string | null
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    updatedAt?: boolean
    groupId?: boolean
    group?: boolean | Service$groupArgs<ExtArgs>
    incidents?: boolean | Service$incidentsArgs<ExtArgs>
    maintenances?: boolean | Service$maintenancesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    updatedAt?: boolean
    groupId?: boolean
    group?: boolean | Service$groupArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    updatedAt?: boolean
    groupId?: boolean
    group?: boolean | Service$groupArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    updatedAt?: boolean
    groupId?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "updatedAt" | "groupId", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Service$groupArgs<ExtArgs>
    incidents?: boolean | Service$incidentsArgs<ExtArgs>
    maintenances?: boolean | Service$maintenancesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Service$groupArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Service$groupArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      group: Prisma.$ServiceGroupPayload<ExtArgs> | null
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.ServiceStatus
      updatedAt: Date
      groupId: string | null
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends Service$groupArgs<ExtArgs> = {}>(args?: Subset<T, Service$groupArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    incidents<T extends Service$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenances<T extends Service$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Service$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly status: FieldRef<"Service", 'ServiceStatus'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly groupId: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.group
   */
  export type Service$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    where?: ServiceGroupWhereInput
  }

  /**
   * Service.incidents
   */
  export type Service$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Service.maintenances
   */
  export type Service$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceGroup
   */

  export type AggregateServiceGroup = {
    _count: ServiceGroupCountAggregateOutputType | null
    _min: ServiceGroupMinAggregateOutputType | null
    _max: ServiceGroupMaxAggregateOutputType | null
  }

  export type ServiceGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ServiceGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type ServiceGroupCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type ServiceGroupMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ServiceGroupMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type ServiceGroupCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type ServiceGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceGroup to aggregate.
     */
    where?: ServiceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceGroups to fetch.
     */
    orderBy?: ServiceGroupOrderByWithRelationInput | ServiceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceGroups
    **/
    _count?: true | ServiceGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceGroupMaxAggregateInputType
  }

  export type GetServiceGroupAggregateType<T extends ServiceGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceGroup[P]>
      : GetScalarType<T[P], AggregateServiceGroup[P]>
  }




  export type ServiceGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceGroupWhereInput
    orderBy?: ServiceGroupOrderByWithAggregationInput | ServiceGroupOrderByWithAggregationInput[]
    by: ServiceGroupScalarFieldEnum[] | ServiceGroupScalarFieldEnum
    having?: ServiceGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceGroupCountAggregateInputType | true
    _min?: ServiceGroupMinAggregateInputType
    _max?: ServiceGroupMaxAggregateInputType
  }

  export type ServiceGroupGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: ServiceGroupCountAggregateOutputType | null
    _min: ServiceGroupMinAggregateOutputType | null
    _max: ServiceGroupMaxAggregateOutputType | null
  }

  type GetServiceGroupGroupByPayload<T extends ServiceGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupGroupByOutputType[P]>
        }
      >
    >


  export type ServiceGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    services?: boolean | ServiceGroup$servicesArgs<ExtArgs>
    _count?: boolean | ServiceGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceGroup"]>

  export type ServiceGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["serviceGroup"]>

  export type ServiceGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["serviceGroup"]>

  export type ServiceGroupSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type ServiceGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["serviceGroup"]>
  export type ServiceGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ServiceGroup$servicesArgs<ExtArgs>
    _count?: boolean | ServiceGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceGroup"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["serviceGroup"]>
    composites: {}
  }

  type ServiceGroupGetPayload<S extends boolean | null | undefined | ServiceGroupDefaultArgs> = $Result.GetResult<Prisma.$ServiceGroupPayload, S>

  type ServiceGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceGroupCountAggregateInputType | true
    }

  export interface ServiceGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceGroup'], meta: { name: 'ServiceGroup' } }
    /**
     * Find zero or one ServiceGroup that matches the filter.
     * @param {ServiceGroupFindUniqueArgs} args - Arguments to find a ServiceGroup
     * @example
     * // Get one ServiceGroup
     * const serviceGroup = await prisma.serviceGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceGroupFindUniqueArgs>(args: SelectSubset<T, ServiceGroupFindUniqueArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceGroupFindUniqueOrThrowArgs} args - Arguments to find a ServiceGroup
     * @example
     * // Get one ServiceGroup
     * const serviceGroup = await prisma.serviceGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupFindFirstArgs} args - Arguments to find a ServiceGroup
     * @example
     * // Get one ServiceGroup
     * const serviceGroup = await prisma.serviceGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceGroupFindFirstArgs>(args?: SelectSubset<T, ServiceGroupFindFirstArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupFindFirstOrThrowArgs} args - Arguments to find a ServiceGroup
     * @example
     * // Get one ServiceGroup
     * const serviceGroup = await prisma.serviceGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceGroups
     * const serviceGroups = await prisma.serviceGroup.findMany()
     * 
     * // Get first 10 ServiceGroups
     * const serviceGroups = await prisma.serviceGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceGroupWithIdOnly = await prisma.serviceGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceGroupFindManyArgs>(args?: SelectSubset<T, ServiceGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceGroup.
     * @param {ServiceGroupCreateArgs} args - Arguments to create a ServiceGroup.
     * @example
     * // Create one ServiceGroup
     * const ServiceGroup = await prisma.serviceGroup.create({
     *   data: {
     *     // ... data to create a ServiceGroup
     *   }
     * })
     * 
     */
    create<T extends ServiceGroupCreateArgs>(args: SelectSubset<T, ServiceGroupCreateArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceGroups.
     * @param {ServiceGroupCreateManyArgs} args - Arguments to create many ServiceGroups.
     * @example
     * // Create many ServiceGroups
     * const serviceGroup = await prisma.serviceGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceGroupCreateManyArgs>(args?: SelectSubset<T, ServiceGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceGroups and returns the data saved in the database.
     * @param {ServiceGroupCreateManyAndReturnArgs} args - Arguments to create many ServiceGroups.
     * @example
     * // Create many ServiceGroups
     * const serviceGroup = await prisma.serviceGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceGroups and only return the `id`
     * const serviceGroupWithIdOnly = await prisma.serviceGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceGroup.
     * @param {ServiceGroupDeleteArgs} args - Arguments to delete one ServiceGroup.
     * @example
     * // Delete one ServiceGroup
     * const ServiceGroup = await prisma.serviceGroup.delete({
     *   where: {
     *     // ... filter to delete one ServiceGroup
     *   }
     * })
     * 
     */
    delete<T extends ServiceGroupDeleteArgs>(args: SelectSubset<T, ServiceGroupDeleteArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceGroup.
     * @param {ServiceGroupUpdateArgs} args - Arguments to update one ServiceGroup.
     * @example
     * // Update one ServiceGroup
     * const serviceGroup = await prisma.serviceGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceGroupUpdateArgs>(args: SelectSubset<T, ServiceGroupUpdateArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceGroups.
     * @param {ServiceGroupDeleteManyArgs} args - Arguments to filter ServiceGroups to delete.
     * @example
     * // Delete a few ServiceGroups
     * const { count } = await prisma.serviceGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceGroupDeleteManyArgs>(args?: SelectSubset<T, ServiceGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceGroups
     * const serviceGroup = await prisma.serviceGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceGroupUpdateManyArgs>(args: SelectSubset<T, ServiceGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceGroups and returns the data updated in the database.
     * @param {ServiceGroupUpdateManyAndReturnArgs} args - Arguments to update many ServiceGroups.
     * @example
     * // Update many ServiceGroups
     * const serviceGroup = await prisma.serviceGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceGroups and only return the `id`
     * const serviceGroupWithIdOnly = await prisma.serviceGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceGroup.
     * @param {ServiceGroupUpsertArgs} args - Arguments to update or create a ServiceGroup.
     * @example
     * // Update or create a ServiceGroup
     * const serviceGroup = await prisma.serviceGroup.upsert({
     *   create: {
     *     // ... data to create a ServiceGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceGroup we want to update
     *   }
     * })
     */
    upsert<T extends ServiceGroupUpsertArgs>(args: SelectSubset<T, ServiceGroupUpsertArgs<ExtArgs>>): Prisma__ServiceGroupClient<$Result.GetResult<Prisma.$ServiceGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupCountArgs} args - Arguments to filter ServiceGroups to count.
     * @example
     * // Count the number of ServiceGroups
     * const count = await prisma.serviceGroup.count({
     *   where: {
     *     // ... the filter for the ServiceGroups we want to count
     *   }
     * })
    **/
    count<T extends ServiceGroupCountArgs>(
      args?: Subset<T, ServiceGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceGroupAggregateArgs>(args: Subset<T, ServiceGroupAggregateArgs>): Prisma.PrismaPromise<GetServiceGroupAggregateType<T>>

    /**
     * Group by ServiceGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceGroup model
   */
  readonly fields: ServiceGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends ServiceGroup$servicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceGroup$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceGroup model
   */
  interface ServiceGroupFieldRefs {
    readonly id: FieldRef<"ServiceGroup", 'String'>
    readonly name: FieldRef<"ServiceGroup", 'String'>
    readonly description: FieldRef<"ServiceGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceGroup findUnique
   */
  export type ServiceGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGroup to fetch.
     */
    where: ServiceGroupWhereUniqueInput
  }

  /**
   * ServiceGroup findUniqueOrThrow
   */
  export type ServiceGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGroup to fetch.
     */
    where: ServiceGroupWhereUniqueInput
  }

  /**
   * ServiceGroup findFirst
   */
  export type ServiceGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGroup to fetch.
     */
    where?: ServiceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceGroups to fetch.
     */
    orderBy?: ServiceGroupOrderByWithRelationInput | ServiceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceGroups.
     */
    cursor?: ServiceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceGroups.
     */
    distinct?: ServiceGroupScalarFieldEnum | ServiceGroupScalarFieldEnum[]
  }

  /**
   * ServiceGroup findFirstOrThrow
   */
  export type ServiceGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGroup to fetch.
     */
    where?: ServiceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceGroups to fetch.
     */
    orderBy?: ServiceGroupOrderByWithRelationInput | ServiceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceGroups.
     */
    cursor?: ServiceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceGroups.
     */
    distinct?: ServiceGroupScalarFieldEnum | ServiceGroupScalarFieldEnum[]
  }

  /**
   * ServiceGroup findMany
   */
  export type ServiceGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ServiceGroups to fetch.
     */
    where?: ServiceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceGroups to fetch.
     */
    orderBy?: ServiceGroupOrderByWithRelationInput | ServiceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceGroups.
     */
    cursor?: ServiceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceGroups.
     */
    skip?: number
    distinct?: ServiceGroupScalarFieldEnum | ServiceGroupScalarFieldEnum[]
  }

  /**
   * ServiceGroup create
   */
  export type ServiceGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceGroup.
     */
    data: XOR<ServiceGroupCreateInput, ServiceGroupUncheckedCreateInput>
  }

  /**
   * ServiceGroup createMany
   */
  export type ServiceGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceGroups.
     */
    data: ServiceGroupCreateManyInput | ServiceGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceGroup createManyAndReturn
   */
  export type ServiceGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceGroups.
     */
    data: ServiceGroupCreateManyInput | ServiceGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceGroup update
   */
  export type ServiceGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceGroup.
     */
    data: XOR<ServiceGroupUpdateInput, ServiceGroupUncheckedUpdateInput>
    /**
     * Choose, which ServiceGroup to update.
     */
    where: ServiceGroupWhereUniqueInput
  }

  /**
   * ServiceGroup updateMany
   */
  export type ServiceGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceGroups.
     */
    data: XOR<ServiceGroupUpdateManyMutationInput, ServiceGroupUncheckedUpdateManyInput>
    /**
     * Filter which ServiceGroups to update
     */
    where?: ServiceGroupWhereInput
    /**
     * Limit how many ServiceGroups to update.
     */
    limit?: number
  }

  /**
   * ServiceGroup updateManyAndReturn
   */
  export type ServiceGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * The data used to update ServiceGroups.
     */
    data: XOR<ServiceGroupUpdateManyMutationInput, ServiceGroupUncheckedUpdateManyInput>
    /**
     * Filter which ServiceGroups to update
     */
    where?: ServiceGroupWhereInput
    /**
     * Limit how many ServiceGroups to update.
     */
    limit?: number
  }

  /**
   * ServiceGroup upsert
   */
  export type ServiceGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceGroup to update in case it exists.
     */
    where: ServiceGroupWhereUniqueInput
    /**
     * In case the ServiceGroup found by the `where` argument doesn't exist, create a new ServiceGroup with this data.
     */
    create: XOR<ServiceGroupCreateInput, ServiceGroupUncheckedCreateInput>
    /**
     * In case the ServiceGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceGroupUpdateInput, ServiceGroupUncheckedUpdateInput>
  }

  /**
   * ServiceGroup delete
   */
  export type ServiceGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
    /**
     * Filter which ServiceGroup to delete.
     */
    where: ServiceGroupWhereUniqueInput
  }

  /**
   * ServiceGroup deleteMany
   */
  export type ServiceGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceGroups to delete
     */
    where?: ServiceGroupWhereInput
    /**
     * Limit how many ServiceGroups to delete.
     */
    limit?: number
  }

  /**
   * ServiceGroup.services
   */
  export type ServiceGroup$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * ServiceGroup without action
   */
  export type ServiceGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceGroup
     */
    select?: ServiceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceGroup
     */
    omit?: ServiceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceGroupInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.IncidentStatus | null
    impact: $Enums.IncidentImpact | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.IncidentStatus | null
    impact: $Enums.IncidentImpact | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    impact: number
    createdAt: number
    updatedAt: number
    resolvedAt: number
    _all: number
  }


  export type IncidentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    impact?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    impact?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    impact?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    impact: $Enums.IncidentImpact
    createdAt: Date
    updatedAt: Date
    resolvedAt: Date | null
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    impact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    affectedServices?: boolean | Incident$affectedServicesArgs<ExtArgs>
    updates?: boolean | Incident$updatesArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    impact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    impact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    impact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "impact" | "createdAt" | "updatedAt" | "resolvedAt", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affectedServices?: boolean | Incident$affectedServicesArgs<ExtArgs>
    updates?: boolean | Incident$updatesArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      affectedServices: Prisma.$ServicePayload<ExtArgs>[]
      updates: Prisma.$IncidentUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.IncidentStatus
      impact: $Enums.IncidentImpact
      createdAt: Date
      updatedAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
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
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    affectedServices<T extends Incident$affectedServicesArgs<ExtArgs> = {}>(args?: Subset<T, Incident$affectedServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updates<T extends Incident$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Incident$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly title: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly status: FieldRef<"Incident", 'IncidentStatus'>
    readonly impact: FieldRef<"Incident", 'IncidentImpact'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident.affectedServices
   */
  export type Incident$affectedServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Incident.updates
   */
  export type Incident$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    where?: IncidentUpdateWhereInput
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    cursor?: IncidentUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model IncidentUpdate
   */

  export type AggregateIncidentUpdate = {
    _count: IncidentUpdateCountAggregateOutputType | null
    _min: IncidentUpdateMinAggregateOutputType | null
    _max: IncidentUpdateMaxAggregateOutputType | null
  }

  export type IncidentUpdateMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    message: string | null
    status: $Enums.IncidentStatus | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type IncidentUpdateMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    message: string | null
    status: $Enums.IncidentStatus | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type IncidentUpdateCountAggregateOutputType = {
    id: number
    incidentId: number
    message: number
    status: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type IncidentUpdateMinAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdAt?: true
    createdBy?: true
  }

  export type IncidentUpdateMaxAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdAt?: true
    createdBy?: true
  }

  export type IncidentUpdateCountAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type IncidentUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentUpdate to aggregate.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentUpdates
    **/
    _count?: true | IncidentUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentUpdateMaxAggregateInputType
  }

  export type GetIncidentUpdateAggregateType<T extends IncidentUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentUpdate[P]>
      : GetScalarType<T[P], AggregateIncidentUpdate[P]>
  }




  export type IncidentUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentUpdateWhereInput
    orderBy?: IncidentUpdateOrderByWithAggregationInput | IncidentUpdateOrderByWithAggregationInput[]
    by: IncidentUpdateScalarFieldEnum[] | IncidentUpdateScalarFieldEnum
    having?: IncidentUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentUpdateCountAggregateInputType | true
    _min?: IncidentUpdateMinAggregateInputType
    _max?: IncidentUpdateMaxAggregateInputType
  }

  export type IncidentUpdateGroupByOutputType = {
    id: string
    incidentId: string
    message: string
    status: $Enums.IncidentStatus
    createdAt: Date
    createdBy: string
    _count: IncidentUpdateCountAggregateOutputType | null
    _min: IncidentUpdateMinAggregateOutputType | null
    _max: IncidentUpdateMaxAggregateOutputType | null
  }

  type GetIncidentUpdateGroupByPayload<T extends IncidentUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentUpdateGroupByOutputType[P]>
        }
      >
    >


  export type IncidentUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectScalar = {
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type IncidentUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "message" | "status" | "createdAt" | "createdBy", ExtArgs["result"]["incidentUpdate"]>
  export type IncidentUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }

  export type $IncidentUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentUpdate"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      message: string
      status: $Enums.IncidentStatus
      createdAt: Date
      createdBy: string
    }, ExtArgs["result"]["incidentUpdate"]>
    composites: {}
  }

  type IncidentUpdateGetPayload<S extends boolean | null | undefined | IncidentUpdateDefaultArgs> = $Result.GetResult<Prisma.$IncidentUpdatePayload, S>

  type IncidentUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentUpdateCountAggregateInputType | true
    }

  export interface IncidentUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentUpdate'], meta: { name: 'IncidentUpdate' } }
    /**
     * Find zero or one IncidentUpdate that matches the filter.
     * @param {IncidentUpdateFindUniqueArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentUpdateFindUniqueArgs>(args: SelectSubset<T, IncidentUpdateFindUniqueArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentUpdateFindUniqueOrThrowArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindFirstArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentUpdateFindFirstArgs>(args?: SelectSubset<T, IncidentUpdateFindFirstArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindFirstOrThrowArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentUpdates
     * const incidentUpdates = await prisma.incidentUpdate.findMany()
     * 
     * // Get first 10 IncidentUpdates
     * const incidentUpdates = await prisma.incidentUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentUpdateFindManyArgs>(args?: SelectSubset<T, IncidentUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentUpdate.
     * @param {IncidentUpdateCreateArgs} args - Arguments to create a IncidentUpdate.
     * @example
     * // Create one IncidentUpdate
     * const IncidentUpdate = await prisma.incidentUpdate.create({
     *   data: {
     *     // ... data to create a IncidentUpdate
     *   }
     * })
     * 
     */
    create<T extends IncidentUpdateCreateArgs>(args: SelectSubset<T, IncidentUpdateCreateArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentUpdates.
     * @param {IncidentUpdateCreateManyArgs} args - Arguments to create many IncidentUpdates.
     * @example
     * // Create many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentUpdateCreateManyArgs>(args?: SelectSubset<T, IncidentUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentUpdates and returns the data saved in the database.
     * @param {IncidentUpdateCreateManyAndReturnArgs} args - Arguments to create many IncidentUpdates.
     * @example
     * // Create many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentUpdates and only return the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentUpdate.
     * @param {IncidentUpdateDeleteArgs} args - Arguments to delete one IncidentUpdate.
     * @example
     * // Delete one IncidentUpdate
     * const IncidentUpdate = await prisma.incidentUpdate.delete({
     *   where: {
     *     // ... filter to delete one IncidentUpdate
     *   }
     * })
     * 
     */
    delete<T extends IncidentUpdateDeleteArgs>(args: SelectSubset<T, IncidentUpdateDeleteArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentUpdate.
     * @param {IncidentUpdateUpdateArgs} args - Arguments to update one IncidentUpdate.
     * @example
     * // Update one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateUpdateArgs>(args: SelectSubset<T, IncidentUpdateUpdateArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentUpdates.
     * @param {IncidentUpdateDeleteManyArgs} args - Arguments to filter IncidentUpdates to delete.
     * @example
     * // Delete a few IncidentUpdates
     * const { count } = await prisma.incidentUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentUpdateDeleteManyArgs>(args?: SelectSubset<T, IncidentUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentUpdates and returns the data updated in the database.
     * @param {IncidentUpdateUpdateManyAndReturnArgs} args - Arguments to update many IncidentUpdates.
     * @example
     * // Update many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentUpdates and only return the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentUpdate.
     * @param {IncidentUpdateUpsertArgs} args - Arguments to update or create a IncidentUpdate.
     * @example
     * // Update or create a IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.upsert({
     *   create: {
     *     // ... data to create a IncidentUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentUpdate we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpdateUpsertArgs>(args: SelectSubset<T, IncidentUpdateUpsertArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateCountArgs} args - Arguments to filter IncidentUpdates to count.
     * @example
     * // Count the number of IncidentUpdates
     * const count = await prisma.incidentUpdate.count({
     *   where: {
     *     // ... the filter for the IncidentUpdates we want to count
     *   }
     * })
    **/
    count<T extends IncidentUpdateCountArgs>(
      args?: Subset<T, IncidentUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentUpdateAggregateArgs>(args: Subset<T, IncidentUpdateAggregateArgs>): Prisma.PrismaPromise<GetIncidentUpdateAggregateType<T>>

    /**
     * Group by IncidentUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateGroupByArgs} args - Group by arguments.
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
      T extends IncidentUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentUpdateGroupByArgs['orderBy'] }
        : { orderBy?: IncidentUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentUpdate model
   */
  readonly fields: IncidentUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IncidentUpdate model
   */
  interface IncidentUpdateFieldRefs {
    readonly id: FieldRef<"IncidentUpdate", 'String'>
    readonly incidentId: FieldRef<"IncidentUpdate", 'String'>
    readonly message: FieldRef<"IncidentUpdate", 'String'>
    readonly status: FieldRef<"IncidentUpdate", 'IncidentStatus'>
    readonly createdAt: FieldRef<"IncidentUpdate", 'DateTime'>
    readonly createdBy: FieldRef<"IncidentUpdate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IncidentUpdate findUnique
   */
  export type IncidentUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate findUniqueOrThrow
   */
  export type IncidentUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate findFirst
   */
  export type IncidentUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentUpdates.
     */
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate findFirstOrThrow
   */
  export type IncidentUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentUpdates.
     */
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate findMany
   */
  export type IncidentUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdates to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate create
   */
  export type IncidentUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentUpdate.
     */
    data: XOR<IncidentUpdateCreateInput, IncidentUpdateUncheckedCreateInput>
  }

  /**
   * IncidentUpdate createMany
   */
  export type IncidentUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentUpdates.
     */
    data: IncidentUpdateCreateManyInput | IncidentUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncidentUpdate createManyAndReturn
   */
  export type IncidentUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentUpdates.
     */
    data: IncidentUpdateCreateManyInput | IncidentUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentUpdate update
   */
  export type IncidentUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentUpdate.
     */
    data: XOR<IncidentUpdateUpdateInput, IncidentUpdateUncheckedUpdateInput>
    /**
     * Choose, which IncidentUpdate to update.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate updateMany
   */
  export type IncidentUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentUpdates.
     */
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyInput>
    /**
     * Filter which IncidentUpdates to update
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to update.
     */
    limit?: number
  }

  /**
   * IncidentUpdate updateManyAndReturn
   */
  export type IncidentUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * The data used to update IncidentUpdates.
     */
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyInput>
    /**
     * Filter which IncidentUpdates to update
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentUpdate upsert
   */
  export type IncidentUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentUpdate to update in case it exists.
     */
    where: IncidentUpdateWhereUniqueInput
    /**
     * In case the IncidentUpdate found by the `where` argument doesn't exist, create a new IncidentUpdate with this data.
     */
    create: XOR<IncidentUpdateCreateInput, IncidentUpdateUncheckedCreateInput>
    /**
     * In case the IncidentUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateUpdateInput, IncidentUpdateUncheckedUpdateInput>
  }

  /**
   * IncidentUpdate delete
   */
  export type IncidentUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter which IncidentUpdate to delete.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate deleteMany
   */
  export type IncidentUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentUpdates to delete
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to delete.
     */
    limit?: number
  }

  /**
   * IncidentUpdate without action
   */
  export type IncidentUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
  }


  /**
   * Model Maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  export type MaintenanceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.MaintenanceStatus | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
  }

  export type MaintenanceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.MaintenanceStatus | null
    startTime: Date | null
    endTime: Date | null
    createdAt: Date | null
  }

  export type MaintenanceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    startTime: number
    endTime: number
    createdAt: number
    _all: number
  }


  export type MaintenanceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type MaintenanceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type MaintenanceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    _all?: true
  }

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance to aggregate.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenances
    **/
    _count?: true | MaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceMaxAggregateInputType
  }

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>
  }




  export type MaintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithAggregationInput | MaintenanceOrderByWithAggregationInput[]
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum
    having?: MaintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceCountAggregateInputType | true
    _min?: MaintenanceMinAggregateInputType
    _max?: MaintenanceMaxAggregateInputType
  }

  export type MaintenanceGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.MaintenanceStatus
    startTime: Date
    endTime: Date
    createdAt: Date
    _count: MaintenanceCountAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  type GetMaintenanceGroupByPayload<T extends MaintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    affectedServices?: boolean | Maintenance$affectedServicesArgs<ExtArgs>
    updates?: boolean | Maintenance$updatesArgs<ExtArgs>
    _count?: boolean | MaintenanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }

  export type MaintenanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "startTime" | "endTime" | "createdAt", ExtArgs["result"]["maintenance"]>
  export type MaintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affectedServices?: boolean | Maintenance$affectedServicesArgs<ExtArgs>
    updates?: boolean | Maintenance$updatesArgs<ExtArgs>
    _count?: boolean | MaintenanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaintenanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaintenanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenance"
    objects: {
      affectedServices: Prisma.$ServicePayload<ExtArgs>[]
      updates: Prisma.$MaintenanceUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.MaintenanceStatus
      startTime: Date
      endTime: Date
      createdAt: Date
    }, ExtArgs["result"]["maintenance"]>
    composites: {}
  }

  type MaintenanceGetPayload<S extends boolean | null | undefined | MaintenanceDefaultArgs> = $Result.GetResult<Prisma.$MaintenancePayload, S>

  type MaintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceCountAggregateInputType | true
    }

  export interface MaintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenance'], meta: { name: 'Maintenance' } }
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {MaintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceFindUniqueArgs>(args: SelectSubset<T, MaintenanceFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceFindFirstArgs>(args?: SelectSubset<T, MaintenanceFindFirstArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     * 
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceFindManyArgs>(args?: SelectSubset<T, MaintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance.
     * @param {MaintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     * 
     */
    create<T extends MaintenanceCreateArgs>(args: SelectSubset<T, MaintenanceCreateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenances.
     * @param {MaintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceCreateManyArgs>(args?: SelectSubset<T, MaintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenances and returns the data saved in the database.
     * @param {MaintenanceCreateManyAndReturnArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Maintenance.
     * @param {MaintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceDeleteArgs>(args: SelectSubset<T, MaintenanceDeleteArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance.
     * @param {MaintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceUpdateArgs>(args: SelectSubset<T, MaintenanceUpdateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenances.
     * @param {MaintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceDeleteManyArgs>(args?: SelectSubset<T, MaintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceUpdateManyArgs>(args: SelectSubset<T, MaintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances and returns the data updated in the database.
     * @param {MaintenanceUpdateManyAndReturnArgs} args - Arguments to update many Maintenances.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maintenances and only return the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Maintenance.
     * @param {MaintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceUpsertArgs>(args: SelectSubset<T, MaintenanceUpsertArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceCountArgs>(
      args?: Subset<T, MaintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceAggregateArgs>(args: Subset<T, MaintenanceAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenance model
   */
  readonly fields: MaintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    affectedServices<T extends Maintenance$affectedServicesArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance$affectedServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updates<T extends Maintenance$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Maintenance$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Maintenance model
   */
  interface MaintenanceFieldRefs {
    readonly id: FieldRef<"Maintenance", 'String'>
    readonly title: FieldRef<"Maintenance", 'String'>
    readonly description: FieldRef<"Maintenance", 'String'>
    readonly status: FieldRef<"Maintenance", 'MaintenanceStatus'>
    readonly startTime: FieldRef<"Maintenance", 'DateTime'>
    readonly endTime: FieldRef<"Maintenance", 'DateTime'>
    readonly createdAt: FieldRef<"Maintenance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Maintenance findUnique
   */
  export type MaintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findUniqueOrThrow
   */
  export type MaintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findFirst
   */
  export type MaintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findFirstOrThrow
   */
  export type MaintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findMany
   */
  export type MaintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenances to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance create
   */
  export type MaintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenance.
     */
    data: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
  }

  /**
   * Maintenance createMany
   */
  export type MaintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenance createManyAndReturn
   */
  export type MaintenanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenance update
   */
  export type MaintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenance.
     */
    data: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
    /**
     * Choose, which Maintenance to update.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance updateMany
   */
  export type MaintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to update.
     */
    limit?: number
  }

  /**
   * Maintenance updateManyAndReturn
   */
  export type MaintenanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to update.
     */
    limit?: number
  }

  /**
   * Maintenance upsert
   */
  export type MaintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenance to update in case it exists.
     */
    where: MaintenanceWhereUniqueInput
    /**
     * In case the Maintenance found by the `where` argument doesn't exist, create a new Maintenance with this data.
     */
    create: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
    /**
     * In case the Maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
  }

  /**
   * Maintenance delete
   */
  export type MaintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter which Maintenance to delete.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance deleteMany
   */
  export type MaintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenances to delete
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to delete.
     */
    limit?: number
  }

  /**
   * Maintenance.affectedServices
   */
  export type Maintenance$affectedServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Maintenance.updates
   */
  export type Maintenance$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    where?: MaintenanceUpdateWhereInput
    orderBy?: MaintenanceUpdateOrderByWithRelationInput | MaintenanceUpdateOrderByWithRelationInput[]
    cursor?: MaintenanceUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceUpdateScalarFieldEnum | MaintenanceUpdateScalarFieldEnum[]
  }

  /**
   * Maintenance without action
   */
  export type MaintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceUpdate
   */

  export type AggregateMaintenanceUpdate = {
    _count: MaintenanceUpdateCountAggregateOutputType | null
    _min: MaintenanceUpdateMinAggregateOutputType | null
    _max: MaintenanceUpdateMaxAggregateOutputType | null
  }

  export type MaintenanceUpdateMinAggregateOutputType = {
    id: string | null
    maintenanceId: string | null
    message: string | null
    status: $Enums.MaintenanceStatus | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type MaintenanceUpdateMaxAggregateOutputType = {
    id: string | null
    maintenanceId: string | null
    message: string | null
    status: $Enums.MaintenanceStatus | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type MaintenanceUpdateCountAggregateOutputType = {
    id: number
    maintenanceId: number
    message: number
    status: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type MaintenanceUpdateMinAggregateInputType = {
    id?: true
    maintenanceId?: true
    message?: true
    status?: true
    createdAt?: true
    createdBy?: true
  }

  export type MaintenanceUpdateMaxAggregateInputType = {
    id?: true
    maintenanceId?: true
    message?: true
    status?: true
    createdAt?: true
    createdBy?: true
  }

  export type MaintenanceUpdateCountAggregateInputType = {
    id?: true
    maintenanceId?: true
    message?: true
    status?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type MaintenanceUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceUpdate to aggregate.
     */
    where?: MaintenanceUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceUpdates to fetch.
     */
    orderBy?: MaintenanceUpdateOrderByWithRelationInput | MaintenanceUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceUpdates
    **/
    _count?: true | MaintenanceUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceUpdateMaxAggregateInputType
  }

  export type GetMaintenanceUpdateAggregateType<T extends MaintenanceUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceUpdate[P]>
      : GetScalarType<T[P], AggregateMaintenanceUpdate[P]>
  }




  export type MaintenanceUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceUpdateWhereInput
    orderBy?: MaintenanceUpdateOrderByWithAggregationInput | MaintenanceUpdateOrderByWithAggregationInput[]
    by: MaintenanceUpdateScalarFieldEnum[] | MaintenanceUpdateScalarFieldEnum
    having?: MaintenanceUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceUpdateCountAggregateInputType | true
    _min?: MaintenanceUpdateMinAggregateInputType
    _max?: MaintenanceUpdateMaxAggregateInputType
  }

  export type MaintenanceUpdateGroupByOutputType = {
    id: string
    maintenanceId: string
    message: string
    status: $Enums.MaintenanceStatus
    createdAt: Date
    createdBy: string
    _count: MaintenanceUpdateCountAggregateOutputType | null
    _min: MaintenanceUpdateMinAggregateOutputType | null
    _max: MaintenanceUpdateMaxAggregateOutputType | null
  }

  type GetMaintenanceUpdateGroupByPayload<T extends MaintenanceUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceUpdateGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maintenanceId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    maintenance?: boolean | MaintenanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceUpdate"]>

  export type MaintenanceUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maintenanceId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    maintenance?: boolean | MaintenanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceUpdate"]>

  export type MaintenanceUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maintenanceId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    maintenance?: boolean | MaintenanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceUpdate"]>

  export type MaintenanceUpdateSelectScalar = {
    id?: boolean
    maintenanceId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type MaintenanceUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maintenanceId" | "message" | "status" | "createdAt" | "createdBy", ExtArgs["result"]["maintenanceUpdate"]>
  export type MaintenanceUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenance?: boolean | MaintenanceDefaultArgs<ExtArgs>
  }
  export type MaintenanceUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenance?: boolean | MaintenanceDefaultArgs<ExtArgs>
  }
  export type MaintenanceUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenance?: boolean | MaintenanceDefaultArgs<ExtArgs>
  }

  export type $MaintenanceUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceUpdate"
    objects: {
      maintenance: Prisma.$MaintenancePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maintenanceId: string
      message: string
      status: $Enums.MaintenanceStatus
      createdAt: Date
      createdBy: string
    }, ExtArgs["result"]["maintenanceUpdate"]>
    composites: {}
  }

  type MaintenanceUpdateGetPayload<S extends boolean | null | undefined | MaintenanceUpdateDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceUpdatePayload, S>

  type MaintenanceUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceUpdateCountAggregateInputType | true
    }

  export interface MaintenanceUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceUpdate'], meta: { name: 'MaintenanceUpdate' } }
    /**
     * Find zero or one MaintenanceUpdate that matches the filter.
     * @param {MaintenanceUpdateFindUniqueArgs} args - Arguments to find a MaintenanceUpdate
     * @example
     * // Get one MaintenanceUpdate
     * const maintenanceUpdate = await prisma.maintenanceUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceUpdateFindUniqueArgs>(args: SelectSubset<T, MaintenanceUpdateFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceUpdateClient<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceUpdateFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceUpdate
     * @example
     * // Get one MaintenanceUpdate
     * const maintenanceUpdate = await prisma.maintenanceUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceUpdateClient<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateFindFirstArgs} args - Arguments to find a MaintenanceUpdate
     * @example
     * // Get one MaintenanceUpdate
     * const maintenanceUpdate = await prisma.maintenanceUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceUpdateFindFirstArgs>(args?: SelectSubset<T, MaintenanceUpdateFindFirstArgs<ExtArgs>>): Prisma__MaintenanceUpdateClient<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateFindFirstOrThrowArgs} args - Arguments to find a MaintenanceUpdate
     * @example
     * // Get one MaintenanceUpdate
     * const maintenanceUpdate = await prisma.maintenanceUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceUpdateClient<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceUpdates
     * const maintenanceUpdates = await prisma.maintenanceUpdate.findMany()
     * 
     * // Get first 10 MaintenanceUpdates
     * const maintenanceUpdates = await prisma.maintenanceUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceUpdateWithIdOnly = await prisma.maintenanceUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceUpdateFindManyArgs>(args?: SelectSubset<T, MaintenanceUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceUpdate.
     * @param {MaintenanceUpdateCreateArgs} args - Arguments to create a MaintenanceUpdate.
     * @example
     * // Create one MaintenanceUpdate
     * const MaintenanceUpdate = await prisma.maintenanceUpdate.create({
     *   data: {
     *     // ... data to create a MaintenanceUpdate
     *   }
     * })
     * 
     */
    create<T extends MaintenanceUpdateCreateArgs>(args: SelectSubset<T, MaintenanceUpdateCreateArgs<ExtArgs>>): Prisma__MaintenanceUpdateClient<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceUpdates.
     * @param {MaintenanceUpdateCreateManyArgs} args - Arguments to create many MaintenanceUpdates.
     * @example
     * // Create many MaintenanceUpdates
     * const maintenanceUpdate = await prisma.maintenanceUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceUpdateCreateManyArgs>(args?: SelectSubset<T, MaintenanceUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceUpdates and returns the data saved in the database.
     * @param {MaintenanceUpdateCreateManyAndReturnArgs} args - Arguments to create many MaintenanceUpdates.
     * @example
     * // Create many MaintenanceUpdates
     * const maintenanceUpdate = await prisma.maintenanceUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceUpdates and only return the `id`
     * const maintenanceUpdateWithIdOnly = await prisma.maintenanceUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceUpdate.
     * @param {MaintenanceUpdateDeleteArgs} args - Arguments to delete one MaintenanceUpdate.
     * @example
     * // Delete one MaintenanceUpdate
     * const MaintenanceUpdate = await prisma.maintenanceUpdate.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceUpdate
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceUpdateDeleteArgs>(args: SelectSubset<T, MaintenanceUpdateDeleteArgs<ExtArgs>>): Prisma__MaintenanceUpdateClient<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceUpdate.
     * @param {MaintenanceUpdateUpdateArgs} args - Arguments to update one MaintenanceUpdate.
     * @example
     * // Update one MaintenanceUpdate
     * const maintenanceUpdate = await prisma.maintenanceUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceUpdateUpdateArgs>(args: SelectSubset<T, MaintenanceUpdateUpdateArgs<ExtArgs>>): Prisma__MaintenanceUpdateClient<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceUpdates.
     * @param {MaintenanceUpdateDeleteManyArgs} args - Arguments to filter MaintenanceUpdates to delete.
     * @example
     * // Delete a few MaintenanceUpdates
     * const { count } = await prisma.maintenanceUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceUpdateDeleteManyArgs>(args?: SelectSubset<T, MaintenanceUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceUpdates
     * const maintenanceUpdate = await prisma.maintenanceUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceUpdateUpdateManyArgs>(args: SelectSubset<T, MaintenanceUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceUpdates and returns the data updated in the database.
     * @param {MaintenanceUpdateUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceUpdates.
     * @example
     * // Update many MaintenanceUpdates
     * const maintenanceUpdate = await prisma.maintenanceUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceUpdates and only return the `id`
     * const maintenanceUpdateWithIdOnly = await prisma.maintenanceUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceUpdate.
     * @param {MaintenanceUpdateUpsertArgs} args - Arguments to update or create a MaintenanceUpdate.
     * @example
     * // Update or create a MaintenanceUpdate
     * const maintenanceUpdate = await prisma.maintenanceUpdate.upsert({
     *   create: {
     *     // ... data to create a MaintenanceUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceUpdate we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceUpdateUpsertArgs>(args: SelectSubset<T, MaintenanceUpdateUpsertArgs<ExtArgs>>): Prisma__MaintenanceUpdateClient<$Result.GetResult<Prisma.$MaintenanceUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateCountArgs} args - Arguments to filter MaintenanceUpdates to count.
     * @example
     * // Count the number of MaintenanceUpdates
     * const count = await prisma.maintenanceUpdate.count({
     *   where: {
     *     // ... the filter for the MaintenanceUpdates we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceUpdateCountArgs>(
      args?: Subset<T, MaintenanceUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceUpdateAggregateArgs>(args: Subset<T, MaintenanceUpdateAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceUpdateAggregateType<T>>

    /**
     * Group by MaintenanceUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceUpdateGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceUpdate model
   */
  readonly fields: MaintenanceUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maintenance<T extends MaintenanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceDefaultArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaintenanceUpdate model
   */
  interface MaintenanceUpdateFieldRefs {
    readonly id: FieldRef<"MaintenanceUpdate", 'String'>
    readonly maintenanceId: FieldRef<"MaintenanceUpdate", 'String'>
    readonly message: FieldRef<"MaintenanceUpdate", 'String'>
    readonly status: FieldRef<"MaintenanceUpdate", 'MaintenanceStatus'>
    readonly createdAt: FieldRef<"MaintenanceUpdate", 'DateTime'>
    readonly createdBy: FieldRef<"MaintenanceUpdate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceUpdate findUnique
   */
  export type MaintenanceUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceUpdate to fetch.
     */
    where: MaintenanceUpdateWhereUniqueInput
  }

  /**
   * MaintenanceUpdate findUniqueOrThrow
   */
  export type MaintenanceUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceUpdate to fetch.
     */
    where: MaintenanceUpdateWhereUniqueInput
  }

  /**
   * MaintenanceUpdate findFirst
   */
  export type MaintenanceUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceUpdate to fetch.
     */
    where?: MaintenanceUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceUpdates to fetch.
     */
    orderBy?: MaintenanceUpdateOrderByWithRelationInput | MaintenanceUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceUpdates.
     */
    cursor?: MaintenanceUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceUpdates.
     */
    distinct?: MaintenanceUpdateScalarFieldEnum | MaintenanceUpdateScalarFieldEnum[]
  }

  /**
   * MaintenanceUpdate findFirstOrThrow
   */
  export type MaintenanceUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceUpdate to fetch.
     */
    where?: MaintenanceUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceUpdates to fetch.
     */
    orderBy?: MaintenanceUpdateOrderByWithRelationInput | MaintenanceUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceUpdates.
     */
    cursor?: MaintenanceUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceUpdates.
     */
    distinct?: MaintenanceUpdateScalarFieldEnum | MaintenanceUpdateScalarFieldEnum[]
  }

  /**
   * MaintenanceUpdate findMany
   */
  export type MaintenanceUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceUpdates to fetch.
     */
    where?: MaintenanceUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceUpdates to fetch.
     */
    orderBy?: MaintenanceUpdateOrderByWithRelationInput | MaintenanceUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceUpdates.
     */
    cursor?: MaintenanceUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceUpdates.
     */
    skip?: number
    distinct?: MaintenanceUpdateScalarFieldEnum | MaintenanceUpdateScalarFieldEnum[]
  }

  /**
   * MaintenanceUpdate create
   */
  export type MaintenanceUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceUpdate.
     */
    data: XOR<MaintenanceUpdateCreateInput, MaintenanceUpdateUncheckedCreateInput>
  }

  /**
   * MaintenanceUpdate createMany
   */
  export type MaintenanceUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceUpdates.
     */
    data: MaintenanceUpdateCreateManyInput | MaintenanceUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceUpdate createManyAndReturn
   */
  export type MaintenanceUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceUpdates.
     */
    data: MaintenanceUpdateCreateManyInput | MaintenanceUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceUpdate update
   */
  export type MaintenanceUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceUpdate.
     */
    data: XOR<MaintenanceUpdateUpdateInput, MaintenanceUpdateUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceUpdate to update.
     */
    where: MaintenanceUpdateWhereUniqueInput
  }

  /**
   * MaintenanceUpdate updateMany
   */
  export type MaintenanceUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceUpdates.
     */
    data: XOR<MaintenanceUpdateUpdateManyMutationInput, MaintenanceUpdateUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceUpdates to update
     */
    where?: MaintenanceUpdateWhereInput
    /**
     * Limit how many MaintenanceUpdates to update.
     */
    limit?: number
  }

  /**
   * MaintenanceUpdate updateManyAndReturn
   */
  export type MaintenanceUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceUpdates.
     */
    data: XOR<MaintenanceUpdateUpdateManyMutationInput, MaintenanceUpdateUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceUpdates to update
     */
    where?: MaintenanceUpdateWhereInput
    /**
     * Limit how many MaintenanceUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceUpdate upsert
   */
  export type MaintenanceUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceUpdate to update in case it exists.
     */
    where: MaintenanceUpdateWhereUniqueInput
    /**
     * In case the MaintenanceUpdate found by the `where` argument doesn't exist, create a new MaintenanceUpdate with this data.
     */
    create: XOR<MaintenanceUpdateCreateInput, MaintenanceUpdateUncheckedCreateInput>
    /**
     * In case the MaintenanceUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceUpdateUpdateInput, MaintenanceUpdateUncheckedUpdateInput>
  }

  /**
   * MaintenanceUpdate delete
   */
  export type MaintenanceUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceUpdate to delete.
     */
    where: MaintenanceUpdateWhereUniqueInput
  }

  /**
   * MaintenanceUpdate deleteMany
   */
  export type MaintenanceUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceUpdates to delete
     */
    where?: MaintenanceUpdateWhereInput
    /**
     * Limit how many MaintenanceUpdates to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceUpdate without action
   */
  export type MaintenanceUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceUpdate
     */
    select?: MaintenanceUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceUpdate
     */
    omit?: MaintenanceUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceUpdateInclude<ExtArgs> | null
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


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    updatedAt: 'updatedAt',
    groupId: 'groupId'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ServiceGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type ServiceGroupScalarFieldEnum = (typeof ServiceGroupScalarFieldEnum)[keyof typeof ServiceGroupScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    impact: 'impact',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resolvedAt: 'resolvedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const IncidentUpdateScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type IncidentUpdateScalarFieldEnum = (typeof IncidentUpdateScalarFieldEnum)[keyof typeof IncidentUpdateScalarFieldEnum]


  export const MaintenanceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt'
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum]


  export const MaintenanceUpdateScalarFieldEnum: {
    id: 'id',
    maintenanceId: 'maintenanceId',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type MaintenanceUpdateScalarFieldEnum = (typeof MaintenanceUpdateScalarFieldEnum)[keyof typeof MaintenanceUpdateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'ServiceStatus'
   */
  export type EnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus'>
    


  /**
   * Reference to a field of type 'ServiceStatus[]'
   */
  export type ListEnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'IncidentStatus'
   */
  export type EnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus'>
    


  /**
   * Reference to a field of type 'IncidentStatus[]'
   */
  export type ListEnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus[]'>
    


  /**
   * Reference to a field of type 'IncidentImpact'
   */
  export type EnumIncidentImpactFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentImpact'>
    


  /**
   * Reference to a field of type 'IncidentImpact[]'
   */
  export type ListEnumIncidentImpactFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentImpact[]'>
    


  /**
   * Reference to a field of type 'MaintenanceStatus'
   */
  export type EnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus'>
    


  /**
   * Reference to a field of type 'MaintenanceStatus[]'
   */
  export type ListEnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    groupId?: StringNullableFilter<"Service"> | string | null
    group?: XOR<ServiceGroupNullableScalarRelationFilter, ServiceGroupWhereInput> | null
    incidents?: IncidentListRelationFilter
    maintenances?: MaintenanceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrderInput | SortOrder
    group?: ServiceGroupOrderByWithRelationInput
    incidents?: IncidentOrderByRelationAggregateInput
    maintenances?: MaintenanceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    groupId?: StringNullableFilter<"Service"> | string | null
    group?: XOR<ServiceGroupNullableScalarRelationFilter, ServiceGroupWhereInput> | null
    incidents?: IncidentListRelationFilter
    maintenances?: MaintenanceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    status?: EnumServiceStatusWithAggregatesFilter<"Service"> | $Enums.ServiceStatus
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    groupId?: StringNullableWithAggregatesFilter<"Service"> | string | null
  }

  export type ServiceGroupWhereInput = {
    AND?: ServiceGroupWhereInput | ServiceGroupWhereInput[]
    OR?: ServiceGroupWhereInput[]
    NOT?: ServiceGroupWhereInput | ServiceGroupWhereInput[]
    id?: StringFilter<"ServiceGroup"> | string
    name?: StringFilter<"ServiceGroup"> | string
    description?: StringNullableFilter<"ServiceGroup"> | string | null
    services?: ServiceListRelationFilter
  }

  export type ServiceGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    services?: ServiceOrderByRelationAggregateInput
  }

  export type ServiceGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceGroupWhereInput | ServiceGroupWhereInput[]
    OR?: ServiceGroupWhereInput[]
    NOT?: ServiceGroupWhereInput | ServiceGroupWhereInput[]
    name?: StringFilter<"ServiceGroup"> | string
    description?: StringNullableFilter<"ServiceGroup"> | string | null
    services?: ServiceListRelationFilter
  }, "id">

  export type ServiceGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ServiceGroupCountOrderByAggregateInput
    _max?: ServiceGroupMaxOrderByAggregateInput
    _min?: ServiceGroupMinOrderByAggregateInput
  }

  export type ServiceGroupScalarWhereWithAggregatesInput = {
    AND?: ServiceGroupScalarWhereWithAggregatesInput | ServiceGroupScalarWhereWithAggregatesInput[]
    OR?: ServiceGroupScalarWhereWithAggregatesInput[]
    NOT?: ServiceGroupScalarWhereWithAggregatesInput | ServiceGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceGroup"> | string
    name?: StringWithAggregatesFilter<"ServiceGroup"> | string
    description?: StringNullableWithAggregatesFilter<"ServiceGroup"> | string | null
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFilter<"Incident"> | $Enums.IncidentImpact
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    affectedServices?: ServiceListRelationFilter
    updates?: IncidentUpdateListRelationFilter
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    affectedServices?: ServiceOrderByRelationAggregateInput
    updates?: IncidentUpdateOrderByRelationAggregateInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFilter<"Incident"> | $Enums.IncidentImpact
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    affectedServices?: ServiceListRelationFilter
    updates?: IncidentUpdateListRelationFilter
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    title?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringWithAggregatesFilter<"Incident"> | string
    status?: EnumIncidentStatusWithAggregatesFilter<"Incident"> | $Enums.IncidentStatus
    impact?: EnumIncidentImpactWithAggregatesFilter<"Incident"> | $Enums.IncidentImpact
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
  }

  export type IncidentUpdateWhereInput = {
    AND?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    OR?: IncidentUpdateWhereInput[]
    NOT?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    id?: StringFilter<"IncidentUpdate"> | string
    incidentId?: StringFilter<"IncidentUpdate"> | string
    message?: StringFilter<"IncidentUpdate"> | string
    status?: EnumIncidentStatusFilter<"IncidentUpdate"> | $Enums.IncidentStatus
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
    createdBy?: StringFilter<"IncidentUpdate"> | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }

  export type IncidentUpdateOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    incident?: IncidentOrderByWithRelationInput
  }

  export type IncidentUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    OR?: IncidentUpdateWhereInput[]
    NOT?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    incidentId?: StringFilter<"IncidentUpdate"> | string
    message?: StringFilter<"IncidentUpdate"> | string
    status?: EnumIncidentStatusFilter<"IncidentUpdate"> | $Enums.IncidentStatus
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
    createdBy?: StringFilter<"IncidentUpdate"> | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }, "id">

  export type IncidentUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    _count?: IncidentUpdateCountOrderByAggregateInput
    _max?: IncidentUpdateMaxOrderByAggregateInput
    _min?: IncidentUpdateMinOrderByAggregateInput
  }

  export type IncidentUpdateScalarWhereWithAggregatesInput = {
    AND?: IncidentUpdateScalarWhereWithAggregatesInput | IncidentUpdateScalarWhereWithAggregatesInput[]
    OR?: IncidentUpdateScalarWhereWithAggregatesInput[]
    NOT?: IncidentUpdateScalarWhereWithAggregatesInput | IncidentUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncidentUpdate"> | string
    incidentId?: StringWithAggregatesFilter<"IncidentUpdate"> | string
    message?: StringWithAggregatesFilter<"IncidentUpdate"> | string
    status?: EnumIncidentStatusWithAggregatesFilter<"IncidentUpdate"> | $Enums.IncidentStatus
    createdAt?: DateTimeWithAggregatesFilter<"IncidentUpdate"> | Date | string
    createdBy?: StringWithAggregatesFilter<"IncidentUpdate"> | string
  }

  export type MaintenanceWhereInput = {
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    id?: StringFilter<"Maintenance"> | string
    title?: StringFilter<"Maintenance"> | string
    description?: StringFilter<"Maintenance"> | string
    status?: EnumMaintenanceStatusFilter<"Maintenance"> | $Enums.MaintenanceStatus
    startTime?: DateTimeFilter<"Maintenance"> | Date | string
    endTime?: DateTimeFilter<"Maintenance"> | Date | string
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    affectedServices?: ServiceListRelationFilter
    updates?: MaintenanceUpdateListRelationFilter
  }

  export type MaintenanceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    affectedServices?: ServiceOrderByRelationAggregateInput
    updates?: MaintenanceUpdateOrderByRelationAggregateInput
  }

  export type MaintenanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    title?: StringFilter<"Maintenance"> | string
    description?: StringFilter<"Maintenance"> | string
    status?: EnumMaintenanceStatusFilter<"Maintenance"> | $Enums.MaintenanceStatus
    startTime?: DateTimeFilter<"Maintenance"> | Date | string
    endTime?: DateTimeFilter<"Maintenance"> | Date | string
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    affectedServices?: ServiceListRelationFilter
    updates?: MaintenanceUpdateListRelationFilter
  }, "id">

  export type MaintenanceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    _count?: MaintenanceCountOrderByAggregateInput
    _max?: MaintenanceMaxOrderByAggregateInput
    _min?: MaintenanceMinOrderByAggregateInput
  }

  export type MaintenanceScalarWhereWithAggregatesInput = {
    AND?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    OR?: MaintenanceScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Maintenance"> | string
    title?: StringWithAggregatesFilter<"Maintenance"> | string
    description?: StringWithAggregatesFilter<"Maintenance"> | string
    status?: EnumMaintenanceStatusWithAggregatesFilter<"Maintenance"> | $Enums.MaintenanceStatus
    startTime?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
  }

  export type MaintenanceUpdateWhereInput = {
    AND?: MaintenanceUpdateWhereInput | MaintenanceUpdateWhereInput[]
    OR?: MaintenanceUpdateWhereInput[]
    NOT?: MaintenanceUpdateWhereInput | MaintenanceUpdateWhereInput[]
    id?: StringFilter<"MaintenanceUpdate"> | string
    maintenanceId?: StringFilter<"MaintenanceUpdate"> | string
    message?: StringFilter<"MaintenanceUpdate"> | string
    status?: EnumMaintenanceStatusFilter<"MaintenanceUpdate"> | $Enums.MaintenanceStatus
    createdAt?: DateTimeFilter<"MaintenanceUpdate"> | Date | string
    createdBy?: StringFilter<"MaintenanceUpdate"> | string
    maintenance?: XOR<MaintenanceScalarRelationFilter, MaintenanceWhereInput>
  }

  export type MaintenanceUpdateOrderByWithRelationInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    maintenance?: MaintenanceOrderByWithRelationInput
  }

  export type MaintenanceUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceUpdateWhereInput | MaintenanceUpdateWhereInput[]
    OR?: MaintenanceUpdateWhereInput[]
    NOT?: MaintenanceUpdateWhereInput | MaintenanceUpdateWhereInput[]
    maintenanceId?: StringFilter<"MaintenanceUpdate"> | string
    message?: StringFilter<"MaintenanceUpdate"> | string
    status?: EnumMaintenanceStatusFilter<"MaintenanceUpdate"> | $Enums.MaintenanceStatus
    createdAt?: DateTimeFilter<"MaintenanceUpdate"> | Date | string
    createdBy?: StringFilter<"MaintenanceUpdate"> | string
    maintenance?: XOR<MaintenanceScalarRelationFilter, MaintenanceWhereInput>
  }, "id">

  export type MaintenanceUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    _count?: MaintenanceUpdateCountOrderByAggregateInput
    _max?: MaintenanceUpdateMaxOrderByAggregateInput
    _min?: MaintenanceUpdateMinOrderByAggregateInput
  }

  export type MaintenanceUpdateScalarWhereWithAggregatesInput = {
    AND?: MaintenanceUpdateScalarWhereWithAggregatesInput | MaintenanceUpdateScalarWhereWithAggregatesInput[]
    OR?: MaintenanceUpdateScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceUpdateScalarWhereWithAggregatesInput | MaintenanceUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceUpdate"> | string
    maintenanceId?: StringWithAggregatesFilter<"MaintenanceUpdate"> | string
    message?: StringWithAggregatesFilter<"MaintenanceUpdate"> | string
    status?: EnumMaintenanceStatusWithAggregatesFilter<"MaintenanceUpdate"> | $Enums.MaintenanceStatus
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceUpdate"> | Date | string
    createdBy?: StringWithAggregatesFilter<"MaintenanceUpdate"> | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    group?: ServiceGroupCreateNestedOneWithoutServicesInput
    incidents?: IncidentCreateNestedManyWithoutAffectedServicesInput
    maintenances?: MaintenanceCreateNestedManyWithoutAffectedServicesInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    groupId?: string | null
    incidents?: IncidentUncheckedCreateNestedManyWithoutAffectedServicesInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutAffectedServicesInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ServiceGroupUpdateOneWithoutServicesNestedInput
    incidents?: IncidentUpdateManyWithoutAffectedServicesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutAffectedServicesNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: IncidentUncheckedUpdateManyWithoutAffectedServicesNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutAffectedServicesNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    groupId?: string | null
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceGroupCreateInput = {
    id?: string
    name: string
    description?: string | null
    services?: ServiceCreateNestedManyWithoutGroupInput
  }

  export type ServiceGroupUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    services?: ServiceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ServiceGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUpdateManyWithoutGroupNestedInput
  }

  export type ServiceGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ServiceGroupCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type ServiceGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    impact: $Enums.IncidentImpact
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    affectedServices?: ServiceCreateNestedManyWithoutIncidentsInput
    updates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    impact: $Enums.IncidentImpact
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    affectedServices?: ServiceUncheckedCreateNestedManyWithoutIncidentsInput
    updates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affectedServices?: ServiceUpdateManyWithoutIncidentsNestedInput
    updates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affectedServices?: ServiceUncheckedUpdateManyWithoutIncidentsNestedInput
    updates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateManyInput = {
    id?: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    impact: $Enums.IncidentImpact
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IncidentUpdateCreateInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    createdBy: string
    incident: IncidentCreateNestedOneWithoutUpdatesInput
  }

  export type IncidentUpdateUncheckedCreateInput = {
    id?: string
    incidentId: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type IncidentUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    incident?: IncidentUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type IncidentUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type IncidentUpdateCreateManyInput = {
    id?: string
    incidentId: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type IncidentUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type IncidentUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.MaintenanceStatus
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    affectedServices?: ServiceCreateNestedManyWithoutMaintenancesInput
    updates?: MaintenanceUpdateCreateNestedManyWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.MaintenanceStatus
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    affectedServices?: ServiceUncheckedCreateNestedManyWithoutMaintenancesInput
    updates?: MaintenanceUpdateUncheckedCreateNestedManyWithoutMaintenanceInput
  }

  export type MaintenanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affectedServices?: ServiceUpdateManyWithoutMaintenancesNestedInput
    updates?: MaintenanceUpdateUpdateManyWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affectedServices?: ServiceUncheckedUpdateManyWithoutMaintenancesNestedInput
    updates?: MaintenanceUpdateUncheckedUpdateManyWithoutMaintenanceNestedInput
  }

  export type MaintenanceCreateManyInput = {
    id?: string
    title: string
    description: string
    status: $Enums.MaintenanceStatus
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
  }

  export type MaintenanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUpdateCreateInput = {
    id?: string
    message: string
    status: $Enums.MaintenanceStatus
    createdAt?: Date | string
    createdBy: string
    maintenance: MaintenanceCreateNestedOneWithoutUpdatesInput
  }

  export type MaintenanceUpdateUncheckedCreateInput = {
    id?: string
    maintenanceId: string
    message: string
    status: $Enums.MaintenanceStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type MaintenanceUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    maintenance?: MaintenanceUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type MaintenanceUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maintenanceId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceUpdateCreateManyInput = {
    id?: string
    maintenanceId: string
    message: string
    status: $Enums.MaintenanceStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type MaintenanceUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maintenanceId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
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

  export type EnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
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

  export type ServiceGroupNullableScalarRelationFilter = {
    is?: ServiceGroupWhereInput | null
    isNot?: ServiceGroupWhereInput | null
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type MaintenanceListRelationFilter = {
    every?: MaintenanceWhereInput
    some?: MaintenanceWhereInput
    none?: MaintenanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    groupId?: SortOrder
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

  export type EnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
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

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ServiceGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type ServiceGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type EnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus
  }

  export type EnumIncidentImpactFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentImpact | EnumIncidentImpactFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentImpact[] | ListEnumIncidentImpactFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentImpact[] | ListEnumIncidentImpactFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentImpactFilter<$PrismaModel> | $Enums.IncidentImpact
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

  export type IncidentUpdateListRelationFilter = {
    every?: IncidentUpdateWhereInput
    some?: IncidentUpdateWhereInput
    none?: IncidentUpdateWhereInput
  }

  export type IncidentUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    impact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentStatusFilter<$PrismaModel>
  }

  export type EnumIncidentImpactWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentImpact | EnumIncidentImpactFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentImpact[] | ListEnumIncidentImpactFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentImpact[] | ListEnumIncidentImpactFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentImpactWithAggregatesFilter<$PrismaModel> | $Enums.IncidentImpact
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentImpactFilter<$PrismaModel>
    _max?: NestedEnumIncidentImpactFilter<$PrismaModel>
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

  export type IncidentScalarRelationFilter = {
    is?: IncidentWhereInput
    isNot?: IncidentWhereInput
  }

  export type IncidentUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type IncidentUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type IncidentUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumMaintenanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusFilter<$PrismaModel> | $Enums.MaintenanceStatus
  }

  export type MaintenanceUpdateListRelationFilter = {
    every?: MaintenanceUpdateWhereInput
    some?: MaintenanceUpdateWhereInput
    none?: MaintenanceUpdateWhereInput
  }

  export type MaintenanceUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMaintenanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
  }

  export type MaintenanceScalarRelationFilter = {
    is?: MaintenanceWhereInput
    isNot?: MaintenanceWhereInput
  }

  export type MaintenanceUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type MaintenanceUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type MaintenanceUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ServiceGroupCreateNestedOneWithoutServicesInput = {
    create?: XOR<ServiceGroupCreateWithoutServicesInput, ServiceGroupUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceGroupCreateOrConnectWithoutServicesInput
    connect?: ServiceGroupWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutAffectedServicesInput = {
    create?: XOR<IncidentCreateWithoutAffectedServicesInput, IncidentUncheckedCreateWithoutAffectedServicesInput> | IncidentCreateWithoutAffectedServicesInput[] | IncidentUncheckedCreateWithoutAffectedServicesInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAffectedServicesInput | IncidentCreateOrConnectWithoutAffectedServicesInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type MaintenanceCreateNestedManyWithoutAffectedServicesInput = {
    create?: XOR<MaintenanceCreateWithoutAffectedServicesInput, MaintenanceUncheckedCreateWithoutAffectedServicesInput> | MaintenanceCreateWithoutAffectedServicesInput[] | MaintenanceUncheckedCreateWithoutAffectedServicesInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutAffectedServicesInput | MaintenanceCreateOrConnectWithoutAffectedServicesInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutAffectedServicesInput = {
    create?: XOR<IncidentCreateWithoutAffectedServicesInput, IncidentUncheckedCreateWithoutAffectedServicesInput> | IncidentCreateWithoutAffectedServicesInput[] | IncidentUncheckedCreateWithoutAffectedServicesInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAffectedServicesInput | IncidentCreateOrConnectWithoutAffectedServicesInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutAffectedServicesInput = {
    create?: XOR<MaintenanceCreateWithoutAffectedServicesInput, MaintenanceUncheckedCreateWithoutAffectedServicesInput> | MaintenanceCreateWithoutAffectedServicesInput[] | MaintenanceUncheckedCreateWithoutAffectedServicesInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutAffectedServicesInput | MaintenanceCreateOrConnectWithoutAffectedServicesInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumServiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServiceGroupUpdateOneWithoutServicesNestedInput = {
    create?: XOR<ServiceGroupCreateWithoutServicesInput, ServiceGroupUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ServiceGroupCreateOrConnectWithoutServicesInput
    upsert?: ServiceGroupUpsertWithoutServicesInput
    disconnect?: ServiceGroupWhereInput | boolean
    delete?: ServiceGroupWhereInput | boolean
    connect?: ServiceGroupWhereUniqueInput
    update?: XOR<XOR<ServiceGroupUpdateToOneWithWhereWithoutServicesInput, ServiceGroupUpdateWithoutServicesInput>, ServiceGroupUncheckedUpdateWithoutServicesInput>
  }

  export type IncidentUpdateManyWithoutAffectedServicesNestedInput = {
    create?: XOR<IncidentCreateWithoutAffectedServicesInput, IncidentUncheckedCreateWithoutAffectedServicesInput> | IncidentCreateWithoutAffectedServicesInput[] | IncidentUncheckedCreateWithoutAffectedServicesInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAffectedServicesInput | IncidentCreateOrConnectWithoutAffectedServicesInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutAffectedServicesInput | IncidentUpsertWithWhereUniqueWithoutAffectedServicesInput[]
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutAffectedServicesInput | IncidentUpdateWithWhereUniqueWithoutAffectedServicesInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutAffectedServicesInput | IncidentUpdateManyWithWhereWithoutAffectedServicesInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type MaintenanceUpdateManyWithoutAffectedServicesNestedInput = {
    create?: XOR<MaintenanceCreateWithoutAffectedServicesInput, MaintenanceUncheckedCreateWithoutAffectedServicesInput> | MaintenanceCreateWithoutAffectedServicesInput[] | MaintenanceUncheckedCreateWithoutAffectedServicesInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutAffectedServicesInput | MaintenanceCreateOrConnectWithoutAffectedServicesInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutAffectedServicesInput | MaintenanceUpsertWithWhereUniqueWithoutAffectedServicesInput[]
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutAffectedServicesInput | MaintenanceUpdateWithWhereUniqueWithoutAffectedServicesInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutAffectedServicesInput | MaintenanceUpdateManyWithWhereWithoutAffectedServicesInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutAffectedServicesNestedInput = {
    create?: XOR<IncidentCreateWithoutAffectedServicesInput, IncidentUncheckedCreateWithoutAffectedServicesInput> | IncidentCreateWithoutAffectedServicesInput[] | IncidentUncheckedCreateWithoutAffectedServicesInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutAffectedServicesInput | IncidentCreateOrConnectWithoutAffectedServicesInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutAffectedServicesInput | IncidentUpsertWithWhereUniqueWithoutAffectedServicesInput[]
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutAffectedServicesInput | IncidentUpdateWithWhereUniqueWithoutAffectedServicesInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutAffectedServicesInput | IncidentUpdateManyWithWhereWithoutAffectedServicesInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutAffectedServicesNestedInput = {
    create?: XOR<MaintenanceCreateWithoutAffectedServicesInput, MaintenanceUncheckedCreateWithoutAffectedServicesInput> | MaintenanceCreateWithoutAffectedServicesInput[] | MaintenanceUncheckedCreateWithoutAffectedServicesInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutAffectedServicesInput | MaintenanceCreateOrConnectWithoutAffectedServicesInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutAffectedServicesInput | MaintenanceUpsertWithWhereUniqueWithoutAffectedServicesInput[]
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutAffectedServicesInput | MaintenanceUpdateWithWhereUniqueWithoutAffectedServicesInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutAffectedServicesInput | MaintenanceUpdateManyWithWhereWithoutAffectedServicesInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutGroupInput = {
    create?: XOR<ServiceCreateWithoutGroupInput, ServiceUncheckedCreateWithoutGroupInput> | ServiceCreateWithoutGroupInput[] | ServiceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutGroupInput | ServiceCreateOrConnectWithoutGroupInput[]
    createMany?: ServiceCreateManyGroupInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ServiceCreateWithoutGroupInput, ServiceUncheckedCreateWithoutGroupInput> | ServiceCreateWithoutGroupInput[] | ServiceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutGroupInput | ServiceCreateOrConnectWithoutGroupInput[]
    createMany?: ServiceCreateManyGroupInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ServiceCreateWithoutGroupInput, ServiceUncheckedCreateWithoutGroupInput> | ServiceCreateWithoutGroupInput[] | ServiceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutGroupInput | ServiceCreateOrConnectWithoutGroupInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutGroupInput | ServiceUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ServiceCreateManyGroupInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutGroupInput | ServiceUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutGroupInput | ServiceUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ServiceCreateWithoutGroupInput, ServiceUncheckedCreateWithoutGroupInput> | ServiceCreateWithoutGroupInput[] | ServiceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutGroupInput | ServiceCreateOrConnectWithoutGroupInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutGroupInput | ServiceUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ServiceCreateManyGroupInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutGroupInput | ServiceUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutGroupInput | ServiceUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutIncidentsInput = {
    create?: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput> | ServiceCreateWithoutIncidentsInput[] | ServiceUncheckedCreateWithoutIncidentsInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutIncidentsInput | ServiceCreateOrConnectWithoutIncidentsInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type IncidentUpdateCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutIncidentsInput = {
    create?: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput> | ServiceCreateWithoutIncidentsInput[] | ServiceUncheckedCreateWithoutIncidentsInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutIncidentsInput | ServiceCreateOrConnectWithoutIncidentsInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
  }

  export type EnumIncidentStatusFieldUpdateOperationsInput = {
    set?: $Enums.IncidentStatus
  }

  export type EnumIncidentImpactFieldUpdateOperationsInput = {
    set?: $Enums.IncidentImpact
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ServiceUpdateManyWithoutIncidentsNestedInput = {
    create?: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput> | ServiceCreateWithoutIncidentsInput[] | ServiceUncheckedCreateWithoutIncidentsInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutIncidentsInput | ServiceCreateOrConnectWithoutIncidentsInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutIncidentsInput | ServiceUpsertWithWhereUniqueWithoutIncidentsInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutIncidentsInput | ServiceUpdateWithWhereUniqueWithoutIncidentsInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutIncidentsInput | ServiceUpdateManyWithWhereWithoutIncidentsInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type IncidentUpdateUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    set?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    disconnect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    delete?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    update?: IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentUpdateUpdateManyWithWhereWithoutIncidentInput | IncidentUpdateUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutIncidentsNestedInput = {
    create?: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput> | ServiceCreateWithoutIncidentsInput[] | ServiceUncheckedCreateWithoutIncidentsInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutIncidentsInput | ServiceCreateOrConnectWithoutIncidentsInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutIncidentsInput | ServiceUpsertWithWhereUniqueWithoutIncidentsInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutIncidentsInput | ServiceUpdateWithWhereUniqueWithoutIncidentsInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutIncidentsInput | ServiceUpdateManyWithWhereWithoutIncidentsInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    set?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    disconnect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    delete?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    update?: IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentUpdateUpdateManyWithWhereWithoutIncidentInput | IncidentUpdateUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
  }

  export type IncidentCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<IncidentCreateWithoutUpdatesInput, IncidentUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutUpdatesInput
    connect?: IncidentWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<IncidentCreateWithoutUpdatesInput, IncidentUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutUpdatesInput
    upsert?: IncidentUpsertWithoutUpdatesInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutUpdatesInput, IncidentUpdateWithoutUpdatesInput>, IncidentUncheckedUpdateWithoutUpdatesInput>
  }

  export type ServiceCreateNestedManyWithoutMaintenancesInput = {
    create?: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput> | ServiceCreateWithoutMaintenancesInput[] | ServiceUncheckedCreateWithoutMaintenancesInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutMaintenancesInput | ServiceCreateOrConnectWithoutMaintenancesInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type MaintenanceUpdateCreateNestedManyWithoutMaintenanceInput = {
    create?: XOR<MaintenanceUpdateCreateWithoutMaintenanceInput, MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput> | MaintenanceUpdateCreateWithoutMaintenanceInput[] | MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput[]
    connectOrCreate?: MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput | MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput[]
    createMany?: MaintenanceUpdateCreateManyMaintenanceInputEnvelope
    connect?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutMaintenancesInput = {
    create?: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput> | ServiceCreateWithoutMaintenancesInput[] | ServiceUncheckedCreateWithoutMaintenancesInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutMaintenancesInput | ServiceCreateOrConnectWithoutMaintenancesInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type MaintenanceUpdateUncheckedCreateNestedManyWithoutMaintenanceInput = {
    create?: XOR<MaintenanceUpdateCreateWithoutMaintenanceInput, MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput> | MaintenanceUpdateCreateWithoutMaintenanceInput[] | MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput[]
    connectOrCreate?: MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput | MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput[]
    createMany?: MaintenanceUpdateCreateManyMaintenanceInputEnvelope
    connect?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
  }

  export type EnumMaintenanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaintenanceStatus
  }

  export type ServiceUpdateManyWithoutMaintenancesNestedInput = {
    create?: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput> | ServiceCreateWithoutMaintenancesInput[] | ServiceUncheckedCreateWithoutMaintenancesInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutMaintenancesInput | ServiceCreateOrConnectWithoutMaintenancesInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutMaintenancesInput | ServiceUpsertWithWhereUniqueWithoutMaintenancesInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutMaintenancesInput | ServiceUpdateWithWhereUniqueWithoutMaintenancesInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutMaintenancesInput | ServiceUpdateManyWithWhereWithoutMaintenancesInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type MaintenanceUpdateUpdateManyWithoutMaintenanceNestedInput = {
    create?: XOR<MaintenanceUpdateCreateWithoutMaintenanceInput, MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput> | MaintenanceUpdateCreateWithoutMaintenanceInput[] | MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput[]
    connectOrCreate?: MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput | MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput[]
    upsert?: MaintenanceUpdateUpsertWithWhereUniqueWithoutMaintenanceInput | MaintenanceUpdateUpsertWithWhereUniqueWithoutMaintenanceInput[]
    createMany?: MaintenanceUpdateCreateManyMaintenanceInputEnvelope
    set?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
    disconnect?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
    delete?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
    connect?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
    update?: MaintenanceUpdateUpdateWithWhereUniqueWithoutMaintenanceInput | MaintenanceUpdateUpdateWithWhereUniqueWithoutMaintenanceInput[]
    updateMany?: MaintenanceUpdateUpdateManyWithWhereWithoutMaintenanceInput | MaintenanceUpdateUpdateManyWithWhereWithoutMaintenanceInput[]
    deleteMany?: MaintenanceUpdateScalarWhereInput | MaintenanceUpdateScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutMaintenancesNestedInput = {
    create?: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput> | ServiceCreateWithoutMaintenancesInput[] | ServiceUncheckedCreateWithoutMaintenancesInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutMaintenancesInput | ServiceCreateOrConnectWithoutMaintenancesInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutMaintenancesInput | ServiceUpsertWithWhereUniqueWithoutMaintenancesInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutMaintenancesInput | ServiceUpdateWithWhereUniqueWithoutMaintenancesInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutMaintenancesInput | ServiceUpdateManyWithWhereWithoutMaintenancesInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type MaintenanceUpdateUncheckedUpdateManyWithoutMaintenanceNestedInput = {
    create?: XOR<MaintenanceUpdateCreateWithoutMaintenanceInput, MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput> | MaintenanceUpdateCreateWithoutMaintenanceInput[] | MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput[]
    connectOrCreate?: MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput | MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput[]
    upsert?: MaintenanceUpdateUpsertWithWhereUniqueWithoutMaintenanceInput | MaintenanceUpdateUpsertWithWhereUniqueWithoutMaintenanceInput[]
    createMany?: MaintenanceUpdateCreateManyMaintenanceInputEnvelope
    set?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
    disconnect?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
    delete?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
    connect?: MaintenanceUpdateWhereUniqueInput | MaintenanceUpdateWhereUniqueInput[]
    update?: MaintenanceUpdateUpdateWithWhereUniqueWithoutMaintenanceInput | MaintenanceUpdateUpdateWithWhereUniqueWithoutMaintenanceInput[]
    updateMany?: MaintenanceUpdateUpdateManyWithWhereWithoutMaintenanceInput | MaintenanceUpdateUpdateManyWithWhereWithoutMaintenanceInput[]
    deleteMany?: MaintenanceUpdateScalarWhereInput | MaintenanceUpdateScalarWhereInput[]
  }

  export type MaintenanceCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<MaintenanceCreateWithoutUpdatesInput, MaintenanceUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUpdatesInput
    connect?: MaintenanceWhereUniqueInput
  }

  export type MaintenanceUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<MaintenanceCreateWithoutUpdatesInput, MaintenanceUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: MaintenanceCreateOrConnectWithoutUpdatesInput
    upsert?: MaintenanceUpsertWithoutUpdatesInput
    connect?: MaintenanceWhereUniqueInput
    update?: XOR<XOR<MaintenanceUpdateToOneWithWhereWithoutUpdatesInput, MaintenanceUpdateWithoutUpdatesInput>, MaintenanceUncheckedUpdateWithoutUpdatesInput>
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

  export type NestedEnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
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

  export type NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
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

  export type NestedEnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus
  }

  export type NestedEnumIncidentImpactFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentImpact | EnumIncidentImpactFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentImpact[] | ListEnumIncidentImpactFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentImpact[] | ListEnumIncidentImpactFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentImpactFilter<$PrismaModel> | $Enums.IncidentImpact
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

  export type NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentStatusFilter<$PrismaModel>
  }

  export type NestedEnumIncidentImpactWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentImpact | EnumIncidentImpactFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentImpact[] | ListEnumIncidentImpactFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentImpact[] | ListEnumIncidentImpactFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentImpactWithAggregatesFilter<$PrismaModel> | $Enums.IncidentImpact
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentImpactFilter<$PrismaModel>
    _max?: NestedEnumIncidentImpactFilter<$PrismaModel>
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

  export type NestedEnumMaintenanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusFilter<$PrismaModel> | $Enums.MaintenanceStatus
  }

  export type NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
  }

  export type ServiceGroupCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type ServiceGroupUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type ServiceGroupCreateOrConnectWithoutServicesInput = {
    where: ServiceGroupWhereUniqueInput
    create: XOR<ServiceGroupCreateWithoutServicesInput, ServiceGroupUncheckedCreateWithoutServicesInput>
  }

  export type IncidentCreateWithoutAffectedServicesInput = {
    id?: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    impact: $Enums.IncidentImpact
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    updates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutAffectedServicesInput = {
    id?: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    impact: $Enums.IncidentImpact
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    updates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutAffectedServicesInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutAffectedServicesInput, IncidentUncheckedCreateWithoutAffectedServicesInput>
  }

  export type MaintenanceCreateWithoutAffectedServicesInput = {
    id?: string
    title: string
    description: string
    status: $Enums.MaintenanceStatus
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updates?: MaintenanceUpdateCreateNestedManyWithoutMaintenanceInput
  }

  export type MaintenanceUncheckedCreateWithoutAffectedServicesInput = {
    id?: string
    title: string
    description: string
    status: $Enums.MaintenanceStatus
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    updates?: MaintenanceUpdateUncheckedCreateNestedManyWithoutMaintenanceInput
  }

  export type MaintenanceCreateOrConnectWithoutAffectedServicesInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutAffectedServicesInput, MaintenanceUncheckedCreateWithoutAffectedServicesInput>
  }

  export type ServiceGroupUpsertWithoutServicesInput = {
    update: XOR<ServiceGroupUpdateWithoutServicesInput, ServiceGroupUncheckedUpdateWithoutServicesInput>
    create: XOR<ServiceGroupCreateWithoutServicesInput, ServiceGroupUncheckedCreateWithoutServicesInput>
    where?: ServiceGroupWhereInput
  }

  export type ServiceGroupUpdateToOneWithWhereWithoutServicesInput = {
    where?: ServiceGroupWhereInput
    data: XOR<ServiceGroupUpdateWithoutServicesInput, ServiceGroupUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceGroupUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceGroupUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentUpsertWithWhereUniqueWithoutAffectedServicesInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutAffectedServicesInput, IncidentUncheckedUpdateWithoutAffectedServicesInput>
    create: XOR<IncidentCreateWithoutAffectedServicesInput, IncidentUncheckedCreateWithoutAffectedServicesInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutAffectedServicesInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutAffectedServicesInput, IncidentUncheckedUpdateWithoutAffectedServicesInput>
  }

  export type IncidentUpdateManyWithWhereWithoutAffectedServicesInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutAffectedServicesInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFilter<"Incident"> | $Enums.IncidentImpact
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutAffectedServicesInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutAffectedServicesInput, MaintenanceUncheckedUpdateWithoutAffectedServicesInput>
    create: XOR<MaintenanceCreateWithoutAffectedServicesInput, MaintenanceUncheckedCreateWithoutAffectedServicesInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutAffectedServicesInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutAffectedServicesInput, MaintenanceUncheckedUpdateWithoutAffectedServicesInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutAffectedServicesInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutAffectedServicesInput>
  }

  export type MaintenanceScalarWhereInput = {
    AND?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    OR?: MaintenanceScalarWhereInput[]
    NOT?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    id?: StringFilter<"Maintenance"> | string
    title?: StringFilter<"Maintenance"> | string
    description?: StringFilter<"Maintenance"> | string
    status?: EnumMaintenanceStatusFilter<"Maintenance"> | $Enums.MaintenanceStatus
    startTime?: DateTimeFilter<"Maintenance"> | Date | string
    endTime?: DateTimeFilter<"Maintenance"> | Date | string
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
  }

  export type ServiceCreateWithoutGroupInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    incidents?: IncidentCreateNestedManyWithoutAffectedServicesInput
    maintenances?: MaintenanceCreateNestedManyWithoutAffectedServicesInput
  }

  export type ServiceUncheckedCreateWithoutGroupInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutAffectedServicesInput
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutAffectedServicesInput
  }

  export type ServiceCreateOrConnectWithoutGroupInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutGroupInput, ServiceUncheckedCreateWithoutGroupInput>
  }

  export type ServiceCreateManyGroupInputEnvelope = {
    data: ServiceCreateManyGroupInput | ServiceCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutGroupInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutGroupInput, ServiceUncheckedUpdateWithoutGroupInput>
    create: XOR<ServiceCreateWithoutGroupInput, ServiceUncheckedCreateWithoutGroupInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutGroupInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutGroupInput, ServiceUncheckedUpdateWithoutGroupInput>
  }

  export type ServiceUpdateManyWithWhereWithoutGroupInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutGroupInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    groupId?: StringNullableFilter<"Service"> | string | null
  }

  export type ServiceCreateWithoutIncidentsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    group?: ServiceGroupCreateNestedOneWithoutServicesInput
    maintenances?: MaintenanceCreateNestedManyWithoutAffectedServicesInput
  }

  export type ServiceUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    groupId?: string | null
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutAffectedServicesInput
  }

  export type ServiceCreateOrConnectWithoutIncidentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput>
  }

  export type IncidentUpdateCreateWithoutIncidentInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type IncidentUpdateUncheckedCreateWithoutIncidentInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type IncidentUpdateCreateOrConnectWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    create: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentUpdateCreateManyIncidentInputEnvelope = {
    data: IncidentUpdateCreateManyIncidentInput | IncidentUpdateCreateManyIncidentInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutIncidentsInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutIncidentsInput, ServiceUncheckedUpdateWithoutIncidentsInput>
    create: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutIncidentsInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutIncidentsInput, ServiceUncheckedUpdateWithoutIncidentsInput>
  }

  export type ServiceUpdateManyWithWhereWithoutIncidentsInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutIncidentsInput>
  }

  export type IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    update: XOR<IncidentUpdateUpdateWithoutIncidentInput, IncidentUpdateUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    data: XOR<IncidentUpdateUpdateWithoutIncidentInput, IncidentUpdateUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentUpdateUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentUpdateScalarWhereInput
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentUpdateScalarWhereInput = {
    AND?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
    OR?: IncidentUpdateScalarWhereInput[]
    NOT?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
    id?: StringFilter<"IncidentUpdate"> | string
    incidentId?: StringFilter<"IncidentUpdate"> | string
    message?: StringFilter<"IncidentUpdate"> | string
    status?: EnumIncidentStatusFilter<"IncidentUpdate"> | $Enums.IncidentStatus
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
    createdBy?: StringFilter<"IncidentUpdate"> | string
  }

  export type IncidentCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    impact: $Enums.IncidentImpact
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    affectedServices?: ServiceCreateNestedManyWithoutIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    impact: $Enums.IncidentImpact
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    affectedServices?: ServiceUncheckedCreateNestedManyWithoutIncidentsInput
  }

  export type IncidentCreateOrConnectWithoutUpdatesInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutUpdatesInput, IncidentUncheckedCreateWithoutUpdatesInput>
  }

  export type IncidentUpsertWithoutUpdatesInput = {
    update: XOR<IncidentUpdateWithoutUpdatesInput, IncidentUncheckedUpdateWithoutUpdatesInput>
    create: XOR<IncidentCreateWithoutUpdatesInput, IncidentUncheckedCreateWithoutUpdatesInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutUpdatesInput, IncidentUncheckedUpdateWithoutUpdatesInput>
  }

  export type IncidentUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affectedServices?: ServiceUpdateManyWithoutIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affectedServices?: ServiceUncheckedUpdateManyWithoutIncidentsNestedInput
  }

  export type ServiceCreateWithoutMaintenancesInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    group?: ServiceGroupCreateNestedOneWithoutServicesInput
    incidents?: IncidentCreateNestedManyWithoutAffectedServicesInput
  }

  export type ServiceUncheckedCreateWithoutMaintenancesInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
    groupId?: string | null
    incidents?: IncidentUncheckedCreateNestedManyWithoutAffectedServicesInput
  }

  export type ServiceCreateOrConnectWithoutMaintenancesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput>
  }

  export type MaintenanceUpdateCreateWithoutMaintenanceInput = {
    id?: string
    message: string
    status: $Enums.MaintenanceStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput = {
    id?: string
    message: string
    status: $Enums.MaintenanceStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type MaintenanceUpdateCreateOrConnectWithoutMaintenanceInput = {
    where: MaintenanceUpdateWhereUniqueInput
    create: XOR<MaintenanceUpdateCreateWithoutMaintenanceInput, MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput>
  }

  export type MaintenanceUpdateCreateManyMaintenanceInputEnvelope = {
    data: MaintenanceUpdateCreateManyMaintenanceInput | MaintenanceUpdateCreateManyMaintenanceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutMaintenancesInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutMaintenancesInput, ServiceUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<ServiceCreateWithoutMaintenancesInput, ServiceUncheckedCreateWithoutMaintenancesInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutMaintenancesInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutMaintenancesInput, ServiceUncheckedUpdateWithoutMaintenancesInput>
  }

  export type ServiceUpdateManyWithWhereWithoutMaintenancesInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutMaintenancesInput>
  }

  export type MaintenanceUpdateUpsertWithWhereUniqueWithoutMaintenanceInput = {
    where: MaintenanceUpdateWhereUniqueInput
    update: XOR<MaintenanceUpdateUpdateWithoutMaintenanceInput, MaintenanceUpdateUncheckedUpdateWithoutMaintenanceInput>
    create: XOR<MaintenanceUpdateCreateWithoutMaintenanceInput, MaintenanceUpdateUncheckedCreateWithoutMaintenanceInput>
  }

  export type MaintenanceUpdateUpdateWithWhereUniqueWithoutMaintenanceInput = {
    where: MaintenanceUpdateWhereUniqueInput
    data: XOR<MaintenanceUpdateUpdateWithoutMaintenanceInput, MaintenanceUpdateUncheckedUpdateWithoutMaintenanceInput>
  }

  export type MaintenanceUpdateUpdateManyWithWhereWithoutMaintenanceInput = {
    where: MaintenanceUpdateScalarWhereInput
    data: XOR<MaintenanceUpdateUpdateManyMutationInput, MaintenanceUpdateUncheckedUpdateManyWithoutMaintenanceInput>
  }

  export type MaintenanceUpdateScalarWhereInput = {
    AND?: MaintenanceUpdateScalarWhereInput | MaintenanceUpdateScalarWhereInput[]
    OR?: MaintenanceUpdateScalarWhereInput[]
    NOT?: MaintenanceUpdateScalarWhereInput | MaintenanceUpdateScalarWhereInput[]
    id?: StringFilter<"MaintenanceUpdate"> | string
    maintenanceId?: StringFilter<"MaintenanceUpdate"> | string
    message?: StringFilter<"MaintenanceUpdate"> | string
    status?: EnumMaintenanceStatusFilter<"MaintenanceUpdate"> | $Enums.MaintenanceStatus
    createdAt?: DateTimeFilter<"MaintenanceUpdate"> | Date | string
    createdBy?: StringFilter<"MaintenanceUpdate"> | string
  }

  export type MaintenanceCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    status: $Enums.MaintenanceStatus
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    affectedServices?: ServiceCreateNestedManyWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    status: $Enums.MaintenanceStatus
    startTime: Date | string
    endTime: Date | string
    createdAt?: Date | string
    affectedServices?: ServiceUncheckedCreateNestedManyWithoutMaintenancesInput
  }

  export type MaintenanceCreateOrConnectWithoutUpdatesInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutUpdatesInput, MaintenanceUncheckedCreateWithoutUpdatesInput>
  }

  export type MaintenanceUpsertWithoutUpdatesInput = {
    update: XOR<MaintenanceUpdateWithoutUpdatesInput, MaintenanceUncheckedUpdateWithoutUpdatesInput>
    create: XOR<MaintenanceCreateWithoutUpdatesInput, MaintenanceUncheckedCreateWithoutUpdatesInput>
    where?: MaintenanceWhereInput
  }

  export type MaintenanceUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: MaintenanceWhereInput
    data: XOR<MaintenanceUpdateWithoutUpdatesInput, MaintenanceUncheckedUpdateWithoutUpdatesInput>
  }

  export type MaintenanceUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affectedServices?: ServiceUpdateManyWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affectedServices?: ServiceUncheckedUpdateManyWithoutMaintenancesNestedInput
  }

  export type IncidentUpdateWithoutAffectedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutAffectedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutAffectedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    impact?: EnumIncidentImpactFieldUpdateOperationsInput | $Enums.IncidentImpact
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceUpdateWithoutAffectedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: MaintenanceUpdateUpdateManyWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateWithoutAffectedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: MaintenanceUpdateUncheckedUpdateManyWithoutMaintenanceNestedInput
  }

  export type MaintenanceUncheckedUpdateManyWithoutAffectedServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyGroupInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.ServiceStatus
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutAffectedServicesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutAffectedServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutAffectedServicesNestedInput
    maintenances?: MaintenanceUncheckedUpdateManyWithoutAffectedServicesNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateCreateManyIncidentInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type ServiceUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ServiceGroupUpdateOneWithoutServicesNestedInput
    maintenances?: MaintenanceUpdateManyWithoutAffectedServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    maintenances?: MaintenanceUncheckedUpdateManyWithoutAffectedServicesNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncidentUpdateUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type IncidentUpdateUncheckedUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type IncidentUpdateUncheckedUpdateManyWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceUpdateCreateManyMaintenanceInput = {
    id?: string
    message: string
    status: $Enums.MaintenanceStatus
    createdAt?: Date | string
    createdBy: string
  }

  export type ServiceUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ServiceGroupUpdateOneWithoutServicesNestedInput
    incidents?: IncidentUpdateManyWithoutAffectedServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: IncidentUncheckedUpdateManyWithoutAffectedServicesNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutMaintenancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceUpdateUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceUpdateUncheckedUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceUpdateUncheckedUpdateManyWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }



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