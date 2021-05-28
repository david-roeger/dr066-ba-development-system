let iconFiles = {};
const iconsModified = {};

try {
    iconFiles = require.context("./assets", false, /\.svg$/);
    console.log(iconFiles);
    iconFiles = iconFiles.keys().map(iconFiles);
    iconFiles.forEach(key => {
        let string = key.split(", ");
        let type = string[0].split("=")[1];
        type = type.toLowerCase();
        let colorClass = string[1].split("=")[1];
        colorClass = colorClass.split(".")[0];
        colorClass = colorClass.toLowerCase();
        let value = key;
        if(!iconsModified[type]) {
            iconsModified[type] = {};
        }
        iconsModified[type][colorClass] = value;
    });
} catch (error) {
    // vite > React App
    
    
    //iconFiles = import.meta.globEager("./assets/*.svg");
    
    for (const key in iconFiles) {
        // fix figma naming conventions
        let string = key.split(", ");
        let type = string[0].split("=")[1];
        type = type.toLowerCase();
        let colorClass = string[1].split("=")[1];
        colorClass = colorClass.split(".")[0];
        colorClass = colorClass.toLowerCase();
        let value = iconFiles[key].default;
        if(!iconsModified[type]) {
            iconsModified[type] = {};
        }
        iconsModified[type][colorClass] = value;
    }
}


console.log(iconsModified);

export let icons = iconsModified;