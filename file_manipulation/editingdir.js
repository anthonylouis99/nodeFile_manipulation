// <..... for creating a new dir....>

let fs=require("fs");
if (!fs.existsSync("./newdir") ){
    fs.mkdir("./newdir", (err) => {
        if (err) throw err;
        console.log("directory created")
    });
}else{
    console.log("already exists");
}


// <...for removing dir...>

if (fs.existsSync("./newdir")) {
    fs.rmdir("./newdir", (err) => {
        if (err) throw err;
        console.log("directory removed")
    });
} else {
    console.log("already removed");
}