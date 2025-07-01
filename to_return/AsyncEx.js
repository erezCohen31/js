import path from 'path';
import os from 'os';
import { readFile } from 'fs';
import { stat } from 'fs';
import { readdir } from "fs";
const filePath = 'file.txt';



//ex 1

const p1 = new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            reject(err)
            return
        }

        resolve(data)

    });
})
const p2 = new Promise((resolve, reject) => {
    p1.then((data) => {
        stat(filePath, (err, stats) => {
            if (err) {
                reject(err)
                return
            }
            resolve({ data, stats })
        });
    }).catch(reject)
})

p2.then(({ data, stats }) => {

    console.log(data);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created At: ${stats.birthtime.toISOString()}`);
}).catch((err) => {
    console.error("Error:", err);
});



//ex 2

const directoryPath = './';
const p3 = new Promise((resolve, reject) => {
    readdir(directoryPath, (err, files) => {
        if (err) {
            reject(err)
            return;
        }
        resolve(files)

    })
})
const p4 = p3.then((files) => {
    const statPromises = files.map((file) => {
        const fullPath = path.join(directoryPath, file);
        return new Promise((resolve, reject) => {
            stat(fullPath, (err, stats) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(stats.isFile() ? file : null);
            });
        });
    });

    return Promise.all(statPromises).then(results => {
        return results.filter(file => file !== null);
    });
});
p4.then((filesName) => {
    filesName.forEach(file => {
        console.log('File:', file);
    });
}).catch((err) => {
    console.error('Erreur:', err);
});

//ex 3

function counter(count) {
    console.log(count);

    if (count === 0) {
        console.log("Time's up!");
        return
    }
    setTimeout(() => {
        counter(count - 1);
    }, 1000);
}



counter(5)


//ex 4

const p5 = new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            reject(err)
            return;
        }
        const lines = data.split(`\n`);
        const n = Math.floor(Math.random() * lines.length);
        resolve(lines[n])
    }
    )
})

p5.then((line) => {
    if (line.trim() === "") {
        console.log(`line is empty`);

    } else {
        console.log(line);

    }
})


//ex 5


let count = 0


const intervalId = setInterval(() => {
    const freeMem = os.freemem();
    const totalMem = os.totalmem();
    const freeMemPercent = (freeMem / totalMem) * 100;

    console.log(`Free Memory: ${freeMemPercent.toFixed(2)} %`);
    count++;

    if (count >= 5) {
        clearInterval(intervalId);
        console.log("Memory logging complete.");
    }
}, 2000);



