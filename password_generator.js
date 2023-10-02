const generate=require('generate-password');

const generateRandomPassword=()=>{
    const password= generate.generate({
        length:8,
        numbers:true,
        symbols:true,
        uppercase:true,
        lowercase:true,
    });
    console.log(`mots de pass aléatoire :  ${password} `);
}

generateRandomPassword();