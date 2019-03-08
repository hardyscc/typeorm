import { CockroachConnectionOptions } from "../driver/cockroachdb/CockroachConnectionOptions";
import { CordovaConnectionOptions } from "../driver/cordova/CordovaConnectionOptions";
import { ExpoConnectionOptions } from "../driver/expo/ExpoConnectionOptions";
import { MongoConnectionOptions } from "../driver/mongodb/MongoConnectionOptions";
import { MysqlConnectionOptions } from "../driver/mysql/MysqlConnectionOptions";
import { NativescriptConnectionOptions } from "../driver/nativescript/NativescriptConnectionOptions";
import { OracleConnectionOptions } from "../driver/oracle/OracleConnectionOptions";
import { PostgresConnectionOptions } from "../driver/postgres/PostgresConnectionOptions";
import { ReactNativeConnectionOptions } from "../driver/react-native/ReactNativeConnectionOptions";
import { SqliteConnectionOptions } from "../driver/sqlite/SqliteConnectionOptions";
import { SqljsConnectionOptions } from "../driver/sqljs/SqljsConnectionOptions";
import { SqlServerConnectionOptions } from "../driver/sqlserver/SqlServerConnectionOptions";
import { SybaseConnectionOptions } from "../driver/sybase/SybaseConnectionOptions";

/**
 * ConnectionOptions is an interface with settings and options for specific connection.
 * Options contain database and other connection-related settings.
 * Consumer must provide connection options for each of your connections.
 */
export type ConnectionOptions =
    | MysqlConnectionOptions
    | PostgresConnectionOptions
    | CockroachConnectionOptions
    | SqliteConnectionOptions
    | SqlServerConnectionOptions
    | OracleConnectionOptions
    | CordovaConnectionOptions
    | NativescriptConnectionOptions
    | ReactNativeConnectionOptions
    | SqljsConnectionOptions
    | MongoConnectionOptions
    | ExpoConnectionOptions
    | SybaseConnectionOptions;
