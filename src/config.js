

/*to change degrees from Celcius to Fahrenheit uncomment Fahrenheit code and coment Celsius"*/

/*if you want Celsius degrees use code below*/

export const temp = function(item) {                
    return Math.round(item.main.temp);  
};

export const deg = "C";

/*if you want Fahrenheit degrees use code belowe*/

/*export const temp = function(item) {
    const cels = Math.round(item.main.temp);
    const fahren = 32 + 9/5*cels;
    
    return fahren;
};

export const deg = "F";*/