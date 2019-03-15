class Request {
    parent: any;
    parameters: Array<{ index: number; value: string }> = [];

    constructor(parent: any) {
        this.parent = parent;
    }

    input(name: any, type: any, value: any) {
        // if (arguments.length === 2) {
        //     value = type;
        //     type = getTypeByValue(value);
        // }

        const args = [...arguments];

        if (args.length === 2) {
            this.parameters.push({ index: args[0], value: args[1] });
        } else {
            this.parameters.push({ index: args[0], value: args[2] });
        }
    }

    async query(sql: string, callback: Function) {
        let connObj = null;
        if (this.parent instanceof Transaction) {
            connObj = this.parent.connObj;
        } else {
            connObj = await this.parent.reserve();
        }
        const statement = await connObj.conn.prepareStatement(sql);
        this.parameters.forEach(async parameter => {
            await statement.setString(parameter.index + 1, parameter.value);
        });
        if (sql.startsWith("SELECT")) {
            const resultset = await statement.executeQuery();
            const results = await resultset.toObject();
            callback(null, { recordset: results.rows });
        } else {
            const result = await statement.executeUpdate();
            callback(null, { result });
        }
    }
}

class Transaction {
    connObj: any;
    constructor(connObj: any) {
        this.connObj = connObj;
    }

    async begin(callback: Function) {
        await this.connObj.conn.setAutoCommit(false);
        callback();
    }

    async commit(callback: Function) {
        await this.connObj.conn.commit();
        await this.connObj.conn.setAutoCommit(true);
        callback();
    }

    rollback(callback: Function) {
        console.log("rollback");
        callback();
    }

    reserve() {
        return this.connObj;
    }
}

const Pool = require("jdbc/lib/pool");

Pool.prototype.transaction = async function() {
    const connObj = await this.reserve();
    return new Transaction(connObj);
};

export { Pool, Request };
