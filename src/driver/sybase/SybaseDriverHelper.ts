class Request {
    pool: any;
    connObj: any;
    statement: any;

    constructor(pool: any) {
        this.pool = pool;
    }

    input() {
        const args = [...arguments];
        args.forEach(arg => {
            console.log(arg);
        });
        //     console.log(arguments[i]);
        //   }

        // console.log(`${index} ${mssqlParameter}, ${value}`);
        // if (mssqlParameter) this.statement.setInt(index, value);
    }

    async query(sql: string, callback: Function) {
        this.connObj = await this.pool.reserve();
        this.statement = await this.connObj.conn.prepareStatement(sql);
        const resultset = await this.statement.executeQuery();
        const results = await resultset.toObject();
        callback(null, { recordset: results.rows });
    }
}

// function Transaction() {
//     // console.log(`connObj ${connObj}`);
//     // this._connObj = connObj;
// }
// Transaction.prototype.begin = function(callback: Function) {
//     console.log("begin called");
//     callback();
// };

const Pool = require("jdbc/lib/pool");
Pool.prototype.transaction = async function() {
    // const connObj = await this.reserve();
    return {
        begin: function() {
            console.log("begin");
        }
    };
};

export { Pool, Request };
