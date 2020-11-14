const perfil = {
    nombre: 'Cristian',
    info: {
        direccion: 'la direccion 1.....'
    }
}

const region = {
    pais: 'Colombia',
    info: {
        direccion: 'la direccion 2.....'
    }
}

const social = {
    twitter: '@luxfenix',
    nombre: 'ninjaPro'
}

const resultado = Object.assign(
    {},
    perfil, 
    region, 
    social,
    {
        info: Object.assign(
            {}, 
            perfil.info, 
            region.info
        )
    }
)

console.log(resultado);

//Operados Spread y object assign
const resultado2 = {
    ...perfil,
    ...region,
    ...social,
    info: {
        ...perfil.info,
        ...region.info
    }
}

//Spread con arrays
const frutasRojas = [
    'manzana',
    'fresa',
    'sandia'
]

const frutasVerdes = [
    'kiwi',
    'uva',
    'limon'
]

const frutas = [
    ...frutasRojas,
    ...frutasVerdes
]