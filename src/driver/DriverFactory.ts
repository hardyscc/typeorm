import { Connection } from "../connection/Connection";
import { MissingDriverError } from "../error/MissingDriverError";
import { CockroachDriver } from "./cockroachdb/CockroachDriver";
import { CordovaDriver } from "./cordova/CordovaDriver";
import { Driver } from "./Driver";
import { ExpoDriver } from "./expo/ExpoDriver";
import { MongoDriver } from "./mongodb/MongoDriver";
import { MysqlDriver } from "./mysql/MysqlDriver";
import { NativescriptDriver } from "./nativescript/NativescriptDriver";
import { OracleDriver } from "./oracle/OracleDriver";
import { PostgresDriver } from "./postgres/PostgresDriver";
import { ReactNativeDriver } from "./react-native/ReactNativeDriver";
import { SqliteDriver } from "./sqlite/SqliteDriver";
import { SqljsDriver } from "./sqljs/SqljsDriver";
import { SqlServerDriver } from "./sqlserver/SqlServerDriver";
import { SybaseDriver } from "./sybase/SybaseDriver";

/**
 * Helps to create drivers.
 */
export class DriverFactory {
    /**
     * Creates a new driver depend on a given connection's driver type.
     */
    create(connection: Connection): Driver {
        const { type } = connection.options;
        switch (type) {
            case "mysql":
                return new MysqlDriver(connection);
            case "postgres":
                return new PostgresDriver(connection);
            case "cockroachdb":
                return new CockroachDriver(connection);
            case "mariadb":
                return new MysqlDriver(connection);
            case "sqlite":
                return new SqliteDriver(connection);
            case "cordova":
                return new CordovaDriver(connection);
            case "nativescript":
                return new NativescriptDriver(connection);
            case "react-native":
                return new ReactNativeDriver(connection);
            case "sqljs":
                return new SqljsDriver(connection);
            case "oracle":
                return new OracleDriver(connection);
            case "mssql":
                return new SqlServerDriver(connection);
            case "mongodb":
                return new MongoDriver(connection);
            case "expo":
                return new ExpoDriver(connection);
            case "sybase":
                return new SybaseDriver(connection);
            default:
                throw new MissingDriverError(type);
        }
    }
}
