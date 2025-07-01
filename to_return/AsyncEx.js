import path from 'path';
import os from 'os';
import { readFile } from 'fs';
import { stat } from 'fs';
import { readdir } from "fs";



//ex 1

const filePath = 'file.txt';

readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`File Content: ${data}`);

    stat(filePath, (err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created At: ${stats.birthtime.toISOString()}`);
    });
});

//ex 2

const directoryPath = './';

readdir(directoryPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(file => {
        const fullPath = path.join(directoryPath, file);

        stat(fullPath, (err, stats) => {
            if (err) {
                console.log(err);
                return;

            }
            if (stats.isFile()) {
                console.log('File:', file);

            }
        })

    }

    )
})

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



readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split(`\n`);
    const n = Math.floor(Math.random() * lines.length);

    if (lines[n].trim() === "") {
        console.log(`line is empty`);

    } else {
        console.log(lines[n]);

    }

}
)


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



