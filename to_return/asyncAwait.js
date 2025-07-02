import { error } from 'console';
import fs from 'fs';
import { readFile, stat, readdir, access, writeFile } from 'fs/promises';
import path from 'path';


//ex 1

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(data)
        }
        )
    })
}
//ex 2
async function readFileAsync(path) {
    const data = await readFile(path, 'utf-8')
    return data

}

//ex 3

async function getFileSize(path) {
    try {
        const stats = await stat(path)
        return stats.size
    } catch (error) {
        console.error(error)

    }

}


//ex 4 
async function listFiles(dir) {
    try {
        const files = await readdir(dir)
        return files
    } catch (error) {
        console.error(error)
    }

}


//ex 5

async function readFilesInOrder(files) {
    for (const file of files) {
        try {
            const data = await readFile(file, 'utf-8');
            console.log(data);
        } catch (err) {
            console.error(err.message);
        }
    }

}

//ex 6

async function readFilesParallel(files) {
    try {
        const contents = await Promise.all(
            files.map(file => readFile(file, 'utf-8'))
        );
        contents.forEach(content => console.log(content));
    } catch (err) {
        console.error(err)
    }

}

//ex 7

async function fileExists(path) {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}


//ex 8 

async function copyFile(src, dest) {
    try {
        const data = await readFile(src, 'utf-8')
        await writeFile(dest, data, 'utf-8')
    } catch (error) {
        console.error(error)
    }

}


//ex 9

async function mergeFiles(files, output) {
    let data = ""
    try {
        const contents = await Promise.all(
            files.map(file => readFile(file, 'utf-8'))
        );
        const mergedContent = contents.join('\n');
        await writeFile(output, mergedContent, 'utf-8')
    } catch (err) {
        console.error(err)
    }

}

//ex 10

async function searchWordInFiles(dir, word) {
    try {
        const dirents = await readdir(dir, { withFileTypes: true });
        for (const dirent of dirents) {
            if (dirent.isFile()) {
                const filePath = path.join(dir, dirent.name);
                const content = await readFile(filePath, 'utf-8');
                if (content.includes(word)) {
                    console.log(dirent.name);
                }
            }
        }
    } catch (error) {
        console.error(error.message);
    }
}

