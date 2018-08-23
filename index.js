"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const path_1 = require("path");
const fs_1 = require("fs");
function listDir(root) {
    if (!fs_1.existsSync(root)) {
        return rxjs_1.from([]);
    }
    if (fs_1.lstatSync(root).isDirectory()) {
        return rxjs_1.from(fs_1.readdirSync(root)).pipe(operators_1.map(res => {
            return path_1.join(root, res);
        }), operators_1.switchMap((res) => {
            if (fs_1.lstatSync(res).isDirectory()) {
                return rxjs_1.merge(rxjs_1.of(res), listDir(res));
            }
            else {
                return rxjs_1.of(res);
            }
        }));
    }
    else {
        return rxjs_1.of(root);
    }
}
exports.listDir = listDir;
//# sourceMappingURL=index.js.map