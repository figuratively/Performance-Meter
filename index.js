const Table = require('cli-table3');

const NS_PER_SEC = 1e9;
// @TODO implement
// const repeat = process.argv[2];

class PerformanceMeter {
    constructor() {
        this.metricsMap = {}
        this.startMetricsMap = {}
        this.now = process.hrtime();
    }

    start(id) {
        if(!id) {
            throw 'Provide the id as an argument';
        }
    
        this.startMetricsMap[id] = process.hrtime();
    }
    
    end(id) {
        if(!id) {
            throw 'Provide the id as an argument';
        }
    
        if(!!this.startMetricsMap[id]) {
            const diff = process.hrtime(this.startMetricsMap[id]);
            this.metricsMap[id] = { elapsed: diff[0] * NS_PER_SEC + diff[1] };
        } else {
            throw 'No corresponding start invokation';
        }
    }
    
     result() {
        const table = new Table({
            head: ["ID", "Time (nanoseconds)"]
        });
        Object.entries(this.metricsMap).forEach(([testID, resultObj]) =>
            table.push([testID, resultObj.elapsed.toLocaleString()])
        );
        console.log(table.toString());
    }
}

module.exports.PerformanceMeter = PerformanceMeter;