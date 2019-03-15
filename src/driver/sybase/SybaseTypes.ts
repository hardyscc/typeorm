const TYPES = {
    VarChar(length: number) {
        return { type: TYPES.VarChar, length };
    },
    NVarChar(length: number) {
        return { type: TYPES.NVarChar, length };
    },
    Text() {
        return { type: TYPES.Text };
    },
    Int() {
        return { type: TYPES.Int };
    },
    BigInt() {
        return { type: TYPES.BigInt };
    },
    TinyInt() {
        return { type: TYPES.TinyInt };
    },
    SmallInt() {
        return { type: TYPES.SmallInt };
    },
    Bit() {
        return { type: TYPES.Bit };
    },
    Float() {
        return { type: TYPES.Float };
    },
    Numeric(precision: number, scale: number) {
        return { type: TYPES.Numeric, precision, scale };
    },
    Decimal(precision: number, scale: number) {
        return { type: TYPES.Decimal, precision, scale };
    },
    Real() {
        return { type: TYPES.Real };
    },
    Date() {
        return { type: TYPES.Date };
    },
    DateTime() {
        return { type: TYPES.DateTime };
    },
    DateTime2(scale: number) {
        return { type: TYPES.DateTime2, scale };
    },
    DateTimeOffset(scale: number) {
        return { type: TYPES.DateTimeOffset, scale };
    },
    SmallDateTime() {
        return { type: TYPES.SmallDateTime };
    },
    Time(scale: number) {
        return { type: TYPES.Time, scale };
    },
    UniqueIdentifier() {
        return { type: TYPES.UniqueIdentifier };
    },
    SmallMoney() {
        return { type: TYPES.SmallMoney };
    },
    Money() {
        return { type: TYPES.Money };
    },
    Binary(length: number) {
        return { type: TYPES.Binary, length };
    },
    VarBinary(length: number) {
        return { type: TYPES.VarBinary, length };
    },
    Image() {
        return { type: TYPES.Image };
    },
    Xml() {
        return { type: TYPES.Xml };
    },
    Char(length: number) {
        return { type: TYPES.Char, length };
    },
    NChar(length: number) {
        return { type: TYPES.NChar, length };
    },
    NText() {
        return { type: TYPES.NText };
    },
    TVP(tvpType: number) {
        return { type: TYPES.TVP, tvpType };
    },
    UDT() {
        return { type: TYPES.UDT };
    },
    Geography() {
        return { type: TYPES.Geography };
    },
    Geometry() {
        return { type: TYPES.Geometry };
    },
    Variant() {
        return { type: TYPES.Variant };
    }
};

// let getTypeByValue = function(value: any) {
//     if (value === null || value === undefined) {
//         return TYPES.NVarChar;
//     }

//     switch (typeof value) {
//         case "string":
//             for (var item of Array.from(map)) {
//                 if (item.js === String) {
//                     return item.sql;
//                 }
//             }

//             return TYPES.NVarChar;

//         case "number":
//             if (value % 1 === 0) {
//                 return TYPES.Int;
//             } else {
//                 return TYPES.Float;
//             }

//         case "boolean":
//             for (item of Array.from(map)) {
//                 if (item.js === Boolean) {
//                     return item.sql;
//                 }
//             }

//             return TYPES.Bit;

//         case "object":
//             for (item of Array.from(map)) {
//                 if (value instanceof item.js) {
//                     return item.sql;
//                 }
//             }

//             return TYPES.NVarChar;

//         default:
//             return TYPES.NVarChar;
//     }
// };
